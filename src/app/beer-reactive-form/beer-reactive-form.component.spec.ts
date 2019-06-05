import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerReactiveFormComponent } from './beer-reactive-form.component';

describe('BeerReactiveFormComponent', () => {
  let component: BeerReactiveFormComponent;
  let fixture: ComponentFixture<BeerReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerReactiveFormComponent ]
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
