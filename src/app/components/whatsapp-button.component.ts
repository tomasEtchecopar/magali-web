import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <a 
      aria-label="Chat on WhatsApp" 
      class="fixed bottom-6 right-6 z-50 bg-primary hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center group" 
      href="https://wa.me/5492230000000">
      <span class="material-icons text-3xl">whatsapp</span>
      <span class="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap pl-0 group-hover:pl-2 font-medium">¡Consultame!</span>
    </a>
  `
})
export class WhatsappButtonComponent {}
