import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ReportWhereInput = {
  data?: JsonFilter;
  id?: StringFilter;
  reportDate?: DateTimeNullableFilter;
  reportType?: "Option1";
};
