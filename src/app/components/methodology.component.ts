import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Step {
  number: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-methodology',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 bg-background-light dark:bg-background-dark border-y border-gray-200 dark:border-gray-800" id="metodologia">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">Cómo trabajo</h2>
          <p class="mt-4 text-lg text-gray-500 dark:text-gray-400">Un proceso de 3 pasos simple, claro y efectivo.</p>
        </div>
        <div class="relative">
          <div class="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-700 -translate-y-1/2 z-0"></div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            <div *ngFor="let step of steps" class="bg-white dark:bg-gray-900 p-8 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm text-center">
              <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-lg shadow-primary/30 ring-4 ring-white dark:ring-gray-900">
                {{ step.number }}
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">{{ step.title }}</h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class MethodologyComponent {
  steps: Step[] = [
    {
      number: 1,
      title: 'Observación inicial',
      description: 'Evaluación personalizada del entorno y detonantes para entender qué está pasando.'
    },
    {
      number: 2,
      title: 'Trabajo',
      description: 'Aplicación de técnicas de modificación de conducta, estableciendo límites claros y justos para el perro.'
    },
    {
      number: 3,
      title: 'Seguimiento',
      description: 'Te doy herramientas para continuar el proceso. La idea es que aprendas a manejar las situaciones cotidianas.'
    }
  ];
}
