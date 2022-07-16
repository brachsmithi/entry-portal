import { ListingData } from '../models/ListingData'
import DataResponse from '../models/DataResponse'
import ProgramData from '../models/ProgramData'
import AlternateTitle from "../models/AlternateTitle"
import Person from '../models/Person'
import Alias from '../models/Alias'
import SearchData from '../models/SearchData'
import PaginatedData from '../models/PaginatedData'

export default async function loadProgramListings(page?: number): Promise<DataResponse<PaginatedData>> {
  let url = 'http://localhost:3000/programs.json'
  if (page) url += `?page=${page}`
  const response = await fetch(url)
      .then(response => response.json())

  function programListings(programs: any[]): Array<ListingData> {
    return programs.map(program => listing(program));
  }

  return new DataResponse<PaginatedData>(
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

export async function loadProgramSearchResults(searchTerm: string, page?: number): Promise<DataResponse<SearchData>> {
  let url = `http://localhost:3000/programs.json?search=${searchTerm}`
  if (page) url += `&page=${page}`
  const response = await fetch(url)
      .then(response => response.json())

  function searchListings(programs: any[]): Array<ListingData> {
    return programs.map(program => listing(program))
  }

  return new DataResponse<SearchData>({
    data: {
      data: searchListings(response.programs),
      searchMetadata: {
        resultCount: response.search_metadata.current_programs,
        searchTerm: searchTerm
      },
      paginationMetadata: {
        currentPage: response.pagination_metadata.current_page,
        nextPage: response.pagination_metadata.next_page,
        previousPage: response.pagination_metadata.previous_page,
        totalPages: response.pagination_metadata.total_pages
      }
    }
  })
}

export async function loadProgramDetails(id: number): Promise<DataResponse<ProgramData>> {
  let url = `http://localhost:3000/programs/${id}.json`
  const response = await fetch(url)
      .then(response => response.json())

  function alternateTitle(title: any): AlternateTitle {
    return {
      name: title.name
    }
  }

  function alternateTitles(alternateTitles: any[]): Array<AlternateTitle> {
    return alternateTitles.map((title) => alternateTitle(title))
  }

  function personAlias(alias: any): Alias {
    return {
      name: alias.name
    }
  }

  function personAliases(aliases: any[]): Array<Alias> {
    return aliases.map((alias) => personAlias(alias));
  }

  function programPerson(person: any): Person {
    return {
      id: person.id,
      name: person.name,
      aliases: personAliases(person.aliases)
    };
  }

  function people(people: any[]): Array<Person> {
    return people.map((person) => programPerson(person));
  }

  return new DataResponse<ProgramData>(
      {
        data: {
          id: response.id,
          title: response.title,
          year: response.year,
          version: response.version,
          lengthInMinutes: response.length_in_minutes,
          series: response.series,
          alternateTitles: alternateTitles(response.alternate_titles),
          people: people(response.people)
        }
      }
  )
}

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
    id: program.id,
    primary: program.title,
    secondary: secondaryValues,
    tertiary: tertiaryValues
  }
}