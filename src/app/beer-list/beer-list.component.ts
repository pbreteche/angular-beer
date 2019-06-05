import {Component, OnInit} from '@angular/core';
import {Beer} from '../../beer';
import {CurrentBeerService} from '../current-beer.service';
import {BeerListService} from '../beer-list.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  constructor(
    private currentBeer: CurrentBeerService,
    private beerList: BeerListService
  ) { }

  ngOnInit() {
  }

  select(beer: Beer) {
    this.currentBeer.beer = beer;
  }

  get beers() {
    return this.beerList.beers;
  }
}
