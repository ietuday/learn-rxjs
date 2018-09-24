import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { bufferTime } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-buffer-time',
  templateUrl: './rxjs-buffer-time.component.html',
  styleUrls: ['./rxjs-buffer-time.component.scss']
})
export class RxjsBufferTimeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //Create an observable that emits a value every 500ms
    const myInterval = interval(500);

    //After 2 seconds have passed, emit buffered values as an array
    const buffertime = myInterval.pipe(bufferTime(4000));

    //Print values to console
    //ex. output [0,1,2]...[3,4,5,6]
    const subscribe = buffertime.subscribe((val) => {
      console.log('Buffered with Time:', val)
    })

    /*
    bufferTime also takes second argument, when to start the next buffer (time in ms)
    for instance, if we have a bufferTime of 2 seconds but second argument (bufferCreationInterval) of 1 second:
    ex. output: [0,1,2]...[1,2,3,4,5]...[3,4,5,6,7]
    */

    const bufferTimeTwo = myInterval.pipe(bufferTime(2000, 1000));
    //Print values to console
    const secondSubscribe = bufferTimeTwo.subscribe(val => console.log('Start Buffer Every 1s:', val));
  }

}
