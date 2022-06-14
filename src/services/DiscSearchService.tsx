import { defaultPaginationMetadata } from '../models/PaginationMetadata'
import { ListingData } from '../models/ListingData'
import { Disc } from '../models/Disc'
import FilterResponse from '../models/FilterResponse'
import { FilterType } from './FilterType'

export async function loadFilteredDiscListings(key: FilterType, id: number): Promise<FilterResponse> {
  if (key === FilterType.Program) return loadDiscListingsForProgram(id)
  return new FilterResponse({error: `No known filter for key: ${key}`})
}

async function loadDiscListingsForProgram(programId: number): Promise<FilterResponse> {
  let url = `http://localhost:3000/discs/with_program/${programId}.json`
  const response = await fetch(url)
      .then(response => response.json())

  const discListings = (discs: Disc[]): ListingData[] => {
    const listing = (disc: Disc): ListingData => {
      const secondaryData = (disc: Disc) => {
        return [
          disc.location.name
        ]
      }
      const tertiaryData = (disc: Disc) => {
        const data = []
        data.push(disc.format)
        if (disc.package.name) {
          data.push(disc.package.name)
        }
        return data
      }
      return {
        id: disc.id,
        primary: disc.name,
        secondary: secondaryData(disc),
        tertiary: tertiaryData(disc)
      }
    }
    return discs.map(disc => listing(disc))
  }

  return new FilterResponse({
    data: {
      data: discListings(response.discs),
      paginationMetadata: defaultPaginationMetadata,
      filterMetadata: {
        key: FilterType.Program,
        id: programId,
        resultCount: response.discs.length
      }
    }
  })

}