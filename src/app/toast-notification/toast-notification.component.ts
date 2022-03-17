import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast-notification',
  templateUrl: './toast-notification.component.html',
  styleUrls: ['./toast-notification.component.scss'],
})
export class ToastNotificationComponent implements OnInit {
  @Input() showToast = false;

  constructor() {}

  ngOnInit(): void {}
}
