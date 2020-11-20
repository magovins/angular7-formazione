import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  risultato:any = "OK";
  constructor(private http: HttpClient) { }

  public addUser(value: any): Observable<any>{
    console.log(value);
    return this.http.post<Object>('https://reqres.in/api/users',value).pipe(
      map(response => {
        //console.log(data);
        return response;
      })
    );
    
  }
}
