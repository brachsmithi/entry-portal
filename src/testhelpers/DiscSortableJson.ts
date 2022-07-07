import SortableDiscData from '../models/SortableDiscData'

export const sortableDiscWithNameAndPackageData: SortableDiscData = {
  id: 2958,
  sortTitle: 'farscape: the complete season one disc four',
  displayTitle: 'Disc Four',
  package: 'Farscape: The Complete Season One',
  series: null
}

export const sortableDiscWithNameAndPackageJson: string = `
  {
    "id": 2958,
    "sort_title": "farscape: the complete season one disc four",
    "display_title": "Disc Four",
    "package": "Farscape: The Complete Season One",
    "series": null
  }
`

export const sortableDiscWithNoNameData: SortableDiscData = {
  id: 111,
  sortTitle: 'big lebowski 1998',
  displayTitle: 'The Big Lebowski (1998)',
  package: null,
  series: null
}

export const sortableDiscWithNoNameJson: string = `
  {
    "id": 111,
    "sort_title": "big lebowski 1998",
    "display_title": "The Big Lebowski (1998)",
    "package": null,
    "series": null
  }
`

export const fullyLoadedSortableDiscData: SortableDiscData = {
  id: 14,
  sortTitle: 'adventures of captain marvel: 12-part serial',
  displayTitle: 'Adventures of Captain Marvel: 12-part Serial',
  package: "Adventures of Captain Marvel: 12-part Serial",
  series: 'Adventures of Captain Marvel (Serial)'
}

export const fullyLoadedSortableDiscJson: string = `
  {
    "id": 14,
    "sort_title": "adventures of captain marvel: 12-part serial",
    "display_title": "Adventures of Captain Marvel: 12-part Serial",
    "package": "Adventures of Captain Marvel: 12-part Serial",
    "series": "Adventures of Captain Marvel (Serial)"
  }
`