import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import it up here
import { Observable } from 'rxjs';
import { User } from './models/user.model';
import { map } from 'rxjs/operators';
import { Response } from "./models/response.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getUsers():Observable<User[]> {
    return this.http.get<Response>('https://reqres.in/api/users').pipe(
      map( data => {
        //console.log(data);
        return new Response().deserialize(data).users;
      })
    );
  }

  public getMoreUsers(pageN: number):Observable<User[]> {
    return this.http.get<Response>('https://reqres.in/api/users?page=' + pageN).pipe(
      map(data => {
        //console.log(data);
        return new Response().deserialize(data).users;
      })
    );
  }

  
}