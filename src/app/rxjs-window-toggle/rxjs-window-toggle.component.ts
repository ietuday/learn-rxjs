import { Component, OnInit } from '@angular/core';
import { timer, interval } from 'rxjs';
import { tap, windowToggle, mergeAll } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-window-toggle',
  templateUrl: './rxjs-window-toggle.component.html',
  styleUrls: ['./rxjs-window-toggle.component.scss']
})
export class RxjsWindowToggleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.windowToggle();
  }

  windowToggle() {
    //emit immediately then every 1s
    const source = timer(0, 1000);
    //toggle window on every 5
    const toggle = interval(5000);
    const example = source
      //turn window on every 5s
      .pipe(windowToggle(toggle, (val) => interval(val * 1000))
      ,tap(() => console.log('NEW WINDOW!')))

    const subscribeTwo = example
      //window emits nested observable
      .pipe(mergeAll())
      /*
        output:
        "NEW WINDOW!"
        5
        "NEW WINDOW!"
        10
        11
        "NEW WINDOW!"
        15
        16
        "NEW WINDOW!"
        20
        21
        22
      */
      .subscribe(val => console.log(val));
  }
}
