import { Component, OnInit } from '@angular/core';
import { interval, race } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-race',
  templateUrl: './rxjs-race.component.html',
  styleUrls: ['./rxjs-race.component.scss']
})
export class RxjsRaceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.race();
  }

  race() {
    //take the first observable to emit
    const example = race(
      //emit every 1.5s
      interval(1500),
      //emit every 1s
      interval(1000).pipe(mapTo('1s won!')),
      //emit every 2s
      interval(2000),
      //emit every 2.5s
      interval(2500)
    );
    //output: "1s won!"..."1s won!"...etc
    const subscribe = example.subscribe(val => console.log(val));
  }

}
