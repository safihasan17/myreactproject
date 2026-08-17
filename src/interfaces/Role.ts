export type Role = {
  id: number;
  name: "admin" | "manager" | "cashier" | "";
  slug: string;
  description: string;
  usersAssigned: number;
  status: "active" | "inactive";
};

export const defaultRole: Role = {
  id: 0,
  name: "",
  slug: "",
  description: "",
  usersAssigned: 0,
  status: "active",
};