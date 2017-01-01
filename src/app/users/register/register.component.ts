import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
// import { contentHeaders } from '../common/headers';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from './../../../core/services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UsersService]
})
export class RegisterComponent {
  registerForm: FormGroup;
  authenticated: boolean;
  profile: Object;
  constructor(public router: Router, public http: Http,private fb:FormBuilder) {
    this.registerForm=fb.group({
            'username':[null ,Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(30)])],
            'password':[null ,Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(30)])]
            
        })
  }

  signup(value:any) {
    let form={
          'username':value.username,
          'password':value.password
      }
  }
}
