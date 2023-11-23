import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../Core/Services/user.service';
import { UserFormComponent } from './Components/user-form/user-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, UserFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private userServ: UserService) {}

  ngOnInit() {
    this.userServ.getPokemmon().subscribe({
      next: (result: any) => {
        console.log('Pokemon: ', result);
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {},
    });
  }
}
