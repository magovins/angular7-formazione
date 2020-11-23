import { Component, Input, OnInit } from '@angular/core';
import { registerModuleFactory } from '@angular/core/src/linker/ng_module_factory_loader';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateService } from '../create.service';
import { DataService } from '../data.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  formGroup: FormGroup;
  submitted = false;
  success = false;
  user: User = new User;
  formData: FormGroup;
  listaUtenti: Array<User>;

  constructor(
      private formBuilder: FormBuilder, 
      private createService: CreateService,
      private dataService: DataService,
      private router: Router) { }

  ngOnInit() {
    this.formData = new FormGroup({
      name: new FormControl(),
      job: new FormControl()
    });
    this.dataService.getUsers().subscribe(data => {
      this.listaUtenti = data;
      console.log(this.listaUtenti);
    });
  }

  onSubmit() {
    if (this.dataService.checkId(this.listaUtenti, this.user.id)) {
      // -> update user
      this.router.navigate(['/user/',this.user.id]);
      this.dataService.canEdit = true;
    } else {
      // -> create user
      this.createService.addUser(this.user).subscribe(res => {
        console.log(res);
        this.success = true;
        this.formData.reset();
      });
      this.dataService.canEdit = false;
    }

    this.dataService.checkIdv2(this.user.id).subscribe( res => {
      if (res) {
        // -> update user
        this.router.navigate(['/user/', this.user.id]);
        this.dataService.canEdit = true;
      } else {
        // -> create user
        this.createService.addUser(this.user).subscribe(res => {
          console.log(res);
          this.success = true;
          this.formData.reset();
        });
        this.dataService.canEdit = false;
      }
    })
    
    
    /*this.submitted = true;
    if (this.messageForm.invalid) {
      return;
    }*/
    
  }
}
