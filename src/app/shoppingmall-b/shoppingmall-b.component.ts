import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/my-services/product.service';
import { ProductVO } from 'src/app/my-value-objects/ProductVO';

@Component({
  selector: 'app-shoppingmall-b',
  templateUrl: './shoppingmall-b.component.html',
  styleUrls: ['./shoppingmall-b.component.css']
})
export class ShoppingmallBComponent implements OnInit {

  prodIdVal: Number = 0;
  productsList: Array<Object> = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // 查全部 json-server上的資料 ( ProductService )
    this.productService.getProducts().subscribe((cbData: ProductVO[]) => {
      // console.log('cbData >>> ' , cbData);
      this.productsList = cbData;
    })
  }

  doQueryProduct(_prodId: Number): void {

    // alert('_prodId >>>' + _prodId);
    // console.log('_prodId >>>', _prodId.toString() == '');

    if (_prodId.toString().trim() == '') {

      // 查全部 json-server上的資料 ( ProductService )
      this.productService.getProducts().subscribe((cbData: ProductVO[]) => {
        // console.log('cbData >>> ' , cbData);
        this.productsList = [];
        this.productsList = cbData;
      });

    } else {

      // 查json-server上的資料By Id ( ProductService )
      this.productService.getProductById(_prodId)
        .subscribe(
          (cbData: ProductVO) => {
            // console.log('cbData >>> ', cbData);
            this.productsList = [];
            this.productsList.push(cbData);
          },
          (err) => {
            // console.error('err >>>' , err);
            alert(`查無商品 : id = ${_prodId}`);
          },
          () => {
            // alert(' === onCompleted === ')
          }
        );

    } // end of else
  }

  doDeleteProduct(_prodId: Number): void {
    if (_prodId.toString().trim() == '') {
      alert(` === 請輸入要刪除的商品ID === `);
    }

    if (confirm(`確定刪除商品嗎?(id = ${_prodId})`)) {
      this.productService.deleteProductById(_prodId)
        .subscribe(
          (res) => {

            // 1.找到此prodId在array的index
            let targetIdx = this.productsList.findIndex((elem: ProductVO) => {
              return elem.id == _prodId;
            });

            // 2.將此元素移除
            this.productsList.splice(targetIdx, 1);

          },
          (err) => {
            // console.error('err >>>' , err);
            alert(`無商品 id = ${_prodId} 無法刪除!`);
          },
        );
    }

  }

}
