import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PHONE_NUMBER } from '../../constants';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  PHONE_NUMBER = PHONE_NUMBER;
  isScrolled = false;

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 20;
  }
}
