import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { User } from '../../data/users';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  @Input() user!: User;
}
