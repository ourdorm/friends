import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { users } from '../../data/users';
import { EightyEightComponent } from '../../components/eighty-eight/eighty-eight.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, EightyEightComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  userCount = users.length;
}
