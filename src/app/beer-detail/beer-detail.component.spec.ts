import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerDetailComponent } from './beer-detail.component';
import {ActivatedRoute, convertToParamMap, ParamMap, Router} from '@angular/router';
import {ReplaySubject} from 'rxjs';
import {BeerListService} from '../beer-list.service';
import {Beer} from '../../beer';

const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

class ActivatedRouteStub {
  private subject = new ReplaySubject<ParamMap>();

  constructor() {
    this.subject.next(convertToParamMap({ name: 'Grimbergen' }));
  }

  readonly paramMap = this.subject.asObservable();
}

class BeerListServiceStub {
  private subject = new ReplaySubject<Beer[]>();

  readonly beersObservable = this.subject.asObservable();

  getBeerByName(name: string) {
    return new Beer();
  }
}

describe('BeerDetailComponent', () => {
  let component: BeerDetailComponent;
  let fixture: ComponentFixture<BeerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerDetailComponent ],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub },
        { provide: BeerListService, useClass: BeerListServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
