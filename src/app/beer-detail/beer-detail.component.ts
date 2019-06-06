import {Component, OnInit} from '@angular/core';
import {Beer} from '../../beer';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.scss']
})
export class BeerDetailComponent implements OnInit {

  beer: Beer = new Beer();

  constructor() {
  }

  ngOnInit() {
  }

}
