import { Injectable } from '@angular/core';

@Injectable({
  // 1. 在 Service 自己的 Metadata 裡加上 providedIn: 'root' 的屬性
  // 2. 告訴 Angular 說：「請把我註冊在整個系統都是使用同一個實體的注射器裡」
  // 3. 使用 providedIn 後，就不需在 NgModule中注入了( 有點類似 @ComponentScan )
  // ref. https://ithelp.ithome.com.tw/articles/10207283
  providedIn: 'root'
})
export class FakeDataService {

  _productsList : Array<Object> = [
    { 'prodName' : 'Gogoro', 'prodPrice' : '78500', 'quantity' : '22' },
    { 'prodName' : 'SWITCH電力加強版', 'prodPrice' : '11500', 'quantity' : '7' },
    { 'prodName' : 'IPhone11', 'prodPrice' : '36500', 'quantity' : '13' },
  ]

  constructor() {
    console.log(`=========== FakeDataService Be Construced ============`);
  }

}
