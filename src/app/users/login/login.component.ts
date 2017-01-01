import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

import { UsersService } from './../../../core/services/users.service';
import{FormGroup,FormBuilder,Validators}from '@angular/forms';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.css' ],
    providers: [ UsersService ]
})
export class LoginComponent {
    loginForm:FormGroup;
    authenticated:boolean;
    profile:Object;
    constructor(
        private usersService: UsersService,
        private router: Router,
        private http: Http,
        private fb:FormBuilder
    ) {
        this.loginForm=fb.group({
            'username':[null ,Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(30)])],
            'password':[null ,Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(30)])]
            
        })
     }

    login(value:any) {
      let form={
          'username':value.username,
          'password':value.password
      }
    }
}
