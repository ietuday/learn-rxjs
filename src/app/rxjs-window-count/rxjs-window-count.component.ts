import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { windowCount, tap, mergeAll } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-window-count',
  templateUrl: './rxjs-window-count.component.html',
  styleUrls: ['./rxjs-window-count.component.scss']
})
export class RxjsWindowCountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.windowCount();
  }

  windowCount() {
    //emit every 1s
    const source = interval(1000);
    const example = source.pipe(
      //start new window every 4 emitted values
      windowCount(4),
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
