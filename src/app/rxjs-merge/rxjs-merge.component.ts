import { Component, OnInit } from '@angular/core';
import { interval, merge } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-merge',
  templateUrl: './rxjs-merge.component.html',
  styleUrls: ['./rxjs-merge.component.scss']
})
export class RxjsMergeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.merge();
  }

  merge() {
    //emit every 2.5 seconds
    const first = interval(2500);
    //emit every 2 seconds
    const two = interval(2000);
    //emit every 1.5 seconds
    const three = interval(1500);
    //emit every 1 second
    const four = interval(1000);

    const example = merge(
      first.pipe(mapTo('First')),
      two.pipe(mapTo('Second')),
      three.pipe(mapTo('Three')),
      four.pipe(mapTo('Four')),
    );

    //output: "FOURTH", "THIRD", "SECOND!", "FOURTH", "FIRST!", "THIRD", "FOURTH"
    const subscribe = example.subscribe(val => console.log(val));

    //used as instance method
    // const exampleTwo = first.pipe(merge(four))
    
    //output: 0,1,0,2....
    // const subscribeTwo = exampleTwo.subscribe(val => console.log(val));

  }

}
