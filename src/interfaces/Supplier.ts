export type Supplier = {
  id: number;
  name: string;
  phone: string;
  email: string;
  address: string;
};

export const defaultSupplier: Supplier = {
  id: 0,
  name: "",
  phone: "",
  email: "",
  address: "",
};
