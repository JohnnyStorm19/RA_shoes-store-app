interface Size {
  size: string;
  available: boolean;
}
interface SendItem {
  id: number;
  price: number;
  count: number;
}

export type IProductCard = {
  id: number;
  category: number;
  title: string;
  price: number;
  images: string[];
};
export interface IProductFull extends IProductCard {
  sku: string;
  manufacturer: string;
  color: string;
  material: string;
  reason: string;
  season: string;
  heelSize: string;
  oldPrice: number;
  sizes: Size[];
}
export type TCategory = {
    id: number;
    title: string
}

export type ICartProduct = {
  id: number;
  title: string;
  size: Size['size'];
  quantity: number;
  price: number;
  overallPrice: number;
}

export interface IContext {
  offset: number;
  offsetStep: number;
  cartProducts: ICartProduct[];
  setCartProducts: React.Dispatch<React.SetStateAction<ICartProduct[]>>;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
}

export interface IFormData {
  owner: {
    phone: string;
    address: string;
  },
  items: SendItem[]
}