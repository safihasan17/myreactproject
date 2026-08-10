export type Product = {
  id: number;
  name: string;
  code: string;
  category: string;
  brand: string;
  price: number;
  unit: string;
  quantity: number;
  image: string;
  description: string;
};

export const defaultProduct: Product = {
  id: 0,
  name: "",
  code: "",
  category: "",
  brand: "",
  price: 0,
  unit: "",
  quantity: 0,
  image: "",
  description: "",
};