import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PHONE_NUMBER } from '../../constants';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.css'],
})
export class CtaComponent {
  PHONE_NUMBER = PHONE_NUMBER;
}
