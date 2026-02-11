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
  @Input() sidebarOpen: boolean = false;  // ← NECESARIO PARA MOBILE

  @Output() sectionChange = new EventEmitter<string>();
  @Output() closeSidebar = new EventEmitter<void>();

  sections = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'quienes-somos', label: 'Quienes Somos' },
    { id: 'productos', label: 'Productos' },
    { id: 'faq', label: 'FAQ' },
    { id: 'tienda', label: 'Tienda' },
    { id: 'testimonios', label: 'Testimonios' },
    { id: 'contactenos', label: 'Contáctenos' },
  ];

  selectSection(sectionId: string) {
  this.sectionChange.emit(sectionId);   // avisamos al padre
  this.sidebarOpen = false;        
    this.closeSidebar.emit();  
    console.log("se emitio el side bar close desde elñ side bar component")   // 🔥 autocierre en mobile
}

}
