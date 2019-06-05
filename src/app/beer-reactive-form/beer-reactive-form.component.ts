import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BeerCategory} from '../../beer';
import {BeerListService} from '../beer-list.service';

@Component({
  selector: 'app-beer-reactive-form',
  templateUrl: './beer-reactive-form.component.html',
  styleUrls: ['./beer-reactive-form.component.scss']
})
export class BeerReactiveFormComponent implements OnInit {

  form: FormGroup;
  categoryOptions = BeerCategory;

  constructor(
    private beerList: BeerListService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      country: new FormControl('', [
        Validators.pattern('[A-Z]{2}'),
        Validators.required
      ]),
      alcoholByVolume: new FormControl('', [
        Validators.pattern('[0-9]{1,2}(\.[0-9])?'),
        Validators.min(0),
        Validators.max(100),
      ]),
      category: new FormControl(''),
    });
  }

  createBeer() {
    this.beerList.add(this.form.value);
    this.form.reset();
  }
}