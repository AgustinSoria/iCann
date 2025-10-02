import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() currentSection: string = '';
  @Output() sectionChange = new EventEmitter<string>();

  sections = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'quienes-somos', label: 'Quienes Somos' },
    { id: 'productos', label: 'Productos' },
    { id: 'faq', label: 'FAQ' },
    { id: 'tienda', label: 'Tienda' },
    { id: 'testimonios', label: 'Testimonios' },
    { id: 'contactenos', label: 'Contáctenos' },
  ];

  selectSection(id: string) {
    this.sectionChange.emit(id);
  }
}
