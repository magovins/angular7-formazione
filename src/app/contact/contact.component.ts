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
  user: User;
  formData: FormGroup;

  constructor(private formBuilder: FormBuilder, private createService: CreateService) { }

  ngOnInit() {
    this.formData = new FormGroup({
      name: new FormControl(),
      job: new FormControl()
    });
  }

  onSubmit() {
    console.log(this.formData.value);
    this.createService.addUser(this.formData.value).subscribe(res => {
      console.log(res);
      this.success = true;
    });
  
    /*this.submitted = true;
    if (this.messageForm.invalid) {
      return;
    }*/
    
  }



 

}
