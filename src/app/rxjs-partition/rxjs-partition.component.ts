import { Component, OnInit } from '@angular/core';
import { merge, of, from } from 'rxjs';
import { map, partition, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-partition',
  templateUrl: './rxjs-partition.component.html',
  styleUrls: ['./rxjs-partition.component.scss']
})
export class RxjsPartitionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.partition();
  }

  partition() {
    const source = from([1, 2, 3, 4, 5, 6]);
    //first value is true, second false
    // const [evens, odds] = source.pipe(partition(val => val % 2 === 0));
    /*
      Output:
      "Even: 2"
      "Even: 4"
      "Even: 6"
      "Odd: 1"
      "Odd: 3"
      "Odd: 5"
    */
    // const subscribe = merge(
    //   evens.pipe(map(val => `Even: ${val}`)),
    //   odds.pipe(map(val => `Odd: ${val}`))
    // ).subscribe(val => console.log(val));

    //if greater than 3 throw
    const example = source.pipe(
      map(val => {
        if (val > 3) {
          throw `${val} greater than 3!`;
        }
        return { success: val };
      }),
      catchError(val => of({ error: val }))
    );
    console.log(example);
    const suscribtion = example.subscribe((val) => {
      console.log(val);
      
    })
    //split on success or error
    // const [success, error] = example.pipe(partition(res => res['success']));
  }

}
