export default interface PackageData {
  id: number,
  name: string,
  containedPackages: PackageContainedPackage[]
  discs: PackageDisc[]
}

interface PackageContainedPackage {
  id: number,
  name: string,
  sequence: number
}

export interface PackageDisc {
  id: number,
  name: string,
  format: string,
  sequence: number,
  programs: PackageDiscProgram[]
}

export const emptyPackageDiscData: PackageDisc = {
  id: 0,
  name: '',
  format: '',
  sequence: 0,
  programs: []
}

interface PackageDiscProgram {
  id: number,
  name: string,
  version: string
}

export const emptyPackageData: PackageData = {
  id: 0,
  name: '',
  containedPackages: [],
  discs: []
}