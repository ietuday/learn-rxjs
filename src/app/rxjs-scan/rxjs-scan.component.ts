import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, interval } from 'rxjs';
import { startWith, scan, map, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-scan',
  templateUrl: './rxjs-scan.component.html',
  styleUrls: ['./rxjs-scan.component.scss']
})
export class RxjsScanComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.scan();
    this.scanObject();
    this.randomArray();
  }

  scan() {
    const testSubject = new Subject();
    const basicScan = testSubject
      .pipe(
        scan((acc, curr) => acc + curr, 0)
      );
    //log accumulated values
    const subscribe = basicScan.subscribe(val => console.log('Accumulated total:', val));
    testSubject.next(1); //1
    testSubject.next(2); //3
    testSubject.next(3); //6
  }

  scanObject() {
    const subject = new Subject();
    // const subject = new BehaviorSubject({});
    //scan example building an object over time
    const example = subject.pipe(
      scan((acc, curr) => Object.assign({}, acc, curr), {})
    );
    //log accumulated values
    const subscribe = example.subscribe(val =>
      console.log('Accumulated object:', val)
    );
    //next values into subject, adding properties to object
    // {name: 'Joe'}
    subject.next({ name: 'Joe' });
    // {name: 'Joe', age: 30}
    subject.next({ age: 30 });
    // {name: 'Joe', age: 30, favoriteLanguage: 'JavaScript'}
    subject.next({ favoriteLanguage: 'JavaScript' });


  }

  randomArray() {
    // Accumulate values in an array, emit random values from this array.
    const scanObs = interval(1000)
      .pipe(
        // scan((a, c) => [...a, c], []),
        // map(r => r[Math.floor(Math.random() * r.length)]),
        distinctUntilChanged()
      )
      .subscribe(console.log);
  }

}
