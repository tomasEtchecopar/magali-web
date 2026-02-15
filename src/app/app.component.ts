import { CtaComponent } from './components/cta/cta.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';
import { BioComponent } from './components/bio/bio.component';
import { MethodologyComponent } from './components/methodology/methodology.component';
import { ProblemsComponent } from './components/problems/problems.component';

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
