import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }
  getHeroes(): Hero[] {
    return HEROES;
  }
  getHero(id:any):any{
    console.log("iddddd ",id);
     let ans = HEROES.filter((hero)=> hero.id == id);
     console.log("ans ",ans[0]);
    return ans;
  }
}
