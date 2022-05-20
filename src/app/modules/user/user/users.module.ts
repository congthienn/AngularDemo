import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { BrowserModule } from '@angular/platform-browser';
import { UserAddModule } from '../user-add/user-add.module';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    UserAddModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
