import {
  Component, OnInit} from '@angular/core';
import { MessageListItem } from '../model/messageList';
import { MessageListService } from '../services/message-list.service';
import * as kf from '../shared/keyframes';
import { trigger, keyframes, animate,transition } from '@angular/animations';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss'],
  animations: [
    trigger('messageCardAnimator', [
      transition(
        '* => slideOutRight',
        animate(800, keyframes(kf.slideOutRight))
      ),
    ]),
  ],
})
export class MessageListComponent implements OnInit {
  private currentToken = '';
  public messageListData = Array<MessageListItem>();
  public animationState: Array<string> = [];
  public ifEndResult = false;
  public showToast = false;
  public tempDeletedItem = {};
  public tempDeletedState = {};
  public showLoader = false;

  constructor(private messageListService: MessageListService) {}

  ngOnInit() {
    // This method will get called only once when component is initialized.
    this.loadMessageList();
  }

  // load the data for messageList and keep merging until user reach to the last page.
 private loadMessageList() {
    // show loader when API call happen
    this.showLoader = true;
     this.messageListService
      .getMessageList(this.currentToken)
      .subscribe((res: any) => {
      // Hide loader as soon as api response is received
        this.showLoader = false;
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
      const tempItem = this.messageListData.splice(index, 1);
      const tempState = this.animationState.splice(index, 1);
      // Show confirmation message with undo option.
      this.showToast = true;
      this.hideToast();
      this.setTempItems(tempItem, tempState, index);
    }
  }

  // Set temp State and deleted items for undo option.
  private setTempItems(item, state, index) {
    this.tempDeletedItem = {
      item: item,
      index,
    };
    this.tempDeletedState = {
      item: state,
      index,
    };
  }

  private hideToast() {
    // Show confirmation toast message after 2 seconds.
    setTimeout(() => {
      this.showToast = false;
    }, 2000);
  }

  // check if use reaches to the bottom of the page.
  onScrollDown(ev: any) {
    console.log('scrolled down!!', ev);
    this.loadMessageList();
  }

  // undo the deleted items once click on undo text.
  undoItem(undo) {
    console.log('undo', undo);
    this.messageListData.splice(
      this.tempDeletedItem['index'], 0 , this.tempDeletedItem['item'][0]
    )
  }
}
