import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Button, Color, Size } from '../../interfaces/button.interface';
import { Gender } from '../../interfaces/character-interface';

@Component({
  selector: 'rm-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss'],
})
export class FilterFormComponent implements OnInit {
  @Output() onFormChange = new EventEmitter();
  @Output() onReset = new EventEmitter();

  public filterForm: FormGroup = new FormGroup({
    gender: new FormControl(null, [Validators.required]),
  });

  public genders: Gender[] = [
    Gender.FEMALE,
    Gender.GENDERLESS,
    Gender.MALE,
    Gender.UNKNOWN,
  ];

  public filterButton: Button = {
    color: Color.DEFAULT,
    size: Size.SMALL,
    text: 'Filter',
    disabled: false,
  };

  public resetButton: Button = {
    color: Color.DEFAULT,
    size: Size.SMALL,
    text: 'Reset',
    disabled: false,
  };

  private formEmission!: Gender;

  ngOnInit(): void {
    this.updateButtonState(this.filterButton);
    this.updateButtonState(this.resetButton);
    this.formSubscription();
  }

  public emitForm(): void {
    this.onFormChange.emit(this.formEmission);
  }

  public resetForm(): void {
    this.onReset.emit();
    this.filterForm.reset();
  }

  public updateButtonState(button: Button): Button {
    button.disabled = !this.filterForm.valid && !this.filterForm.touched;
    return button;
  }

  private formSubscription(): void {
    this.filterForm.valueChanges.subscribe((filterForm) => {
      this.formEmission = filterForm;
      this.updateButtonState(this.filterButton);
      this.updateButtonState(this.resetButton);
    });
  }
}
