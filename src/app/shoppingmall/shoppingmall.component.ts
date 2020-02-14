import { Component, OnInit } from '@angular/core';
import { environment } from "../../environments/environment";
import { FakeDataService } from '../my-services/fake-data.service';
import { ProductService } from 'src/app/my-services/product.service';
import { ProductVO } from '../my-value-objects/ProductVO';

@Component({
  selector: 'app-shoppingmall',
  templateUrl: './shoppingmall.component.html',
  styleUrls: ['./shoppingmall.component.css']
})
export class ShoppingmallComponent implements OnInit {

  productsList : Array<Object> = [];
  selectedRowId : Number = undefined;

  constructor(private fakeDataService : FakeDataService, private productService : ProductService) {

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
    // console.log('fakeDataService._productsList >>>', fakeDataService._productsList);
    // this.productsList = fakeDataService._productsList;

    // 【Type 4】 : 查 json-server上的資料 ( ProductService )
    this.productService.getProducts().subscribe((cbData: ProductVO[]) => {
      // console.log('cbData >>> ' , cbData);
      this.productsList = cbData
    })

  }

  ngOnInit(): void {
    console.log(` >>> this.productsList `, this.productsList);
  }

  // 字體Highlight
  doHighlight(_event: MouseEvent, _item: any) : void {
    // alert(`============ 熱銷商品 =============`);
    // console.log('_event >>> ' , _event);
    // console.log('_event.target >>> ' , _event.target);

    // console.log('_item >>> ' , _item);
    if (_item.quantity < 10) {
      let $td : HTMLTableCellElement = <HTMLTableCellElement> _event.target;
      // console.log("$td >>> " , $td);
      $td.style.fontSize = '30px';
    }

  }

  // 字體還原
  clearHighlight($td : HTMLTableCellElement) : void {
    $td.style.fontSize = '20px';
  }

  //
  doSelectRow(_selectedRowId : Number) : void {
    // console.log('_selectedRowId >>> ' , _selectedRowId);
    this.selectedRowId = _selectedRowId;
  }
}
