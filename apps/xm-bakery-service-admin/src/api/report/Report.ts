import { JsonValue } from "type-fest";

export type Report = {
  createdAt: Date;
  data: JsonValue;
  id: string;
  reportDate: Date | null;
  reportType?: "Option1" | null;
  updatedAt: Date;
};
