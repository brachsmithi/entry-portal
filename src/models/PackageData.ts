export default interface PackageData {
  id: number,
  name: string,
  containedPackages: PackageContainedPackage[]
  discs: PackageDisc[]
}

export interface PackageContainedPackage {
  id: number,
  name: string,
  sequence: number
}

export const emptyPackageContainedPackageData: PackageContainedPackage = {
  id: 0,
  name: '',
  sequence: 0
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

export interface PackageDiscProgram {
  id: number,
  name: string,
  version: string
}

export const emptyPackageDiscProgram = {
  id: 0,
  name: '',
  version: ''
}

export const emptyPackageData: PackageData = {
  id: 0,
  name: '',
  containedPackages: [],
  discs: []
}