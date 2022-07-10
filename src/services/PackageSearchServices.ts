import PackageResponse from '../models/PackageResponse'
import { emptyPackageDiscData, PackageDisc } from '../models/PackageData'

export async function loadPackageDetails(id: number): Promise<PackageResponse> {
  let url = `http://localhost:3000/packages/${id}.json`
  const response = await fetch(url)
      .then(response => response.json())

  const createDiscs = (discsJson: any) => {
    return discsJson.map((discJson: any): PackageDisc => {
      return {
        ...emptyPackageDiscData,
        id: discJson.id,
        name: discJson.name
      }
    })
  }
  return new PackageResponse({
    data: {
      id: response.id,
      name: response.name,
      containedPackages: [],
      discs: createDiscs(response.discs)
    }
  })
}