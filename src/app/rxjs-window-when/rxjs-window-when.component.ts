import { Component, OnInit } from '@angular/core';
import { timer, interval } from 'rxjs';
import { windowWhen, tap, mergeAll } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-window-when',
  templateUrl: './rxjs-window-when.component.html',
  styleUrls: ['./rxjs-window-when.component.scss']
})
export class RxjsWindowWhenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.windowwhen();
  }

  windowwhen() {
    //emit immediately then every 1s
    const source = timer(0, 1000);
    const example = source.pipe(
      //close window every 5s and emit observable of collected values from source
      windowWhen(() => interval(5000)),
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
          4
          "NEW WINDOW!"
          5
          6
          7
          8
          9
        */
      )
      .subscribe(val => console.log(val));
  }

}
