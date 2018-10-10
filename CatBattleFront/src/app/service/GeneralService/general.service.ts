import { Injectable } from '@angular/core';
import { CatAntiEnemy } from '../../component/bean/CatAntiEnemy.module';
import { CatSkillType } from '../../component/bean/CatSkillType.module';
import { NavigateData } from '../../component/bean/NavigateData.module';
import { CatCategory } from '../../component/bean/CatCategory.module';
import { EnemyCategory } from '../../component/bean/EnemyCategory.module';
import { EnemySkillType } from '../../component/bean/EnemySkillType.module';

const navigateDatas: NavigateData[] = [
  {id:1,showinfo:"喵咪列表",isClicked:false,link:"/cat-list",bgImg:"url(/assets/image/navigate/catLIst.png)"},
  {id:2,showinfo:"喵咪查询",isClicked:false,link:"/cat-search",bgImg:""},
  {id:3,showinfo:"喵咪新增",isClicked:false,link:"/cat-add",bgImg:""},
  {id:4,showinfo:"敌人列表",isClicked:false,link:"/enemy-list",bgImg:""},
  {id:5,showinfo:"敌人查询",isClicked:false,link:"/enemy-search",bgImg:""},
  {id:6,showinfo:"敌人新增",isClicked:false,link:"/enemy-add",bgImg:""},
];

