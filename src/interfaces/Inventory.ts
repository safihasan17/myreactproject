export type Inventory = {
  id: number;
  product_id: number;
  branch_id: number;
  quantity: number;
  reorder_level: number;
};
 
export const defaultInventory: Inventory = {
  id: 0,
  product_id: 0,
  branch_id: 0,
  quantity: 0,
  reorder_level: 10,
};