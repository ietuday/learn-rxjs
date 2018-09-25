import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { defaultIfEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-default-if-empty',
  templateUrl: './rxjs-default-if-empty.component.html',
  styleUrls: ['./rxjs-default-if-empty.component.scss']
})
export class RxjsDefaultIfEmptyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.defaultIfEmpty();
  }

  defaultIfEmpty() {
    const empty = of();
    //emit 'Observable.of() Empty!' when empty, else any values from source
    const exampleOne = empty.pipe(defaultIfEmpty('Observable.of() Empty!'));
    //output: 'Observable.of() Empty!'
    const subscribe = exampleOne.subscribe(val => console.log(val));

    // //empty observable
    // const emptyTwo = empty();
    // //emit 'Observable.empty()!' when empty, else any values from source
    // const exampleTwo = emptyTwo.defaultIfEmpty('Observable.empty()!');
    // //output: 'Observable.empty()!'
    // const subscribeTwo = exampleTwo.subscribe(val => console.log(val));
  }

}
