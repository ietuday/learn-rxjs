import { Component, OnInit } from '@angular/core';
import { interval, fromEvent } from 'rxjs';
import { bufferCount } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-buffer-count',
  templateUrl: './rxjs-buffer-count.component.html',
  styleUrls: ['./rxjs-buffer-count.component.scss']
})
export class RxjsBufferCountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //Create an observable that emits a value every second
    const myInterval = interval(1000);

    //After three values are emitted, pass on as an array of buffered values
    const bufferThree = myInterval.pipe(bufferCount(3));

    //Print values to console
    //ex. output [0,1,2]...[3,4,5]
    const subscribe = bufferThree.subscribe((val) => {
      console.log('Buffered Values: ', val);
    })

    /*
      bufferCount also takes second argument, when to start the next buffer
      for instance, if we have a bufferCount of 3 but second argument (startBufferEvery) of 1:
      1st interval value:
      buffer 1: [0]
      2nd interval value:
      buffer 1: [0,1]
      buffer 2: [1]
      3rd interval value:
      buffer 1: [0,1,2] Buffer of 3, emit buffer
      buffer 2: [1,2]
      buffer 3: [2]
      4th interval value:
      buffer 2: [1,2,3] Buffer of 3, emit buffer
      buffer 3: [2, 3]
      buffer 4: [3]
    */

    const bufferEveryOne = myInterval.pipe(bufferCount(3,1));

    // //Print values to console
    const secondSubscribe = bufferEveryOne.subscribe(val => {
      console.log('Start Buffer Every 1:', val);
    })
    this.onclick1();
    this.onclick2();

  }

  onclick1() {
    // Emit the last two click events as an array
    var clicks = fromEvent(document, 'click');
    var buffered = clicks.pipe(bufferCount(2));
    buffered.subscribe(x => console.log(x));
  }

  onclick2(){
    // On every click, emit the last two click events as an array
    var clicks = fromEvent(document, 'click');
    var buffered = clicks.pipe(bufferCount(2, 1));
    buffered.subscribe(x => console.log(x));
  }

}
