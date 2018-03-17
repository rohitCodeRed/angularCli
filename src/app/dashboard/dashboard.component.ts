import { Component, OnInit } from '@angular/core';
import { Heros } from '../heros';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Heros[] = [];

constructor(private heroService: HeroService) { }

ngOnInit() {
  this.getHeroes();
}

getHeroes(): void {
  this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes.slice(1, 5));
}

}
