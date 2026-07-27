import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
})
export class FooterComponent {}
