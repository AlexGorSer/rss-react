import { SetStateAction } from 'react';

export interface IProducts {
  [key: string]: string | number | string[];
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
export interface IState {
  arrCard?: IProducts[];
  input?: string | null;
  filterArray?: IProducts[];
}

type TLocation = {
  name: string;
  url: string;
};

type TOrigin = {
  name: string;
  url: string;
};

export interface IApi {
  setModal(a: SetStateAction<IApi[]>): void;
  findCard(a: number): void;
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
