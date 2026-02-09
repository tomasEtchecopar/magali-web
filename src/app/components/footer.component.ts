import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-background-dark text-gray-400 py-12 border-t border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <span class="font-bold text-lg text-white">Adiestramiento<span class="text-primary">MDQ</span></span>
          <p class="text-sm mt-1">Mar del Plata, Buenos Aires, Argentina.</p>
        </div>
        <div class="flex space-x-6 text-sm">
          <a class="hover:text-primary transition-colors" href="#">Instagram</a>
          <a class="hover:text-primary transition-colors" href="#">Facebook</a>
          <span class="text-gray-600">|</span>
          <span>© 2023 Adiestramiento MDQ</span>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}
