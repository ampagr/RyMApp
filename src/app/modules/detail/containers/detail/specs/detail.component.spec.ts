import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { of } from 'rxjs';

import { DetailCharacter } from '../../../interfaces/detail.interface';
import { DetailComponent } from '../detail.component';
import { DetailService } from '../../../services/detail.service';
import { Gender, Status } from 'src/app/modules/shared/interfaces/character-interface';

const detailCharacterMock: DetailCharacter = {
  id: 1,
  name: 'name test',
  status: Status.ALIVE,
  species: 'species test',
  type: 'type test',
  gender: Gender.FEMALE,
  origin: {
    name: 'name test',
    url: 'url test',
  },
  location: {
    name: 'name test',
    url: 'url test',
  },
  image: 'image test',
  episode: ['episode 1 test', 'episode 2 test'],
  url: 'url test',
  created: 'created test',
};

const activatedRouteMock = {
  snapshot: {
    paramMap: {
      get: (key: string) => '1',
    },
  },
};

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  let routerMock: Router;
  let detailService: DetailService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DetailComponent],
      providers: [
        DetailService,
        {
          provide: ActivatedRoute,
          useValue: activatedRouteMock,
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientTestingModule, RouterTestingModule],
    });
    detailService = TestBed.inject(DetailService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    routerMock = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to home', () => {
    const navigateSpy = spyOn(routerMock, 'navigate');
    component.navigateToHome();
    expect(navigateSpy).toHaveBeenCalledWith(['home']);
  });

  it('should get Id', () => {
    spyOn(activatedRouteMock.snapshot.paramMap, 'get')
    .and.returnValue('1');
    component.ngOnInit();
    expect(activatedRouteMock.snapshot.paramMap.get).toHaveBeenCalledWith('id');
  });

  it('should call getCharacterById', () => {
    const getCharacterByIdSpy = spyOn(detailService, 'getCharacterById')
    .and.returnValue(of(detailCharacterMock));
    component.ngOnInit();
    expect(getCharacterByIdSpy).toHaveBeenCalled();
  });

});
