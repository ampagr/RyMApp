import { NgModule } from '@angular/core';
import { CardComponent } from './containers/card/card.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './containers/button/button.component';


@NgModule({
  declarations: [
    CardComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CardComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
