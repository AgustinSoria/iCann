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
  @Input() currentSection!: string;
  @Output() sectionChange = new EventEmitter<string>();

  selectSection(section: string) {
    this.sectionChange.emit(section);
  }
}