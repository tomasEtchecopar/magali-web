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
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.css'],
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
