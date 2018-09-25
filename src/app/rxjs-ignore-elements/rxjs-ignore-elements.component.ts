import { Component, OnInit } from '@angular/core';
import { interval, of, throwError } from 'rxjs';
import { take, ignoreElements, mergeMap } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs-ignore-elements',
  templateUrl: './rxjs-ignore-elements.component.html',
  styleUrls: ['./rxjs-ignore-elements.component.scss']
})
export class RxjsIgnoreElementsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.ignoreElement();
  }

  ignoreElement() {
    const source = interval(100);
    //ignore everything but complete
    const example = source.pipe(take(5), ignoreElements());
    //output: "COMPLETE!"
    const subscribe = example.subscribe(
      val => console.log(`NEXT : ${val}`),
      val => console.log(`ERROR : ${val}`),
      () => console.log('COMPLETE')
    );

    //ignore everything but error
    const error = source
      .pipe(mergeMap(val => {
        if (val === 4) {
          return throwError(`ERROR AT ${val}`);
        }
        return of(val);
      })
      ,ignoreElements());
    //output: "ERROR: ERROR AT 4"
    const subscribeTwo = error.subscribe(
      val => console.log(`NEXT: ${val}`),
      val => console.log(`ERROR: ${val}`),
      () => console.log('SECOND COMPLETE!')
    );

  }

}
