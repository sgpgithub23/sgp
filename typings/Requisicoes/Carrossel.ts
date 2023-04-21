interface Imagem {
  [formato: string]: {
    sequencia: number;
    nomearquivoimagem: string;
    caminhoarquivologo: string;
    situacaoimagem: string;
    formatoimagem: string;
    caminhohref: string;
    tituloalthref: string;
    textoadicional1: string;
    textoadicional2: string;
    textoadicional3: string;
  };
}

interface ImagensCarousel extends Array<Imagem> {}

interface RegularImageType {
  formato: string;
  sequencia: number;
  nomearquivoimagem: string;
  caminhoarquivologo: string;
  situacaoimagem: string;
  formatoimagem: string;
  caminhohref: string;
  caminhoimagem: string;
  tituloalthref: string;
  textoadicional1: string;
  textoadicional2: string;
  nomeclass: string;
  textoadicional3: string;
}
