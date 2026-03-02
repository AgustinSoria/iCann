import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],  // Asegúrate de importar CommonModule
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() currentSection: string | null = null;
  @Output() sectionChange = new EventEmitter<string>();
  @Output() menuToggle = new EventEmitter<boolean>();
  @Output() closeSidebar = new EventEmitter<boolean>();

  menuOpen = false;

  selectSection(sectionId: string) {
  this.sectionChange.emit(sectionId);
  this.closeSidebar.emit(false); 
}

 toggleMenu() {
  this.menuOpen = !this.menuOpen;
  this.menuToggle.emit(this.menuOpen);
}

  goHome(): void {
    this.sectionChange.emit('inicio');  // <<--- acá resolvemos el problema
    this.menuOpen = false;
  }
}
