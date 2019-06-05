import {Component, OnInit} from '@angular/core';
import {Beer} from '../../beer';
import {CurrentBeerService} from '../current-beer.service';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.scss']
})
export class BeerDetailComponent implements OnInit {

  constructor(private currentBeerService: CurrentBeerService) {
  }

  ngOnInit() {
  }

  get beer(): Beer {
    return this.currentBeerService.beer;
  }
}
