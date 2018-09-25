import { Component, OnInit } from '@angular/core';
import { of, timer, interval, fromEvent } from 'rxjs';
import { debounce } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-debounce',
  templateUrl: './rxjs-debounce.component.html',
  styleUrls: ['./rxjs-debounce.component.scss']
})
export class RxjsDebounceComponent implements OnInit {
  //emit four strings

  constructor() { }

  ngOnInit() {
    this.debounce();

  }

  debounce() {
    //emit four strings
    const example = of('WAIT', 'ONE', 'SECOND', 'Last will display');
    /*
    Only emit values after a second has passed between the last emission, 
    throw away all other values
    */

    const debouncedExample = example.pipe(debounce(() => timer(1000)));

    /*
     In this example, all values but the last will be omitted
     output: 'Last will display'
    */

    const subscribe = debouncedExample.subscribe(val => console.log(val));

    //emit value every 1 second, ex. 0...1...2
    const myInterval = interval(1000);
    //raise the debounce time by 200ms each second
    const debouncedInterval = myInterval.pipe(debounce(val => timer(val * 200)));

    /*
    After 5 seconds, debounce time will be greater than interval time,
    all future values will be thrown away
    output: 0...1...2...3...4......(debounce time over 1s, no values emitted)
    */

    const subscribeTwo = debouncedInterval.subscribe(val => console.log(`Example Two: ${val}`))

    // Emit the most recent click after a burst of clicks

    var clicks = fromEvent(document, 'click');
    var result = clicks.pipe(debounce(() => interval(1000)));
    result.subscribe(x => console.log(x));

  }

}
