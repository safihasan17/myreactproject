export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: "admin" | "manager" | "cashier" | "";
  password: string;
  avatar: string;
  status: "active" | "inactive";
};
 
export const defaultUser: User = {
  id: 0,
  name: "",
  email: "",
  phone: "",
  role: "",
  password: "",
  avatar: "",
  status: "active",
}