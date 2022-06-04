import PersonResponse from '../models/PersonResponse'
import { PersonProgramData } from "../models/PersonData";

export async function loadPersonDetails(id: number): Promise<PersonResponse> {
  let url = `http://localhost:3000/persons/${id}.json`
  const response = await fetch(url)
      .then(response => response.json())

  const personProgramData = (program: any): PersonProgramData => {
    const programSeries = (seriesArray: any[]) => {
      return seriesArray.map((series) => {
        return {
          id: series.id,
          name: series.name
        }
      })
    }
    return {
      id: program.id,
      title: program.title,
      version: program.version,
      year: program.year,
      series: programSeries(program.series),
      alternateTitles: program.alternate_titles
    }
  }

  const programs = (programs: any[]): Array<PersonProgramData> => {
    return programs.map((program) => personProgramData(program))
  }

  return new PersonResponse(
      {
        data: {
          id: response.id,
          name: response.name,
          aliases: response.aliases,
          programs: programs(response.programs)
        }
      }
  )
}