import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Problem {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-problems',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 bg-white dark:bg-background-dark" id="problemas">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">¿Tu perro presenta estas conductas?</h2>
          <p class="mt-4 text-lg text-gray-500 dark:text-gray-400">Identificar el problema es el primer paso para mejorarlo.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div *ngFor="let problem of problems" class="group bg-earth-100 dark:bg-gray-800/50 p-8 rounded-xl transition-all hover:shadow-md border border-transparent hover:border-primary/30">
            <div class="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
              <span class="material-icons text-3xl">{{ problem.icon }}</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">{{ problem.title }}</h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">{{ problem.description }}</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ProblemsComponent {
  problems: Problem[] = [
    {
      icon: 'pets',
      title: 'Reactividad',
      description: 'Ladridos o tensión excesiva hacia otros perros o personas durante el paseo.'
    },
    {
      icon: 'linear_scale',
      title: 'Tirones de correa',
      description: 'Paseos que se sienten incómodos porque el perro tira constantemente.'
    },
    {
      icon: 'psychology',
      title: 'Estrés y Ansiedad',
      description: 'Dificultad para relajarse en casa, jadeo excesivo o inquietud.'
    },
    {
      icon: 'visibility_off',
      title: 'Falta de atención',
      description: 'Le cuesta prestar atención a tus llamados, especialmente en la calle.'
    }
  ];
}
