import { Injectable } from '@angular/core';
import {Beer} from '../beer';

@Injectable({
  providedIn: 'root'
})
export class CurrentBeerService {

  beer: Beer;

  constructor() { }
}
