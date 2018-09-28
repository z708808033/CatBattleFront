import { Component, OnInit, Input } from '@angular/core';
import { GeneralService } from '../../service/GeneralService/general.service';
import { Observable } from 'rxjs';
import { CatService } from '../../service/CatService/cat.service';

@Component({
  selector: 'app-cat-search',
  templateUrl: './cat-search.component.html',
  styleUrls: ['./cat-search.component.css']
})
export class CatSearchComponent implements OnInit {
  catName : string;
  cats : any;

  constructor(private generalSV : GeneralService,private catSV : CatService) { }

  ngOnInit() {
  }

  getCatsByCatName()  {
    this.catSV.getCatsByCatName(this.catName).subscribe(cats => this.cats = cats);
  }

  getCNWidth() : string {
    if(this.generalSV.isPc()) {
      return "20%";
    } else {
      return "100%";
    }
  }

  isDisabled() : boolean {
    if(this.catName) {
      return false;
    } else {
      return true;
    }
  }
}
