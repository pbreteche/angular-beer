import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerReactiveFormComponent } from './beer-reactive-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BeerListService} from '../beer-list.service';
import {Beer} from '../../beer';
import {RouterTestingModule} from '@angular/router/testing';

describe('BeerReactiveFormComponent', () => {
  let component: BeerReactiveFormComponent;
  let fixture: ComponentFixture<BeerReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule],
      declarations: [ BeerReactiveFormComponent ],
      providers: [
        {provide: BeerListService, useValue: { add(beer: Beer) {} } },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
