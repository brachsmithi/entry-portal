import SortableDiscData, { emptySortableDiscData } from './SortableDiscData'

export default class SortableDiscResponse {
  sortableDiscData: SortableDiscData
  error: string | undefined;

  constructor(input: { data?: SortableDiscData, error?: string }) {
    this.sortableDiscData = input.data ?? emptySortableDiscData
    this.error = input.error
  }

  isError() {
    return this.error !== undefined
  }
}