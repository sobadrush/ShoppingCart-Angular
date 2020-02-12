import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyPoemComponent } from './my-poem/my-poem.component';
import { MyHomepageComponent } from './my-homepage/my-homepage.component';


const routes: Routes = [
  // { path: '', component : MyHomepageComponent}, // 預設路由
  { path: '', redirectTo: '/HomePage', pathMatch: 'full'}, // 轉向路由 → 轉到 HomePage → 達到預設路由效果
  { path: 'HomePage', component : MyHomepageComponent}, // 首頁
  { path: 'poems', component : MyPoemComponent}, // 後赤壁賦
  { path: '**', redirectTo: '/HomePage', pathMatch: 'full'}, // 萬用路由(一定要放在最後) → 轉到 HomePage → 達到防呆效果
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
