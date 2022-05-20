import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UserAddComponent } from './user-add.component';



@NgModule({
  declarations: [
    UserAddComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ]
})
export class UserAddModule { }
