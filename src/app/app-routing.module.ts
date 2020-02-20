import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyPoemComponent } from './my-poem/my-poem.component';
import { MyHomepageComponent } from './my-homepage/my-homepage.component';
import { MyPoem2Component } from './my-poem2/my-poem2.component';
import { MyPoem3Component } from './my-poem3/my-poem3.component';
import { RouterParamTestComponent } from './router-param-test/router-param-test.component';
import { ShoppingmallComponent } from './shoppingmall/shoppingmall.component';
import { ShoppingmallBComponent } from './shoppingmall-b/shoppingmall-b.component';
import { ShoppingmallCComponent } from './shoppingmall-c/shoppingmall-c.component';
import { MyTestViewChildComponent } from './my-test-view-child/my-test-view-child.component';
import { TemplateRefVarComponent } from './template-ref-var/template-ref-var.component';


const routes: Routes = [
  // { path: '', component : MyHomepageComponent}, // 預設路由
  { path: '', redirectTo: '/HomePage', pathMatch: 'full'}, // 轉向路由 → 轉到 HomePage → 達到預設路由效果
  { path: 'HomePage', component : MyHomepageComponent}, // 首頁
  { path: 'poems',
    children: [
      { path : '' , component : MyPoemComponent}, // 後赤壁賦
      { path : 'poem1' , component : MyPoem2Component}, // 滿江紅
      { path : 'poem2' , component : MyPoem3Component}, // 正氣歌
    ]
  },
  { path: 'cartoon/:id', component : RouterParamTestComponent }, // 測試路由參數的元件
  { path: 'gotoViewChildTest', component : MyTestViewChildComponent }, // 測試 @ViewChild
  { path: 'shopping', component : ShoppingmallComponent }, // 購物商城 A
  { path: 'shoppingB', component : ShoppingmallBComponent }, // 購物商城 B
  { path: 'shoppingC', component : ShoppingmallCComponent }, // 購物商城 C
  { path: 'gotoTemplateRefVar', component : TemplateRefVarComponent }, // 範本參考變數測試
  { path: '**', redirectTo: '/HomePage', pathMatch: 'full' }, // 萬用路由(一定要放在最後) → 轉到 HomePage → 達到防呆效果
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
