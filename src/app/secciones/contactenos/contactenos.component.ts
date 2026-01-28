import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contactenos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent {

  instagramUrl = "https://www.instagram.com/icanncba/";
  
  whatsappUrl = `https://api.whatsapp.com/send?phone=543513938532&text=${encodeURIComponent(
    "Hola! Estoy interesado/a en sus productos y quisiera recibir más información. ¿Podrían ayudarme?"
  )}`;

}
