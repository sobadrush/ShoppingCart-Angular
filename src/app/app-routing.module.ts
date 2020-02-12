import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyPoemComponent } from './my-poem/my-poem.component';
import { MyHomepageComponent } from './my-homepage/my-homepage.component';


const routes: Routes = [
  { path: '', component : MyHomepageComponent}, // 預設路由
  { path: 'poem1', component : MyPoemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
