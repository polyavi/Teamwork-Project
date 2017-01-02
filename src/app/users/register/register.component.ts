import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { NotificationsService } from 'angular2-notifications';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';

import { User } from './../../../core/models/users';
import { UsersService } from './../../../core/services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
    registerForm: FormGroup;
    authenticated: boolean;
    profile: Object;

    constructor(
      public router: Router,
      public http: Http,
      private formBuilder: FormBuilder,
      private usersService: UsersService,
      private notificationsService: NotificationsService
    ) {
        this.registerForm = formBuilder.group({
            'username': [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30)])],
            'password': [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30)])],
            'firstname': [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30)])],
            'lastname': [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30)])]
        });
    }

    signup(value: any) {
      let user = new User(++this.usersService.lastId, value.username, value.password,  value.firstname, value.lastname );
      if (!user) {
        this.notificationsService.error('Signup error', 'Try again!');
      }
      this.usersService.register(user)
        .then((userD)=>{
          delete(user.id);
          this.usersService.login(user).subscribe((res: any) => {
              // console.log(res.message);
              this.notificationsService.success('Success', 'Successfuly signed in!');
              this.router.navigate(['/']);
          },
          (err: any) => {
            console.log(err)
              this.notificationsService.error('Signin error', 'Try again!');
              this.router.navigate(['/signin']);
          });
        });
    }
    public logout(){
      this.usersService.logoutUser();
      this.router.navigate(['/']);
    }
}
