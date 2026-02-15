import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  quote: string;
  author: string;
  pet: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      quote: 'Magalí me ayudó a entender mejor a mi perro. No fue magia, pero con paciencia y los consejos que me dio, los paseos son mucho más tranquilos ahora.',
      author: 'Lucía Gómez',
      pet: 'Dueña de Rocco (Ovejero)'
    },
    {
      quote: 'Estaba muy preocupado por cómo Lola se comportaba sola en casa. Aprendí mucho sobre sus necesidades y poco a poco estamos mejorando la convivencia.',
      author: 'Esteban R.',
      pet: 'Dueño de Lola (Mestiza)'
    }
  ];
}
