export type Product = {
  id: number;
  name: string;
  sku: string;
  category_id: number;
  category?:string,
  brand_id: number;
  brand?:string;
  price: number;
  quantity: number;
  image?: File | null,
  image_path?:string;
  is_active: boolean;
};

export const defaultProduct: Product = {
  id: 0,
  name: "",
  sku: "",
  category_id: 0,
  brand_id: 0,
  price: 0,
  quantity: 0,
  is_active: true,
};