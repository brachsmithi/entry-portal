import { PaginatedPrograms } from "./PaginatedPrograms";

class ProgramSearchResponse {
  programResults: PaginatedPrograms[] | undefined;
  error: string | undefined;

  constructor(input: {data?: PaginatedPrograms[], error?: string}) {
    this.programResults = input.data
    this.error = input.error
  }

  isError() {
    return this.error !== undefined
  }
}

export default ProgramSearchResponse