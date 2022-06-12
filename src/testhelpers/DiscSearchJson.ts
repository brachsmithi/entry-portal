import { ListingData } from '../models/ListingData'

export const discListingForProgramIdData1: ListingData = {
  id: 3,
  primary: 'All That Jazz (1979)',
  secondary: [ 'A-1' ],
  tertiary: [ 'DVD', 'All That Jazz' ]
}
export const discListingForProgramIdData2: ListingData = {
  id: 42,
  primary: 'All That Jazz (1979)',
  secondary: [ 'A-1' ],
  tertiary: [ 'Blu-ray', 'All That Jazz' ]
}

export const discListingForProgramIdJson: string = `
  {
    "discs": [
      {
        "id": 3,
        "name": "All That Jazz (1979)",
        "format": "DVD",
        "location": {
          "id": 2,
          "name": "A-1"
        },
        "package": {
          "id": 5,
          "name": "All That Jazz"
        }
      },
      {
        "id": 42,
        "name": "All That Jazz (1979)",
        "format": "Blu-ray",
        "location": {
          "id": 2,
          "name": "A-1"
        },
        "package": {
          "id": 5,
          "name": "All That Jazz"
        }
      }
    ]
  }
`

export const discListingForProgramIdWithNoPackageData: ListingData = {
  id: 1,
  primary: 'Audition (1999)',
  secondary: ['A-1'],
  tertiary: ['DVD']
}

export const discListingForProgramIdWithNoPackageJson: string = `
  {
    "discs": [
      {
        "id": 1,
        "name": "Audition (1999)",
        "format": "DVD",
        "location": {
          "id": 2,
          "name": "A-1"
        },
        "package": {}
      }
    ]
  }
`