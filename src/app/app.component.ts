import { Component } from '@angular/core';
import {HeroesComponent} from './heroes/heroes.component';
import { distinctUntilChanged,mergeMap,map, take, switchMap } from 'rxjs/operators';
import { forkJoin, from, fromEvent,interval,of } from 'rxjs';
import { SubjectssService } from './subjectss.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'msau';
  constructor(private service:SubjectssService){}



  onClick()
  {
    forkJoin([
      this.service.getDataObserval(10,1),
      this.service.getDataObserval(10,11)
    ]).subscribe(([r1,r2])=>{
      console.log('result from r1 ',r1);
      console.log('result from r2',r2);
    })
  }

  merge(){
        const letters = of('a', 'b', 'c');
    const result = letters.pipe(
      mergeMap(x => interval(1000).pipe(map(i => x+i))),
    );
    result.subscribe(x => console.log(x));
  }
  distinct()
  {
    of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4).pipe(
      distinctUntilChanged(),
    )
    .subscribe(x => console.log(x));
  }

  implementTake()
  {
    const intervalCount = interval(1000);
const takeFive = intervalCount.pipe(take(5));
takeFive.subscribe(x => console.log(x));
  }

  switchmap(){
    const switched = of(1, 2, 3).pipe(switchMap((x: number) => of(x, x ** 2, x ** 3)));
switched.subscribe(x => console.log(x));
  }

}
