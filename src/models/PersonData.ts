export const emptyPersonData: PersonData = {
  id: 0,
  name: "",
  aliases: [],
  programs: []
}

export default interface PersonData {
  id: number,
  name: string,
  aliases: string[],
  programs: PersonProgramData[]
}

export interface PersonProgramData {
  id: number,
  title: string,
  year: string,
  version: string,
  series: string[],
  alternateTitles: string[]
}