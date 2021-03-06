import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) {}
  heroes: Hero[] = [];
  selectedHero ?: Hero;
  onSelect(hero : Hero)
  {
      this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
  ngOnInit() {
    this.getHeroes();
  }

}
