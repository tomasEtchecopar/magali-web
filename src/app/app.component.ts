import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header.component';
import { ProblemsComponent } from './components/problems.component';
import { MethodologyComponent } from './components/methodology.component';
import { BioComponent } from './components/bio.component';
import { TestimonialsComponent } from './components/testimonials.component';
import { CtaComponent } from './components/cta.component';
import { FooterComponent } from './components/footer.component';
import { WhatsappButtonComponent } from './components/whatsapp-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    HeaderComponent,
    ProblemsComponent,
    MethodologyComponent,
    BioComponent,
    TestimonialsComponent,
    CtaComponent,
    FooterComponent,
    WhatsappButtonComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <app-header></app-header>
    <app-problems></app-problems>
    <app-methodology></app-methodology>
    <app-bio></app-bio>
    <app-testimonials></app-testimonials>
    <app-cta></app-cta>
    <app-footer></app-footer>
    <app-whatsapp-button></app-whatsapp-button>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'adiestramiento-mdq';
}
