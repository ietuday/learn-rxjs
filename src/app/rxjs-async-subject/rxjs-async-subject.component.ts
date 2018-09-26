import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-rxjs-async-subject',
  templateUrl: './rxjs-async-subject.component.html',
  styleUrls: ['./rxjs-async-subject.component.scss']
})
export class RxjsAsyncSubjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.asyncSubject();
  }

  /**
   * The AsyncSubject is similar to the last() operator, in that it waits for the complete notification in order to deliver a single value.
   */
  asyncSubject() {
    const asyncSubject = new AsyncSubject();

    asyncSubject.subscribe({
      next: (v) => console.log(`observerA: ${v}`)
    });

    asyncSubject.next(1);
    asyncSubject.next(2);
    asyncSubject.next(3);
    asyncSubject.next(4);

    asyncSubject.subscribe({
      next: (v) => console.log(`observerB: ${v}`)
    });

    asyncSubject.next(5);
    console.log("Waiting to call asyncSubject.complete()");
    
    asyncSubject.complete();

    // Logs:
    // observerA: 5
    // observerB: 5
  }

}
