import DiscData from '../models/DiscData'

export const discWithProgramsPackageAndNameData: DiscData = {
  id: 4118,
  name: "Il Demonio/Dark Waters",
  format: "Blu-ray",
  state: "UNWATCHED",
  location: {
    id: 68,
    name: "To Watch - Movie, English"
  },
  package: {
    id: 957,
    name: "All the Haunts Be Ours: A Compendium of Folk Horror"
  },
  programs: [
    {
      id: 6555,
      title: "Il demonio",
      year: "1963",
      version: "",
      programType: "FEATURE",
      sequence: 0
    },
    {
      id: 6665,
      title: "Dark Waters",
      year: "1993",
      version: "",
      programType: "FEATURE",
      sequence: 0
    }
  ],
  series: []
}

export const discWithProgramsPackageAndNameJson = `
{
  "id": 4118,
  "name": "Il Demonio/Dark Waters",
  "format": "Blu-ray",
  "state": "UNWATCHED",
  "location": {
    "id": 68,
    "name": "To Watch - Movie, English"
  },
  "package": {
    "id": 957,
    "name": "All the Haunts Be Ours: A Compendium of Folk Horror"
  },
  "programs": [
    {
      "id": 6555,
      "title": "Il demonio",
      "year": "1963",
      "version": "",
      "program_type": "FEATURE",
      "sequence": 0
    },
    {
      "id": 6665,
      "title": "Dark Waters",
      "year": "1993",
      "version": "",
      "program_type": "FEATURE",
      "sequence": 0
    }
  ],
  "series": []
}
`

export const discWithNameAndSeriesData: DiscData = {
  id: 2455,
  name: "Trailer Trauma 3: 80s Horrorthon",
  format: "DVD",
  state: "UNWATCHED",
  location: {
    id: 67,
    name: "To Watch - TV"
  },
  package: {},
  programs: [],
  series: [
    {
      id: 192,
      name: "Trailer Trauma"
    }
  ]
}

export const discWithNameAndSeriesJSON = `
{
  "id": 2455,
  "name": "Trailer Trauma 3: 80s Horrorthon",
  "format": "DVD",
  "state": "UNWATCHED",
  "location": {
    "id": 67,
    "name": "To Watch - TV"
  },
  "package": {},
  "programs": [],
  "series": [
    {
      "id": 192,
      "name": "Trailer Trauma"
    }
  ]
}
`

export const fullyLoadedDiscData: DiscData = {
  id: 42,
  name: 'The Disc With Everything',
  state: 'FILED',
  format: 'DVD-R',
  location: {
    id: 222,
    name: 'Cupboard'
  },
  package: {
    id: 333,
    name: 'Extravagant Packaging'
  },
  programs: [
    {
      id: 411,
      title: 'The First Program',
      year: "2022",
      programType: 'EXTRA',
      version: 'Theatrical Edit',
      sequence: 0
    },
    {
      id: 422,
      title: 'Another Program',
      year: "1999",
      programType: 'FEATURE',
      version: 'Director\'s Cut',
      sequence: 0
    }
  ],
  series: [
    {
      id: 511,
      name: 'That One Series'
    },
    {
      id: 522,
      name: 'Part of Something Else, Too'
    }
  ]
}

export const fullyLoadedDiscJson: string = `
{
  "id": 42,
  "name": "The Disc With Everything",
  "state": "FILED",
  "format": "DVD-R",
  "location": {
    "id": 222,
    "name": "Cupboard"
  },
  "package": {
    "id": 333,
    "name": "Extravagant Packaging"
  },
  "programs": [
    {
      "id": 411,
      "title": "The First Program",
      "year": "2022",
      "programType": "EXTRA",
      "version": "Theatrical Edit",
      "sequence": 1
    },
    {
      "id": 422,
      "title": "Another Program",
      "year": "1999",
      "programType": "FEATURE",
      "version": "Director's Cut",
      "sequence": 2
    }
  ],
  "series": [
    {
      "id": 511,
      "name": "That One Series"
    },
    {
      "id": 522,
      "name": "Part of Something Else, Too"
    }
  ]
}
`