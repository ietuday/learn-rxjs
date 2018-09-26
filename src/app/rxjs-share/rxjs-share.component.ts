import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { mapTo, tap, share } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-share',
  templateUrl: './rxjs-share.component.html',
  styleUrls: ['./rxjs-share.component.scss']
})
export class RxjsShareComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.share();
  }

  share() {
    //emit value in 1s
    const source = timer(1000);
    //log side effect, emit result
    const example = source
      .pipe(tap(() => console.log('***SIDE EFFECT***'))
        , mapTo('***RESULT***'));
    /*
      ***NOT SHARED, SIDE EFFECT WILL BE EXECUTED TWICE***
      output: 
      "***SIDE EFFECT***"
      "***RESULT***"
      "***SIDE EFFECT***"
      "***RESULT***"
    */
    const subscribe = example.subscribe(val => console.log(val));
    const subscribeTwo = example.subscribe(val => console.log(val));
    //share observable among subscribers
    const sharedExample = example.pipe(share());
    /*
      ***SHARED, SIDE EFFECT EXECUTED ONCE***
      output: 
      "***SIDE EFFECT***"
      "***RESULT***"
      "***RESULT***"
    */
    const subscribeThree = sharedExample.subscribe(val => console.log(val));
    const subscribeFour = sharedExample.subscribe(val => console.log(val));
  }

}
