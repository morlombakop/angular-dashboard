import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { NavbarModule } from './navbar/navbar.module';
import { ReportsModule } from './reports/reports.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    NavbarModule,
    HomeModule,
    ReportsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
