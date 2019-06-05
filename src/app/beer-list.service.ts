import { Injectable } from '@angular/core';
import {Beer} from '../beer';
import beers from '../beer-data';
import {CurrentBeerService} from './current-beer.service';

@Injectable({
  providedIn: 'root'
})
export class BeerListService {

  beers: Beer[] = beers;

  constructor(private currentBeer: CurrentBeerService) { }

  add(beer: Beer) {
    this.beers.unshift(beer);
    this.currentBeer.beer = beer;
  }
}
