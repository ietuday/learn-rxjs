import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-merge-map',
  templateUrl: './rxjs-merge-map.component.html',
  styleUrls: ['./rxjs-merge-map.component.scss']
})
export class RxjsMergeMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.mergeMap();
  }

  mergeMap() {
    //emit 'Hello'
    const source = of('Hello');
    //map to inner observable and flatten
    const example = source.pipe(mergeMap(val => of(`${val} World!`)));
    //output: 'Hello World!'
    const subscribe = example.subscribe(val => console.log(val));

    //mergeMap also emits result of promise
    const myPromise = val => new Promise(resolve => resolve(`${val} World From Promise!`));
    //map to promise and emit result
    const exampleTwo = source.pipe(mergeMap(val => myPromise(val)));
    //output: 'Hello World From Promise'
    const subscribeTwo = exampleTwo.subscribe(val => console.log(val));
    /*
      you can also supply a second argument which recieves the source value and emitted
      value of inner observable or promise
    */
    const exampleThree = source
      .pipe(mergeMap(val => myPromise(val),
        (valueFromSource, valueFromPromise) => {
          return `Source: ${valueFromSource}, Promise: ${valueFromPromise}`;
        }));
    //output: "Source: Hello, Promise: Hello World From Promise!"
    const subscribeThree = exampleThree.subscribe(val => console.log(val));
  }

}
