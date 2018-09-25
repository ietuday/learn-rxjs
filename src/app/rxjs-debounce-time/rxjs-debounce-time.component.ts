import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-debounce-time',
  templateUrl: './rxjs-debounce-time.component.html',
  styleUrls: ['./rxjs-debounce-time.component.scss']
})
export class RxjsDebounceTimeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.debouceTime();
  }

  debouceTime() {
    const input = document.getElementById('example');
    const example = fromEvent(input, 'keyup')
      .pipe(map((i) => i.target['value']));

    //wait .5s between keyups to emit current value
    //throw away all other values
    const debouncedInput = example.pipe(debounceTime(5000));

    //log values
    const subscribe = debouncedInput.subscribe(val => {
      console.log(`Debounced Input: ${val}`);
    });

  }

}
