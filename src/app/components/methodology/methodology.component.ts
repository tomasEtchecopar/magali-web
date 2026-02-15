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
  templateUrl: './methodology.component.html',
  styleUrls: ['./methodology.component.css'],
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
