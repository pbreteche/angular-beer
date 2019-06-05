import { Injectable } from '@angular/core';
import {Beer} from '../beer';
import {CurrentBeerService} from './current-beer.service';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeerListService {

  beers: Beer[];
  beersSubject = new BehaviorSubject<Beer[]>([]);

  constructor(
    private currentBeer: CurrentBeerService,
    private http: HttpClient
  ) {
    this.init();
  }

  init() {
    this.http.get('assets/beer.json')
      .subscribe((beersData: Beer[]) => {
        this.beers = beersData;
        this.beersSubject.next(this.beers);
      });
  }

  get beersObservable(): Observable<Beer[]> {
    return this.beersSubject.asObservable();
  }

  add(beer: Beer) {
    this.beers.unshift(beer);
    this.beersSubject.next(this.beers);
    this.currentBeer.beer = beer;
  }
}
