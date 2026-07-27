import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
})
export class HeaderComponent {}
