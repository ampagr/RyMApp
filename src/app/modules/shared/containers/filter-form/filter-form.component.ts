import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Gender } from '../../interfaces/character-interface';
import { HomeService } from '../../../home/services/home.service';

@Component({
  selector: 'rm-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss'],
})
export class FilterFormComponent implements OnInit {
  public filterForm: FormGroup = this.fb.group({
    gender: ['', Validators.required],
  });

  @Output()
  public sendGender: EventEmitter<Gender> = new EventEmitter();

  public genders!: Gender[];

  constructor(private fb: FormBuilder, private homeService: HomeService) {}
  ngOnInit(): void {
    this.formSubscription();
    this.getGenders();
  }

  public getGenders(): void {
    this.homeService.getCharacters().subscribe((homeCharacters) => {
      this.genders = homeCharacters
        .map((homeCharacters) => homeCharacters.gender)
        .filter(
          (gender, i, homeCharacters) => homeCharacters.indexOf(gender) === i
        );
    });
  }

  public formSubscription(): void {
    this.filterForm.get('gender')!.valueChanges.subscribe((value) => {
      console.log({ gender: value });
      this.sendGender.emit(value);
    });
  }
}
