import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { of } from 'rxjs';
import {
  Gender,
  Status,
} from 'src/app/modules/shared/interfaces/character-interface';
import { DetailCharacter } from '../../../interfaces/detail.interface';
import { DetailService } from '../../../services/detail.service';
import { DetailComponent } from '../detail.component';
import { ActivatedRoute } from '@angular/router';

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

const detailServiceMock = {
  getCharacterById: jasmine.createSpy('getCharacterById').and.returnValue(of(detailCharacterMock)),
};


describe('HomeComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DetailComponent],
      providers: [
        {
          provide: DetailService,
          useValue: detailServiceMock,
        },
      ],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
