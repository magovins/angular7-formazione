import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  risultato: string  = "OK";
  constructor(private http: HttpClient) { }

  public addUser(value: User): Observable<string>{
    return this.http.post<Object>('https://reqres.in/api/users',value).pipe(
      map(response => {
        console.log(response);
        return this.risultato;
      })
    );
    
  }
}
