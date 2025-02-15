import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-child',
  templateUrl: './my-child.component.html',
  styleUrls: ['./my-child.component.css']
})
export class MyChildComponent implements OnInit {

  testStr: string = "我是Child裡面定義的資料!!!";

  @Input()
  paramFromParent: string;

  // @Output()
  // private myEmitter = new EventEmitter<boolean>();

  @Output()
  private myEmitter = new EventEmitter<any>();

  isSunRaise: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  // doClickBtn(): void {
  //   this.isSunRaise = !this.isSunRaise;
  //   alert(`this.isSunRaise = ${this.isSunRaise}`);
  //   this.myEmitter.emit(this.isSunRaise);
  // }

  doClickBtn(): void {
    this.isSunRaise = !this.isSunRaise;
    alert(`this.isSunRaise = ${this.isSunRaise}`);
    let emitData : any = { "isSunRaise" : this.isSunRaise , "others" : "其他參數s" };
    this.myEmitter.emit(emitData);
  }

}
