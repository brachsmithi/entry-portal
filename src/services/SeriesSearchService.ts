import SeriesData, { SeriesProgramData } from '../models/SeriesData'
import DataResponse from '../models/DataResponse'

export async function loadSeriesDetails(id: number): Promise<DataResponse<SeriesData>> {
  let url = `http://localhost:3000/series/${id}.json`
  const response = await fetch(url)
      .then(response => response.json())

  function seriesProgramData(program: any): SeriesProgramData {
    return {
      id: program.id,
      title: program.name,
      year: program.year,
      version: program.version,
      alternateTitles: program.alternate_titles,
      sequence: program.sequence
    };
  }

  const programs = (programs: any[]): SeriesProgramData[] => {
    return programs.map((program) => seriesProgramData(program));
  }

  return new DataResponse<SeriesData>(
      {
        data: {
          id: response.id,
          name: response.name,
          programs: programs(response.programs),
          discs: response.discs,
          packages: response.packages,
          wrapperSeries: response.wrapper_series,
          containedSeries: response.contained_series
        }
      }
  )
}