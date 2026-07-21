import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [],
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.css'
})
export class TiendaComponent {

  @Output() sectionChange = new EventEmitter<string>();

  mostrarMensaje = false;

  abrirMensaje(): void {
    this.mostrarMensaje = true;
  }

  irAContacto(): void {
    this.sectionChange.emit('contactenos');
  }

}