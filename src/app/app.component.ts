import { CtaComponent } from './components/cta/cta.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';
import { BioComponent } from './components/bio/bio.component';
import { MethodologyComponent } from './components/methodology/methodology.component';
import { ProblemsComponent } from './components/problems/problems.component';
import { Meta, Title } from '@angular/platform-browser';

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
  title = 'magali-adiestramiento-mdq';

  constructor() {
    const meta = inject(Meta);
    inject(Title).setTitle('Magali Adiestramiento | Adiestradora Canina a Domicilio en Mar del Plata');

    meta.addTags([
      { name: 'description', content: 'Adiestramiento y educación canina a domicilio en Mar del Plata. Entrenamiento personalizado para tu perro con Magali, educadora canina profesional.' },
      { name: 'keywords', content: 'adiestramiento canino Mar del Plata, educadora canina a domicilio, adiestradora de perros Mar del Plata, entrenamiento canino MDQ' },
      { name: 'robots', content: 'index, follow' },

      { property: 'og:title', content: 'Magali Adiestramiento | Educadora Canina a Domicilio en Mar del Plata' },
      { property: 'og:description', content: 'Entrenamiento y educación canina personalizada a domicilio en Mar del Plata. Resultados reales para vos y tu perro.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://magali-adiestramiento.vercel.app/' },
      { property: 'og:image', content: 'https://tudominio.com/assets/bio.png' },
      { property: 'og:locale', content: 'es_AR' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Magali Adiestramiento | Mar del Plata' },
      { name: 'twitter:description', content: 'Adiestramiento y educación canina a domicilio en Mar del Plata.' },
    ]);

  }
}
