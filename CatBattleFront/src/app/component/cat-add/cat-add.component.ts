import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../service/GeneralService/general.service';
import { CatService } from '../../service/CatService/cat.service';
import { CatAntiEnemy } from '../bean/CatAntiEnemy.module';
import { CatSkillType } from '../bean/CatSkillType.module';
import { FileUploader, FileItem, ParsedResponseHeaders } from 'ng2-file-upload';

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
  uploader = new FileUploader({
    url: "http://localhost:8080/java/cat/uploadCatImg",
    method: "POST",
    autoUpload: false,
    removeAfterUpload:true,
  });
  fileItem:FileItem;
  isPreview:boolean = false;
  isSaving:boolean = false;
  catImg:string;

  constructor(private generalSV: GeneralService, private catSV: CatService) { }

  ngOnInit() {
    this.catAntiEnemies = this.generalSV.getCatAntiEnemies();
    this.catSkillTypes = this.generalSV.getCatSkillTypes();
    this.uploader.onSuccessItem = this.successItem.bind(this);
    this.uploader.onAfterAddingFile = this.afterAddingFileItem.bind(this);
  }

  getCIWidth(): string {
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
    let _this = this;
    this.catSV.previewCat(this.catId).subscribe({
      next(cat) {
        _this.cat = cat;
        _this.isPreview = false;
      }
    });
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

  uploadImg(img:string) {
    this.fileItem.file.name = img.substring(img.lastIndexOf("/") + 1);
    this.uploader.uploadItem(this.fileItem);
    this.fileItem = null;
  }

  //上传文件后回调
  successItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders):any{
    if(response == "SUCCESS") {
      this.catImg = this.cat.img;
      alert("上传成功");
    } else {
      alert("上传失败，失败原因：" + response);
    }
  }

  //添加文件后回调
  afterAddingFileItem(item: FileItem) {
    this.fileItem = item;
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

  dealCatSkillTypes() {
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
    this.dealCatSkillTypes();
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
