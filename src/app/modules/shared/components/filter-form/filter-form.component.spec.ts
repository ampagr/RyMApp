import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Button, Color, Size } from '../../interfaces/button.interface';
import { FilterFormComponent } from './filter-form.component';
import { ReactiveFormsModule } from '@angular/forms';

const ButtonMock: Button = {
  color: Color.DEFAULT,
  size: Size.MEDIUM,
  text: 'text test',
  disabled: true,
};

describe('FilterFormComponent', () => {
  let component: FilterFormComponent;
  let fixture: ComponentFixture<FilterFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterFormComponent],
      imports: [ReactiveFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(FilterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit form changes', () => {
    const changesSpy = spyOn(component.onFormChange, 'emit');
    component.emitForm();
    expect(changesSpy).toHaveBeenCalled();
  });

  it('should reset form', () => {
    const resetSpy = spyOn(component.onReset, 'emit');
    component.resetForm();
    expect(resetSpy).toHaveBeenCalled();
    expect(component.filterForm.get('gender')?.value).toEqual('defaultOption');
  });

  it('should disable button when form is invalid and gender is default', () => {
    component.filterForm.invalid;
    expect(component.updateButtonState(ButtonMock).disabled).toEqual(
      ButtonMock.disabled
    );
    expect(component.filterForm.get('gender')?.value).toEqual('defaultOption');
  });
});
