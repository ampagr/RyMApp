import { CardComponent } from './containers/card/card.component';
import { CommonModule } from '@angular/common';
import { FilterFormComponent } from './containers/filter-form/filter-form.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CardComponent, FilterFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CardComponent, FilterFormComponent],
})
export class SharedModule {}
