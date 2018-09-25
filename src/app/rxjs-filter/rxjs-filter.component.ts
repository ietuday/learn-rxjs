import { Component, OnInit } from '@angular/core';
import { from, interval } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-filter',
  templateUrl: './rxjs-filter.component.html',
  styleUrls: ['./rxjs-filter.component.scss']
})
export class RxjsFilterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.filter();
  }

  filter() {
    //emit (1,2,3,4,5)
    const source = from([1, 2, 3, 4, 5]);
    //filter out non-even numbers
    const example = source.pipe(filter(num => num % 2 === 0));
    //output: "Even number: 2", "Even number: 4"
    const subscribe = example.subscribe(val => console.log(`Even number: ${val}`));

    //emit ({name: 'Joe', age: 31}, {name: 'Bob', age:25})
    const sourceTwo = from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }]);
    //filter out people with age under 30
    const exampleTwo = sourceTwo.pipe(filter(person => person.age >= 30));;
    //output: "Over 30: Joe"
    const subscribeTwo = exampleTwo.subscribe(val => console.log(`Over 30: ${val.name}`));

    //emit every second
    const sourceThree = interval(1000);
    //filter out all values until interval is greater than 5
    const exampleThree = sourceThree.pipe(filter(num => num > 5));
    /*
      "Number greater than 5: 6"
      "Number greater than 5: 7"
      "Number greater than 5: 8"
      "Number greater than 5: 9"
    */
    const subscribeThree = exampleThree.subscribe(val => console.log(`Number greater than 5: ${val}`));
  }

}
