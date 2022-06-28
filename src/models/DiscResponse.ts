import DiscData, { emptyDiscData } from './DiscData'

export default class DiscResponse {
  discData: DiscData
  error: string | undefined;

  constructor(input: { data?: DiscData, error?: string }) {
    this.discData = input.data ?? emptyDiscData
    this.error = input.error
  }

  isError() {
    return this.error !== undefined
  }
}