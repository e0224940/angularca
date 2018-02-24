import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {

  searchTerm = '';
  userName = '';

  @Output()
  changeUserRequest: EventEmitter<String> = new EventEmitter<String>();
  @Output()
  newSearchRequest: EventEmitter<String> = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  initiateSearch() {
    this.newSearchRequest.next(this.searchTerm);
  }

  changeUser() {
    this.changeUserRequest.next(this.userName);
  }

}
