export interface Product {
  id: number;
  title: string;
  subtitle: string;
  description: string[];
  image: string;
  uses: string[];
  properties: string[];
  type: string;              // categoría (hogar, construcción, diseño, etc.)
  backgroundColor?: string;  // color dinámico por tipo
  gradient?: string;         // opcional: si querés usar degradados
}
