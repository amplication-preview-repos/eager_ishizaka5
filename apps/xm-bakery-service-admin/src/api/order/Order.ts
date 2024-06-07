import { Customer } from "../customer/Customer";
import { Product } from "../product/Product";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  deliveryStatus?: "Option1" | null;
  id: string;
  orderDate: Date | null;
  product?: Product | null;
  updatedAt: Date;
};
