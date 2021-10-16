import ProgramData, { emptyProgramData } from "./ProgramData";

export default class ProgramResponse {
  programData: ProgramData
  error: string | undefined;

  constructor(input: { data?: ProgramData, error?: string }) {
    this.programData = input.data ?? emptyProgramData
    this.error = input.error
  }

  isError() {
    return this.error !== undefined
  }
}