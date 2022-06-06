import SeriesData, { emptySeriesData } from './SeriesData'

export default class SeriesResponse {
  seriesData: SeriesData
  error: string | undefined;

  constructor(input: { data?: SeriesData, error?: string }) {
    this.seriesData = input.data ?? emptySeriesData
    this.error = input.error
  }

  isError() {
    return this.error !== undefined
  }
}