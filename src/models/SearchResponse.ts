import PaginatedData from "./PaginatedData"

export default interface SearchResponse {

  paginatedData: PaginatedData | undefined;
  error: string | undefined;

  isError(): boolean

}