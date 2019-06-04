import {Component} from '@angular/core';
import {Beer, BeerCategory} from '../beer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Les bières du monde';
  beer: Beer = Object.assign(new Beer(), {
    name: 'Mazout',
    country: 'FR',
    alcoholByVolume: 11.5,
    category: BeerCategory.Stout
  });

}
