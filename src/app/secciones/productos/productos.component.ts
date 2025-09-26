import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  name: string;
  description: string;
  uses: string;
  image: string;
  properties: string;
}

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit, OnDestroy {
  zoomIn: boolean = false;
  products: Product[] = [
    { name: 'Aceite Forte', description: 'Quimiotipo I', uses: 'Alivio del dolor crónico, Parkinson, esclerosis múltiple, epilepsia, glaucuma, artrosis, artritis, naúseas, estrés posttraumático, Tourette, Alzheimer, asma, y apnea del sueño. ', image: 'productos/Forte_20250917_143558_0000.png' , properties: "Neuroprotector, antiinflamatorio, analgésico, antioxidante, relajante muscular, antiemético y promotor del bienestar mental"},
    { name: 'Aceite Confort', description: 'Quimiotipo II', uses: 'Control de convulsiones, mejora del sueño, alivio de ansiedad, depresión, dolor e inflamación. apoyo en enfermedades neurodegenerativas, autismo, inflamaciones instestinales y quimioterapia.', image: 'productos/Confort_20250917_143558_0002.png' , properties: "Neuroprotector, antiinflamatorio, analgésico, antioxidante, ansiolitico, relajante muscular, antibacteriano e inmunomodulador. "},
    { name: 'ACEITE RELAX', description: 'Quimiotipo III', uses: 'Control de convulsiones, mejora del sueño, alivio de ansiedad, depresión y sintomas neurodegenerativos,manejo del autismo, inflamaciones intestinales, apoyo en quimioterapia y añivio muscular ', image: 'productos/4_20250610_212320_0003.png' , properties: "Protege el sistema nervioso, reduce inflamación, dolor, convulsiones, ansiedad y naúseas. Actúa contra espasmos, bacterias, adicciones, y regula el sistema inmune."},
    { name: 'Mascotas', description: 'CBD Quimitio III', uses: 'Alivio de  dolor crónico e inflamación, control de convulsiones, reducción de naúseas, ansiedad y estrés. Mejora del apetito, movilidad y refuerzo del sistema inmune. Apoyo en tratamientos de cáncer y enfermedaades neurodegenerativas.', image: 'productos/Mascotas_20250917_143558_0003.png' , properties: "Antiinflamatorio, analgésico, anticonvulsionante, antitumoral, relajante múscular, antioxidante, ansiolítico y neuroprotector"},
    { name: 'Crema Corporal CBD', description: 'Crema de cannabis', uses: 'Alivia dolor e inflamación en artrosis, artritis, esclerosis múltiple y fibriomalgia. También trata tortícolis, quemaduras, dermatitis, rosácea, piel seca, acné, psoriasis y arrugas.', image: 'productos/cream mockup.png' , properties: "Antiinflamatoria, analgesica, relajante muscular. Alivia dolor articular, mejora la circulación e hidrata la piel."},
    { name: 'Gel Cannabidiol', description: 'Gel Criógeno CBD', uses: 'Alivia el malestar muscular post-ejercicio, mejora la circulación, ayuda a reducir grasa localizada y tonifica músculos, promoviendo bienestar físico y estético, combate atrtritis, reuma, lesiones musculares, alivia celutitis, arañitas, várices y flacidez', image: 'productos/gel  mockup.png', properties: "Enfría la piel,alivia el dolor, reduce inflamación, quema grasa subcutánea y  mejora la tonificación muscular y apariencia de la piel." },
  ];

  currentSlide = 0;

  ngOnInit() {
    window.addEventListener('wheel', this.onScroll, { passive: false });
    this.zoomIn = true;
  }

  ngOnDestroy() {
    window.removeEventListener('wheel', this.onScroll);
  }

  onScroll = (event: WheelEvent) => {
    console.log('Scroll event detected');
    if (event.deltaY > 0) {
      this.nextSlide();
      this.zoomIn = true;
     
    } else {
      this.previousSlide();
    }
    event.preventDefault(); // Esto debería funcionar
  };

  nextSlide() {
    console.log('Attempting to go to next slide');
    if (this.currentSlide < this.products.length - 1) {
      this.currentSlide++;
      console.log(`Moved to slide ${this.currentSlide}`);
      this.scrollToSlide(this.currentSlide);
    } else {
      console.log('Already at the last slide');
    }
  }

  previousSlide() {
    console.log('Attempting to go to previous slide');
    if (this.currentSlide > 0) {
      this.currentSlide--;
      console.log(`Moved to slide ${this.currentSlide}`);
      this.scrollToSlide(this.currentSlide);
    } else {
      console.log('Already at the first slide');
    }
  }

  scrollToSlide(index: number) {
    const slide = document.querySelector(`[data-index="${index}"]`);
    if (slide) {
      slide.scrollIntoView({ behavior: 'smooth' });
      console.log(`Scrolled to slide ${index}`);
    } else {
      console.log(`Slide ${index} not found`);
    }
  }

  getSlideClass(index: number): string {
    return `bg-color-${index + 1}`;
  }
}