import { Component, OnInit } from '@angular/core';
import { Beer } from '../../beer';
import beers from '../../beer-data';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  beers: Beer[] = beers;

  constructor() { }

  ngOnInit() {
  }

}
