import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Gender } from '../../interfaces/character-interface';

@Component({
  selector: 'rm-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss'],
})
export class FilterFormComponent implements OnInit {
  @Output() onFormChange: EventEmitter<Gender> = new EventEmitter();
  @Output() onReset: EventEmitter<any> = new EventEmitter();

  public filterForm: FormGroup = new FormGroup({
    gender: new FormControl(null, [Validators.required]),
  });

  public genders: Gender[] = [
    Gender.FEMALE,
    Gender.GENDERLESS,
    Gender.MALE,
    Gender.UNKNOWN,
  ];

  private formEmition!: any;

  ngOnInit(): void {
    this.formSubscription();
  }

  public emitForm(): void {
    this.onFormChange.emit(this.formEmition);
  }

  public resetForm(): void {
    this.onReset.emit();
    this.filterForm.reset();
  }

  private formSubscription(): void {
    this.filterForm.valueChanges.subscribe((filterForm) => {
      this.formEmition = filterForm;
    });
  }
}
