import { Component, OnInit } from '@angular/core';
import { Beer, BeerCategory } from '../../beer';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.scss']
})
export class BeerDetailComponent implements OnInit {

  beer: Beer = Object.assign(new Beer(), {
    name: 'Mazout',
    country: 'FR',
    alcoholByVolume: 11.5,
    category: BeerCategory.Stout
  });

  constructor() { }

  ngOnInit() {
  }

}
