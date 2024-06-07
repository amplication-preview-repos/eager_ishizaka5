import { Inventory } from "../inventory/Inventory";
import { Order } from "../order/Order";

export type Product = {
  category: string | null;
  createdAt: Date;
  id: string;
  inventories?: Array<Inventory>;
  name: string | null;
  orders?: Array<Order>;
  price: number | null;
  quantity: number | null;
  updatedAt: Date;
};
