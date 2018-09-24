import { Component, OnInit } from '@angular/core';
import { timer, combineLatest } from 'rxjs';

@Component({
  selector: 'app-rxjs-combine-latest',
  templateUrl: './rxjs-combine-latest.component.html',
  styleUrls: ['./rxjs-combine-latest.component.scss']
})
export class RxjsCombineLatestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //timerOne emits first value at 1s, then once every 4s
    const timerOne = timer(1000,4000);

    //timerTwo emits first value at 2s, then once every 4s
    const timerTwo = timer(2000, 4000)

    //timerThree emits first value at 3s, then once every 4s
    const timerThree = timer(3000, 4000)

    //when one timer emits, emit the latest values from each timer as an array
    const combined  = combineLatest(
        timerOne,
        timerTwo,
        timerThree
    );

    const subscribe = combined.subscribe((latestValue) => {
      	//grab latest emitted values for timers one, two, and three
      const [timerValOne, timerValTwo, timerValThree] = latestValue;
      
        /*
      Example:
      timerOne first tick: 'Timer One Latest: 1, Timer Two Latest:0, Timer Three Latest: 0
      timerTwo first tick: 'Timer One Latest: 1, Timer Two Latest:1, Timer Three Latest: 0
      timerThree first tick: 'Timer One Latest: 1, Timer Two Latest:1, Timer Three Latest: 1
    */
    console.log(
      `Timer One Latest: ${timerValOne}, 
      Timer Two Latest: ${timerValTwo}, 
      Timer Three Latest: ${timerValThree}`
    );
    })

    //combineLatest also takes an optional projection function
    const combinedProject = combineLatest(
      timerOne,
      timerTwo,
      timerThree,
      (one, two, three) =>{
        return `Timer One (Proj) Latest: ${one}, 
        Timer Two (Proj) Latest: ${two}, 
        Timer Three (Proj) Latest: ${three}`
      }
    );
    //log values
    const subscribed = combinedProject.subscribe(latestValuesProject => console.log("latestValuesProject",latestValuesProject));


  }

}
