import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailService } from '../detail.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  public user: User;
  private userId: number;
  private canEdit: boolean = true;
  
  constructor(
    private router: ActivatedRoute,
    private service: DetailService ) {}

  ngOnInit() {    
    // l'id viene passato in this.router.snapshot.params.userId
    // e non in this.router.data
    this.userId = this.router.snapshot.params.userId;
    
    this.service.getUser(this.userId).subscribe(user=>{
      this.user = user;
      console.log(this.user);
    });
  }
}