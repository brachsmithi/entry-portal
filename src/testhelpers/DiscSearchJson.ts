import { ListingData } from '../models/ListingData'

export const totalDiscPages = 277

export const PROGRAM_ID_FOR_DISC_LISTING_FILTER = 3

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
        "id": ${ PROGRAM_ID_FOR_DISC_LISTING_FILTER },
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

export const discListing1: ListingData = {
  id: 4120,
  primary: 'Annabelle (2014)',
  secondary: [ 'A-3' ],
  tertiary: [ 'Blu-ray', 'Annabelle' ]
}
export const discListing2: ListingData = {
  id: 4136,
  primary: 'Annabelle (2014)',
  secondary: [ 'A-3' ],
  tertiary: [ 'DVD', 'Annabelle' ]
}
export const discListing3: ListingData = {
  id: 96,
  primary: 'Annie (1982)',
  secondary: [ 'A-2' ],
  tertiary: [ 'Blu-ray' ]
}

export function returnDiscListingJson(currentPage: number = 1): string {
  return `
  {
    "pagination_metadata": {
      "total_listings": 4147,
      "current_listings": 3,
      "total_pages": ${ totalDiscPages },
      "programs_per_page": 3,
      "current_page": ${currentPage},
      "previous_page": ${currentPage === 1 ? 1 : currentPage - 1},
      "next_page": ${currentPage === totalDiscPages ? totalDiscPages: currentPage + 1}
    },
    "discs": [
      {
        "id": 4120,
        "name": "Annabelle (2014)",
        "format": "Blu-ray",
        "location": {
          "id": 88,
          "name": "A-3"
        },
        "package": {
          "id": 1001,
          "name": "Annabelle"
        }
      },
      {
        "id": 4136,
        "name":  "Annabelle (2014)",
        "format": "DVD",
        "location": {
          "id": 88,
          "name": "A-3"
        },
        "package": {
          "id": 1001,
          "name":
          "Annabelle"
        }
      },
      {
        "id": 96,
        "name": "Annie (1982)",
        "format": "Blu-ray",
        "location": {
          "id": 3,
          "name": "A-2"
        },
        "package": {}
      }
    ]
  }
  `
}