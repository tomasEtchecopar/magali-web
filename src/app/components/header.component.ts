import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img 
          alt="Dog trainer working with a golden retriever in a park setting" 
          class="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3CsdcEgaDkdAhQE6RKqkyScC3tWh0nanhffbjke6qeFPQFG7VrzRNXh-E6NtRQTq2t7joXlIGwwTK1GM-RLzRNkMj20ppmnHu3ojbWqoiyyZXJymO4dewlzWhjxYxkZHwYc9BK-2N4IMKwB9nu134UDYXDxsvXX3DBTLmovJXTyIiOY7kPMzdR0Z5v6uh93yZJ8z9fl4TerRpHpZnS8Yemw-Y-4V7KEv6PhQ2uFFCersYeoTVIfc6cpS3To3Y0Y8DgvQ-68ztOBY">
        <div class="absolute inset-0 bg-gradient-to-r from-background-light via-background-light/80 to-transparent dark:from-background-dark dark:via-background-dark/80"></div>
      </div>
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:w-2/3 xl:w-1/2">
          <div class="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
            Mar del Plata, Argentina
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
            Adiestramiento Real para <span class="text-primary">Perros Reales</span>.
          </h1>
          <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg leading-relaxed">
            Trabajo personalizado para mejorar la conducta de tu perro, según su realidad y tu entorno.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a class="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-semibold rounded-lg text-white bg-primary hover:bg-green-600 md:text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5" href="https://wa.me/5492230000000">
              <span class="material-icons mr-2">whatsapp</span>
              Escribime por WhatsApp
            </a>
            <a class="inline-flex justify-center items-center px-8 py-4 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-lg text-gray-700 dark:text-gray-200 bg-white/50 dark:bg-black/50 hover:bg-white dark:hover:bg-gray-800 backdrop-blur-sm transition-all" href="#problemas">
              Ver cómo trabajo
            </a>
          </div>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {}
