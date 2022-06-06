export const emptySeriesData: SeriesData = {
  id: 0,
  name: '',
  programs: [],
  discs: [],
  packages: [],
  containedSeries: [],
  wrapperSeries: []
}

export default interface SeriesData {
  id: number,
  name: string,
  programs: SeriesProgramData[],
  discs: SeriesDiscData[],
  packages: SeriesPackageData[],
  containedSeries: SeriesContainedSeries[],
  wrapperSeries: SeriesWrapperSeries[]
}

export interface SeriesProgramData {

}

export interface SeriesDiscData {
  id: number,
  name: string,
  sequence: number
}

export interface SeriesPackageData {

}

export interface SeriesContainedSeries {
  id: number,
  name: string,
  sequence: number
}

export interface SeriesWrapperSeries {
  id: number,
  name: string
}