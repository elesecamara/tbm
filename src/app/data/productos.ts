export interface DetallesMultilenguaje {
  es?: {
    capas?: string;
    capaSuperior?: string;
    capaInferior?: string;
    espesor?: string;
    temperatura?: string;
    diametroPolea?: string;
    tensionTrabajo?: string;
    nota?: string;
  };
  en?: {
    capas?: string;
    capaSuperior?: string;
    capaInferior?: string;
    espesor?: string;
    temperatura?: string;
    diametroPolea?: string;
    tensionTrabajo?: string;
    nota?: string;
  };
}

export interface Producto {
  nombre: { es: string; en: string };
  imagen: string;
  categoria: string;
  detalles: DetallesMultilenguaje;
}

export const PRODUCTOS: Producto[] = [
  // ----------------------- Productos PVK -----------------------
  {
    nombre: { es: "PVK 120 (BLANCA Y NEGRA lisa)", en: "PVK 120 (BLACK AND WHITE smooth)" },
    imagen: "PVK_120_(BLANCA_Y_NEGRA_lisa).jpg",
    categoria: "",
    detalles: {
      es: { capaSuperior: "lisa", capaInferior: "cepillada", espesor: "3.6 mm", temperatura: "0-82 °C", diametroPolea: "2”", tensionTrabajo: "120lb/in" },
      en: { capaSuperior: "smooth", capaInferior: "brushed", espesor: "3.6 mm", temperatura: "0-82 °C", diametroPolea: "2”", tensionTrabajo: "120lb/in" }
    }
  },
  {
    nombre: { es: "PVK 120 (BLANCA Y NEGRA media luna)", en: "PVK 120 (BLACK AND WHITE half-moon)" },
    imagen: "PVK_120_(BLANCA_Y_NEGRA)_media_luna.jpg",
    categoria: "",
    detalles: {
      es: { capaSuperior: "con medias lunas (agarre)", capaInferior: "cepillada", espesor: "3.6 mm", temperatura: "0-82 °C", diametroPolea: "2”", tensionTrabajo: "120lb/in" },
      en: { capaSuperior: "with half moons (grip)", capaInferior: "brushed", espesor: "3.6 mm", temperatura: "0-82 °C", diametroPolea: "2”", tensionTrabajo: "120lb/in" }
    }
  },
  {
    nombre: { es: "PVK 150 NEGRA", en: "PVK 150 BLACK" },
    imagen: "PVK_150_NEGRA.jpg",
    categoria: "",
    detalles: {
      es: { capaSuperior: "lisa", capaInferior: "fricción", espesor: "4.5 mm", temperatura: "0-82 °C", diametroPolea: "2.5”", tensionTrabajo: "150lb/in" },
      en: { capaSuperior: "smooth", capaInferior: "friction", espesor: "4.5 mm", temperatura: "0-82 °C", diametroPolea: "2.5”", tensionTrabajo: "150lb/in" }
    }
  },
  {
    nombre: { es: "PVK 200 (BLANCA Y NEGRA)", en: "PVK 200 (BLACK AND WHITE)" },
    imagen: "PVK_200_(BLANCA_Y_NEGRA).jpg",
    categoria: "",
    detalles: {
      es: { capaSuperior: "lisa", capaInferior: "cepillada", espesor: "5.5 mm", temperatura: "0-82 °C", diametroPolea: "4”", tensionTrabajo: "200lb/in" },
      en: { capaSuperior: "smooth", capaInferior: "brushed", espesor: "5.5 mm", temperatura: "0-82 °C", diametroPolea: "4”", tensionTrabajo: "200lb/in" }
    }
  },
  {
    nombre: { es: "PVK 350 NEGRA", en: "PVK 350 BLACK" },
    imagen: "PVK_350_NEGRA.jpg",
    categoria: "",
    detalles: {
      es: { capaSuperior: "lisa", capaInferior: "fricción", espesor: "7.5 mm", temperatura: "0-82 °C", diametroPolea: "8”", tensionTrabajo: "350lb/in" },
      en: { capaSuperior: "smooth", capaInferior: "friction", espesor: "7.5 mm", temperatura: "0-82 °C", diametroPolea: "8”", tensionTrabajo: "350lb/in" }
    }
  },
  // ----------------------- Productos Grip Top -----------------------
  {
    nombre: { es: "Grip Top Negro", en: "Grip Top Black" },
    imagen: "Grip_Top_Negro.jpg",
    categoria: "",
    detalles: {
      es: { capas: "2 (3 capas, menos común)", capaSuperior: "áspero (neopreno)", capaInferior: "poliéster", espesor: "5.7 mm", temperatura: "-40 - 121 °C", diametroPolea: "2”", tensionTrabajo: "150lb/in", nota: "la más suave de grip top" },
      en: { capas: "2 (3 layers, less common)", capaSuperior: "rough (neoprene)", capaInferior: "polyester", espesor: "5.7 mm", temperatura: "-40 - 121 °C", diametroPolea: "2”", tensionTrabajo: "150lb/in", nota: "softest grip top" }
    }
  },
  {
    nombre: { es: "Grip Top Azul", en: "Grip Top Blue" },
    imagen: "Grip_Top_Azul.jpg",
    categoria: "",
    detalles: {
      es: { capas: "2 (3 capas, menos común)", capaSuperior: "áspero (nitrilo)", capaInferior: "poliéster", espesor: "5.7 mm", temperatura: "-40 - 121 °C", diametroPolea: "2”", tensionTrabajo: "150lb/in", nota: "no mancha" },
      en: { capas: "2 (3 layers, less common)", capaSuperior: "rough (nitrile)", capaInferior: "polyester", espesor: "5.7 mm", temperatura: "-40 - 121 °C", diametroPolea: "2”", tensionTrabajo: "150lb/in", nota: "doesn't stain" }
    }
  },
  {
    nombre: { es: "Grip Top Azul sin grapa", en: "Grip Top Blue without staple" },
    imagen: "Grip_Top_Azul_sin_grapa.jpg",
    categoria: "",
    detalles: {
      es: { capas: "2 (3 capas, menos común)", capaSuperior: "áspero (nitrilo)", capaInferior: "poliéster", espesor: "6.3 mm", temperatura: "-40 - 121 °C", diametroPolea: "3”", tensionTrabajo: "150lb/in", nota: "no requiere grapa o vulcanizado. No pierde resistencia por tensión" },
      en: { capas: "2 (3 layers, less common)", capaSuperior: "rough (nitrile)", capaInferior: "polyester", espesor: "6.3 mm", temperatura: "-40 - 121 °C", diametroPolea: "3”", tensionTrabajo: "150lb/in", nota: "does not require staple or vulcanization. Does not lose strength under tension" }
    }
  },
 
    {
    nombre: { es: "Grip Top Azul", en: "Grip Top Blue" },
    imagen: "Grip_Top_Azul.jpg",
    categoria: "",
    detalles: {
      es: { capas: "2 (3 capas, menos común)", capaSuperior: "áspero (nitrilo)", capaInferior: "poliéster", espesor: "5.7 mm", temperatura: "-40 - 121 °C", diametroPolea: "2”", tensionTrabajo: "150lb/in", nota: "no mancha" },
      en: { capas: "2 (3 layers, less common)", capaSuperior: "rough (nitrile)", capaInferior: "polyester", espesor: "5.7 mm", temperatura: "-40 - 121 °C", diametroPolea: "2”", tensionTrabajo: "150lb/in", nota: "does not stain" }
    }
  },
  {
    nombre: { es: "Grip Top Azul sin grapa", en: "Grip Top Blue no clip" },
    imagen: "Grip_Top_Azul_sin_grapa.jpg",
    categoria: "",
    detalles: {
      es: { capas: "2 (3 capas, menos común)", capaSuperior: "áspero (nitrilo)", capaInferior: "poliéster", espesor: "6.3 mm", temperatura: "-40 - 121 °C", diametroPolea: "3”", tensionTrabajo: "150lb/in", nota: "no requiere grapa o vulcanizado. No pierde resistencia por tensión" },
      en: { capas: "2 (3 layers, less common)", capaSuperior: "rough (nitrile)", capaInferior: "polyester", espesor: "6.3 mm", temperatura: "-40 - 121 °C", diametroPolea: "3”", tensionTrabajo: "150lb/in", nota: "no clip or vulcanization needed. Does not lose strength" }
    }
  },
  {
    nombre: { es: "Pure Gum", en: "Pure Gum" },
    imagen: "Pure_Gum.jpg",
    categoria: "",
    detalles: {
      es: { capas: "1", capaSuperior: "liso adherente", capaInferior: "poliéster", espesor: "5.3 mm", temperatura: "-40 - 121 °C", diametroPolea: "4”", tensionTrabajo: "150lb/in", nota: "no requiere grapa o vulcanizado. No pierde resistencia por tensión" },
      en: { capas: "1", capaSuperior: "smooth adhesive", capaInferior: "polyester", espesor: "5.3 mm", temperatura: "-40 - 121 °C", diametroPolea: "4”", tensionTrabajo: "150lb/in", nota: "no clip or vulcanization needed. Does not lose strength" }
    }
  },
  {
    nombre: { es: "Hule Lona 3 capas", en: "Canvas Rubber 3 layers" },
    imagen: "Hule_Lona_3_capas.jpg",
    categoria: "",
    detalles: {
      es: { capas: "3", capaSuperior: "fricción", capaInferior: "fricción", espesor: "3.2 mm", temperatura: "-40 - 121 °C", diametroPolea: "2.5”", tensionTrabajo: "90lb/in", nota: "la más económica" },
      en: { capas: "3", capaSuperior: "friction", capaInferior: "friction", espesor: "3.2 mm", temperatura: "-40 - 121 °C", diametroPolea: "2.5”", tensionTrabajo: "90lb/in", nota: "most economical" }
    }
  },
  {
    nombre: { es: "Hule Lona 4 capas", en: "Canvas Rubber 4 layers" },
    imagen: "Hule_Lona_4_capas.jpg",
    categoria: "",
    detalles: {
      es: { capas: "4", capaSuperior: "fricción", capaInferior: "fricción", espesor: "4.3 mm", temperatura: "-40 - 121 °C", diametroPolea: "3”", tensionTrabajo: "120lb/in" },
      en: { capas: "4", capaSuperior: "friction", capaInferior: "friction", espesor: "4.3 mm", temperatura: "-40 - 121 °C", diametroPolea: "3”", tensionTrabajo: "120lb/in" }
    }
  },
  {
    nombre: { es: "Hule Lona 5 capas", en: "Canvas Rubber 5 layers" },
    imagen: "Hule_Lona_5_capas.jpg",
    categoria: "",
    detalles: {
      es: { capas: "5", capaSuperior: "fricción", capaInferior: "fricción", espesor: "5.4 mm", temperatura: "-40 - 121 °C", diametroPolea: "3.5”", tensionTrabajo: "150lb/in" },
      en: { capas: "5", capaSuperior: "friction", capaInferior: "friction", espesor: "5.4 mm", temperatura: "-40 - 121 °C", diametroPolea: "3.5”", tensionTrabajo: "150lb/in" }
    }
  },
  {
    nombre: { es: "Nitrilo Blanco 3 capas", en: "White Nitrile 3 layers" },
    imagen: "Nitrilo_Blanco_3_capas.jpg",
    categoria: "Alimenticia",
    detalles: {
      es: { capaSuperior: "lisa", capaInferior: "fricción", espesor: "3.5 mm", temperatura: "-18 - 121 °C", diametroPolea: "3”", tensionTrabajo: "150lb/in", nota: "más dura que PVC. Recubierta de silicón. Antiadherente" },
      en: { capaSuperior: "smooth", capaInferior: "friction", espesor: "3.5 mm", temperatura: "-18 - 121 °C", diametroPolea: "3”", tensionTrabajo: "150lb/in", nota: "harder than PVC. Silicone coated. Non-stick" }
    }
  },
  {
    nombre: { es: "Banda para cortadora de vidrio y metales", en: "Glass & Metal Cutter Belt" },
    imagen: "Banda_para_cortadora_de_vidrio_y_metales.jpg",
    categoria: "Litografia",
    detalles: {
      es: { capaSuperior: "transparente y liso", capaInferior: "fricción", espesor: "4.7 mm", temperatura: "-29 - 82 °C", diametroPolea: "2.5”", tensionTrabajo: "150lb/in", nota: "para estampado, suaje y troquelado" },
      en: { capaSuperior: "transparent and smooth", capaInferior: "friction", espesor: "4.7 mm", temperatura: "-29 - 82 °C", diametroPolea: "2.5”", tensionTrabajo: "150lb/in", nota: "for stamping, die-cutting, and embossing" }
    }
  },
  // Cartonera
  { nombre: { es: "Cartonera 1", en: "Cartonera 1" }, imagen: "cartonera5.jpg", categoria: "Cartonera", detalles: { es: {capaSuperior: "I15"}, en: {capaSuperior: "I15"} } },
  { nombre: { es: "Cartonera 2", en: "Cartonera 2" }, imagen: "cartonera3.jpg", categoria: "Cartonera", detalles: { es: {capaSuperior: "I20"}, en: {capaSuperior: "I20"} } },
  { nombre: { es: "Cartonera 3", en: "Cartonera 3" }, imagen: "cartonera4.jpg", categoria: "Cartonera", detalles: { es: {capaSuperior: "I26"}, en: {capaSuperior: "I26"} } },
  { nombre: { es: "Cartonera 4", en: "Cartonera 4" }, imagen: "cartonera2.jpg", categoria: "Cartonera", detalles: { es: {capaSuperior: "CT-26"}, en: {capaSuperior: "CT-26"} } },
  { nombre: { es: "Cartonera 5", en: "Cartonera 5" }, imagen: "cartonera1.jpg", categoria: "Cartonera", detalles: { es: {capaSuperior: "I30"}, en: {capaSuperior: "I30"} } },
  // Litografía
  { nombre: { es: "Litografía 1", en: "Lithography 1" }, imagen: "litografia-3.jpg", categoria: "Litografia", detalles: { es: {capaSuperior: "B11T"}, en: {capaSuperior: "B11T"} } },
  { nombre: { es: "Litografía 2", en: "Lithography 2" }, imagen: "litografia-2.jpg", categoria: "Litografia", detalles: { es: {capaSuperior: "BTI-5"}, en: {capaSuperior: "BTI-5"} } },
  { nombre: { es: "Litografía 3", en: "Lithography 3" }, imagen: "litografia-1.jpg", categoria: "Litografia", detalles: { es: {capaSuperior: "TAM-5"}, en: {capaSuperior: "TAM-5"} } },
  { nombre: { es: "Litografía 4", en: "Lithography 4" }, imagen: "litografia-4.jpg", categoria: "Litografia", detalles: { es: {capaSuperior: "TAF-4"}, en: {capaSuperior: "TAF-4"} } },
  { nombre: { es: "Litografía 1", en: "Lithography 1" }, imagen: "litografia-7.jpg", categoria: "Litografia", detalles: { es: {capaSuperior: "C39"}, en: {capaSuperior: "C39"} } },
  { nombre: { es: "Litografía 2", en: "Lithography 2" }, imagen: "litografia-6.jpg", categoria: "Litografia", detalles: { es: {capaSuperior: "C42"}, en: {capaSuperior: "C42"} } },
  { nombre: { es: "Litografía 3", en: "Lithography 3" }, imagen: "litografia-5.jpg", categoria: "Litografia", detalles: { es: {capaSuperior: "C60"}, en: {capaSuperior: "C60"} } },


];