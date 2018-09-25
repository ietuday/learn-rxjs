import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-first',
  templateUrl: './rxjs-first.component.html',
  styleUrls: ['./rxjs-first.component.scss']
})
export class RxjsFirstComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.first();
  }

  first() {
    const source = from([1, 2, 3, 4, 5]);
    //no arguments, emit first value
    const example = source.pipe(first());
    //output: "First value: 1"
    const subscribe = example.subscribe(val => console.log(`First value: ${val}`));

    //emit first item to pass test
    const exampleTwo = source.pipe(first(num => num === 5));
    //output: "First to pass test: 5"
    const subscribeTwo = exampleTwo.subscribe(val => console.log(`First to pass test: ${val}`));

    //using optional projection function
    // const exampleThree = source.pipe(first(num => num % 2 === 0,
    //   (result, index) {
    //     `First even: ${result} is at index: ${index}`
    //   }));
    //output: "First even: 2 at index: 1"
    // const subscribeThree = exampleThree.subscribe(val => console.log(val));

  }

}
