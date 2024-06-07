import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type InventoryUpdateInput = {
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
};
