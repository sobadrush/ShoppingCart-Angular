import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/my-module/shared.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent implements OnInit {

  empCn: string = `Z00040180`;
  empName: string = `Roger`;
  empSalary: number = 22000;

  constructor(private sharedService : SharedService/*注入用來傳遞資料用的Service*/) { }

  ngOnInit(): void {
  }

  doClick(): void{
    alert(" ========== click, 透過Service傳值給 B元件 ===========");

    let passObj: any = {
      "empCn": this.empCn,
      "empName": this.empName,
      "empSalary": this.empSalary
    };

    this.sharedService.setData(passObj);
  }

}
