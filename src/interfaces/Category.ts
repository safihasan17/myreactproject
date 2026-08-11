export type Category = {
  id: number;
  name: string;
  parent_id: number;
};
 
export const defaultCategory: Category = {
  id: 0,
  name: "",
  parent_id: 0,
};