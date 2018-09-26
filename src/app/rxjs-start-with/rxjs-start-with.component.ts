import { Component, OnInit } from '@angular/core';
import { of, pipe } from 'rxjs';
import { startWith, scan } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-start-with',
  templateUrl: './rxjs-start-with.component.html',
  styleUrls: ['./rxjs-start-with.component.scss']
})
export class RxjsStartWithComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.startWith();
  }

  startWith() {
    //emit (1,2,3)
    const source = of(1, 2, 3);
    //start with 0
    const example = source.pipe(startWith(0));
    //output: 0,1,2,3
    const subscribe = example.subscribe(val => console.log(val));

    //emit ('World!', 'Goodbye', 'World!')
    const sourceTwo = of('World!', 'Goodbye', 'World!');
    //start with 'Hello', concat current string to previous
    const exampleTwo = sourceTwo
      .pipe(
        startWith('Hello'),
        scan((acc, curr) => `${acc} ${curr}`)
      )

    /*
      output:
      "Hello"
      "Hello World!"
      "Hello World! Goodbye"
      "Hello World! Goodbye World!"
    */
    const subscribeTwo = exampleTwo.subscribe(val => console.log(val));
  }

}
