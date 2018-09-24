import { Component, OnInit } from '@angular/core';
import { interval, fromEvent, empty } from 'rxjs';
import { bufferToggle } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-buffer-toggle',
  templateUrl: './rxjs-buffer-toggle.component.html',
  styleUrls: ['./rxjs-buffer-toggle.component.scss']
})
export class RxjsBufferToggleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //emit value every second
    const sourceInterval = interval(1000);
    
    //start first buffer after 5s, and every 5s after
    const startInterval = interval(5000);

    const closingInterval = val => {
      // console.log(`Value ${val} emitted, starting buffer! Closing in 3s!`)
        return interval(3000)
    }

    //every 5s a new buffer will start, collecting emitted values for 3s then emitting buffered values
    const bufferToggleInterval = sourceInterval.pipe(bufferToggle(startInterval, closingInterval));

    //log to console
    //ex. emitted buffers [4,5,6]...[9,10,11]
    const subscribe = bufferToggleInterval.subscribe((val) => {
      // console.log('Emitted Buffer : ', val);
      
    })

    this.onclick()
  }

  onclick(){
    // Every other second, emit the click events from the next 500ms
    var clicks = fromEvent(document, 'click');
    var openings = interval(1000);
    var buffered = clicks.pipe(bufferToggle(openings, i =>
      i % 2 ? interval(500) : empty()
    ));
    buffered.subscribe(x => console.log(x));
  }

}
