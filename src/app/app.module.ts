import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerFormComponent } from './beer-form/beer-form.component';
import { BeerReactiveFormComponent } from './beer-reactive-form/beer-reactive-form.component';

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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
