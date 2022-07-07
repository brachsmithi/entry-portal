import LocationResponse from '../models/LocationResponse'
import { LocationDiscData } from '../models/LocationData'

export async function loadLocationDetails(id: number): Promise<LocationResponse> {
  let url = `http://localhost:3000/locations/${id}.json`
  const response = await fetch(url)
      .then(response => response.json())

  const locationDiscs = (discs: any[]) => {
    const discArray: LocationDiscData[] = []
    discs.forEach((disc) => {
      discArray.push({
        id: disc.id,
        displayName: disc.display_title
      })
    })
    return discArray
  }

  return new LocationResponse({
    data: {
      id: response.id,
      name: response.name,
      filled: response.filled,
      discs: locationDiscs(response.discs)
    }
  })
}