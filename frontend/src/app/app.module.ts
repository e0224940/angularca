import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { OnlineService } from './OnlineService';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, OnlineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
