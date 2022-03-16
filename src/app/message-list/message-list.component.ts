import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { MessageList, MessageListItem } from '../model/messageList';
import { MessageListService } from '../services/message-list.service';
import * as kf from '../shared/keyframes';
import {
  trigger,
  query,
  group,
  keyframes,
  animate,
  transition,
  style,
} from '@angular/animations';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss'],
  animations: [
    trigger('cardAnimator', [
      transition(
        '* => slideOutRight',
        animate(1000, keyframes(kf.slideOutRight))
      ),
    ]),
  ],
})
export class MessageListComponent implements OnInit {
  private currentToken = '';
  public messageListData = Array<MessageListItem>();
  public baseURL = 'http://message-list.appspot.com';
  public direction = '';
  animationState: Array<string> = [];
  sum = 20;

  constructor(private messageListService: MessageListService) {}

  ngOnInit() {
    this.loadMessageList();
  }

  private loadMessageList() {
    this.messageListService
      .getMessageList(this.currentToken)
      .subscribe((res: any) => {
        if (res) {
          this.currentToken = res.pageToken;
          this.messageListData = [...this.messageListData, ...res.messages];
        }
        console.log(res);
      });
  }

  startAnimation(state, index) {
    if (!this.animationState[index]) {
      this.animationState[index] = state;
    }
  }

  resetAnimationState(index) {
    if (this.animationState[index] == 'slideOutRight') {
      this.messageListData.splice(index, 1);
      this.animationState.splice(index, 1);
    }
  }

  onScrollDown(ev: any) {
    console.log('scrolled down!!', ev);
    this.loadMessageList();
    this.direction = 'scroll down';
  }
}
