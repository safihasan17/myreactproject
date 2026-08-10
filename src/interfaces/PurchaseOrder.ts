export type PurchaseOrder = {
  id: number;
  supplier_id: number;
  branch_id: number;
  user_id: number;
  status: "draft" | "ordered" | "received" | "cancelled" | "";
  total: number;
};
 
export const defaultPurchaseOrder: PurchaseOrder = {
  id: 0,
  supplier_id: 0,
  branch_id: 0,
  user_id: 0,
  status: "",
  total: 0,
};