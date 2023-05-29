export interface estado {
    name: string
}
export interface cidade {
  name: string;
}
export interface base {
  name: string;
}
export interface servidor {
  name: string;
  ip: string 
}


export interface infraDataInterface {
  estados: estado[];
  cidades: cidade[];
  bases: base[];
  servidores: servidor[];
}

export interface condominio {
    estado: string,
    cidade: string,
    base: string
}

export interface data {
    condominios: condominio[];
}