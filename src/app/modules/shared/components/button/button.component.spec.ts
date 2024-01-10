import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ButtonComponent } from './button.component';
import { Button, Color, Size } from '../../interfaces/button.interface';

const buttonMock: Button = {
  color: Color.DEFAULT,
  size: Size.MEDIUM,
  text: 'text test',
  disabled: true,
};

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    component.button = buttonMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('set color and size', () => {
    component.ngOnInit();
    expect(component.setColorNgClass).toEqual(
      'rm__button--' + buttonMock.color
    );
  });

  it('should emit onClick event', () => {
    const eventSpy = spyOn(component.onClick, 'emit');
    component.selectedButton();
    expect(eventSpy).toHaveBeenCalled();
  });
});
