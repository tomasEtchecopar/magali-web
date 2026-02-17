import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PHONE_NUMBER } from '../../constants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  PHONE_NUMBER = PHONE_NUMBER;
}
