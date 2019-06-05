import {Component} from '@angular/core';
import {Beer} from '../beer';
import beers from '../beer-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Les bières du monde';
  beers: Beer[] = beers;
  currentBeer = beers[0];
  isDisplayed = true;

  setCurrentBeer(beer: Beer) {
    this.currentBeer = beer;
  }

  add(beer: Beer) {
    this.beers.unshift(beer);
    this.currentBeer = beer;
  }
}
