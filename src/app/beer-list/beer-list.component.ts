import {Component, Input, OnInit } from '@angular/core';
import {Beer} from '../../beer';
import {CurrentBeerService} from '../current-beer.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  @Input() beers: Beer[];

  constructor(private currentBeer: CurrentBeerService) { }

  ngOnInit() {
  }

  select(beer: Beer) {
    this.currentBeer.beer = beer;
  }
}
