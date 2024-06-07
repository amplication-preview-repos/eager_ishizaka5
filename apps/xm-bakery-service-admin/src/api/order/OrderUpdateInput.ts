import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  deliveryStatus?: "Option1" | null;
  orderDate?: Date | null;
  product?: ProductWhereUniqueInput | null;
};
