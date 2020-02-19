import { Component, OnInit, ViewChild } from '@angular/core';
import { MyChildComponent } from '../my-child/my-child.component';

@Component({
  selector: 'app-my-paraent',
  templateUrl: './my-paraent.component.html',
  styleUrls: ['./my-paraent.component.css']
})
export class MyParaentComponent implements OnInit {

  @ViewChild(MyChildComponent)
  childBeSeen: MyChildComponent;

  stringInParent: string;

  sunFlag: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.stringInParent = `我是定義在父元件中的變數！`;
  }

  doClick(): void{
    alert(`Child中的變數( 透過 ＠ViewChile ) = ` + this.childBeSeen.testStr);
  }

  doHandleEventFromChild(isSunRaise: boolean): void{
    console.log(`MyParaentComponent isSunRaise >>> ` , isSunRaise);
    console.log("%c %s", "color:red", `MyParaentComponent 來自 子元件的變數 isSunRaise >>> ${isSunRaise}`);
    // --------------------
    this.sunFlag = isSunRaise;
  }
}
