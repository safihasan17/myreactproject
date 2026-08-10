export type Order = {
  id: number;
  order_number: string;
  customer_id: number;
  branch_id: number;
  user_id: number;
  subtotal: number;
  discount: number;
  tax: number;
  total: number;
  payment_status: "unpaid" | "partial" | "paid" | "";
  order_status: "pending" | "completed" | "cancelled" | "";
};

export const defaultOrder: Order = {
  id: 0,
  order_number: "",
  customer_id: 0,
  branch_id: 0,
  user_id: 0,
  subtotal: 0,
  discount: 0,
  tax: 0,
  total: 0,
  payment_status: "",
  order_status: "",
};
