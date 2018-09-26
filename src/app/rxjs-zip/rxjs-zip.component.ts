import { Component, OnInit } from '@angular/core';
import { of, Observable, zip } from 'rxjs';


@Component({
  selector: 'app-rxjs-zip',
  templateUrl: './rxjs-zip.component.html',
  styleUrls: ['./rxjs-zip.component.scss']
})
export class RxjsZipComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.zip();
  }

  zip() {
    let age$ = of<number>(27, 25, 29);
    let name$ = of<string>('Foo', 'Bar', 'Beer');
    let isDev$ = of<boolean>(true, true, false);
      const example = zip(age$,
        name$,
        isDev$,
        (age: number, name: string, isDev: boolean) => ({ age, name, isDev }))
      
    const subscribed = example.subscribe((data) => {
      console.log(typeof data);
      
    })
  }

}
