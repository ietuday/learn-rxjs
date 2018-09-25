import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-distinct-until-changed',
  templateUrl: './rxjs-distinct-until-changed.component.html',
  styleUrls: ['./rxjs-distinct-until-changed.component.scss']
})
export class RxjsDistinctUntilChangedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.distinctUntilChanged();
  }

  distinctUntilChanged(){
    //only output distinct values, based on the last emitted value
    const myArrayWithDuplicatesInARow = from([1,1,2,2,3,1,2,3]);

    const distinctSub = myArrayWithDuplicatesInARow.pipe(distinctUntilChanged())
                        .subscribe(val => console.log('DISTINCT SUB:', val));


    const nonDistinctSub = myArrayWithDuplicatesInARow.subscribe(val => console.log('Non DISTINCT SUB:', val))

    const sampleObject = { name: 'Test'};
    const myArrayWithDuplicateObjects = from([sampleObject, sampleObject, sampleObject]);
    const nonDistinctObjects = myArrayWithDuplicateObjects.pipe(distinctUntilChanged())
                    //output: 'DISTINCT OBJECTS: {name: 'Test'}
                  .subscribe(val => console.log('DISTINCT OBJECTS:', val))

  }

}
