import { Component, OnInit } from '@angular/core';
import { interval, of, fromEvent } from 'rxjs';
import { map, concatAll, take } from 'rxjs/operators';
import { pipe } from '@angular/core/src/render3/pipe';

@Component({
  selector: 'app-rxjs-concatall',
  templateUrl: './rxjs-concatall.component.html',
  styleUrls: ['./rxjs-concatall.component.scss']
})
export class RxjsConcatallComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //emit a value every 2 seconds
    const sourceOne = interval(2000);
    const example = sourceOne
      //for demonstration, add 10 to and return as observable
      .pipe(map(val => of(val + 10))
        //merge values from inner observable
        , concatAll());
    //output: 'Example with Basic Observable 0', 'Example with Basic Observable 2'...
    const subscribe = example.subscribe(val => console.log('Example with Basic Observable:', val));

    //create and resolve basic promise
    const samplePromise = val => new Promise(resolve => resolve(val));
    const exampleTwo = sourceOne
      .pipe(map(val => samplePromise(val))
      //merge values from resolved promise
      ,concatAll());
    //output: 'Example with Promise 0', 'Example with Promise 1'...
    const subscribeTwo = exampleTwo.subscribe(val => console.log('Example with Promise:', val));
    this.onClick()
  }

  onClick(){
    var clicks = fromEvent(document, 'click');
    // var higherOrder = clicks.pipe(map((ev) => {
    //   interval(1000),take(4)
    // }));
    // var firstOrder = higherOrder.pipe(concatAll());
    // firstOrder.subscribe(x => console.log(x));

  }

}
