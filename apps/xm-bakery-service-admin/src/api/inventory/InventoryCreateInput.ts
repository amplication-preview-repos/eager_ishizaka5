import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type InventoryCreateInput = {
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
};
