import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Gender } from 'src/app/modules/shared/interfaces/character-interface';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { HomeCharacter } from '../../../interfaces/home.character.interface';
import { HomeService } from '../../../services/home.service';
import { HomeComponent } from '../home.component';

const homeCharacterMock: HomeCharacter = {
  id: 1,
  name: 'name test',
  species: 'species test',
  gender: Gender.FEMALE,
  image: 'image test',
};

const homeServiceMock = {
  setGender: jasmine
    .createSpy('setGender')
    .and.returnValue(of([homeCharacterMock])),
  getCharacters: jasmine
    .createSpy('getCharacters')
    .and.returnValue(of([homeCharacterMock])),
};

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let routerMock: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        {
          provide: HomeService,
          useValue: homeServiceMock,
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [SharedModule],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    routerMock = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to a detail id', () => {
    const navigateSpy = spyOn(routerMock, 'navigate');
    component.navigateToDetail(1);
    expect(navigateSpy).toHaveBeenCalled();
  });

  it('should set home characters', () => {
    component.setHomeCharacters(homeCharacterMock);
    expect(homeServiceMock.setGender).toHaveBeenCalled();
  });

  it('should set card', () => {
    const cardMock = {
      name: 'name test',
      species: 'species test',
      gender: Gender.FEMALE,
      image: 'image test',
    };
    expect(component.setCardConfig(homeCharacterMock)).toEqual(cardMock);
  });

  it('should call getCharacters', () => {
    component.getCharacters();
    expect(homeServiceMock.getCharacters).toHaveBeenCalled();
  });
});
