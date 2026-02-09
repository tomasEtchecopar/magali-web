import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 bg-earth-800 relative overflow-hidden">
      <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(#17cf26 1px, transparent 1px); background-size: 30px 30px;"></div>
      <div class="relative max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">¿Hablamos?</h2>
        <p class="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Contame qué te preocupa de tu perro y veamos cómo podemos trabajarlo juntos.
        </p>
        <a class="inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-lg text-earth-800 bg-primary hover:bg-white hover:text-primary transition-all duration-300 shadow-xl transform hover:-translate-y-1" href="https://wa.me/5492230000000">
          <span class="material-icons mr-2 text-2xl">whatsapp</span>
          Consultar Turno Ahora
        </a>
        <p class="mt-6 text-sm text-gray-400">
          Atención en Mar del Plata y alrededores.
        </p>
      </div>
    </section>
  `
})
export class CtaComponent {}
