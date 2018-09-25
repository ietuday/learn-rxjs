import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-concat-map',
  templateUrl: './rxjs-concat-map.component.html',
  styleUrls: ['./rxjs-concat-map.component.scss']
})
export class RxjsConcatMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.concatAll();
    this.concatAllPromise();

  }

  concatAll() {
    //emit 'Hello' and 'Goodbye'
    const source = of('Hello', 'GoodBye');

    // map value from source into inner observable, when complete emit result and move to next
    const exampleOne = source.pipe(concatMap(val => of(`${val} World!`)));

    //output: 'Example One: 'Hello World', Example One: 'Goodbye World'
    const subscribe = exampleOne.subscribe((val) => {
      console.log('Example One : ', val);
    })
  }

  concatAllPromise() {
    const source = of('Hello', 'GoodBye');
    //example with promise
    const examplePromise = val => new Promise(resolve => resolve(`${val} world`));
    // map value from source into inner observable, when complete emit result and move to next
    const exampleTwo = source.pipe(concatMap(val => examplePromise(val)));
    //output: 'Example w/ Promise: 'Hello World', Example w/ Promise: 'Goodbye World'
    const subscribeTwo = exampleTwo
      //delay for logging clarity
      .pipe(delay(1000))
      .subscribe(val => console.log('Example w/ Promise:', val));

    //result of first param passed to second param selector function before being  returned
    const exampleWithSelector = source.pipe(concatMap(val => examplePromise(val), result => `${result} w/ selector!`));
    //output: 'Example w/ Selector: 'Hello w/ Selector', Example w/ Selector: 'Goodbye w/ Selector'
    const subscribeThree = exampleWithSelector
      //delay for logging clarity
      .pipe(delay(2000))
      .subscribe(val => console.log('Example w/ Selector:', val));
  }



}
