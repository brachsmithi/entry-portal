export default interface SortableDiscData {
  id: number,
  sortTitle: string,
  displayTitle: string,
  package: string | null,
  series: string | null
}

export const emptySortableDiscData: SortableDiscData = {
  id: 0,
  sortTitle: '',
  displayTitle: '',
  package: null,
  series: null
}