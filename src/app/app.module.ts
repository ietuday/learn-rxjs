import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatProgressBarModule
} from "@angular/material";
import { RxjsBufferComponent } from './rxjs-buffer/rxjs-buffer.component';
import { RxjsBufferCountComponent } from './rxjs-buffer-count/rxjs-buffer-count.component';
import { RxjsBufferTimeComponent } from './rxjs-buffer-time/rxjs-buffer-time.component';
import { RxjsBufferToggleComponent } from './rxjs-buffer-toggle/rxjs-buffer-toggle.component';
import { RxjsBufferWhenComponent } from './rxjs-buffer-when/rxjs-buffer-when.component';
import { RxjsCombineAllComponent } from './rxjs-combine-all/rxjs-combine-all.component';
import { RxjsCombineLatestComponent } from './rxjs-combine-latest/rxjs-combine-latest.component';
import { RxjsConcatComponent } from './rxjs-concat/rxjs-concat.component';
import { RxjsConcatallComponent } from './rxjs-concatall/rxjs-concatall.component';
import { RxjsConcatMapComponent } from './rxjs-concat-map/rxjs-concat-map.component';
import { RxjsConcatMapToComponent } from './rxjs-concat-map-to/rxjs-concat-map-to.component';
import { RxjsCountComponent } from './rxjs-count/rxjs-count.component';
import { RxjsDebounceComponent } from './rxjs-debounce/rxjs-debounce.component';
import { RxjsDebounceTimeComponent } from './rxjs-debounce-time/rxjs-debounce-time.component';
import { RxjsDefaultIfEmptyComponent } from './rxjs-default-if-empty/rxjs-default-if-empty.component';
import { RxjsDelayComponent } from './rxjs-delay/rxjs-delay.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsBufferComponent,
    RxjsBufferCountComponent,
    RxjsBufferTimeComponent,
    RxjsBufferToggleComponent,
    RxjsBufferWhenComponent,
    RxjsCombineAllComponent,
    RxjsCombineLatestComponent,
    RxjsConcatComponent,
    RxjsConcatallComponent,
    RxjsConcatMapComponent,
    RxjsConcatMapToComponent,
    RxjsCountComponent,
    RxjsDebounceComponent,
    RxjsDebounceTimeComponent,
    RxjsDefaultIfEmptyComponent,
    RxjsDelayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
