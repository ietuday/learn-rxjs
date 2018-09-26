import { Component, OnInit } from '@angular/core';
import { timer, interval, fromEvent } from 'rxjs';
import { switchMap, mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-switch-map',
  templateUrl: './rxjs-switch-map.component.html',
  styleUrls: ['./rxjs-switch-map.component.scss']
})
export class RxjsSwitchMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.switchMap();
  }

  switchMap() {
    // //emit immediately, then every 5s
    // const source = timer(0, 5000);
    // //switch to new inner observable when source emits, emit items that are emitted
    // const example = source.pipe(switchMap(() => interval(500)));
    // //output: 0,1,2,3,4,5,6,7,8,9...0,1,2,3,4,5,6,7,8
    // const subscribe = example.subscribe(val => console.log(val));

    //emit every click
    const source = fromEvent(document, 'click');
    //if another click comes within 3s, message will not be emitted
    const example = source.pipe(
      switchMap(val => interval(3000).pipe(mapTo('Hello, I made it!')))
    );
    //(click)...3s...'Hello I made it!'...(click)...2s(click)...
    const subscribe = example.subscribe(val => console.log(val));
  }

}
