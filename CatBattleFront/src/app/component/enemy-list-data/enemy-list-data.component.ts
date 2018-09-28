import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnemyService } from '../../service/EnemyService/enemy.service';

@Component({
  selector: 'app-enemy-list-data',
  templateUrl: './enemy-list-data.component.html',
  styleUrls: ['./enemy-list-data.component.css']
})
export class EnemyListDataComponent implements OnInit {
  @Input() enemies : any;

  constructor(private route : ActivatedRoute,private enemySV : EnemyService) { }

  ngOnInit() {
    if(this.route.snapshot.paramMap.get("category") != null) {
      this.getEnemiesByCategory();
    } else if(this.route.snapshot.paramMap.get("skillType") != null) {
      this.getEnemiesBySkillType();
    }
  }

  getEnemiesByCategory() {
    let category : string = this.route.snapshot.paramMap.get("category");
    this.enemySV.getEnemiesByCategory(category).subscribe(enemies => this.enemies = enemies);
  }

  getEnemiesBySkillType() {
    let skillType : string = this.route.snapshot.paramMap.get("skillType");
    this.enemySV.getEnemiesBySkillType(skillType).subscribe(enemies => this.enemies = enemies);
  }
}
