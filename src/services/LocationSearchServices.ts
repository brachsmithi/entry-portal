import LocationData, { LocationDiscData } from '../models/LocationData'
import Response from '../models/Response'

export async function loadLocationDetails(id: number): Promise<Response<LocationData>> {
  let url = `http://localhost:3000/locations/${id}.json`
  const response = await fetch(url)
      .then(response => response.json())

  const locationDiscs = (discs: any[]) => {
    const discArray: LocationDiscData[] = []
    discs.forEach((disc) => {
      discArray.push({
        id: disc.id
      })
    })
    return discArray
  }

  return new Response<LocationData>({
    data: {
      id: response.id,
      name: response.name,
      filled: response.filled,
      discs: locationDiscs(response.discs)
    }
  })
}