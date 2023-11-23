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
import { NgxImageCompressService } from 'ngx-image-compress';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent {
  MAX_MEGABYTES = 0.03;
  myimage = '';

  constructor(
    private fb: FormBuilder,
    private userServ: UserService,
    private ngx: NgxImageCompressService,
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
        profileimage: this.myimage,
      })
      .pipe(take(1))
      .subscribe((res) => console.log(res));
  }

  useCopresserOnImage() {
    this.ngx.uploadAndGetImageWithMaxSize(this.MAX_MEGABYTES).then(
      (result: string) => {
        this.myimage = result;
      },
      (result: string) => {
        console.error(
          "The compression algorithm didn't succed! The best size we can do is",
          this.ngx.byteCount(result),
          'bytes',
        );
        this.myimage = result;
      },
    );
  }
}
