import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { CatService } from '../../service/CatService/cat.service';
import { GeneralService } from '../../service/GeneralService/general.service';


@Component({
  selector: 'app-cat-list-data',
  templateUrl: './cat-list-data.component.html',
  styleUrls: ['./cat-list-data.component.css']
})
export class CatListDataComponent implements OnInit {
  @Input() cats : any;

  constructor(private route : ActivatedRoute,private catSV : CatService) {}

  ngOnInit() {
    if(this.route.snapshot.paramMap.get("category") != null) {
      this.getCatsByCategory();
    } else if(this.route.snapshot.paramMap.get("antiEnemy") != null) {
      this.getCatsByAntiEnemy();
    } else if(this.route.snapshot.paramMap.get("skillType") != null) {
      this.getCatsBySkillType();
    }
  }

  getCatsByCategory() {
    let category : string = this.route.snapshot.paramMap.get("category");
    this.catSV.getCatsByCategory(category).subscribe(cats => this.cats = cats);
  }

  getCatsByAntiEnemy() {
    let antiEnemy : string = this.route.snapshot.paramMap.get("antiEnemy");
    this.catSV.getCatsByAntiEnemy(antiEnemy).subscribe(cats => this.cats = cats);
  }
  
  getCatsBySkillType() {
    let skillType : string = this.route.snapshot.paramMap.get("skillType");
    this.catSV.getCatsBySkillType(skillType).subscribe(cats => this.cats = cats);
  }
}
