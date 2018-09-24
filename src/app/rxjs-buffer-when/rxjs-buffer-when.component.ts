import { Component, OnInit } from '@angular/core';
import { interval, fromEvent } from 'rxjs';
import { bufferWhen } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-buffer-when',
  templateUrl: './rxjs-buffer-when.component.html',
  styleUrls: ['./rxjs-buffer-when.component.scss']
})
export class RxjsBufferWhenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //emit value every 1 second
    const oneSecondInterval = interval(1000);

    //return an observable that emits value every 5 seconds
    const fiveSecondInterval = () => interval(5000);

    //every five seconds, emit buffered values
    const bufferWhenExample = oneSecondInterval.pipe(bufferWhen(fiveSecondInterval));

    //log values
    //ex. output: [0,1,2,3]...[4,5,6,7,8]
    const subscribe = bufferWhenExample.subscribe(val => console.log('Emitted Buffer: ', val));

    this.onClick();
  }

  onClick() {
    // Emit an array of the last clicks every [1-5] random seconds
    var clicks = fromEvent(document, 'click');
    var buffered = clicks.pipe(bufferWhen(() =>
      interval(1000 + Math.random() * 4000)
    ));
    buffered.subscribe(x => console.log(x));
  }
}
