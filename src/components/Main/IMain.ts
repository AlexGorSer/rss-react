type TLocation = {
  name: string;
  url: string;
};

type TOrigin = {
  name: string;
  url: string;
};

export interface IApi {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: TOrigin;
  location: TLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface IInfo {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null;
  };
  results: IApi[];
}

export interface IProductsCards extends IApi {
  findCard(a: number): void;
}
