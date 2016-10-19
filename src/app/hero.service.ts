import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './heroes.mock';

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise<Hero[]>(
      resolve => setTimeout(resolve, 2000)
    ).then(() => this.getHeroes());
  }
}
