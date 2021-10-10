import { PaginatedPrograms } from "./PaginatedPrograms";
import SearchResponse from "./SearchResponse";

class ProgramSearchResponse implements SearchResponse {
  paginatedData: PaginatedPrograms | undefined;
  error: string | undefined;

  constructor(input: {data?: PaginatedPrograms, error?: string}) {
    this.paginatedData = input.data
    this.error = input.error
  }

  isError() {
    return this.error !== undefined
  }
}

export default ProgramSearchResponse