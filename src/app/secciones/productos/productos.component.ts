
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './product.model';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  currentSlide = 0;

  products: Product[] = [
    // --- NO TOQUÉ NADA DE TU DATA ---
    {
      id: 1,
      title: 'Aceite Forte',
      subtitle: 'Quimiotipo I',
      image: 'productos/Icann_Aceite_Forte.png',
      backgroundColor: 'linear-gradient(135deg, #FFA5C9, #A7D8FF)',
      description: [
        'Alivio del dolor crónico, Parkinson, esclerosis múltiple, epilepsia, glaucoma, artrosis, artritis, náuseas, estrés postraumático, Tourette, Alzheimer, asma y apnea del sueño.'
      ],
      uses: [
        'Dolor crónico',
        'Trastornos neurológicos',
        'Inflamación',
        'Náuseas y estrés postraumático'
      ],
      properties: [
        'Neuroprotector',
        'Antiinflamatorio',
        'Analgésico',
        'Antioxidante',
        'Relajante muscular',
        'Antiemético'
      ],
      type: 'Aceites'
    },

    {
      id: 2,
      title: 'Aceite Confort',
      subtitle: 'Quimiotipo II',
      image: 'productos/Icann_Aceite_Confort.png',
      backgroundColor: 'linear-gradient(135deg, #FFA5C9, #A7D8FF)',
      description: [
        'Control de convulsiones, mejora del sueño, alivio de ansiedad, depresión y dolor. Apoyo en enfermedades neurodegenerativas, autismo e inflamaciones intestinales.'
      ],
      uses: [
        'Convulsiones',
        'Sueño',
        'Ansiedad',
        'Dolor e inflamación'
      ],
      properties: [
        'Neuroprotector',
        'Antiinflamatorio',
        'Ansiolítico',
        'Relajante muscular',
        'Antibacteriano'
      ],
      type: 'Aceites'
    },

    {
      id: 3,
      title: 'Aceite Relax',
      subtitle: 'Quimiotipo III',
      image: 'productos/Icann_Aceite_Relax.png',
      backgroundColor: 'linear-gradient(135deg, #FFA5C9, #A7D8FF)',
      description: [
        'Control de convulsiones, mejora del sueño, manejo del autismo, alivio de estrés y dolor muscular.'
      ],
      uses: [
        'Sueño',
        'Estrés',
        'Dolor muscular',
        'Convulsiones'
      ],
      properties: [
        'Antiinflamatorio',
        'Relajante muscular',
        'Antibacteriano',
        'Regulador inmune'
      ],
      type: 'Aceites'
    },

    {
      id: 4,
      title: 'Mascotas',
      subtitle: 'CBD Quimitipo III',
      image: 'productos/Icann_Aceite_Mascotas.png',
      backgroundColor: 'linear-gradient(135deg, #FFA5C9, #A7D8FF)',
      description: [
        'Alivio de dolor, ansiedad y mejora de movilidad. Apoyo para convulsiones y estrés.'
      ],
      uses: [
        'Dolor crónico',
        'Ansiedad',
        'Movilidad',
        'Convulsiones'
      ],
      properties: [
        'Antiinflamatorio',
        'Neuroprotector',
        'Anticonvulsionante',
        'Antioxidante'
      ],
      type: 'Tópicos'
    },

    {
      id: 5,
      title: 'Crema Corporal CBD',
      subtitle: 'Crema de cannabis',
      image: 'productos/cream mockup.png',
      backgroundColor: 'linear-gradient(135deg, #FFA5C9, #A7D8FF)',
      description: [
        'Alivia dolor e inflamación en articulaciones. Trata dermatitis, rosácea, acné, psoriasis y piel seca.'
      ],
      uses: [
        'Artrosis / Artritis',
        'Dolor muscular',
        'Piel sensible',
        'Inflamaciones cutáneas'
      ],
      properties: [
        'Antiinflamatoria',
        'Analgésica',
        'Hidratante',
        'Relajante muscular'
      ],
      type: 'Tópicos'
    },

    {
      id: 6,
      title: 'Gel Cannabidiol',
      subtitle: 'Gel Criógeno CBD',
      image: 'productos/Icann_Gel_Cannabidiol.png',
      gradient: 'linear-gradient(135deg, #FFA5C9, #A7D8FF)',
      description: [
        'Gel criógeno para alivio muscular, circulación y reducción de grasa localizada. Ayuda en celulitis, várices y flacidez.'
      ],
      uses: [
        'Recuperación muscular',
        'Tonificación',
        'Circulación',
        'Estética corporal'
      ],
      properties: [
        'Efecto frío',
        'Antiinflamatorio',
        'Reduce grasa subcutánea',
        'Mejora apariencia de la piel'
      ],
      type: 'Tópicos'
    },
    {
      id: 6,
      title: 'Calm Baby Dermosoft',
      subtitle: 'Crema corporal para bebes a base de CBD',
      image: 'productos/Icann_Crema_Dermosoft.png',
      gradient: 'linear-gradient(135deg, #FFA5C9, #A7D8FF)',
      description: [
        'Formulada para calmar la piel sensible del bebé. Ayuda a reducir irritaciones, enrojecimientos y favorece la recuperación de pequeños golpes o rozaduras gracias a la acción natural del árnica. Su rápida absorción hidrata eficazmente y su aroma relajante la hace ideal para rutinas de sueño y cuidado diario.'
      ],
      uses: [
        'Crema con CBD de amplio espectro y árnica, ideal para el uso diario post-baño. Alivia molestias en zonas irritadas y es apto para pieles muy sensibles. También es perfecto para masajes relajantes en piernas, brazos y espalda.',
      ],
      properties: [
        'Efecto frío',
        'Antiinflamatorio',
        'Reduce grasa subcutánea',
        'Mejora apariencia de la piel'
      ],
      type: 'Tópicos'
    }
  ];

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.products.length;
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.products.length) % this.products.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}

