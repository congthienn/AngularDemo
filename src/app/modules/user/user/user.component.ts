import { Component, OnInit } from '@angular/core';
import { user } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users$:user[] = [];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getUsers();
    this.userService.RefreshData.subscribe(() => {
      console.log("Refresh data");
      this.getUsers();
    });
  }
  getUsers():void{
    this.userService.getUsers().subscribe(response => {
      this.users$ = response;
      console.log(this.users$);
    });  
  }
  deleteUser(user:user):void{
      this.users$ = this.users$.filter(x=>x !== user);
      this.userService.deleteUser(user.id).subscribe();
  }
}