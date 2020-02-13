import { Component, OnInit } from '@angular/core';
import { environment } from "../../environments/environment";
import { FakeDataService } from '../fake-data.service';

@Component({
  selector: 'app-shoppingmall',
  templateUrl: './shoppingmall.component.html',
  styleUrls: ['./shoppingmall.component.css']
})
export class ShoppingmallComponent implements OnInit {

  productsList : Array<Object> = [];

  constructor(fakeDataService : FakeDataService) {

    // 【Type 1】 : 將假資料放在此元件中
    // this.productsList = [
    //   { 'prodName' : 'Gogoro', 'prodPrice' : '78500', 'quantity' : '22' },
    //   { 'prodName' : 'SWITCH電力加強版', 'prodPrice' : '11500', 'quantity' : '7' },
    //   { 'prodName' : 'IPhone11', 'prodPrice' : '36500', 'quantity' : '13' },
    // ]

    // 【Type 2】 : 將假資料放在environment中
    // console.log('environment.productsList >>>', environment.productsList);
    // this.productsList = environment.productsList;

    // 【Type 3】 : 將假資料放Service中 ( FakeDataService )
    console.log('fakeDataService._productsList >>>', fakeDataService._productsList);
    this.productsList = fakeDataService._productsList;
  }

  ngOnInit(): void {
    console.log(` >>> this.productsList `, this.productsList);
  }

  test() : void {
    alert(`============ 熱銷商品 =============`)
  }

}
