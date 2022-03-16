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
import { Constants } from '../shared/constants';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss'],
  animations: [
    trigger('messageCardAnimator', [
      transition(
        '* => slideOutRight',
        animate(500, keyframes(kf.slideOutRight))
      ),
    ]),
  ],
})
export class MessageListComponent implements OnInit {
  private currentToken = '';
  public messageListData = Array<MessageListItem>();
  public baseURL = Constants.baseURL;
  public animationState: Array<string> = [];
  public ifEndResult = false;

  constructor(private messageListService: MessageListService) {}

  ngOnInit() {
    // This method will get called only once when component is initialized.
    this.loadMessageList();
  }

  // load the data for messageList and keep merging until user reach to the last page.
  private loadMessageList() {
    this.messageListService
      .getMessageList(this.currentToken)
      .subscribe((res: any) => {
        if (!res?.errorCode) {
          // check if user reaches to the last page.
          this.ifEndResult = this.currentToken === res.pageToken ? true : false;
          this.currentToken = res.pageToken;
          // don't merge if user reach to the last page.
          if (!this.ifEndResult) {
            this.messageListData = [...this.messageListData, ...res.messages];
          }
        } else {
          // API Error handling
          console.log('getMessageList API Error', res);
        }
      });
  }

  // Function to trigger the animation for particular card.
  startAnimation(state, index) {
    if (!this.animationState[index]) {
      this.animationState[index] = state;
    }
  }

  // This function will trigger once the animation is done.
  resetAnimationState(index) {
    // handle if user removed the element and no scroll in screen.
    if (this.messageListData.length < 7 && !this.ifEndResult) {
      this.loadMessageList();
    }

    // Swipe right will remove the element from the messageList and also removes the animationState for the same index.
    if (this.animationState[index] == 'slideOutRight') {
      this.messageListData.splice(index, 1);
      this.animationState.splice(index, 1);
    }
  }

  // check if use reaches to the bottom of the page.
  onScrollDown(ev: any) {
    console.log('scrolled down!!', ev);
    this.loadMessageList();
  }
}
