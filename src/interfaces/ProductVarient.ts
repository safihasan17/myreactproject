export type ProductVarient = {
  id: number;
  product_id: number;
  variant_name: string;
  sku: string;
  price_adjustment: number;
};
 
export const defaultProductVarient: ProductVarient = {
  id: 0,
  product_id: 0,
  variant_name: "",
  sku: "",
  price_adjustment: 0,
};
 