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


export interface localDataInterface {
  estados: estado[];
  cidades: cidade[];
  bases: base[];
  servidores: servidor[];
}

export interface condominios {
    estado: string,
    cidade: string,
    base: string,
    servidor: {
        name: string,
        ip: string
    }
}

export interface data {
    condominios: condominios[];
}