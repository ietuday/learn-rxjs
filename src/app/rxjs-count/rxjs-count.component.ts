import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-count',
  templateUrl: './rxjs-count.component.html',
  styleUrls: ['./rxjs-count.component.scss']
})
export class RxjsCountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.count();
    this.countArray();
  }

  count() {
    //emit 1,2,3 then complete
    const threeItems = of(1, 2, 3);
    //when threeItems completes, return count of items emitted
    const exampleOne = threeItems.pipe(count());
    //output: 'Count from Example One: 3'
    const subscribe = exampleOne.subscribe((val) => {
      console.log(`Count from Example One: ${val}`);
    })
  }

  countArray() {
    const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    //from operator : Creates an Observable from an Array, an array-like object, a Promise, an iterable object, or an Observable-like object.
    //Converts almost anything to an Observable.
    const myObsArray = from(myArray);
    const exampleTwo = myObsArray.pipe(count());
    //output: 'Count of Basic Array: 9'
    const subscribeTwo = exampleTwo.subscribe(val => console.log(`Count of Basic Array: ${val}`));
    //count emitted items from source that satisfy predicate expression
    const evensCount = myObsArray.pipe(count(val => val % 2 === 0));
    //output: 'Count of Even Numbers: 4'
    const subscribeThree = evensCount.subscribe(val => console.log(`Count of Even Numbers: ${val}`));


  }



}
