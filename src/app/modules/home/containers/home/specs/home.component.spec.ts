import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';

import { of } from 'rxjs';

import { Gender } from 'src/app/modules/shared/interfaces/character-interface';
import { HomeCharacter } from '../../../interfaces/home.character.interface';
import { HomeComponent } from '../home.component';
import { HomeService } from '../../../services/home.service';
import { SharedModule } from 'src/app/modules/shared/shared.module';

const homeCharacterMock: HomeCharacter = {
  id: 1,
  name: 'name test',
  species: 'species test',
  gender: Gender.FEMALE,
  image: 'image test',
};

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let routerMock: Router;
  let homeService: HomeService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [HomeService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [SharedModule, HttpClientTestingModule],
    });
    homeService = TestBed.inject(HomeService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    routerMock = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
    routerMock = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to a detail id', () => {
    const navigateSpy = spyOn(routerMock, 'navigate');
    component.navigateToDetail(1);
    expect(navigateSpy).toHaveBeenCalledWith(['detail/', 1]);
  });

  it('should set home characters', () => {
    spyOn(homeService, 'setGender').and.returnValue(of([homeCharacterMock]));
    component.setHomeCharacters(homeCharacterMock);
    expect(homeService.setGender).toHaveBeenCalledWith(Gender.FEMALE);
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
    spyOn(homeService, 'getCharacters').and.returnValue(of([homeCharacterMock]));
    component.getCharacters();
    expect(homeService.getCharacters).toHaveBeenCalledWith();
  });
});
