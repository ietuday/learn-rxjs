import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { single } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-single',
  templateUrl: './rxjs-single.component.html',
  styleUrls: ['./rxjs-single.component.scss']
})
export class RxjsSingleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.single();
  }

  single() {
    //emit (1,2,3,4,5)
    const source = from([1, 2, 3, 4, 5]);
    //emit one item that matches predicate
    const example = source.pipe(single(val => val === 4));
    //output: 4
    const subscribe = example.subscribe(val => console.log(val));
  }

}
