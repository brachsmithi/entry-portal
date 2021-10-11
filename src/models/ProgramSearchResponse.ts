import SearchResponse from "./SearchResponse";
import PaginatedData from "./PaginatedData";

class ProgramSearchResponse implements SearchResponse {
  paginatedData: PaginatedData | undefined;
  error: string | undefined;

  constructor(input: {data?: PaginatedData, error?: string}) {
    this.paginatedData = input.data
    this.error = input.error
  }

  isError() {
    return this.error !== undefined
  }
}

export default ProgramSearchResponse