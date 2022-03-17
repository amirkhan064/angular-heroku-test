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
import { MessageCardComponent } from './message-card/message-card.component';
import { ToastNotificationComponent } from './toast-notification/toast-notification.component';

@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    // It will only use the swap gesture so
    // It will deactivate the others to avoid overlaps
    pinch: { enable: false },
    rotate: { enable: false },
  };
}

@NgModule({
  declarations: [AppComponent, HeaderComponent, MessageListComponent, MessageCardComponent, ToastNotificationComponent],
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
