import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../service/GeneralService/general.service';
import { EnemyService } from '../../service/EnemyService/enemy.service';
import { EnemyCategory } from '../bean/EnemyCategory.module';
import { EnemySkillType } from '../bean/EnemySkillType.module';
import { FileUploader, FileItem, ParsedResponseHeaders } from 'ng2-file-upload';

@Component({
  selector: 'app-enemy-add',
  templateUrl: './enemy-add.component.html',
  styleUrls: ['./enemy-add.component.css']
})
export class EnemyAddComponent implements OnInit {
  enemyId: string;
  enemy: any;
  enemyCategories: EnemyCategory[];
  enemySkillTypes: EnemySkillType[];
  uploader = new FileUploader({
    url: "http://localhost:8080/java/enemy/uploadEnemyImg",
    method: "POST",
    autoUpload: false,
    removeAfterUpload: true,
  });
  fileItem: FileItem;
  isPreview: boolean = false;
  isSaving: boolean = false;
  enemyImg: string;

  constructor(private generalSV: GeneralService, private enemySV: EnemyService) { }

  ngOnInit() {
    this.enemyCategories = this.generalSV.getEnemyCategories();
    this.enemySkillTypes = this.generalSV.getEnemySkillTypes();
    this.uploader.onSuccessItem = this.successItem.bind(this);
    this.uploader.onAfterAddingFile = this.afterAddingFileItem.bind(this);
  }

  //上传文件后回调
  successItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
    if (response == "SUCCESS") {
      this.enemyImg = this.enemy.img;
      alert("上传成功");
    } else {
      alert("上传失败，失败原因：" + response);
    }
  }

  //添加文件后回调
  afterAddingFileItem(item: FileItem) {
    this.fileItem = item;
  }

  getEIWidth(): string {
    if (this.generalSV.isPc()) {
      return "20%";
    } else {
      return "100%";
    }
  }

  getGeneralWidth(): string {
    return this.generalSV.getGeneralWidth();
  }

  isDisabled(): boolean {
    if (this.enemyId) {
      return false;
    } else {
      return true;
    }
  }

  previewEnemy() {
    let _this = this;
    this.enemySV.previewEnemy(this.enemyId).subscribe({
      next(enemy) {
        _this.enemy = enemy;
        _this.enemyCategories.filter(c => enemy.category.indexOf(c.category) >= 0).map(c => c.isChecked = true);
        _this.isPreview = false;
      }
    });
  }

  enemySkillTypeCheckAll(isEnemySkillTypeCheckAll: boolean) {
    for (let i = 0; i < this.enemySkillTypes.length; i++) {
      this.enemySkillTypes[i].isChecked = isEnemySkillTypeCheckAll;
    }
  }

  saveEnemy() {
    this.dealEnemyCategories();
    this.dealEnemySkillTypes();
    this.enemySV.saveEnemy(this.enemy).subscribe({
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

  uploadImg(img:string) {
    this.fileItem.file.name = img.substring(img.lastIndexOf("/") + 1);
    this.uploader.uploadItem(this.fileItem);
    this.fileItem = null;
  }

  dealEnemyCategories() {
    this.enemy.category = "";
    this.enemy.categoryDescribe = "";
    let checkedEnemyCategories = this.enemyCategories.filter(c => c.isChecked);
    for (let i = 0; i < checkedEnemyCategories.length; i++) {
      this.enemy.category += checkedEnemyCategories[i].category + ",";
      this.enemy.categoryDescribe += checkedEnemyCategories[i].categoryDescribe + ",";
    }
  }

  dealEnemySkillTypes() {
    this.enemy.skillType = "";
    this.enemy.skillTypeDescribe = "";
    let checkedEnemySkillTypes = this.enemySkillTypes.filter(c => c.isChecked);
    for (let i = 0; i < checkedEnemySkillTypes.length; i++) {
      this.enemy.skillType += checkedEnemySkillTypes[i].skillType + ",";
      this.enemy.skillTypeDescribe += checkedEnemySkillTypes[i].skillTypeDescribe + ",";
    }
  }
}
