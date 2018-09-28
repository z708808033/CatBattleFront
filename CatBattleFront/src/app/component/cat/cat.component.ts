import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../service/GeneralService/general.service';
import { NavigateData } from '../bean/NavigateData.module';
import { EventHandlerVars } from '@angular/compiler/src/compiler_util/expression_converter';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
  navigateDatas : NavigateData[];

  constructor(private generalSV : GeneralService) { }

  ngOnInit() {
    this.navigateDatas = this.generalSV.getNavigateDatas();
  }

  onClick(id : number) {
    this.navigateDatas.map(data => data.isClicked = false);
    this.navigateDatas.filter(data => data.id == id)[0].isClicked = true;
  }
}
