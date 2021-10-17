import AlternateTitle from "./AlternateTitle"
import Person from "./Person"

export const emptyProgramData: ProgramData = {
  alternateTitles: [],
  id: 0,
  lengthInMinutes: 0,
  people: [],
  series: [],
  title: "",
  version: "",
  year: ""
}

export default interface ProgramData {
  id: number,
  title: string,
  year: string,
  version: string,
  lengthInMinutes: number,
  series: string[],
  alternateTitles: AlternateTitle[],
  people: Person[]

}