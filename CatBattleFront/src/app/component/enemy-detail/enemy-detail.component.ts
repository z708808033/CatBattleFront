import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnemyService } from '../../service/EnemyService/enemy.service';
import { GeneralService } from '../../service/GeneralService/general.service';
import { EnemyCategory } from '../bean/EnemyCategory.module';
import { EnemySkillType } from '../bean/EnemySkillType.module';

@Component({
  selector: 'app-enemy-detail',
  templateUrl: './enemy-detail.component.html',
  styleUrls: ['./enemy-detail.component.css']
})
export class EnemyDetailComponent implements OnInit {
  enemy: any;
  isAdmin: boolean = true;
  isEdit: boolean = false;
  showMsg: string;
  enemyCategories: EnemyCategory[];
  enemySkillTypes: EnemySkillType[];

  constructor(private route: ActivatedRoute, private enemySV: EnemyService, private generalSV: GeneralService) { }

  ngOnInit() {
    this.getEnemy();
  }

  getEnemy() {
    var _this = this;
    let enemyId: string = this.route.snapshot.paramMap.get("enemyId");
    this.enemySV.getEnemyByEnemyId(enemyId).subscribe({
      next(enemy) {
        _this.enemy = enemy;
        _this.enemyCategories = _this.generalSV.getEnemyCategories();
        _this.enemyCategories.forEach(enemyCategory => enemyCategory.isChecked = _this.enemy.category.indexOf(enemyCategory.category + ',') >= 0);
        _this.enemySkillTypes = _this.generalSV.getEnemySkillTypes();
        _this.enemySkillTypes.forEach(enemySkillType => enemySkillType.isChecked = _this.enemy.skillType.indexOf(enemySkillType.skillType) >= 0);
      }
    });
  }

  beginEdit() {
    this.isEdit = true;
  }

  enemySkillTypeCheckAll(isCheckAll) {
    this.enemySkillTypes.forEach(e => e.isChecked = isCheckAll);
  }

  save() {
    this.dealEnemyCategory();
    this.dealEnemySkillType();
    var _this = this;
    this.enemySV.updateEnemy(this.enemy).subscribe({
      next(rtnMsg) {
        if (rtnMsg == 'SUCCESS') {
          _this.resetEnemyAttackAndHP();
          _this.isEdit = false;
          alert('保存成功!');
          location.reload();
        }
      }
    });
  }

  dealEnemyCategory() {
    this.enemy.category = "";
    this.enemy.categoryDescribe = "";
    let enemyCategories = this.enemyCategories.filter(e => e.isChecked);
    for (let i = 0; i < enemyCategories.length; i++) {
      this.enemy.category += enemyCategories[i].category + ",";
      this.enemy.categoryDescribe += enemyCategories[i].categoryDescribe + ",";
    }
  }

  dealEnemySkillType() {
    this.enemy.skillType = "";
    this.enemy.skillTypeDescribe = "";
    let enemySkillTypes = this.enemySkillTypes.filter(e => e.isChecked);
    for (let i = 0; i < enemySkillTypes.length; i++) {
      this.enemy.skillType += enemySkillTypes[i].skillType + ",";
      this.enemy.skillTypeDescribe += enemySkillTypes[i].skillTypeDescribe + ",";
    }
  }

  resetEnemyAttackAndHP() {
    this.enemy.currentHp = this.enemy.currentPowerUpRate * this.enemy.hp;
    this.enemy.currentAttack = this.enemy.currentPowerUpRate * this.enemy.attack;
  }

  cancel() {
    this.isEdit = false;
  }

  getCLWidth(): string {
    if (this.generalSV.isPc()) {
      return "8%";
    } else {
      return "100%";
    }
  }

  getGeneralWidth(): string {
    return this.generalSV.getGeneralWidth();
  }
}
