import { Component, OnInit, ViewChild } from '@angular/core';
import { MyChildComponent } from '../my-child/my-child.component';

@Component({
  selector: 'app-my-paraent',
  templateUrl: './my-paraent.component.html',
  styleUrls: ['./my-paraent.component.css']
})
export class MyParaentComponent implements OnInit {

  @ViewChild(MyChildComponent)
  childBeSeen : MyChildComponent;

  constructor() { }

  ngOnInit(): void {
  }

  doClick() : void{
    alert(`Child中的變數 = ` + this.childBeSeen.testStr);
  }

}
