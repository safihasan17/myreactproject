export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  role_id: number;
  password: string;
  avatar: string;
  status: "active" | "inactive";
};
 
export const defaultUser: User = {
  id: 0,
  name: "",
  email: "",
  phone: "",
  role_id: 0,
  password: "",
  avatar: "",
  status: "active",
}