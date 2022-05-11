import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Profile, UserProfileData } from 'src/app/interfaces/profile';

@Injectable({
  providedIn: 'root'
})

export class UserdataService {

  constructor( private httpClient : HttpClient) { }

  getProfiles(page : number): Observable<Profile[]> {
    return this.httpClient.get<any>(`https://randomuser.me/api/?page=${page}&results=10&seed=abc`).pipe(
      map((users) => {
        return users.results.map(
          ( user: { 
              name: { first: string; last: string; }; 
              email: string; 
              location: { country: string; }; 
              login: { username: string; }; 
              gender: string; 
          }) => 
          ({
            name : user.name.first + " " + user.name.last,
            email : user.email,
            country : user.location.country,
            username : user.login.username,
            gender : user.gender 
          }))
      })
    )
  }

  getUserProfileData(page: number,results:number):Observable<UserProfileData>{
    return this.httpClient.get<UserProfileData>(`https://randomuser.me/api/?page=${page}&results=${results}&seed=abc`);
  }
}

//private url = "https://randomuser.me/api/?page=3&results=10&seed=abc";