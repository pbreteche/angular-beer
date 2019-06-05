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

  beers: Beer[] = [];

  constructor(
    private currentBeer: CurrentBeerService,
    private beerList: BeerListService
  ) { }

  ngOnInit() {
    this.beerList.beersObservable.subscribe((b: Beer[]) => this.beers = b);
  }

  select(beer: Beer) {
    this.currentBeer.beer = beer;
  }
}
