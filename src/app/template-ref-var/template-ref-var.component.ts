import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-ref-var',
  templateUrl: './template-ref-var.component.html',
  styleUrls: ['./template-ref-var.component.css']
})
export class TemplateRefVarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  doClick1(event: MouseEvent): void {
    console.log('event >>>'  , event);
    const btnTag : HTMLButtonElement = <HTMLButtonElement> (event.target);
    btnTag.style.color = "red";
  }

  doClick2(btnTag: HTMLButtonElement): void {
    btnTag.style.color = "orange";
  }

}
