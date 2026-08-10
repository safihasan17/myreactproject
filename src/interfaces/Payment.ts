export type Payment = {
  id: number;
  order_id: number;
  method: "cash" | "card" | "mobile_banking" | "";
  amount: number;
  status: "pending" | "success" | "failed" | "";
  transaction_id: string;
};

export const defaultPayment: Payment = {
  id: 0,
  order_id: 0,
  method: "",
  amount: 0,
  status: "",
  transaction_id: "",
};
