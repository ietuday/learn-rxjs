import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { sample } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-sample',
  templateUrl: './rxjs-sample.component.html',
  styleUrls: ['./rxjs-sample.component.scss']
})
export class RxjsSampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.sample();
  }

  sample() {
    //emit value every 1s
    const source = interval(1000);
    //sample last emitted value from source every 2s
    const example = source.pipe(sample(interval(2000)));
    //output: 2..4..6..8..
    const subscribe = example.subscribe(val => console.log(val));
  }

}
