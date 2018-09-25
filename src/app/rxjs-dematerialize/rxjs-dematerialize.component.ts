import { Component, OnInit } from '@angular/core';
import { from, Notification } from 'rxjs';
import { dematerialize } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-dematerialize',
  templateUrl: './rxjs-dematerialize.component.html',
  styleUrls: ['./rxjs-dematerialize.component.scss']
})
export class RxjsDematerializeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.dematerialize();
  }

  dematerialize(){
    const source = from(
      [
        Notification.createNext('Sucess'),
        Notification.createError('Error')
      ]
    )
    //turn notification objects into notification values
    .pipe(dematerialize());

    //output: 'NEXT VALUE: SUCCESS' 'ERROR VALUE: 'ERROR!'
    const subscription = source.subscribe({
      next: val => console.log(`NEXT VALUE: ${val}`),
      error: val => console.log(`ERROR VALUE: ${val}`)
    });      
  }

}
