import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-observable',
  templateUrl: './rxjs-observable.component.html',
  styleUrls: ['./rxjs-observable.component.scss']
})
export class RxjsObservableComponent implements OnInit {
  unsubscribe: any;
  constructor() { }

  ngOnInit() {
    this.unsubscribe = this.subscribe({ next: (x) => console.log(x) });
    setTimeout(() => {

      this.unsubscribe();  // dispose the resources
    }, 10000);
  }

  createObservable(): any {
    const observable: Observable<any> = Observable.create((observer) => {
      console.log('Hello');
      observer.next(1);// Asynchronouly
      observer.next(2);// Asynchronouly
      observer.next(3);// Asynchronouly
      setTimeout(() => {
        observer.next(4);//Happen Asynchronouly
        observer.complete();
      }, 1000);

    })
    this.subscribed(observable)
  }

  subscribed(observable) {
    console.log("Just Before Subscription");
    observable.subscribe({
      next: x => console.log('got value ' + x),
      error: err => console.error('something wrong occurred: ' + err),
      complete: () => console.log('done'),
    })
  }

  generalizeObservable() {
    const foo = Observable.create(function (observer) {
      console.log('Hello');
      observer.next(42);
    });

    foo.subscribe(function (x) {
      console.log(x);
    });
    foo.subscribe(function (y) {
      console.log(y);
    });
  }

  creatingObservable() {
    // Observables can be created with create, but usually we use the so-called creation operators, like of, from, interval, etc.
  }

  completeObservable() {
  }
  /**
   * It is a good idea to wrap any code in subscribe with try/catch block that will deliver an Error notification if it catches an exception:
   */
  tryCatchObservable() {
    const observable = Observable.create(function subscribe(observer) {
      try {
        observer.next(1);
        observer.next(2);
        observer.next(3);
        observer.complete();
      } catch (err) {
        observer.error(err); // delivers an error if it caught one
      }
    });
  }

  /**
   * subscribe and unscribe by simple javascript
   */
  subscribe(observer) {
    var intervalID = setInterval(() => {
      observer.next('hi');
    }, 1000);

    return function unsubscribe() {
      clearInterval(intervalID);
      console.log("Unsubscibed");
    };
  }

}
