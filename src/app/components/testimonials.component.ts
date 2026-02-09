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
  template: `
    <section class="py-20 bg-white dark:bg-background-dark">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Experiencias de mis clientes</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div *ngFor="let testimonial of testimonials" class="bg-background-light dark:bg-gray-800 p-8 rounded-xl border-l-4 border-primary shadow-sm relative">
            <span class="material-icons absolute top-4 right-4 text-4xl text-gray-200 dark:text-gray-700">format_quote</span>
            <p class="text-gray-600 dark:text-gray-300 italic mb-6 text-lg">{{ testimonial.quote }}</p>
            <div class="flex items-center">
              <div class="font-semibold text-gray-900 dark:text-white">{{ testimonial.author }}</div>
              <span class="mx-2 text-gray-400">•</span>
              <div class="text-sm text-gray-500">{{ testimonial.pet }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      quote: 'Martín me ayudó a entender mejor a mi perro. No fue magia, pero con paciencia y los consejos que me dio, los paseos son mucho más tranquilos ahora.',
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
