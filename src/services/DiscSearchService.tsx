import { defaultPaginationMetadata } from '../models/PaginationMetadata'
import { ListingData } from '../models/ListingData'
import { Disc } from '../models/Disc'
import FilterResponse from '../models/FilterResponse'
import { FilterType } from './FilterType'
import DiscResponse from '../models/DiscResponse'
import { emptyDiscData } from '../models/DiscData'
import PaginatedSearchResponse from '../models/PaginatedSearchResponse'

export async function loadDiscListings(page: number): Promise<PaginatedSearchResponse> {
  let url = `http://localhost:3000/discs.json?page=${page}`
  const response = await fetch(url)
      .then(response => response.json())

  return new PaginatedSearchResponse(
      {
        data: {
          data: discListings(response.discs),
          paginationMetadata: {
            currentPage: response.pagination_metadata.current_page,
            nextPage: response.pagination_metadata.next_page,
            previousPage: response.pagination_metadata.previous_page,
            totalPages: response.pagination_metadata.total_pages
          }
        }
      }
  )
}

export async function loadFilteredDiscListings(key: FilterType, id: number): Promise<FilterResponse> {
  if (key === FilterType.Program) return loadDiscListingsForProgram(id)
  return new FilterResponse({error: `No known filter for key: ${key}`})
}

export async function loadDiscDetails(id: number): Promise<DiscResponse> {
  let url = `http://localhost:3000/discs/${id}.json`
  const response = await fetch(url)
      .then(response => response.json())

  console.log(response)

  return new DiscResponse(
      {
        data: {
          ...emptyDiscData,
          id: response.id,
          name: response.name,
          package: response.package,
          format: response.format,
          location: response.location,
          state: response.state,
          programs: response.programs
        }
      }
  )
}

async function loadDiscListingsForProgram(programId: number): Promise<FilterResponse> {
  let url = `http://localhost:3000/discs/with_program/${programId}.json`
  const response = await fetch(url)
      .then(response => response.json())

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

function discListings(discs: Disc[]): ListingData[] {
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