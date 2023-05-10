export type CertificatesJSON = {
  [key: string]: {
    src: string;
    title: string;
  };
};

export type Certificate = {
  title: string;
  src: string;
};
