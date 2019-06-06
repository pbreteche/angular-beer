import {Component} from '@angular/core';
import {LoginService} from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Les bières du monde';

  constructor(private loginService: LoginService) {}

  logout() {
    this.loginService.logOut();
  }
}
