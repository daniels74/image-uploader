import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../../../Core/Interfaces/user';

@Component({
  selector: 'app-usercard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usercard.component.html',
  styleUrl: './usercard.component.css',
})
export class UsercardComponent {
  @Input() user!: User;

  proimg = '';

  ngOnInit() {
    this.proimg = this.user.profileimage;
  }
}