const catCategories: CatCategory[] = [
  {id:1,category:"normal",categoryDescribe:"基本"},
  {id:2,category:"EX",categoryDescribe:"EX"},
  {id:3,category:"rare",categoryDescribe:"稀有"},
  {id:4,category:"very_rare",categoryDescribe:"激稀有"},
  {id:5,category:"super_rare",categoryDescribe:"超激稀有"},
];

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor() { }

  isPc(): boolean {
    let userAgentInfo = navigator.userAgent;
    let Agents = ["Android", "iPhone",
      "SymbianOS", "Windows Phone",
      "iPad", "iPod"];
    let flag = true;
    for (let v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
      }
    }
    return flag;
  }

  getCatAntiEnemies(): CatAntiEnemy[] {
    return [
      { id: 1, antiEnemy: "white", antiEnemyDescribe: "白", isChecked: false }, { id: 2, antiEnemy: "red", antiEnemyDescribe: "红", isChecked: false },
      { id: 3, antiEnemy: "black", antiEnemyDescribe: "黑", isChecked: false }, { id: 4, antiEnemy: "float", antiEnemyDescribe: "浮空", isChecked: false },
      { id: 5, antiEnemy: "metal", antiEnemyDescribe: "钢铁", isChecked: false }, { id: 6, antiEnemy: "angel", antiEnemyDescribe: "天使", isChecked: false },
      { id: 7, antiEnemy: "alien", antiEnemyDescribe: "外星", isChecked: false }, { id: 8, antiEnemy: "zombie", antiEnemyDescribe: "僵尸", isChecked: false },
      { id: 9, antiEnemy: "ancient", antiEnemyDescribe: "古代", isChecked: false }, { id: 10, antiEnemy: "witch", antiEnemyDescribe: "魔女", isChecked: false },
      { id: 11, antiEnemy: "shitu", antiEnemyDescribe: "使徒", isChecked: false }
    ];
  }

  getCatSkillTypes(): CatSkillType[] {
    return [
      { id: 1, skillTypeDescribe: '超强', skillType: 'superStrong', isChecked: false }, { id: 2, skillTypeDescribe: '耐揍', skillType: 'highHP', isChecked: false },
      { id: 3, skillTypeDescribe: '很强', skillType: 'veryStrong', isChecked: false }, { id: 4, skillTypeDescribe: '暴击', skillType: 'critical', isChecked: false },
      { id: 5, skillTypeDescribe: '破盾', skillType: 'barrierBreak', isChecked: false }, { id: 6, skillTypeDescribe: '波动', skillType: 'waveAttack', isChecked: false },
      { id: 7, skillTypeDescribe: '击退', skillType: 'beatBack', isChecked: false }, { id: 8, skillTypeDescribe: '静止', skillType: 'stopEnemy', isChecked: false },
      { id: 9, skillTypeDescribe: '减速', skillType: 'slowEnemy', isChecked: false }, { id: 10, skillTypeDescribe: '减攻', skillType: 'attackDownEnemy', isChecked: false },
      { id: 11, skillTypeDescribe: '钢铁', skillType: 'metalType', isChecked: false }, { id: 12, skillTypeDescribe: '全方位攻击', skillType: 'allPlace', isChecked: false },
      { id: 13, skillTypeDescribe: '远方攻击', skillType: 'farPlace', isChecked: false }, { id: 14, skillTypeDescribe: '攻击力上升', skillType: 'attackUp', isChecked: false },
      { id: 15, skillTypeDescribe: '免死一次', skillType: 'deadAvoid', isChecked: false }, { id: 16, skillTypeDescribe: '只攻击一次', skillType: 'oneAttack', isChecked: false },
      { id: 17, skillTypeDescribe: '连续攻击', skillType: 'multiAttack', isChecked: false }, { id: 18, skillTypeDescribe: '僵尸杀手', skillType: 'zombieKiller', isChecked: false },
      { id: 19, skillTypeDescribe: '魔女杀手', skillType: 'witchKiller', isChecked: false }, { id: 20, skillTypeDescribe: '使徒杀手', skillType: 'shituKiller', isChecked: false },
      { id: 21, skillTypeDescribe: '两倍赏金', skillType: 'doubleReward', isChecked: false }, { id: 22, skillTypeDescribe: '抵消波动', skillType: 'waveOffset', isChecked: false },
      { id: 23, skillTypeDescribe: '破城', skillType: 'towerBreaker', isChecked: false }, { id: 24, skillTypeDescribe: '免疫击退', skillType: 'beatedBackInvalid', isChecked: false },
      { id: 25, skillTypeDescribe: '免疫波动', skillType: 'waveInvalid', isChecked: false }, { id: 26, skillTypeDescribe: '免疫静止', skillType: 'stopInvalid', isChecked: false },
      { id: 27, skillTypeDescribe: '免疫减速', skillType: 'slowInvalid', isChecked: false }, { id: 28, skillTypeDescribe: '免疫减攻', skillType: 'attackDownInvalid', isChecked: false },
      { id: 29, skillTypeDescribe: '免疫传送', skillType: 'transferInvalid', isChecked: false }, { id: 30, skillTypeDescribe: '免疫诅咒', skillType: 'curseInvalid', isChecked: false },
    ];
  }

  getEnemySkillTypes(): EnemySkillType[] {
    return [
      {id:1,skillType:"critical",skillTypeDescribe:"暴击",isChecked:false},{id:2,skillType:"waveAttack",skillTypeDescribe:"波动",isChecked:false},
      {id:3,skillType:"beatBack",skillTypeDescribe:"击退",isChecked:false},{id:4,skillType:"stopEnemy",skillTypeDescribe:"静止",isChecked:false},
      {id:5,skillType:"slowEnemy",skillTypeDescribe:"减速",isChecked:false},{id:6,skillType:"towerBreaker",skillTypeDescribe:"破城",isChecked:false},
      {id:7,skillType:"burrow",skillTypeDescribe:"钻地",isChecked:false},{id:8,skillType:"revive",skillTypeDescribe:"复活",isChecked:false},
      {id:9,skillType:"allPlace",skillTypeDescribe:"全方位攻击",isChecked:false},{id:10,skillType:"farPlace",skillTypeDescribe:"远方攻击",isChecked:false},
      {id:11,skillType:"attackUp",skillTypeDescribe:"攻击力上升",isChecked:false},{id:12,skillType:"deadAvoid",skillTypeDescribe:"免死一次",isChecked:false},
      {id:13,skillType:"attackDownEnemy",skillTypeDescribe:"减攻",isChecked:false},{id:14,skillType:"multiAttack",skillTypeDescribe:"连续攻击",isChecked:false},
      {id:15,skillType:"curse",skillTypeDescribe:"古代诅咒",isChecked:false},{id:16,skillType:"warp",skillTypeDescribe:"传送",isChecked:false},
      {id:17,skillType:"beatedBackInvalid",skillTypeDescribe:"免疫击退",isChecked:false},{id:18,skillType:"waveInvalid",skillTypeDescribe:"免疫波动",isChecked:false},
      {id:19,skillType:"barrier",skillTypeDescribe:"护盾",isChecked:false},{id:20,skillType:"stopInvalid",skillTypeDescribe:"免疫静止",isChecked:false},
      {id:21,skillType:"slowInvalid",skillTypeDescribe:"免疫减速",isChecked:false},{id:22,skillType:"attackDownInvalid",skillTypeDescribe:"免疫减攻",isChecked:false},
    ];
  }

  getNavigateDatas(): NavigateData[] {
    return navigateDatas;
  }

  getCatCategories(): CatCategory[] {
    return catCategories;
  }

  getEnemyCategories(): EnemyCategory[] {
    return [
      {id:1,category:"white",categoryDescribe:"白",isChecked:false},{id:2,category:"red",categoryDescribe:"红",isChecked:false},
      {id:3,category:"black",categoryDescribe:"黑",isChecked:false},{id:4,category:"float",categoryDescribe:"浮空",isChecked:false},
      {id:5,category:"metal",categoryDescribe:"钢铁",isChecked:false},{id:6,category:"angel",categoryDescribe:"天使",isChecked:false},
      {id:7,category:"alien",categoryDescribe:"外星",isChecked:false},{id:8,category:"zombie",categoryDescribe:"僵尸",isChecked:false},
      {id:9,category:"ancient",categoryDescribe:"古代",isChecked:false},{id:10,category:"witch",categoryDescribe:"魔女",isChecked:false},
      {id:11,category:"shitu",categoryDescribe:"使徒",isChecked:false},{id:12,category:"alienWithStar",categoryDescribe:"外星(有星星)",isChecked:false},
      {id:13,category:"none",categoryDescribe:"无属性",isChecked:false},
    ];
  }

  getGeneralWidth() : string {
    if(this.isPc()) {
      return "100px";
    } else {
      return "50px";
    }
  }
}
