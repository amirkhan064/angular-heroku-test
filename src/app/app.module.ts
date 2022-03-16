import { BrowserModule } from '@angular/platform-browser';
import { Injectable, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MessageListComponent } from './message-list/message-list.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as Hammer from 'hammerjs';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {
  HammerModule,
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG,
} from '@angular/platform-browser';

@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  public test = <any>{
    swipe: { direction: Hammer.DIRECTION_ALL },
  };
}

@NgModule({
  declarations: [AppComponent, HeaderComponent, MessageListComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    HammerModule,
    BrowserAnimationsModule,
    InfiniteScrollModule,
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
