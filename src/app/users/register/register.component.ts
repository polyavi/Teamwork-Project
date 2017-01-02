import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { User } from './../../../core/models/users';
import { UsersService } from './../../../core/services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
//   providers: [UsersService]
})
export class RegisterComponent {
    registerForm: FormGroup;
    authenticated: boolean;
    profile: Object;

    constructor(
      public router: Router,
      public http: Http,
      private formBuilder: FormBuilder,
      private usersService: UsersService
    ) {
        this.registerForm = formBuilder.group({
                'username': [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30)])],
                'password': [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30)])]
            });
    }

    signup(value: any) {
        let form = {
            'username': value.username,
            'password': value.password
        };

        let user = new User(++this.usersService.lastId, value.username, value.password, 'TODO', 'TODO', 'TODO' );
        if (!user) { return; }
        this.usersService.register(user)
            .then(() => {
                this.router.navigate(['/']);
            });
    }
}
