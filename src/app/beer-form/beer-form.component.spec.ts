import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerFormComponent } from './beer-form.component';
import {FormsModule} from '@angular/forms';
import {BeerListService} from '../beer-list.service';
import {Beer} from '../../beer';

describe('BeerFormComponent', () => {
  let component: BeerFormComponent;
  let fixture: ComponentFixture<BeerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ BeerFormComponent ],
      providers: [{ provide: BeerListService, useValue: { add(beer: Beer) {}} }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
