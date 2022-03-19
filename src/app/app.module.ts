import { BrowserModule } from '@angular/platform-browser';
import { Injectable, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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
import { LoaderComponent } from './shared/loader/loader.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';

@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    // It will only use the swap gesture and deactivate the others to avoid overlaps
    pinch: { enable: false },
    rotate: { enable: false },
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MessageListComponent,
    MessageCardComponent,
    ToastNotificationComponent,
    LoaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    HammerModule,
    BrowserAnimationsModule,
    InfiniteScrollModule,
    AppRoutingModule,
    FormsModule
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
