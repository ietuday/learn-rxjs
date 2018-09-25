import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { every } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-every',
  templateUrl: './rxjs-every.component.html',
  styleUrls: ['./rxjs-every.component.scss']
})
export class RxjsEveryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.every();
  }

  every() {
    const source = of(1, 2, 3, 4, 5);
    const example = source
      //is every value even?
      .pipe(every(val => val % 2 === 0));
    //output: false
    const subscribe = example.subscribe(val => console.log(val));
    //emit 5 values
    const allEvens = of(2, 4, 6, 8, 10);
    const exampleTwo = allEvens
      //is every value even?
      .pipe(every(val => val % 2 === 0));
    //output: true
    const subscribeTwo = exampleTwo.subscribe(val => console.log(val));
  }

}
