export class ProductDataModel {

  public data : I_ProductData;

  constructor() {
    this.data = ProductDataInitVal;
  }

}
export const ProductDataInitVal : I_ProductData = {
  prodName : "薩爾達傳說DX",
  prodPrice : 1650,
  quantity : 3,
  isRedirectToPage : "NO"
}

// 定義資料介面
interface I_ProductData {
  prodName : string,
  prodPrice : Number,
  quantity : Number,
  isRedirectToPage : string
}
