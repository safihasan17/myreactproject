export interface Product {
  id?: number;
  image: string;
  name: string;
  code: string;
  category: number;
  brand: number;
  price: number;
  unit: string;
  quantity: number;
};

export const defaultProduct: Product = {
  image: "",
  name: "Gaming Joy Stick",
  code: "PRD001",
  category: 0,
  brand: 1,
  price: 99.99,
  unit: "pcs",
  quantity: 150,
};