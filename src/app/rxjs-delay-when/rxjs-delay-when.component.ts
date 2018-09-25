import { Component, OnInit } from '@angular/core';
import { timer, interval } from 'rxjs';
import { delayWhen } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-delay-when',
  templateUrl: './rxjs-delay-when.component.html',
  styleUrls: ['./rxjs-delay-when.component.scss']
})
export class RxjsDelayWhenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.delayWhen();
  }

  delayWhen() {
    //emit value every second
    const message = interval(1000);
    //emit value after five seconds
    const delayForFiveSeconds = () => timer(5000);
    //after 5 seconds, start emitting delayed interval values
    const delayWhenExample = message.pipe(delayWhen(delayForFiveSeconds));
    //log values, delayed for 5 seconds
    //ex. output: 5s....1...2...3
    const subscribe = delayWhenExample.subscribe(val => console.log(val));
  }

}
