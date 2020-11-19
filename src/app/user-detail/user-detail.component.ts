import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailService } from '../detail.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  public user: User
  constructor(private route: ActivatedRoute, 
    private service: DetailService) {
    
   }

  ngOnInit() {
    this.route.data.subscribe(data => {
     console.log(data)
     this.service.getUser( data.userId).subscribe(user=>{
       this.user= user
     } )
  }
  )}


  

}
