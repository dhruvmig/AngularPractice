import { Component, OnInit,Input } from '@angular/core';
import {Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // @Input() hero?: Hero;
  hero?:Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  getHero(): void {
    // const id = +this.route.snapshot.paramMap.get('id');
    const id = this.route.snapshot.paramMap.get('id');
    console.log("id is ",id);
    let ans =this.heroService.getHero(id)
    this.hero = ans[0];
    console.log("here hero is ",this.hero)
  }
  ngOnInit(): void {
    this.getHero();
  }

}
