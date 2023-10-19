import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { HomeComponent } from './containers/home/home.component';
import { HomeService } from './services/home.service';


@NgModule({
  providers: [HomeService],
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,

  ]
})
export class HomeModule { }
