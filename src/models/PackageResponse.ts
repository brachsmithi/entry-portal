import PackageData, { emptyPackageData } from './PackageData'

export default class PersonResponse {
  packageData: PackageData
  error: string | undefined;

  constructor(input: { data?: PackageData, error?: string }) {
    this.packageData = input.data ?? emptyPackageData
    this.error = input.error
  }

  isError() {
    return this.error !== undefined
  }
}