import { ResultType } from "./enums/resultType.model";

export class ApiResult<T> {
  result: T;
  resultType: ResultType;
  message: string;
}
