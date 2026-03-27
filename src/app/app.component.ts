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

  constructor(private meta: Meta, titleService: Title) {
    titleService.setTitle('Adiestramiento Canino Mar del Plata | Magalí - Educación Canina Profesional');

    meta.addTags([
      { name: 'description', content: 'Adiestramiento canino y educación canina a domicilio en Mar del Plata. Servicio profesional de adiestramiento de perros personalizado. Modificación de conducta sin salir de casa. ¡Consulta sin cargo!' },
      { name: 'keywords', content: 'adiestramiento mar del plata, adiestramiento canino mar del plata, educacion canina mar del plata, adiestrador canino mdq, entrenamiento de perros, modificación conducta canina' },
      { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
      { name: 'googlebot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
      { name: 'language', content: 'Spanish' },

      { property: 'og:title', content: 'Adiestramiento Canino Mar del Plata | Magalí' },
      { property: 'og:description', content: 'Educación y adiestramiento de perros a domicilio en Mar del Plata. Entrenamiento personalizado para mejorar la conducta de tu perro.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://magali-adiestramiento.vercel.app/' },
      { property: 'og:image', content: 'https://magali-adiestramiento.vercel.app/assets/layne.jpeg' },
      { property: 'og:locale', content: 'es_AR' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Adiestramiento Canino Mar del Plata | Magalí' },
      { name: 'twitter:description', content: 'Educación y adiestramiento de perros a domicilio. ¡Consulta sin cargo!' },
      { name: 'twitter:image', content: 'https://magali-adiestramiento.vercel.app/assets/layne.jpeg' },
    ]);

  }
}
