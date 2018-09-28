import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../service/GeneralService/general.service';
import { CatService } from '../../service/CatService/cat.service';
import { CatAntiEnemy } from '../bean/CatAntiEnemy.module';
import { CatSkillType } from '../bean/CatSkillType.module';

@Component({
  selector: 'app-cat-add',
  templateUrl: './cat-add.component.html',
  styleUrls: ['./cat-add.component.css']
})
export class CatAddComponent implements OnInit {
  catId: string;
  cat: any;
  catAntiEnemies: CatAntiEnemy[];
  catSkillTypes: CatSkillType[];
  showMsg: string;

  constructor(private generalSV: GeneralService, private catSV: CatService) { }

  ngOnInit() {
    this.catAntiEnemies = this.generalSV.getCatAntiEnemies();
    this.catSkillTypes = this.generalSV.getCatSkillTypes();
  }

  getCNWidth(): string {
    if (this.generalSV.isPc()) {
      return "20%";
    } else {
      return "100%";
    }
  }

  isDisabled(): boolean {
    if (this.catId) {
      return false;
    } else {
      return true;
    }
  }

  previewCat() {
    this.catSV.previewCat(this.catId).subscribe(cat => this.cat = cat);
  }

  getCLWidth(): string {
    if (this.generalSV.isPc()) {
      return "10%";
    } else {
      return "100%";
    }
  }

  getBHWidth(): string {
    if (this.generalSV.isPc()) {
      return "5%";
    } else {
      return "100%";
    }
  }

  getBAWidth(): string {
    if (this.generalSV.isPc()) {
      return "5%";
    } else {
      return "100%";
    }
  }

  getHPAndAttackWidth(): string {
    if (this.generalSV.isPc()) {
      return "15%";
    } else {
      return "100%";
    }
  }

  getGeneralWidth(): string {
    return this.generalSV.getGeneralWidth();
  }

  catAntiEnemyCheckAll(isCatAntiEnemyCheckAll: boolean) {
    for (let i = 0; i < this.catAntiEnemies.length; i++) {
      this.catAntiEnemies[i].isChecked = isCatAntiEnemyCheckAll;
    }
  }

  catSkillTypeCheckAll(isCatSkillTypeCheckAll: boolean) {
    for (let i = 0; i < this.catSkillTypes.length; i++) {
      this.catSkillTypes[i].isChecked = isCatSkillTypeCheckAll;
    }
  }

  uploadImg() {
    //TODO
  }

  dealCatAntiEnemies() {
    this.cat.antiEnemy = "";
    this.cat.antiEnemyDescribe = "";
    let checkedAntiEnemies = this.catAntiEnemies.filter(c => c.isChecked);
    for (let i = 0; i < checkedAntiEnemies.length; i++) {
      this.cat.antiEnemy += checkedAntiEnemies[i].antiEnemy + ",";
      this.cat.antiEnemyDescribe += checkedAntiEnemies[i].antiEnemyDescribe + ",";
    }
  }

  dealCatSkillType() {
    this.cat.skillType = "";
    this.cat.skillTypeDescribe = "";
    let checkedCatSkillTypes = this.catSkillTypes.filter(c => c.isChecked);
    for (let i = 0; i < checkedCatSkillTypes.length; i++) {
      this.cat.skillType += checkedCatSkillTypes[i].skillType + ",";
      this.cat.skillTypeDescribe += checkedCatSkillTypes[i].skillTypeDescribe + ",";
    }
  }

  saveCat() {
    this.dealCatAntiEnemies();
    this.dealCatSkillType();
    this.catSV.saveCat(this.cat).subscribe({
      next(msg) {
        if (msg == "SUCCESS") {
          alert("保存成功");
          window.location.reload();
        } else {
          alert("保存失败,原因:" + msg);
        }
      }
    });
  }
}
