import { PaginatedPrograms } from "./PaginatedPrograms";

class ProgramSearchResponse {
  paginatedPrograms: PaginatedPrograms | undefined;
  error: string | undefined;

  constructor(input: {data?: PaginatedPrograms, error?: string}) {
    this.paginatedPrograms = input.data
    this.error = input.error
  }

  isError() {
    return this.error !== undefined
  }
}

export default ProgramSearchResponse