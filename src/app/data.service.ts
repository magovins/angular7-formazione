import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import it up here
import { Observable } from 'rxjs';
import { User } from './models/user.model';
import { map, filter } from 'rxjs/operators';
import { Response } from "./models/response.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  public canEdit: boolean = false;

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

  public checkIdv2(id: number): Observable<boolean>{
    return this.getUsers().pipe( map( (val: User[], index: number) => {
      return (val.find(el => el['id'] === id)) ? true : false
    }))
  }

  public checkId(list: Array<User>, id: number):boolean{
    /*
    this.getUsers().subscribe(data => {
      console.log(data.find(el => el['id'] === id));
      
      function exists(element, index, array) {
        return (element['id'] === id);
      }

      return data.filter(exists);
    });
    */
    if(list.find(el => el['id'] === id)){
      return true;
    } else {
      return false;
    }
    
    /*
    var arrObs = Rx.Observable.from([1, 2, 3, 4, 5]);
    arrObs.subscribe(function (num) {
      console.log('Elemento Osservato ' + num);
    });
    */    
  }
}