import {BrowserModule} from '@angular/platform-browser';
import {InjectionToken, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {BeerDetailComponent} from './beer-detail/beer-detail.component';
import {BeerListComponent} from './beer-list/beer-list.component';
import {BeerFormComponent} from './beer-form/beer-form.component';
import {BeerReactiveFormComponent} from './beer-reactive-form/beer-reactive-form.component';
import {CurrentBeerService} from './current-beer.service';
import {BeerCategory} from '../beer';

const currentBeerFactory = (beerName: string) => {
  const service = new CurrentBeerService();
  service.beer = { name: beerName, country: 'pays', alcoholByVolume: 6, category: BeerCategory.Lambic };
  return service;
};

const DEFAULT_BEER_NAME = new InjectionToken('defaultBeerName');

@NgModule({
  declarations: [
    AppComponent,
    BeerDetailComponent,
    BeerListComponent,
    BeerFormComponent,
    BeerReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: CurrentBeerService, useFactory: currentBeerFactory, deps: [DEFAULT_BEER_NAME] },
    { provide: DEFAULT_BEER_NAME, useValue: 'Kro' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
