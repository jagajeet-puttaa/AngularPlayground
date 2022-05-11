import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { map, tap } from 'rxjs';
import { Results, UserProfileData } from '../interfaces/profile';
import { SearchUserProfilesComponent } from '../search-user-profiles/search-user-profiles.component';
import { UserdataService } from '../services/userdataService/userdata.service';
 
@Component({
  selector: 'app-userprofiles',
  templateUrl: './userprofiles.component.html',
  styleUrls: ['./userprofiles.component.css']
})

export class UserprofilesComponent implements OnInit,AfterViewInit {

  dataSource = new MatTableDataSource<Results>([]);         //Linked to table
  tempDataSource = new MatTableDataSource<Results>([]);     //Used for filtering

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(SearchUserProfilesComponent)
  private searchUserProfilesComponent: SearchUserProfilesComponent = new SearchUserProfilesComponent;

  numOfresults = 5;
  pageNum = 0;

  displayedColumns: string[] = ['name', 'username', 'email', 'gender', 'country'];

  constructor(private userdataService : UserdataService) { }

  ngOnInit(): void {
    this.fetchUserProfiles(this.numOfresults,this.pageNum);
  }

  ngAfterViewInit(){
    this.paginator.page.pipe(
      tap(()=>this.loadUserProfiles())
    )
    .subscribe();

    // Changing the way in which the data properties are accessed 
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch(property) {
        case 'username': return item.login.username;
        case 'name': return item.name.first + item.name.last;
        case 'email': return item.email;
        default : return item.email;
      }
    };
  }

  fetchUserProfiles(numOfResults : number, page: number){
    this.userdataService.getUserProfileData(page,numOfResults)
    .pipe(map((data : UserProfileData) => data.results))
    .subscribe(users => {
      console.log("Fetching")

      this.dataSource.data = users;
      this.dataSource.sort = this.sort;
      this.tempDataSource.data = users;
      this.tempDataSource.sort = this.sort;
    });
  }

  // Fetching data on each paginator click

  loadUserProfiles(): void{
    console.log(this.paginator.pageSize,this.paginator.pageIndex);
    this.searchUserProfilesComponent.value = '';
    this.searchUserProfilesComponent.applyFilter();
    this.fetchUserProfiles(this.paginator.pageSize,this.paginator.pageIndex+1);
  }

  setDataSource(filteredDataSource : MatTableDataSource<Results>): void{
    this.dataSource = filteredDataSource;
  }

}