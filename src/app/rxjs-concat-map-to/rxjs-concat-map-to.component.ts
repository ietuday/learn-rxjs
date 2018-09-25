import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { concatMapTo, take } from 'rxjs/operators';
@Component({
  selector: 'app-rxjs-concat-map-to',
  templateUrl: './rxjs-concat-map-to.component.html',
  styleUrls: ['./rxjs-concat-map-to.component.scss']
})
export class RxjsConcatMapToComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.concatMapTo();
  }

  concatMapTo() {
    //emit value every 2 seconds
    const myInterval = interval(2000);
    const message = of('Second(s) elapsed!');
    //when interval emits, subscribe to message until complete, merge for result
    // const example = interval.pipe(concatMapTo(message, (time, msg) => `${time} ${msg}`));
    //log values
    //output: '0 Second(s) elapsed', '1 Second(s) elapsed'
    // const subscribe = example.subscribe(val => console.log(val));

    //emit value every second for 5 seconds
    const basicTimer = interval(1000).pipe(take(5));

    /* 
  ***Be Careful***: In situations like this where the source emits at a faster pace
  than the inner observable completes, memory issues can arise.
  (interval emits every 1 second, basicTimer completes every 5)
*/
    //basicTimer will complete after 5 seconds, emitting 0,1,2,3,4
    // const exampleTwo = interval
    //   .pipe(concatMapTo(basicTimer,
    //     (firstInterval, secondInterval) => `${firstInterval} ${secondInterval}`
    //   ));
    /*
    output: 0 0
            0 1
            0 2
            0 3
            0 4
            1 0
            1 1
            continued...
            
    */
    // const subscribeTwo = exampleTwo.subscribe(val => console.log(val));
  }

}
