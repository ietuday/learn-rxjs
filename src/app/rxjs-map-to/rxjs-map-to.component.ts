import { Component, OnInit } from '@angular/core';
import { interval, fromEvent } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-map-to',
  templateUrl: './rxjs-map-to.component.html',
  styleUrls: ['./rxjs-map-to.component.scss']
})
export class RxjsMapToComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.mapTo();
  }

  mapTo() {
    //emit value every two seconds
    const source = interval(2000);
    //map all emissions to one value
    const example = source.pipe(mapTo('HELLO WORLD!'));
    //output: 'HELLO WORLD!'...'HELLO WORLD!'...'HELLO WORLD!'...
    const subscribe = example.subscribe(val => console.log(val));

    //emit every click on document
    const clickSource = fromEvent(document, 'click');
    //map all emissions to one value
    const exampleTwo = clickSource.pipe(mapTo('GOODBYE WORLD!'));
    //output: (click)'GOODBYE WORLD!'...
    const subscribeTwo = exampleTwo.subscribe(val => console.log(val));
  }

}
