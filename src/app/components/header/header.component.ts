import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';
import { PHONE_NUMBER } from '../../constants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  PHONE_NUMBER = PHONE_NUMBER;
}
