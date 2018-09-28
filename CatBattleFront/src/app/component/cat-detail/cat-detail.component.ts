import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatService } from '../../service/CatService/cat.service';
import { observable, Observable } from 'rxjs';
import { GeneralService } from '../../service/GeneralService/general.service';
import { CatCategory } from '../bean/CatCategory.module';
import { CatAntiEnemy } from '../bean/CatAntiEnemy.module';
import { CatSkillType } from '../bean/CatSkillType.module';

@Component({
  selector: 'app-cat-detail',
  templateUrl: './cat-detail.component.html',
  styleUrls: ['./cat-detail.component.css']
})
export class CatDetailComponent implements OnInit {
  cats: any;
  isAdmin: boolean = true;
  isEdit: boolean = false;
  catAntiEnemiesArr: CatAntiEnemy[][] = [];
  catSkillTypesArr: CatSkillType[][] = [];
  catCategories: CatCategory[];

  constructor(private route: ActivatedRoute, private catSV: CatService, private generalSV: GeneralService) {
  }

  ngOnInit() {
    this.getCats();
    this.catCategories = this.generalSV.getCatCategories();
  }

  getCats() {
    var _this = this;
    let catId: string = this.route.snapshot.paramMap.get("catId");
    this.catSV.getCatsByCatId(catId).subscribe({
      next(cats) {
        _this.cats = cats;
        for (let i = 0; i < _this.cats.length; i++) {
          _this.catAntiEnemiesArr[i] = _this.generalSV.getCatAntiEnemies();
          _this.catAntiEnemiesArr[i].forEach(catAntiEnemy => catAntiEnemy.isChecked = _this.cats[i].antiEnemy.indexOf(catAntiEnemy.antiEnemy) >= 0);
          _this.catSkillTypesArr[i] = _this.generalSV.getCatSkillTypes();
          _this.catSkillTypesArr[i].forEach(catSkillType => catSkillType.isChecked = _this.cats[i].skillType.indexOf(catSkillType.skillType) >= 0);
        }

      }
    });
  }

  beginEdit() {
    this.isEdit = true;
  }

  save() {
    this.dealCatAntiEnemy();
    this.dealCatSkillType();
    var _this = this;
    this.catSV.updateCats(this.cats).subscribe({
      next() {
        _this.resetCatAttackAndHPAndDPS();
        _this.isEdit = false;
        alert("保存成功!");
        location.reload();
      }
    });
  }

  catAntiEnemyCheckAll(isCatAntiEnemyCheckAll: boolean, index: number) {
    for (let i = 0; i < this.catAntiEnemiesArr[index].length; i++) {
      this.catAntiEnemiesArr[index][i].isChecked = isCatAntiEnemyCheckAll;
    }
  }

  catSkillTypeCheckAll(isCatSkillTypeCheckAll: boolean, index: number) {
    for (let i = 0; i < this.catSkillTypesArr[index].length; i++) {
      this.catSkillTypesArr[index][i].isChecked = isCatSkillTypeCheckAll;
    }
  }

  resetCatAttackAndHPAndDPS() {
    for (let i = 0; i < this.cats.length; i++) {
      if (this.cats[i].currentLevel > this.cats[i].hpLevel) {
        this.cats[i].currentAttack = this.cats[i].basicAttack + this.cats[i].attackLevel * this.cats[i].attackBefore + (this.cats[i].currentLevel - this.cats[i].attackLevel) * this.cats[i].attackAfter;
        this.cats[i].currentHp = this.cats[i].basicHp + this.cats[i].hpLevel * this.cats[i].hpBefore + (this.cats[i].currentLevel - this.cats[i].hpLevel) * this.cats[i].hpAfter;
      } else {
        this.cats[i].currentAttack = this.cats[i].basicAttack + this.cats[i].currentLevel * this.cats[i].attackBefore;
        this.cats[i].currentHp = this.cats[i].basicHp + this.cats[i].currentLevel * this.cats[i].hpBefore;
      }
      this.cats[i].attackRateNum = this.cats[i].attackRate.substring(0, this.cats[i].attackRate.length - 1);
      this.cats[i].dps = Math.floor(this.cats[i].currentAttack / this.cats[i].attackRateNum);
    }
  }

  onCatCategoryChange(index: number) {
    this.cats[index].categoryDescribe = this.catCategories.filter(c => c.category == this.cats[index].category)[0].categoryDescribe;
  }

  cancel() {
    this.isEdit = false;
  }

  dealCatAntiEnemy() {
    for (let i = 0; i < this.cats.length; i++) {
      this.cats[i].antiEnemy = "";
      this.cats[i].antiEnemyDescribe = "";
      let checkedAntiEnemies = this.catAntiEnemiesArr[i].filter(c => c.isChecked);
      for (let j = 0; j < checkedAntiEnemies.length; j++) {
        this.cats[i].antiEnemy += checkedAntiEnemies[j].antiEnemy + ",";
        this.cats[i].antiEnemyDescribe += checkedAntiEnemies[j].antiEnemyDescribe + ",";
      }
    }
  }

  dealCatSkillType() {
    for (let i = 0; i < this.cats.length; i++) {
      this.cats[i].skillType = "";
      this.cats[i].skillTypeDescribe = "";
      let checkedCatSkillTypes = this.catSkillTypesArr[i].filter(c => c.isChecked);
      for (let j = 0; j < checkedCatSkillTypes.length; j++) {
        this.cats[i].skillType += checkedCatSkillTypes[j].skillType + ",";
        this.cats[i].skillTypeDescribe += checkedCatSkillTypes[j].skillTypeDescribe + ",";
      }
    }
  }

  getCLWidth(): string {
    if (this.generalSV.isPc()) {
      return "20%";
    } else {
      return "100%";
    }
  }

  getBHWidth(): string {
    if (this.generalSV.isPc()) {
      return "10%";
    } else {
      return "100%";
    }
  }

  getBAWidth(): string {
    if (this.generalSV.isPc()) {
      return "10%";
    } else {
      return "100%";
    }
  }

  getGeneralWidth(): string {
    return this.generalSV.getGeneralWidth();
  }
}
