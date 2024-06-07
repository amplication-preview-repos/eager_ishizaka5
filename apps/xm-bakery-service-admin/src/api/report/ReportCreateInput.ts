import { InputJsonValue } from "../../types";

export type ReportCreateInput = {
  data?: InputJsonValue;
  reportDate?: Date | null;
  reportType?: "Option1" | null;
};
