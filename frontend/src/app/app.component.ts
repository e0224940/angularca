import { Component } from '@angular/core';
import { OnlineService } from './OnlineService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  offset = 0;
  searchString: string;
  currUser: string;
  results: [any];
  storedResults: any;

  constructor(private onlineService: OnlineService) { }


  onUserChanged(newUser: string) {
    this.currUser = newUser;
    this.GetResults(this.currUser);
  }

  onNewSearchTriggered(searchString: string) {
    this.offset = 0;
    this.searchString = searchString;
    this.onlineService.getSearchResultsOf(this.searchString, this.offset)
      .then(result => {
        this.results = result.data;
        console.log(this.results);
      });
  }

  GetNextSet() {
    this.offset += 5;
    this.onlineService.getSearchResultsOf(this.searchString, this.offset)
      .then(result => {
        this.results = result.data;
        console.log(this.results);
      });
  }

  GetPreviousSet() {
    this.offset -= 5;
    this.onlineService.getSearchResultsOf(this.searchString, this.offset)
      .then(result => {
        this.results = result.data;
        console.log(this.results);
      });
  }

  StoreResult(urlToStore: String) {
    console.log(this.currUser);
    this.onlineService.storeUrlForUser(urlToStore, this.currUser);
    this.GetResults(this.currUser);
  }

  RemoveResult(urlToStore: String) {
    this.onlineService.removeUrlForUser(urlToStore, this.currUser);
  }

  GetResults(username: String) {
    this.onlineService.getUrlsOfUser(username)
    .then(jsonValues => {
      this.storedResults = jsonValues.data;
      console.log(jsonValues);
    });
  }

}
