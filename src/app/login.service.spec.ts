import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import {Router} from '@angular/router';

const routerSpy = jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl']);

describe('LoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: Router, useValue: routerSpy }
    ]
  }));

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });
});
