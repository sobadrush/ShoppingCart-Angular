import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from './shared.service';



@NgModule({
  declarations: [],
  providers:[
    SharedService
  ],
  imports: [
    CommonModule
  ]
})
export class MyModuleModule { }
