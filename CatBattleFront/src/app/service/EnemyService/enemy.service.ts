import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class EnemyService {
  url = "http://192.168.1.2:8080/java/enemy";

  constructor(private http: HttpClient) { }


  getEnemiesByCategory(category : string) : Observable<any> {
    var _this = this;
    const getUrl = `${this.url}/getEnemiesByCategory/${category}`;
    return this.http.get(getUrl).pipe(tap(enemies => _this.dealBeforeShow(enemies)));
  }

  getEnemyByEnemyId(enemyId : string) : Observable<any> {
    var _this = this;
    const getUrl = `${this.url}/getEnemyByEnemyId/${enemyId}`;
    return this.http.get(getUrl).pipe(tap(enemies => _this.dealBeforeShow(enemies)));
  }

  getEnemiesBySkillType(skillType : string) : Observable<any> {
    var _this = this;
    const getUrl = `${this.url}/getEnemiesBySkillType/${skillType}`;
    return this.http.get(getUrl).pipe(tap(enemies => _this.dealBeforeShow(enemies)));
  }

  getEnemiesByEnemyName(enemyName : string) : Observable<any> {
    var _this = this;
    const getUrl = `${this.url}/getEnemiesByEnemyName/${enemyName}`;
    return this.http.get(getUrl).pipe(tap(enemies => _this.dealBeforeShow(enemies)));
  }

  updateEnemy(enemy : any) {
    const postUrl = `${this.url}/updateEnemy`;
    return this.http.post(postUrl,enemy,{responseType: 'text'});
  }

  dealBeforeShow(enemies : any)  {
    var _this = this;
    if(Array.isArray(enemies)) {
      enemies.forEach(enemy => {
        _this.dealEnemy(enemy);
      });
    } else {
      _this.dealEnemy(enemies);
    }
  }

  dealEnemy(enemy : any) {
    let categoryArr = enemy.category.split(",");
    let categoryDescribeArr = enemy.categoryDescribe.split(",");
    enemy.categoryArr = categoryArr;
    enemy.categoryDescribeArr = categoryDescribeArr;
    let skillTypeArr = enemy.skillType.split(",");
    let skillTypeDescribeArr = enemy.skillTypeDescribe.split(",");
    enemy.skillTypeArr = skillTypeArr;
    enemy.skillTypeDescribeArr = skillTypeDescribeArr;
    enemy.currentPowerUpRate = enemy.powerUpRate;
    enemy.currentHp = enemy.hp;
    enemy.currentAttack = enemy.attack;
  }
}
