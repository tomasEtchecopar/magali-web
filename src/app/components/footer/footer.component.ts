import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PHONE_NUMBER } from '../../constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  PHONE_NUMBER = PHONE_NUMBER;
}
