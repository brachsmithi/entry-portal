export default interface SortableDiscData {
  id: number,
  sortTitle: string,
  displayTitle: string,
  package: {
    id: number,
    name: string,
  } | null,
  series: {
    id: number,
    name: string
  } | null
}

export const emptySortableDiscData: SortableDiscData = {
  id: 0,
  sortTitle: '',
  displayTitle: '',
  package: null,
  series: null
}