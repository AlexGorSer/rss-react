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
