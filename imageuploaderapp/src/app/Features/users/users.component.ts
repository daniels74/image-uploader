import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../Core/Services/user.service';
import { User } from '../../Core/Interfaces/user';
import { UsercardComponent } from './Components/usercard/usercard.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, UsercardComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  allUsers: User[] = [];

  constructor(private userServ: UserService) {}

  ngOnInit() {
    this.userServ.getALlUsers().subscribe((allusers) => {
      console.log('Users: ', allusers);
      this.allUsers = allusers;
    });
  }
}
