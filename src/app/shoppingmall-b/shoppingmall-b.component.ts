import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';

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

  myForm: FormGroup;

  constructor(private productService: ProductService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    // ----------------------------------------------------------------------
    // 查全部 json-server上的資料 ( ProductService )
    this.productService.getProducts().subscribe((cbData: ProductVO[]) => {
      // console.log('cbData >>> ' , cbData);
      this.productsList = cbData;
    })
    // ----------------------------------------------------------------------

    // model-driven-form
    this.myForm = this.fb.group({
      prodName: ['薩爾達傳說DX', [Validators.required]],
      prodPrice: ['1650', [Validators.required]],
      quantity: ['3', [Validators.required, Validators.minLength(1)]],
      isRedirectToPage: ['NO'] // Radio Button
    });

  }

  // 查詢
  doQueryProduct(_prodId: Number): void {

    // alert('_prodId >>>' + _prodId);
    // console.log('_prodId >>>', _prodId.toString() == '');

    if (_prodId.toString().trim() == '') {

      // 查全部 json-server上的資料 ( ProductService )
      this.productService.getProducts().subscribe((res: ProductVO[]) => {
        // console.log('res >>> ' , res);
        this.productsList = [];
        this.productsList = res;
      });

    } else {

      // 查json-server上的資料By Id ( ProductService )
      this.productService.getProductById(_prodId)
        .subscribe(
          (res: Response) => {
            // console.log('cbData >>> ', cbData);
            this.productsList = [];
            this.productsList.push(res);
          },
          (err: any) => {
            // console.error('err >>>' , err);
            alert(`查無商品 : id = ${_prodId}`);
          },
          () => {
            // alert(' === onCompleted === ')
          }
        );

    } // end of else
  }

  // 刪除
  doDeleteProduct(_prodId: Number): void {
    if (_prodId.toString().trim() == '') {
      alert(` === 請輸入要刪除的商品ID === `);
    }

    if (confirm(`確定刪除商品嗎?(id = ${_prodId})`)) {
      this.productService.deleteProductById(_prodId)
        .subscribe(
          (res: Response) => {

            // 1.找到此prodId在array的index
            let targetIdx = this.productsList.findIndex((elem: ProductVO) => {
              return elem.id == _prodId;
            });

            // 2.將此元素移除
            this.productsList.splice(targetIdx, 1);

          },
          (err: any) => {
            // console.error('err >>>' , err);
            alert(`無商品 id = ${_prodId} 無法刪除!`);
          },
      );
    }

  }

  // 新增
  doSubmit(): void {
    alert(`========== doSubmit ===========`)
    console.log('myForm >>> ', this.myForm);
    this.productService.createProduct(this.myForm.value).subscribe(res => {
      alert("新增成功！")

      // ----------------------------------------------------------------------
      // 查全部 json-server上的資料 ( ProductService )
      this.productService.getProducts().subscribe((cbData: ProductVO[]) => {
        // console.log('cbData >>> ' , cbData);
        this.productsList = cbData;
      })
      // ----------------------------------------------------------------------

      if (this.myForm.value.isRedirectToPage == 'YES') {
        this.router.navigate(['poems', 'poem1']); // redirect to 滿江紅
      }

    });
  }

}
