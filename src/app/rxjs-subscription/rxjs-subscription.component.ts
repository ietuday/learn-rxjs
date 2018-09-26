import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-rxjs-subscription',
  templateUrl: './rxjs-subscription.component.html',
  styleUrls: ['./rxjs-subscription.component.scss']
})
export class RxjsSubscriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.multipleUnscribe();
  }

  subscription1() {
    const observable = interval(1000);
    const subscription = observable.subscribe(x => console.log(x));
    setTimeout(() => {
      // Later:
      // This cancels the ongoing Observable execution which
      // was started by calling subscribe with an Observer.
      subscription.unsubscribe();
    }, 5000);
  }

  /**
   * Subscriptions can also be put together, so that a call to an unsubscribe() of one Subscription may unsubscribe multiple Subscriptions. You can do this by "adding" one subscription into another:
   */
  multipleUnscribe() {
    const observable1 = interval(400);
    const observable2 = interval(300);

    const subscription = observable1.subscribe(x => console.log('first: ' + x));
    const childSubscription = observable2.subscribe(x => console.log('second: ' + x));

    subscription.add(childSubscription);

    setTimeout(() => {
      // Unsubscribes BOTH subscription and childSubscription
      subscription.unsubscribe();
    }, 1000);

  }

}
