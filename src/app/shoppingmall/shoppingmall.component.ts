import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppingmall',
  templateUrl: './shoppingmall.component.html',
  styleUrls: ['./shoppingmall.component.css']
})
export class ShoppingmallComponent implements OnInit {

  productsList : Array<Object>;

  constructor() {
    this.productsList = [
      { 'prodName' : 'Gogoro', 'prodPrice' : '78500', 'quantity' : '22' },
      { 'prodName' : 'SWITCH電力加強版', 'prodPrice' : '11500', 'quantity' : '7' },
      { 'prodName' : 'IPhone11', 'prodPrice' : '36500', 'quantity' : '13' },
    ]
  }

  ngOnInit(): void {
    console.log(` >>> this.productsList `, this.productsList);
  }

  test() : void {
    alert(`============ 熱銷商品 =============`)
  }

}
