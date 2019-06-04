import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Beer} from '../../beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  @Input() beers: Beer[];
  @Output() beerSelected = new EventEmitter<Beer>();

  constructor() { }

  ngOnInit() {
  }

  select(beer: Beer) {
    this.beerSelected.emit(beer);
  }
}
