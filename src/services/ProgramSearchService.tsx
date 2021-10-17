import PaginatedSearchResponse from "../models/PaginatedSearchResponse"
import { ListingData } from "../models/ListingData"
import ProgramResponse from "../models/ProgramResponse"
import AlternateTitle from "../models/AlternateTitle"
import Person from "../models/Person"
import Alias from "../models/Alias"

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

export async function loadProgramDetails(id: number): Promise<ProgramResponse> {
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
      name: person.name,
      aliases: personAliases(person.aliases)
    };
  }

  function people(people: any[]): Array<Person> {
    return people.map((person) => programPerson(person));
  }

  return new ProgramResponse(
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