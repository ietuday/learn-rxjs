import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-do',
  templateUrl: './rxjs-do.component.html',
  styleUrls: ['./rxjs-do.component.scss']
})
export class RxjsDoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.do();
  }

  do(){
    const source = from([1,2,3,4,5]);
    const example = source
          .pipe(
          tap(val => console.log(`BEFORE MAP: ${val}`))
          ,map(val => val + 10)
          ,tap(val => console.log(`AFTER MAP: ${val}`))
        );
    const subscribe = example.subscribe((val) => {
      console.log("After Subscription :",val);
      
    })
  }

}
