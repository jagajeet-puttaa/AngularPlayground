import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Results } from '../interfaces/profile';

@Component({
  selector: 'app-search-user-profiles',
  templateUrl: './search-user-profiles.component.html',
  styleUrls: ['./search-user-profiles.component.css']
})
export class SearchUserProfilesComponent implements OnInit {

  @Input() inputDataSource = new MatTableDataSource<Results>();
  @Output() sendDataSourceEvent = new EventEmitter<MatTableDataSource<Results>>();

  value = '';
  
  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit(){
    // Customizing the filter function due to complex objects
    this.inputDataSource.filterPredicate = (data, filter) => {
      const dataStr = (data.email + data.gender + data.name.first + data.name.last + data.location.country + data.login.username).toLowerCase();
      return dataStr.indexOf(filter) != -1; 
    }

    // Changing the way in which the data properties are accessed 
    this.inputDataSource.sortingDataAccessor = (item, property) => {
      switch(property) {
        case 'username': return item.login.username;
        case 'name': return item.name.first + item.name.last;
        case 'email': return item.email;
        default : return item.email;
      }
    };
  }

  sendDataSource(): void{
    this.sendDataSourceEvent.emit(this.inputDataSource);
  }

  applyFilter(): void{
    const filterValue = this.value;
    this.inputDataSource.filter = filterValue.trim().toLowerCase();
    this.sendDataSource();
  }
}
