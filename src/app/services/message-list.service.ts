import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Constants } from '../shared/constants';
@Injectable({
  providedIn: 'root',
})
export class MessageListService {
  constructor(private http: HttpClient) {}

  getMessageList(token?: string) {
    let qParams = new HttpParams();
    if (token) {
      // check if token exists attach it as a query parma.
      qParams = qParams.append(Constants.token, token);
    }
    // it'll return api response as an observable.
    return this.http.get(Constants.apiURL, { params: qParams });
  }
}
