import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FaqItem {
  question: string;
  answer: string;
  sectionTitle: string;
  sectionKey: string;
}

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent {
  // Lista de preguntas frecuentes
  faqs: FaqItem[] = [
    {
      question: '¿Qué es el cannabis medicinal?',
      answer:
        'El cannabis medicinal es el uso terapéutico de los componentes activos de la planta (cannabinoides como el CBD y THC) para tratar diversas afecciones físicas y mentales, de manera segura y natural.',
      sectionTitle: 'Sobre Cannabis Medicinal en General',
      sectionKey: 'sobre-cannabis',
    },
    {
      question: '¿Es legal el cannabis medicinal en Argentina?',
      answer:
        'Sí. Desde 2017 el uso de cannabis medicinal es legal en Argentina para personas registradas en el Reprocann, y también puede ser adquirido sin receta cuando no contiene THC (solo CBD).',
      sectionTitle: 'Sobre Cannabis Medicinal en General',
      sectionKey: 'sobre-cannabis',
    },

    {
      question: '¿Cuál es la diferencia entre los aceites Forte, Confort y Relax?',
      answer:
        'Forte: recomendado para dolores intensos, enfermedades crónicas, fibromialgia, artritis, etc.\nConfort: ideal para la ansiedad, estrés, colon irritable, estados de ánimo alterados.\nRelax: para insomnio, contracturas, descanso profundo, bruxismo y tensión emocional.',
      sectionTitle: 'Aceites Medicinales iCann (CBD, THC, Full Spectrum)',
      sectionKey: 'aceites-medicinales',
    },
    {
      question: '¿Qué beneficios tiene el aceite para mascotas?',
      answer:
        'Nuestro aceite CBD para animales puede ayudar a tratar: Dolor crónico y articular, Ansiedad por separación o tormentas Epilepsia y convulsiones,Pérdida de apetito, Trastornos del sueño o envejecimiento',
      sectionTitle: 'Aceite CBD para Mascotas',
      sectionKey: 'aceite-mascotas',
    },
    {
      question: '¿Para qué sirve la crema CBD?',
      answer:
        'Está diseñada para: Dolores musculares y articulares, Inflamación localizada, Problemas de piel como dermatitis o psoriasis, Mejorar elasticidad y textura cutánea',
      sectionTitle: 'Crema Corporal CBD',
      sectionKey: 'crema-cbd',
    },
    {
      question: '¿Tiene efecto psicoactivo?',
      answer:
        'No. Es de uso tópico, sin THC, y actúa localmente sin ingresar al torrente sanguíneo.',
      sectionTitle: 'Crema Corporal CBD',
      sectionKey: 'crema-cbd',
    },
    {
      question: '¿Se puede usar a diario?',
      answer:
        'Sí, incluso varias veces al día si es necesario.',
      sectionTitle: 'Crema Corporal CBD',
      sectionKey: 'crema-cbd',
    },
    {
      question: '¿Qué diferencia hay entre THC, CBD y Full Spectrum?',
      answer:
        'CBD (Cannabidiol): no psicoactivo, usado para ansiedad, dolor, epilepsia, sueño, etc.\nTHC (Tetrahidrocannabinol): psicoactivo, se usa bajo supervisión médica para casos de dolor, espasticidad, insomnio resistente, etc.\nFull Spectrum: contiene múltiples cannabinoides (CBD, THC, CBG, etc.) en equilibrio, lo que mejora su efectividad gracias al “efecto séquito”.',
      sectionTitle: 'Sobre Cannabis Medicinal en General',
      sectionKey: 'sobre-cannabis',
    },
    
    {
      question: '¿Es seguro para perros y gatos?',
      answer:
        'Sí, es totalmente seguro. Nuestro aceite está formulado especialmente para animales, sin THC, con concentración de CBD adecuada y sabor agradable.',
      sectionTitle: 'Gel Criogénico CBD',
      sectionKey: 'aceite-mascotas',
    },
    {
      question: '¿Cómo se usa el aceite?',
      answer:
        'Se administra por vía sublingual (bajo la lengua). La dosis es personalizada y se recomienda comenzar con dosis bajas e ir ajustando.',
      sectionTitle: 'Aceites Medicinales iCann (CBD, THC, Full Spectrum)',
      sectionKey: 'aceites-medicinales',
    },
    {
      question: '¿Cuánto tarda en hacer efecto?',
      answer:
        'Varía según cada persona. En general, los efectos comienzan a notarse entre los primeros 5 y 15 días de uso continuo.',
      sectionTitle: 'Aceites Medicinales iCann (CBD, THC, Full Spectrum)',
      sectionKey: 'aceites-medicinales',
    },
     {
      question: '¿Puedo combinar el aceite con otros medicamentos?',
      answer:
        'Sí, pero siempre recomendamos consultar con un profesional de salud, especialmente si estás tomando psicofármacos, anticonvulsivos o anticoagulantes.',
      sectionTitle: 'Aceites Medicinales iCann (CBD, THC, Full Spectrum)',
      sectionKey: 'aceites-medicinales',
    },
    {
      question: '¿Cómo se administra?',
      answer:
        'Por gotas, directo en la boca o mezclado con el alimento. La dosis depende del peso del animal y la patología. Incluimos guía de uso.',
      sectionTitle: 'Gel Criogénico CBD',
      sectionKey: 'aceite-mascotas',
    },
    {
      question: '¿Qué es el gel criogénico CBD y para qué sirve?',
      answer:
        'Es un gel refrescante con CBD ideal para:\nRecuperación muscular post entrenamiento\nDolores cervicales, lumbares o articulares\nTendinitis, golpes y contracturas',
      sectionTitle: 'Gel Criogénico CBD',
      sectionKey: 'gel-criogenico',
    },
    {
      question: '¿Qué lo diferencia de la crema?',
      answer:
        'Tiene efecto “frío” inmediato que ayuda a desinflamar más rápido, y es ideal para uso puntual en zonas de dolor agudo o reciente.',
      sectionTitle: 'Gel Criogénico CBD',
      sectionKey: 'gel-criogenico',
    },
    {
      question: '¿Hacen envíos a todo el país?',
      answer:
        'Sí, realizamos envíos a toda la Argentina por correo o mensajería privada (según zona).',
      sectionTitle: 'Información de Compra y Envíos',
      sectionKey: 'envios',
    },
  ];

  openIndex: number | null = null;

  /** Devuelve un array de secciones únicas, con sus títulos y keys */
  get sections(): { title: string; key: string }[] {
    const unique: { title: string; key: string }[] = [];
    for (const f of this.faqs) {
      if (!unique.find((s) => s.key === f.sectionKey)) {
        unique.push({ title: f.sectionTitle, key: f.sectionKey });
      }
    }
    return unique;
  }

  /** Devuelve las preguntas de una sección específica */
  getFaqsBySection(sectionKey: string) {
    return this.faqs.filter((f) => f.sectionKey === sectionKey);
  }

  toggle(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }
}