import { NgModule } from '@angular/core';
import { CardComponent } from './containers/card/card.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    CardComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CardComponent
  ]
})
export class SharedModule { }
