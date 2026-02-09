import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 bg-earth-200/30 dark:bg-gray-800/20" id="bio">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div class="lg:col-span-5 mb-10 lg:mb-0 relative">
            <div class="absolute inset-0 bg-primary/20 rounded-2xl transform translate-x-3 translate-y-3"></div>
            <img
              alt="Professional dog trainer standing confidently with a german shepherd"
              class="relative rounded-2xl shadow-xl w-full object-cover h-[500px]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoH_akZfHpaN9XQoJz_ENhzXPVWOpdd-3yKP4Fm-vtZLwLv2chRd7AUFO55V-10yO4rGlqf2SAAGGBq4HZsLnULYspdBMIgOZcK8Xvt0v8W40U7Z-V2DlXdnbselibeDJN2x14PvmbbXJGBp8djMHLOnhBnzUgVdNxvIN0sCIWLxL3dRixfc9R0VkyT9lL0Jn9ptuE0Jo-3hL28ZJ9Cc2ihNHG9Pc-eusI4t41wh0zD-OtONqyA3QeTqN1S90Zgpqw5r78hJuSt2Q">
          </div>
          <div class="lg:col-span-7">
            <div class="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-white dark:bg-gray-800 rounded-full border border-primary/20">
              Sobre mí
            </div>
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-6">
              Más que premios, <br/>buscamos equilibrio.
            </h2>
            <div class="prose prose-lg text-gray-600 dark:text-gray-300">
              <p class="mb-4">
                Hola, soy Magalí. Me dedico al adiestramiento canino en Mar del Plata con un enfoque práctico y adaptado a cada perro.
              </p>
              <p class="mb-4">
                Mi trabajo se basa en observar el comportamiento real del perro y su vínculo con el dueño, para corregir problemas desde la raíz.
              </p>
              <p class="mb-8">
                No creo en recetas únicas. Cada perro necesita un enfoque distinto según su carácter, entorno y nivel de estrés.
              </p>
            </div>
            <ul class="space-y-4 mb-8">
              <li class="flex items-start">
                <span class="material-icons text-primary mr-3 mt-1">check_circle</span>
                <span class="text-gray-700 dark:text-gray-300">Enfoque realista y sin falsas promesas.</span>
              </li>
              <li class="flex items-start">
                <span class="material-icons text-primary mr-3 mt-1">check_circle</span>
                <span class="text-gray-700 dark:text-gray-300">Sesiones a domicilio en Mar del Plata.</span>
              </li>
              <li class="flex items-start">
                <span class="material-icons text-primary mr-3 mt-1">check_circle</span>
                <span class="text-gray-700 dark:text-gray-300">Herramientas prácticas para el día a día.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `
})
export class BioComponent {}
