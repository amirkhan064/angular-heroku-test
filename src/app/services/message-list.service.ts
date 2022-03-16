import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MessageListService {
  private apiUrl = 'https://message-list.appspot.com/messages';

  constructor(private http: HttpClient) {}

  getMessageList(token?: string) {
    let qParams = new HttpParams();
    if (token) {
      qParams = qParams.append('pageToken', token);
    }
    return this.http.get(this.apiUrl, { params: qParams });
  }
}
