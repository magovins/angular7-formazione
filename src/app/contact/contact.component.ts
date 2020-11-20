import { Component, Input, OnInit } from '@angular/core';
import { registerModuleFactory } from '@angular/core/src/linker/ng_module_factory_loader';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateService } from '../create.service';
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
  

  constructor(private formBuilder: FormBuilder, private createService: CreateService) { }

  ngOnInit() {
    this.formData = new FormGroup({
      name: new FormControl(),
      job: new FormControl()
    });
  }

  onSubmit() {
    console.log(this.user);
    this.createService.addUser(this.user).subscribe(res => {
      console.log(res);
      this.success = true;
      this.formData.reset();
    });
  
    /*this.submitted = true;
    if (this.messageForm.invalid) {
      return;
    }*/
    
  }



 

}
