import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-rxjs-buffer-toggle',
  templateUrl: './rxjs-buffer-toggle.component.html',
  styleUrls: ['./rxjs-buffer-toggle.component.scss']
})
export class RxjsBufferToggleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //emit value every second
    const myInterval = interval(1000);
    
    //start first buffer after 5s, and every 5s after
    const startInterval = interval(5000);

    const closingInterval = val => {
      console.log(`Value ${val} emitted, starting buffer! Closing in 3s!`)
        return interval(3000)
    }
  }

}
