import PaginatedSearchResponse from "../models/PaginatedSearchResponse"
import { ListingData } from "../models/ListingData"

export default async function loadProgramListings(page?: number): Promise<PaginatedSearchResponse> {
  let url = 'http://localhost:3000/programs.json'
  if (page) url += `?page=${page}`
  const response = await fetch(url)
      .then(response => response.json())

  function listing(program: any): ListingData {
    const secondaryValues: string[] = []
    const pushIfHasValue = (array: string[], value?: string) => {
      if (value && value !== '') array.push(value)
    }
    pushIfHasValue(secondaryValues, program.year)
    pushIfHasValue(secondaryValues, program.version)
    const tertiaryValues: string[] = []
    program.series.forEach((series: string)=>{
      pushIfHasValue(tertiaryValues, series)
    })
    return {
      primary: program.title,
      secondary: secondaryValues,
      tertiary: tertiaryValues
    }
  }

  function programListings(programs: any[]): Array<ListingData> {
    return programs.map(program => listing(program));
  }

  return new PaginatedSearchResponse(
      {
        data: {
          data: programListings(response.programs),
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