import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-rxjs-replay-subject',
  templateUrl: './rxjs-replay-subject.component.html',
  styleUrls: ['./rxjs-replay-subject.component.scss']
})
export class RxjsReplaySubjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.replaySubjectTime()
  }

  /**
   * When creating a ReplaySubject, you can specify how many values to replay
   */
  replaySubject() {
    const replaySubject = new ReplaySubject(3); // buffer 3 values for new subscribers

    replaySubject.subscribe({
      next: (v) => console.log(`observerA: ${v}`)
    });

    replaySubject.next(1);
    replaySubject.next(2);
    replaySubject.next(3);
    replaySubject.next(4);

    replaySubject.subscribe({
      next: (v) => console.log(`observerB: ${v}`)
    });

    replaySubject.next(5);

    // Logs:
    // observerA: 1
    // observerA: 2
    // observerA: 3
    // observerA: 4
    // observerB: 2
    // observerB: 3
    // observerB: 4
    // observerA: 5
    // observerB: 5

  }

  /**
   * You can also specify a window time in milliseconds, besides of the buffer size, to determine how old the recorded values can be. In the following example we use a large buffer size of 100, but a window time parameter of just 500 milliseconds.
   */
  replaySubjectTime() {
    const replaySubject = new ReplaySubject(10, 500 /* windowTime */);

    replaySubject.subscribe({
      next: (v) => console.log(`observerA: ${v}`)
    });

    let i = 1;
    setInterval(() => replaySubject.next(i++), 200);

    setTimeout(() => {
      replaySubject.subscribe({
        next: (v) => console.log(`observerB: ${v}`)
      });
    }, 1000);

    // Logs
    // observerA: 1
    // observerA: 2
    // observerA: 3
    // observerA: 4
    // observerA: 5
    // observerB: 3
    // observerB: 4
    // observerB: 5
    // observerA: 6
    // observerB: 6
    // ...
  }

}
