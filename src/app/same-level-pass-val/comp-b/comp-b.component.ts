import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/my-module/shared.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent implements OnInit {

  dataOtherPassIntoHere: any;

  constructor(private sharedService: SharedService /*注入用來傳遞資料用的Service*/ ) { }

  ngOnInit(): void {

    // -----------------------------------------
    // init 時，先訂閱
    this.sharedService.getData().subscribe(
      (cbData) => {
        console.log(`cbData >>>`, cbData);
        this.dataOtherPassIntoHere = cbData;
      },
      (err) => {
        console.log("err >>> ", err);
      },
      () => {
        console.log("Completed!");
      }
    );
    // -----------------------------------------

  }

}
