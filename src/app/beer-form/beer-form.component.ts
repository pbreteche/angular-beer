import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Beer, BeerCategory} from '../../beer';
import {CurrentBeerService} from '../current-beer.service';

@Component({
  selector: 'app-beer-form',
  templateUrl: './beer-form.component.html',
  styleUrls: ['./beer-form.component.scss']
})
export class BeerFormComponent implements OnInit {

  @Output() beerCreated = new EventEmitter<Beer>();
  newBeer = new Beer();
  categoryOptions = BeerCategory;

  constructor(private currentBeer: CurrentBeerService) { }

  ngOnInit() {
  }

  createBeer() {
    this.beerCreated.emit(this.newBeer);
    this.currentBeer.beer = this.newBeer;
    this.newBeer = new Beer();
  }
}
