import { Component, OnInit } from '@angular/core';
import { EnemyService } from '../../service/EnemyService/enemy.service';
import { GeneralService } from '../../service/GeneralService/general.service';

@Component({
  selector: 'app-enemy-search',
  templateUrl: './enemy-search.component.html',
  styleUrls: ['./enemy-search.component.css']
})
export class EnemySearchComponent implements OnInit {
  enemyName : string;
  enemies : any;

  constructor(private generalSV : GeneralService,private enemySV : EnemyService) { }

  ngOnInit() {
  }

  getEnemiesByEnemyName()  {
    this.enemySV.getEnemiesByEnemyName(this.enemyName).subscribe(enemies => this.enemies = enemies);
  }

  getENWidth() : string {
    if(this.generalSV.isPc()) {
      return "20%";
    } else {
      return "100%";
    }
  }

  isDisabled() : boolean {
    if(this.enemyName) {
      return false;
    } else {
      return true;
    }
  }

}
