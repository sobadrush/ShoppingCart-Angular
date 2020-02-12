import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MySidebarComponent } from './my-sidebar/my-sidebar.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { MyPoemComponent } from './my-poem/my-poem.component';

@NgModule({
  declarations: [
    AppComponent,
    MySidebarComponent,
    MyHeaderComponent,
    MyPoemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
