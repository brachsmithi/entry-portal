export default interface LocationData {
  id: number,
  name: string,
  filled: boolean,
  discs: LocationDiscData[]
}

export interface LocationDiscData {
  id: number
}

export const emptyLocationData: LocationData = {
  id: 0,
  name: '',
  filled: false,
  discs: []
}