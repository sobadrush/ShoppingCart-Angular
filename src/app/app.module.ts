import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MySidebarComponent } from './my-sidebar/my-sidebar.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { MyPoemComponent } from './my-poem/my-poem.component';
import { MyHomepageComponent } from './my-homepage/my-homepage.component';
import { MyPoem2Component } from './my-poem2/my-poem2.component';
import { MyPoem3Component } from './my-poem3/my-poem3.component';

@NgModule({
  declarations: [
    AppComponent,
    MySidebarComponent,
    MyHeaderComponent,
    MyPoemComponent,
    MyHomepageComponent,
    MyPoem2Component,
    MyPoem3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
