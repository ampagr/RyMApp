import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DetailRoutingModule } from './detail-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { DetailComponent } from './containers/detail/detail.component';

import { DetailService } from './services/detail.service';

@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    HttpClientModule,
  ],
  providers: [ DetailService ]
})
export class DetailModule { }
