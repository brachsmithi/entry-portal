import { Location } from './Location'

interface DiscProgram {
  id: number,
  title: string,
  year: string,
  version: string
  programType: string
}

interface DiscSeries {
  id: number,
  name: string
}

interface DiscPackage {
  id?: number,
  name?: string
}

export default interface DiscData {
  id: number,
  name: string,
  format: string,
  state: string,
  location: Location,
  package: DiscPackage,
  programs: DiscProgram[]
  series: DiscSeries[]
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