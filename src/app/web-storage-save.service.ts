import { Injectable } from '@angular/core';
import {Beer} from '../beer';

@Injectable({
  providedIn: 'root'
})
export class WebStorageSaveService {

  constructor() { }

  save(value: Beer) {
    localStorage.setItem('app.new-beer', JSON.stringify(value));
  }

  load(): Beer|null {
    const savedBeer = localStorage.getItem('app.new-beer');

    if (!savedBeer) {
      return null;
    }
    return JSON.parse(savedBeer);
  }

  clear() {
    localStorage.removeItem('app.new-beer');
  }
}
