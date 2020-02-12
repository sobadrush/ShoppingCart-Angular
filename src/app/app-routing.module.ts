import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyPoemComponent } from './my-poem/my-poem.component';


const routes: Routes = [
  { path: 'page1', component : MyPoemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
