import { Component, OnInit } from '@angular/core';
import { of, concat, interval } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-concat',
  templateUrl: './rxjs-concat.component.html',
  styleUrls: ['./rxjs-concat.component.scss']
})
export class RxjsConcatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //emits 1,2,3
    const sourceOne = of(1, 2, 3);
    //emits 4,5,6
    const sourceTwo = of(4, 5, 6);
    //emit values from sourceOne, when complete, subscribe to sourceTwo
    const concatSource = sourceOne.pipe(concat(sourceTwo));
    //output: 1,2,3,4,5,6
    const subscribe = concatSource.subscribe(val => console.log('Example 1: Basic concat:', val));

    //delay 3 seconds then emit
    const delayedSourceOne = sourceOne.pipe(delay(3000));
    //sourceTwo waits on sourceOne to complete before subscribing
    const concatDelayedSource = delayedSourceOne.pipe(concat(sourceTwo));
    //output: 1,2,3,4,5,6
    const subscribeDelayed = concatDelayedSource.subscribe(val => console.log('Example 2: Delayed source one:', val));

    //when sourceOne never completes, the subsequent observables never run
    const sourceOneNeverComplete =
      pipe(concat(
        interval(1000),
        of('This', 'Never', 'Runs')
      ))
      //for logging clarity
      .delay(5000)
    //outputs: 1,2,3,4....
    const subscribeNeverComplete = sourceOneNeverComplete.subscribe(val => console.log('Example 3: Source one never completes, second observable never runs:', val));
  }

}
