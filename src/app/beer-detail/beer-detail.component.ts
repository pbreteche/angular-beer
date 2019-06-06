import {Component, OnInit} from '@angular/core';
import {Beer} from '../../beer';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {BeerListService} from '../beer-list.service';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.scss']
})
export class BeerDetailComponent implements OnInit {

  beer: Beer = new Beer();

  constructor(
    private route: ActivatedRoute,
    private beerList: BeerListService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: ParamMap) =>
        this.beerList.beersObservable.subscribe(
          (beers: Beer[]) => {
            console.log(params.get('name'));
            return this.beer = this.beerList.getBeerByName(params.get('name'));
          }
        )
    );
  }

  goBackToList() {
    this.router.navigate(['/beer-list']);

  }
}
