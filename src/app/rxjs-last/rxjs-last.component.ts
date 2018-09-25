import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { last } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-last',
  templateUrl: './rxjs-last.component.html',
  styleUrls: ['./rxjs-last.component.scss']
})
export class RxjsLastComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.last();
  }

  last() {
    const Source = from([1, 2, 3, 4, 5]);
    const example = Source.pipe(last());
    const subscribe = example.subscribe((val) => console.log('Last Value : ', val))
    //emit last even number
    const exampleTwo = Source.pipe(last(num => num % 2 === 0));
    //output: "Last to pass test: 4"
    const subscribeTwo = exampleTwo.subscribe(val => console.log(`Last to pass test: ${val}`));
  }
}
