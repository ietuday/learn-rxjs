import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-map',
  templateUrl: './rxjs-map.component.html',
  styleUrls: ['./rxjs-map.component.scss']
})
export class RxjsMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.map();
  }

  map() {
    //emit (1,2,3,4,5)
    const source = from([1, 2, 3, 4, 5]);
    //add 10 to each value
    const example = source.pipe(map(val => val + 10));
    //output: 11,12,13,14,15
    const subscribe = example.subscribe(val => console.log(val));

    //emit ({name: 'Joe', age: 30}, {name: 'Frank', age: 20},{name: 'Ryan', age: 50})
    const sourceTwo = from([{ name: 'Joe', age: 30 }, { name: 'Frank', age: 20 }, { name: 'Ryan', age: 50 }]);
    //grab each persons name
    const exampleTwo = sourceTwo.pipe(map(person => person.name));
    //output: "Joe","Frank","Ryan"
    const subscribeTwo = exampleTwo.subscribe(val => console.log(val));
  }

}
