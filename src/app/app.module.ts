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

@NgModule({
  declarations: [
    AppComponent,
    RxjsBufferComponent,
    RxjsBufferCountComponent,
    RxjsBufferTimeComponent,
    RxjsBufferToggleComponent
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
