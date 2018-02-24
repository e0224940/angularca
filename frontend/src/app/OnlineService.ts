import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/take';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class OnlineService {

  constructor(private http: HttpClient) { }

  getSearchResultsOf(searchQuery: String, offset: number): Promise<any> {
    return (
      this.http.get(encodeURI(
        'http://api.giphy.com/v1/gifs/search?api_key=R10wMcF6NhuJP4BlfgwaEXLF6iC8Xgk8&limit=5&offset='
        + offset
        + '&q='
        + searchQuery))
        .take(1).toPromise());
  }

  storeUrlForUser(urlToStore: String, username: String) {
    if (username.length === 0) {
      username = 'default';
    }

    return (
      this.http.get(encodeURI(
        'http://localhost:8080/WebApplication2/Data?action=store&user=' + username + '&url=' + urlToStore))
        .take(1).toPromise());
  }

  removeUrlForUser(urlToStore: String, username: String) {
    if (username.length === 0) {
      username = 'default';
    }

    return (
      this.http.get(encodeURI(
        'http://localhost/WebApplication2/erase/user=' + username + '&url=' + urlToStore))
        .take(1).toPromise());
  }

  getUrlsOfUser(username: String): Promise<any> {
    if (username.length === 0) {
      console.log('invalid username' + username);
      username = 'default';
    }

    console.log(encodeURI('http://localhost:8080/WebApplication2/Data?action=read&user=' + username));

    return (
      this.http.get(encodeURI(
        'http://172.17.254.174:8080/WebApplication2/Data?action=read&user=' + username))
        .take(1).toPromise());
  }

}
