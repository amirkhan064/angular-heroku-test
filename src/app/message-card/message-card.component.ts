import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MessageListItem } from '../model/messageList';
import { Constants } from '../shared/constants';

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.scss'],
})
export class MessageCardComponent implements OnInit {
  @ViewChild('title') title;

  public baseURL = Constants.baseURL;
  public isCollapsed = false;
  public contentHeight: number = 60;
  public showReadMore = false;
  @Input() message: MessageListItem;
  @Input() index;
  @Output() deleteMessageEvent = new EventEmitter();;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    let height = this.title.nativeElement.offsetHeight;
    this.showReadMore = height >= this.contentHeight ? true : false;
  }

  deleteMessage() {
    this.deleteMessageEvent.emit(this.index);
  }
}
