import { Component, OnInit } from '@angular/core';
import { of, merge } from 'rxjs';
import { mapTo, delay } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-delay',
  templateUrl: './rxjs-delay.component.html',
  styleUrls: ['./rxjs-delay.component.scss']
})
export class RxjsDelayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.delay();
  }

  delay() {
    //emit one item
    const example = of();
    //delay output of each by an extra second
    const message = merge(
      example.pipe(mapTo('Hello')),
      example.pipe(mapTo('World!'),delay(1000)),
      example.pipe(mapTo('Goodbye'),delay(2000)),
      example.pipe(mapTo('World!'),delay(3000))
    );
    console.log(message);
    
    //output: 'Hello'...'World!'...'Goodbye'...'World!'
    const subscribe = message.subscribe((val) => {
      console.log(val);
      
    })
  }

}
