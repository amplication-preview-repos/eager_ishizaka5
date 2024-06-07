import { SortOrder } from "../../util/SortOrder";

export type ReportOrderByInput = {
  createdAt?: SortOrder;
  data?: SortOrder;
  id?: SortOrder;
  reportDate?: SortOrder;
  reportType?: SortOrder;
  updatedAt?: SortOrder;
};
