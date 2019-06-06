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
import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { MyCurrencyPipe } from './my-currency.pipe';
import {RouterModule, Routes} from '@angular/router';

const currentBeerFactory = (beerName: string) => {
  const service = new CurrentBeerService();
  service.beer = { name: beerName, country: 'pays', alcoholByVolume: 6, category: BeerCategory.Lambic };
  return service;
};

const DEFAULT_BEER_NAME = new InjectionToken('defaultBeerName');

registerLocaleData(localeFr, 'fr');

const appRoutes: Routes = [
  { path: 'beer-list', component: BeerListComponent },
  { path: 'beer/:name', component: BeerDetailComponent },
  { path: 'new-beer', component: BeerReactiveFormComponent },
  { path: '', redirectTo: '/beer-list', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    BeerDetailComponent,
    BeerListComponent,
    BeerFormComponent,
    BeerReactiveFormComponent,
    MyCurrencyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: CurrentBeerService, useFactory: currentBeerFactory, deps: [DEFAULT_BEER_NAME] },
    { provide: DEFAULT_BEER_NAME, useValue: 'Kro' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
