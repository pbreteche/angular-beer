import { Injectable } from '@angular/core';
import {Beer} from '../beer';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BeerListService {

  beers: Beer[] = [];
  beersSubject = new BehaviorSubject<Beer[]>([]);

  constructor(
    private http: HttpClient
  ) {
    this.init();
  }

  init() {
    // on décalle l'appel ajax juste pour vérifier que l'affichage
    // se rafraichit bien une fois la donnée réceptionnée
    setTimeout(() => {
      this.http.get('assets/beer.json')
        .subscribe((beersData: Beer[]) => {
          this.beers = beersData;
          this.beersSubject.next(this.beers);
        });
    }, 1000);

    this.http.get('assets/beer.json').toPromise()
      .then((beersData: Beer[]) => {
        console.log(beersData);
      })
      .catch(err => console.log(err));
  }

  get beersObservable(): Observable<Beer[]> {
    return this.beersSubject.asObservable();
  }

  add(beer: Beer) {
    this.beers.unshift(beer);
    this.beersSubject.next(this.beers);
    this.http.post('http://localhost:8080/api/', beer).pipe(catchError(err => {
      console.log(err);
      return of(err);
    })).subscribe(() => {});
  }

  getBeerByName(name: string): Beer {
    return this.beers.find((elt) => elt.name === name);
  }
}
