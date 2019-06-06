import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {BeerDetailComponent} from './beer-detail/beer-detail.component';
import {BeerListComponent} from './beer-list/beer-list.component';
import {BeerFormComponent} from './beer-form/beer-form.component';
import {BeerReactiveFormComponent} from './beer-reactive-form/beer-reactive-form.component';
import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { MyCurrencyPipe } from './my-currency.pipe';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './auth.guard';
import { LoginComponent } from './login/login.component';

registerLocaleData(localeFr, 'fr');

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'beer-list', component: BeerListComponent },
  { path: 'beer/:name', component: BeerDetailComponent },
  { path: 'new-beer', component: BeerReactiveFormComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/beer-list', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    BeerDetailComponent,
    BeerListComponent,
    BeerFormComponent,
    BeerReactiveFormComponent,
    MyCurrencyPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
