import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toast-notification',
  templateUrl: './toast-notification.component.html',
  styleUrls: ['./toast-notification.component.scss'],
})
export class ToastNotificationComponent implements OnInit {
  @Input() showToast = false;
  @Output() undoItem = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  undoDeletedItem() {
    this.undoItem.emit(true);
  }
}
