import { Injectable } from '@angular/core';
import { Heros } from './heros';
import { HEROES } from './mock-hero';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Observable<any> {
    return of(HEROES);
  }
}
