import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Beer, BeerCategory} from '../../beer';

@Component({
  selector: 'app-beer-form',
  templateUrl: './beer-form.component.html',
  styleUrls: ['./beer-form.component.scss']
})
export class BeerFormComponent implements OnInit {

  @Output() beerCreated = new EventEmitter<Beer>();
  newBeer = new Beer();
  categoryOptions = BeerCategory;

  constructor() { }

  ngOnInit() {
  }

  createBeer() {
    this.beerCreated.emit(this.newBeer);
    this.newBeer = new Beer();
  }
}
