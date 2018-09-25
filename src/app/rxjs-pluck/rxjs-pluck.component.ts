import { Component, OnInit } from '@angular/core';
import { pluck } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'app-rxjs-pluck',
  templateUrl: './rxjs-pluck.component.html',
  styleUrls: ['./rxjs-pluck.component.scss']
})
export class RxjsPluckComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.pluck();
  }

  pluck() {
    const source = from([{ name: 'Joe', age: 30 }, { name: 'Sarah', age: 35 }]);
    //grab names
    const example = source.pipe(pluck('name'));
    //output: "Joe", "Sarah"
    const subscribe = example.subscribe(val => console.log(val));

    const sourceTwo = from([
      { name: 'Joe', age: 30, job: { title: 'Developer', language: 'JavaScript' } },
      //will return undefined when no job is found
      { name: 'Sarah', age: 35 }
    ]);
    //grab title property under job
    const exampleTwo = sourceTwo.pipe(pluck('job', 'title'));
    //output: "Developer" , undefined
    const subscribeTwo = exampleTwo.subscribe(val => console.log(val));
  }

}
