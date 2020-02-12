import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyPoemComponent } from './my-poem/my-poem.component';
import { MyHomepageComponent } from './my-homepage/my-homepage.component';
import { MyPoem2Component } from './my-poem2/my-poem2.component';
import { MyPoem3Component } from './my-poem3/my-poem3.component';
import { RouterParamTestComponent } from './router-param-test/router-param-test.component';


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
  { path: 'cartoon/:id', component : RouterParamTestComponent}, // 卡通頻道
  { path: '**', redirectTo: '/HomePage', pathMatch: 'full'}, // 萬用路由(一定要放在最後) → 轉到 HomePage → 達到防呆效果
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
