import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // for use HttpClient (ref. https://www.positronx.io/angular-8-httpclient-http-tutorial-build-consume-restful-api/)
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MySidebarComponent } from './my-sidebar/my-sidebar.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { MyPoemComponent } from './my-poem/my-poem.component';
import { MyHomepageComponent } from './my-homepage/my-homepage.component';
import { MyPoem2Component } from './my-poem2/my-poem2.component';
import { MyPoem3Component } from './my-poem3/my-poem3.component';
import { RouterParamTestComponent } from './router-param-test/router-param-test.component';
import { ShoppingmallComponent } from './shoppingmall/shoppingmall.component';
import { ShoppingmallBComponent } from './shoppingmall-b/shoppingmall-b.component';
import { ShoppingmallCComponent } from './shoppingmall-c/shoppingmall-c.component';
import { MyTestViewChildComponent } from './my-test-view-child/my-test-view-child.component';

@NgModule({
  declarations: [
    AppComponent,
    MySidebarComponent,
    MyHeaderComponent,
    MyPoemComponent,
    MyHomepageComponent,
    MyPoem2Component,
    MyPoem3Component,
    RouterParamTestComponent,
    ShoppingmallComponent,
    ShoppingmallBComponent,
    ShoppingmallCComponent,
    MyTestViewChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
