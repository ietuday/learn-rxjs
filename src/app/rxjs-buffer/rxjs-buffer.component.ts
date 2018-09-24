import { Component, OnInit } from '@angular/core';
import { interval, fromEvent } from 'rxjs';
import { buffer } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-buffer',
  templateUrl: './rxjs-buffer.component.html',
  styleUrls: ['./rxjs-buffer.component.scss']
})
export class RxjsBufferComponent implements OnInit {
  bufferedData: Array<any> = [];
  bufferData:any;
  constructor() { }

  ngOnInit() {
    //Create an observable that emits a value every second
    const myInterval = interval(1000);

    //Create an observable that emits every time document is clicked
    const bufferBy = fromEvent(document, 'click');

    /*
    Collect all values emitted by our interval observable 
    until we click document. This will cause the bufferBy 
    Observable to emit a value, satisfying the buffer. 
    Pass us all collected values since last buffer as an array.
    */

    const myBufferedInterval = myInterval.pipe(buffer(bufferBy));

    //Print values to console
    //ex. output: [1,2,3] ... [4,5,6,7,8]
    myBufferedInterval.subscribe(val => {
      console.log("Inside Subscribe : ", val);
      // console.log(Object.keys(val));
      this.bufferData = val
      console.log(this.bufferedData.push(Object.keys(val)));

      // const result = Object.keys(val).map((key) => {
      //   // this.bufferedData = Array.from(new Set(this.bufferedData));
      //   this.bufferedData.push(key);
      // })

      
      // this.bufferedData = Array.from(new Set(this.bufferedData));
    });
  }
}
