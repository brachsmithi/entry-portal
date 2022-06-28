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
      programType: "FEATURE"
    },
    {
      id: 6665,
      title: "Dark Waters",
      year: "1993",
      version: "",
      programType: "FEATURE"
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
      "program_type": "FEATURE"
    },
    {
      "id": 6665,
      "title": "Dark Waters",
      "year": "1993",
      "version": "",
      "program_type": "FEATURE"
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