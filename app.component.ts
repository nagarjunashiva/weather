import { Component } from '@angular/core';
@Component({
  selector: 'app-search-bar',
  templateUrl: 'search-bar.component.html',
  styleUrls: ['style.css']
})
export class SearchBarComponent {
  searchQuery: string = '';
  search(): void {
  }
}
