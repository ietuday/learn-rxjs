import { Component, OnInit } from '@angular/core';
import { of, interval } from 'rxjs';
import { repeat, take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-repeat',
  templateUrl: './rxjs-repeat.component.html',
  styleUrls: ['./rxjs-repeat.component.scss']
})
export class RxjsRepeatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //emit "Repeat this!"
    const source = of('Repeat this!');
    //repeat items emitted from source 3 times
    const example = source.pipe(repeat(3));
    //output: "Repeat this!"..."Repeat this!"..."Repeat this!" 
    const subscribe = example.subscribe(val => console.log(val));
    //emit every second
    const sourceTwo = interval(1000);
    //take 5 values, repeat 2 times
    const exampleTwo = sourceTwo.pipe(take(5),repeat(2));
    //output: 0,1,2,3,4,5...0,1,2,3,4,5
    const subscribeTwo = exampleTwo.subscribe(val => console.log(val));
  }

}
