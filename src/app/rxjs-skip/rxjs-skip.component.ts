import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-skip',
  templateUrl: './rxjs-skip.component.html',
  styleUrls: ['./rxjs-skip.component.scss']
})
export class RxjsSkipComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.skip();
  }

  skip() {
    //emit every 1s
    const source = interval(1000);
    //skip the first 5 emitted values
    const example = source.pipe(skip(5));
    //output: 5...6...7...8........
    const subscribe = example.subscribe(val => console.log(val));
  }

}
