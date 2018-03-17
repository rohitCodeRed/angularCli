import { Component, OnInit } from '@angular/core';
import { Heros } from '../heros';
//import { HEROES } from '../mock-hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroData: Heros[];


  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  // selectedHero: Heros;
  // onSelect(hero: Heros): void {
  //   this.selectedHero = hero;
  // }

  getHeroes(): void {
    //this.heroData =
    this.heroService.getHeroes()
      .subscribe(heroDatas => this.heroData = heroDatas);
  }
}
