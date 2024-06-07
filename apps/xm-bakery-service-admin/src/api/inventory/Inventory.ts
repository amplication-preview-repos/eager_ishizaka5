import { Product } from "../product/Product";

export type Inventory = {
  createdAt: Date;
  id: string;
  product?: Product | null;
  quantity: number | null;
  updatedAt: Date;
};
