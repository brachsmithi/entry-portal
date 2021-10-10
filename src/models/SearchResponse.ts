import { PaginatedPrograms } from "./PaginatedPrograms";

export default interface SearchResponse {

  paginatedData: PaginatedPrograms | undefined;
  error: string | undefined;

  isError(): boolean

}