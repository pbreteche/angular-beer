import {Component, OnInit} from '@angular/core';
import {Beer, BeerCategory} from '../../beer';
import {BeerListService} from '../beer-list.service';

@Component({
  selector: 'app-beer-form',
  templateUrl: './beer-form.component.html',
  styleUrls: ['./beer-form.component.scss']
})
export class BeerFormComponent implements OnInit {

  newBeer = new Beer();
  categoryOptions = BeerCategory;

  constructor(
    private beerList: BeerListService
  ) { }

  ngOnInit() {
  }

  createBeer() {
    this.beerList.add(this.newBeer);
    this.newBeer = new Beer();
  }
}
