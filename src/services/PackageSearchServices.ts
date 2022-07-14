import PackageData, {
  emptyPackageContainedPackageData,
  emptyPackageDiscData,
  emptyPackageDiscProgram,
  PackageContainedPackage,
  PackageDisc,
  PackageDiscProgram
} from '../models/PackageData'
import DataResponse from '../models/DataResponse'

export async function loadPackageDetails(id: number): Promise<DataResponse<PackageData>> {
  let url = `http://localhost:3000/packages/${id}.json`
  const response = await fetch(url)
      .then(response => response.json())

  const createPackages = (packagesJson: any) => {
    return packagesJson.map((packageJson: any): PackageContainedPackage => {
      return {
        ...emptyPackageContainedPackageData,
        id: packageJson.id,
        name: packageJson.name,
        sequence: packageJson.sequence
      }
    })
  }

  const createDiscs = (discsJson: any) => {
    const createPrograms = (programsJson: any): PackageDiscProgram[] => {
      return programsJson.map((programJson: any) => {
        return {
          ...emptyPackageDiscProgram,
          id: programJson.id,
          name: programJson.name,
          version: programJson.version,
        }
      })
    }
    return discsJson.map((discJson: any): PackageDisc => {
      return {
        ...emptyPackageDiscData,
        id: discJson.id,
        name: discJson.name,
        format: discJson.format,
        programs: createPrograms(discJson.programs),
        sequence: discJson.sequence
      }
    })
  }
  return new DataResponse<PackageData>({
    data: {
      id: response.id,
      name: response.name,
      containedPackages: createPackages(response.contained_packages),
      discs: createDiscs(response.discs)
    }
  })
}