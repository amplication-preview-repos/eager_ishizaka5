import { InputJsonValue } from "../../types";

export type ReportUpdateInput = {
  data?: InputJsonValue;
  reportDate?: Date | null;
  reportType?: "Option1" | null;
};
