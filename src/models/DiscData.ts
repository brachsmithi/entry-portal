export interface DiscProgram {
  id: number,
  title: string,
  year: string,
  version: string
  programType: string,
  sequence: number
}

export interface DiscSeries {
  id: number,
  name: string
}

export interface DiscPackage {
  id?: number,
  name?: string
}

export default interface DiscData {
  id: number,
  name: string,
  format: string,
  state: string,
  location: DiscLocation,
  package: DiscPackage,
  programs: DiscProgram[]
  series: DiscSeries[]
}

export interface DiscLocation {
  id: number,
  name: string
}

export const emptyDiscData: DiscData = {
  id: 0,
  name: '',
  format: '',
  state: '',
  location: {
    id: 0,
    name: ''
  },
  package: {
    id: 0,
    name: ''
  },
  programs: [],
  series: []
}