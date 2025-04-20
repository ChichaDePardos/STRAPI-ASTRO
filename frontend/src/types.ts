export interface HomeData {
    tituloHero: string;
    descripcionHero: string;
    subtituloHero: string;
    descripcion2Hero: Array<{ type: string; children: Array<{ type: string; text: string }> }>;
    coverHero: {
      url: string;
    };
  }
  