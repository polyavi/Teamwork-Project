import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { UsersService } from './../../core/services/users.service';
import { NotificationsService } from './../../../node_modules/angular2-notifications';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  declarations: [
      RegisterComponent,
      LoginComponent
  ],
  providers: [
      NotificationsService, UsersService
  ]
})
export class UsersModule { }
