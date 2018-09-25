import { Component, OnInit } from '@angular/core';
import { interval, throwError, of } from 'rxjs';
import { mergeMap, retry } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-retry',
  templateUrl: './rxjs-retry.component.html',
  styleUrls: ['./rxjs-retry.component.scss']
})
export class RxjsRetryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.retry();
  }

  retry() {
    //emit value every 1s
    const source = interval(1000);
    const example = source.pipe(
      mergeMap(val => {
        //throw error for demonstration
        console.log("mergeMap",val);
        
        if (val > 5) {
          return throwError('Error!');
        }
        return of(val);
      }),
      //retry 2 times on error
      retry(2)
    );
    /*
      output:
      0..1..2..3..4..5..
      0..1..2..3..4..5..
      0..1..2..3..4..5..
      "Error!: Retried 2 times then quit!"
    */
    const subscribe = example.subscribe({
      next: val => console.log(val),
      error: val => console.log(`${val}: Retried 2 times then quit!`)
    });
  }

}
