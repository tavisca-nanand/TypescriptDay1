import { Component, OnInit } from "@angular/core";
import { CommunicationService } from 'src/app/services/app.communication.service';

@Component({
    selector: 'app-search-component',
    template: `<h2>Search</h2>
      <div class="col-md-8">
            <div class="input-group">
                <input type="text" [(ngModel)]='searchQuery' placeholder = "search">
                <div class="input-group-append">
                    <input class="btn btn-primary" type="button" value="search" (click)="search()">
                </div>
            </div>  
        </div>
    `
})

export class SearchComponent implements OnInit {
    searchQuery : string;
  constructor(private serv: CommunicationService) {
    this.searchQuery = '';
  }

  ngOnInit() { }

  search() {
      this.serv.onInitiateSearch(this.searchQuery);
  }
}


