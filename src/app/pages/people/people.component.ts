import { Component } from '@angular/core';
import { users } from '../../data/users';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [UserCardComponent, RouterLink],
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent {
  users = users;
}
