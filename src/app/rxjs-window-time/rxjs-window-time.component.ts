import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { windowTime, tap, mergeAll } from 'rxjs/operators';
@Component({
  selector: 'app-rxjs-window-time',
  templateUrl: './rxjs-window-time.component.html',
  styleUrls: ['./rxjs-window-time.component.scss']
})
export class RxjsWindowTimeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.windowTime()
  }

  windowTime() {
    //emit every 1s
    const source = interval(1000);
    const example = source.pipe(
      
      windowTime(10000),
      tap(_ => console.log('NEW WINDOW!'))
    );

    const subscribeTwo = example
      .pipe(
        //window emits nested observable
        mergeAll()
        /*
                output:
                "NEW WINDOW!"
                0
                1
                2
                3
                "NEW WINDOW!"
                4
                5
                6
                7
              */
      )
      .subscribe(val => console.log(val));
  }
}
