import { defaultPaginationMetadata } from '../models/PaginationMetadata'
import { ListingData } from '../models/ListingData'
import { Disc } from '../models/Disc'
import DataResponse from '../models/DataResponse'
import { FilterType } from './FilterType'
import DiscData, { emptyDiscData } from '../models/DiscData'
import SortableDiscData from '../models/SortableDiscData'
import PaginatedData from '../models/PaginatedData'
import FilterData from '../models/FilterData'

export async function loadDiscListings(page: number): Promise<DataResponse<PaginatedData>> {
  let url = `http://localhost:3000/discs.json?page=${page}`
  const response = await fetch(url)
      .then(response => response.json())

  return new DataResponse<PaginatedData>(
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

export async function loadFilteredDiscListings(key: FilterType, id: number): Promise<DataResponse<FilterData>> {
  if (key === FilterType.Program) return loadDiscListingsForProgram(id)
  return new DataResponse<FilterData>({error: `No known filter for key: ${key}`})
}

export async function loadDiscDetails(id: number): Promise<DataResponse<DiscData>> {
  let url = `http://localhost:3000/discs/${id}.json`
  const response = await fetch(url)
      .then(response => response.json())

  return new DataResponse<DiscData>(
      {
        data: {
          ...emptyDiscData,
          id: response.id,
          name: response.name,
          package: response.package,
          format: response.format,
          location: response.location,
          state: response.state,
          programs: response.programs,
          series: response.series
        }
      }
  )
}

export async function loadSortableDisc(id: number): Promise<DataResponse<SortableDiscData>> {
  let url = `http://localhost:3000/discs/sortable/${id}.json`
  const response = await fetch(url)
      .then(response => response.json())

  const packageValue = (response: any) => {
    if (response.package != null) {
      return {
        id: response.package_id,
        name: response.package
      }
    }
    return null
  }
  const seriesValue = (response: any) => {
    if (response.series != null) {
      return {
        id: response.series_id,
        name: response.series
      }
    }
    return null
  }
  return new DataResponse<SortableDiscData>(
    {
      data: {
        id: response.id,
        sortTitle: response.sort_title,
        displayTitle: response.display_title,
        package: packageValue(response),
        series: seriesValue(response)
      }
    }
  )
}

async function loadDiscListingsForProgram(programId: number): Promise<DataResponse<FilterData>> {
  let url = `http://localhost:3000/discs/with_program/${programId}.json`
  const response = await fetch(url)
      .then(response => response.json())

  return new DataResponse<FilterData>({
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