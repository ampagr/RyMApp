import { CardComponent } from './components/card/card.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { FilterFormComponent } from './components/filter-form/filter-form.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CardComponent, ButtonComponent, FilterFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CardComponent, ButtonComponent, FilterFormComponent]
})

export class SharedModule {}
