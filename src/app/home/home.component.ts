import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DataService } from '../data.service';
import { DetailService } from '../detail.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  h1Style: boolean = false;
  
  public user: User;
  public userList: Array<User> = [];
  public stream: Subject<number> = new Subject<number>();

  constructor(private service: DataService){
    setInterval(()=>{
      let randomN = Math.random() * (100 - 0) + 0;

      this.stream.next(randomN);
    },1000);
  }

  ngOnInit() {
    this.service.getUsers().subscribe(data => {
        this.userList = data;
        console.log("USER LIST:");
        console.log(this.userList);
    });

    this.stream.pipe(
      // scorrere ogni n e trasformarlo in intero
      map(el => Math.floor(el)),
      filter((el,index) => {
        if((el%2) == 0){
          return true;
        } else {
          return false;
        }
      })
    ).subscribe(n => {
      console.log(n);
    })
  }

  firstClick() {
    this.h1Style = true;
  }

  public getAllUsers(){
    this.service.getUsers().subscribe(
      data => this.userList = data
    );
  }

  public getMoreUsers(){
    this.service.getMoreUsers(2).subscribe(
      data => {
        console.log("NEW DATA:");
        console.log(data);
        
        for (var i = 0, len = this.userList.length; i < len; ++i) {
          this.userList.push(data[i]);
        }
        console.log("USER LIST UPDATED:");
        console.log(this.userList);
      }
    );
  }
}
