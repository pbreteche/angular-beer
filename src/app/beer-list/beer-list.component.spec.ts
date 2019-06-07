import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerListComponent } from './beer-list.component';
import {RouterTestingModule} from '@angular/router/testing';
import {MyCurrencyPipe} from '../my-currency.pipe';
import {BeerListService} from '../beer-list.service';
import {Beer} from '../../beer';
import {of} from 'rxjs';

describe('BeerListComponent', () => {
  let component: BeerListComponent;
  let fixture: ComponentFixture<BeerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ BeerListComponent, MyCurrencyPipe ],
      providers: [
        { provide: BeerListService, useValue: { get beersObservable() { return of([]); } } },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
