import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { UserService } from '../../../../Core/Services/user.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent {
  constructor(
    private fb: FormBuilder,
    private userServ: UserService,
  ) {}

  userform: FormGroup = this.fb.group({
    name: new FormControl(''),
    username: new FormControl(''),
  });

  submitUserForm() {
    this.userServ
      .postNewUser({
        name: this.userform.get('name')?.value,
        username: this.userform.get('username')?.value,
      })
      .pipe(take(1))
      .subscribe((res) => console.log(res));
  }
}
