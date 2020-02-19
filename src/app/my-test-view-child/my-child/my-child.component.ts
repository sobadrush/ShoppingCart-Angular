import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-child',
  templateUrl: './my-child.component.html',
  styleUrls: ['./my-child.component.css']
})
export class MyChildComponent implements OnInit {

  testStr : string = "我是Child裡面定義的資料!!!";

  constructor() { }

  ngOnInit(): void {
  }

}
