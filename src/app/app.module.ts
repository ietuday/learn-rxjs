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
import { RxjsDelayWhenComponent } from './rxjs-delay-when/rxjs-delay-when.component';
import { RxjsDematerializeComponent } from './rxjs-dematerialize/rxjs-dematerialize.component';
import { RxjsDistinctUntilChangedComponent } from './rxjs-distinct-until-changed/rxjs-distinct-until-changed.component';
import { RxjsDoComponent } from './rxjs-do/rxjs-do.component';
import { RxjsEveryComponent } from './rxjs-every/rxjs-every.component';
import { RxjsExpandComponent } from './rxjs-expand/rxjs-expand.component';
import { RxjsFilterComponent } from './rxjs-filter/rxjs-filter.component';
import { RxjsFirstComponent } from './rxjs-first/rxjs-first.component';
import { RxjsGroupByComponent } from './rxjs-group-by/rxjs-group-by.component';
import { RxjsIgnoreElementsComponent } from './rxjs-ignore-elements/rxjs-ignore-elements.component';
import { RxjsLastComponent } from './rxjs-last/rxjs-last.component';
import { RxjsMapComponent } from './rxjs-map/rxjs-map.component';
import { RxjsMapToComponent } from './rxjs-map-to/rxjs-map-to.component';
import { RxjsMergeComponent } from './rxjs-merge/rxjs-merge.component';
import { RxjsMergeMapComponent } from './rxjs-merge-map/rxjs-merge-map.component';
import { RxjsPartitionComponent } from './rxjs-partition/rxjs-partition.component';
import { RxjsPluckComponent } from './rxjs-pluck/rxjs-pluck.component';
import { RxjsPublishComponent } from './rxjs-publish/rxjs-publish.component';
import { RxjsRaceComponent } from './rxjs-race/rxjs-race.component';
import { RxjsRepeatComponent } from './rxjs-repeat/rxjs-repeat.component';
import { RxjsRetryComponent } from './rxjs-retry/rxjs-retry.component';
import { RxjsRetryWhenComponent } from './rxjs-retry-when/rxjs-retry-when.component';
import { RxjsSampleComponent } from './rxjs-sample/rxjs-sample.component';
import { RxjsScanComponent } from './rxjs-scan/rxjs-scan.component';
import { RxjsShareComponent } from './rxjs-share/rxjs-share.component';
import { RxjsSingleComponent } from './rxjs-single/rxjs-single.component';
import { RxjsSkipComponent } from './rxjs-skip/rxjs-skip.component';
import { RxjsSkipWhileComponent } from './rxjs-skip-while/rxjs-skip-while.component';
import { RxjsStartWithComponent } from './rxjs-start-with/rxjs-start-with.component';
import { RxjsSwitchMapComponent } from './rxjs-switch-map/rxjs-switch-map.component';
import { RxjsWindowComponent } from './rxjs-window/rxjs-window.component';
import { RxjsWindowCountComponent } from './rxjs-window-count/rxjs-window-count.component';
import { RxjsWindowTimeComponent } from './rxjs-window-time/rxjs-window-time.component';
import { RxjsWindowToggleComponent } from './rxjs-window-toggle/rxjs-window-toggle.component';
import { RxjsWindowWhenComponent } from './rxjs-window-when/rxjs-window-when.component';
import { RxjsWithLatestFromComponent } from './rxjs-with-latest-from/rxjs-with-latest-from.component';
import { RxjsZipComponent } from './rxjs-zip/rxjs-zip.component';
import { RxjsObservableComponent } from './rxjs-observable/rxjs-observable.component';
import { RxjsSubscriptionComponent } from './rxjs-subscription/rxjs-subscription.component';
import { RxjsSubjectComponent } from './rxjs-subject/rxjs-subject.component';
import { RxjsBehaviourSubjectComponent } from './rxjs-behaviour-subject/rxjs-behaviour-subject.component';
import { RxjsReplaySubjectComponent } from './rxjs-replay-subject/rxjs-replay-subject.component';

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
    RxjsDelayComponent,
    RxjsDelayWhenComponent,
    RxjsDematerializeComponent,
    RxjsDistinctUntilChangedComponent,
    RxjsDoComponent,
    RxjsEveryComponent,
    RxjsExpandComponent,
    RxjsFilterComponent,
    RxjsFirstComponent,
    RxjsGroupByComponent,
    RxjsIgnoreElementsComponent,
    RxjsLastComponent,
    RxjsMapComponent,
    RxjsMapToComponent,
    RxjsMergeComponent,
    RxjsMergeMapComponent,
    RxjsPartitionComponent,
    RxjsPluckComponent,
    RxjsPublishComponent,
    RxjsRaceComponent,
    RxjsRepeatComponent,
    RxjsRetryComponent,
    RxjsRetryWhenComponent,
    RxjsSampleComponent,
    RxjsScanComponent,
    RxjsShareComponent,
    RxjsSingleComponent,
    RxjsSkipComponent,
    RxjsSkipWhileComponent,
    RxjsStartWithComponent,
    RxjsSwitchMapComponent,
    RxjsWindowComponent,
    RxjsWindowCountComponent,
    RxjsWindowTimeComponent,
    RxjsWindowToggleComponent,
    RxjsWindowWhenComponent,
    RxjsWithLatestFromComponent,
    RxjsZipComponent,
    RxjsObservableComponent,
    RxjsSubscriptionComponent,
    RxjsSubjectComponent,
    RxjsBehaviourSubjectComponent,
    RxjsReplaySubjectComponent
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
