import { Component, OnInit } from '@angular/core';
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

  constructor(private service: DataService){}

  ngOnInit() {
    this.service.getUsers().subscribe(data => {
        this.userList = data;
        console.log("USER LIST:");
        console.log(this.userList);
    });
    
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
