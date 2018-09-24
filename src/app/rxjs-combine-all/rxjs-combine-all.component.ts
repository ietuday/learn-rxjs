import { Component, OnInit } from '@angular/core';
import { timer, of } from 'rxjs';
import { mapTo, combineAll } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-combine-all',
  templateUrl: './rxjs-combine-all.component.html',
  styleUrls: ['./rxjs-combine-all.component.scss']
})
export class RxjsCombineAllComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //emit after five seconds then complete
    const fiveSecondTimer = timer(5000);

    //once timer (outer observable) fires and completes, 
    // latest emitted values from inner observables will be 
    // output, in this case there is a single value

    const example = fiveSecondTimer.pipe(mapTo(of('Hello', 'World')));
    const combined = example.pipe(combineAll());

    //ex output: ["Hello"]...["World"]
    const subscribe = combined.subscribe(val => console.log('Values from inner observable:', val));

    this.combine();
  }

  combine(){
    //combineAll also takes a projection function that receives emitted values
    const fiveSecondTimer = timer(5000);
    const example = fiveSecondTimer.pipe(mapTo(of('Hello', 'Goodbye')));
    const combined = example.pipe(combineAll(val => `${val} Friend!`));
    //ex output: "Hello Friend!"..."Goodbye Friend!"
    const subscribeProjected = combined.subscribe(val => console.log('Values Using Projection:', val));
    
  }

}
