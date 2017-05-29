import { Component } from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {OnInit} from '@angular/core';

@Component({
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'],
  providers: []
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private _heroService: HeroService) {}

  ngOnInit () {
    this.getHeroes();
  }

  getHeroes() {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
