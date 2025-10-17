import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from '../secciones/inicio/inicio.component';
import { QuienesSomosComponent } from '../secciones/quienes-somos/quienes-somos.component';
import { ProductosComponent } from '../secciones/productos/productos.component';
import { FaqComponent } from '../secciones/faq/faq.component';
import { TiendaComponent } from '../secciones/tienda/tienda.component';
import { TestimoniosComponent } from '../secciones/testimonios/testimonios.component';
import { ContactenosComponent } from '../secciones/contactenos/contactenos.component';


@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [CommonModule, 
    InicioComponent,
    QuienesSomosComponent,
    ProductosComponent,
    FaqComponent,
    TiendaComponent,
    TestimoniosComponent,
    ContactenosComponent],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.css'
})
export class MainContainerComponent {
  @Input() currentSection!: string;
}
