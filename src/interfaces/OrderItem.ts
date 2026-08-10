export type OrderItem = {
  id: number;
  order_id: number;
  product_id: number;
  variant_id: number;
  quantity: number;
  unit_price: number;
  subtotal: number;
};

export const defaultOrderItem: OrderItem = {
  id: 0,
  order_id: 0,
  product_id: 0,
  variant_id: 0,
  quantity: 0,
  unit_price: 0,
  subtotal: 0,
};
