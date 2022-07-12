import PackageResponse from '../models/PackageResponse'
import {
  emptyPackageContainedPackageData,
  emptyPackageDiscData, emptyPackageDiscProgram,
  PackageContainedPackage,
  PackageDisc, PackageDiscProgram
} from '../models/PackageData'

export async function loadPackageDetails(id: number): Promise<PackageResponse> {
  let url = `http://localhost:3000/packages/${id}.json`
  const response = await fetch(url)
      .then(response => response.json())

  const createPackages = (packagesJson: any) => {
    return packagesJson.map((packageJson: any): PackageContainedPackage => {
      return {
        ...emptyPackageContainedPackageData,
        id: packageJson.id,
        name: packageJson.name
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
          version: programJson.version
        }
      })
    }
    return discsJson.map((discJson: any): PackageDisc => {
      return {
        ...emptyPackageDiscData,
        id: discJson.id,
        name: discJson.name,
        format: discJson.format,
        programs: createPrograms(discJson.programs)
      }
    })
  }
  return new PackageResponse({
    data: {
      id: response.id,
      name: response.name,
      containedPackages: createPackages(response.contained_packages),
      discs: createDiscs(response.discs)
    }
  })
}