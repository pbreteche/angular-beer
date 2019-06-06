import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn = false;
  targetPath: string;

  constructor(private router: Router) { }

  logIn() {
    this.isLoggedIn = true;
    this.router.navigateByUrl(this.targetPath);
  }

  logOut() {
    this.isLoggedIn = false;
    this.router.navigate(['/beer-list']);
  }
}
