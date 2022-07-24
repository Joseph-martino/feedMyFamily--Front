import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RecipepageComponent } from './recipepage/recipepage.component';
import {HttpClientModule} from '@angular/common/http';
import { PagecomponentComponent } from './pagecomponent/pagecomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomepageComponent,
    RecipepageComponent,
    PagecomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
