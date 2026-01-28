import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  @Output() sectionChange = new EventEmitter<string>();

  goSection(section: string) {
    this.sectionChange.emit(section);
  }
}