import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FileUploader } from 'ng2-file-upload';

const httpJsonOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const httpTextOptions = { responseType: 'text' };

@Injectable({
  providedIn: 'root'
})
export class CatService {
  url = "http://localhost:8080/java/cat";

  constructor(private http: HttpClient) { }

  getCatsByCategory(category: string): Observable<any> {
    let getUrl = `${this.url}/getCatsByCategory/${category}`;
    return this.http.get(getUrl).pipe(tap(cats => this.dealBeforeShow(cats)));
  }

  getCatsByCatId(catId: string): Observable<any> {
    catId = catId.substring(0, 3);
    let getUrl = `${this.url}/getCatsByCatId/${catId}`;
    return this.http.get(getUrl).pipe(tap(cats => this.dealBeforeShow(cats)));
  }

  getCatsByCatName(catName: string): Observable<any> {
    let getUrl = `${this.url}/getCatsByCatName/${catName}`;
    return this.http.get(getUrl).pipe(tap(cats => this.dealBeforeShow(cats)));
  }

  getCatsByAntiEnemy(antiEnemy: string): Observable<any> {
    let getUrl = `${this.url}/getCatsByAntiEnemy/${antiEnemy}`;
    return this.http.get(getUrl).pipe(tap(cats => this.dealBeforeShow(cats)));
  }

  getCatsBySkillType(skillType: string): Observable<any> {
    let getUrl = `${this.url}/getCatsBySkillType/${skillType}`;
    console.log(getUrl);
    return this.http.get(getUrl).pipe(tap(cats => this.dealBeforeShow(cats)));
  }

  previewCat(catId: string): Observable<any> {
    let getUrl = `${this.url}/previewCat/${catId}`;
    return this.http.get(getUrl).pipe(tap(cat => this.dealBeforePreview(cat)));
  }

  updateCats(cats: any): Observable<any> {
    let postUrl = `${this.url}/updateCats`;
    return this.http.post(postUrl, cats, { responseType: 'text' });
  }

  saveCat(cat: any): Observable<any> {
    let postUrl = `${this.url}/saveCat`;
    return this.http.post(postUrl, cat, { responseType: 'text' });
  }

  dealBeforePreview(cat: any) {
    cat.hp = cat.hp.replace(",", "");
    cat.attack = cat.attack.replace(",", "");
    cat.cost = cat.cost.replace(",", "");
    cat.attackDistance = cat.attackDistance.replace(",", "");
  }

  dealBeforeShow(cats: any) {
    if (Array.isArray(cats)) {
      cats.forEach(cat => {
        this.dealCat(cat);
      });
    } else {
      this.dealCat(cats);
    }
  }

  dealCat(cat: any) {
    let antiEnemyArr = cat.antiEnemy.split(",");
    let antiEnemyDescribeArr = cat.antiEnemyDescribe.split(",");
    cat.antiEnemyArr = antiEnemyArr;
    cat.antiEnemyDescribeArr = antiEnemyDescribeArr;
    let skillTypeArr = cat.skillType.split(",");
    let skillTypeDescribeArr = cat.skillTypeDescribe.split(",");
    cat.skillTypeArr = skillTypeArr;
    cat.skillTypeDescribeArr = skillTypeDescribeArr;

    let defaultLevelArr = cat.defaultLevel.split("+");
    cat.currentLevel = parseInt(defaultLevelArr[0]) + parseInt(defaultLevelArr[1]);
    cat.currentAttack = cat.attack;
    cat.currentHp = cat.hp;

    cat.attackRateNum = cat.attackRate.substring(0, cat.attackRate.length - 1);
    cat.dps = Math.floor(cat.currentAttack / cat.attackRateNum);
  }
}
