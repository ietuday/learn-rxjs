import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-rxjs-behaviour-subject',
  templateUrl: './rxjs-behaviour-subject.component.html',
  styleUrls: ['./rxjs-behaviour-subject.component.scss']
})
export class RxjsBehaviourSubjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.behaviourSubject1();
  }

  /**
   * In the following example, the BehaviorSubject is initialized with the value 0 which the first Observer receives when it subscribes. The second Observer receives the value 2 even though it subscribed after the value 2 was sent.
   */
  behaviourSubject1(){
    const behaviourSubject = new BehaviorSubject(0);//0 is the intial value
    behaviourSubject.subscribe({
      next: (v) => console.log(`observerA: ${v}`)
    });
     
    behaviourSubject.next(1);
    behaviourSubject.next(2);
     
    behaviourSubject.subscribe({
      next: (v) => console.log(`observerB: ${v}`)
    });
     
    behaviourSubject.next(3);
     
    // Logs
    // observerA: 0
    // observerA: 1
    // observerA: 2
    // observerB: 2
    // observerA: 3
    // observerB: 3

  }

}
