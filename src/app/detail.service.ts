import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
    
  constructor(private http: HttpClient) { }

  public getUser(userId):Observable<User> {
    return this.http.get<Object>('https://reqres.in/api/users/'+ userId).pipe(
      map( response => {
        //console.log(data);
        return new User().deserialize(response["data"])
      })
    );
  }
  

}
