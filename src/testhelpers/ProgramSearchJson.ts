import { ListingData } from '../models/ListingData'

export const totalProgramPages = 346
export const totalSearchPages = 238

export const programListing1: ListingData = {
  id: 1,
  primary: 'The Cameraman\'s Revenge',
  secondary: ['1912', 'Alloy Orchestra'],
  tertiary: []
}
export const programListing2: ListingData = {
  id: 1234,
  primary: 'Camille',
  secondary: ['1921'],
  tertiary: []
}
export const programListing3: ListingData = {
  id: 2413,
  primary: 'Camouflaged Destruction',
  secondary: ['1952'],
  tertiary: ['Radar Men from the Moon']
}
export const programListing4: ListingData = {
  id: 2232,
  primary: 'The Akira Production Report',
  secondary: [],
  tertiary: []
}

export const searchListing1: ListingData = {
  id: 47,
  primary: 'April Fool\'s Day',
  secondary: ['1986'],
  tertiary: []
}
export const searchListing2: ListingData = {
  id: 684,
  primary: 'The Food of the Gods',
  secondary: ['1976'],
  tertiary: ['Food of the Gods']
}
export const searchListing3: ListingData = {
  id: 2074,
  primary: 'Yeti: Giant of the 20th Century',
  secondary: ['1977'],
  tertiary: []
}


export function returnProgramListingJson(currentPage: number = 1): string {
  return `
    {
      "pagination_metadata": {
        "total_listings": 5177,
        "current_listings": 4,
        "total_pages": ${totalProgramPages},
        "programs_per_page": 4,
        "current_page": ${currentPage},
        "previous_page": ${currentPage === 1 ? 1 : currentPage - 1},
        "next_page": ${currentPage === totalProgramPages ? totalProgramPages: currentPage + 1}
      },
      "programs": [
        {
          "id": 1,
          "title": "The Cameraman's Revenge",
          "year": "1912",
          "version": "Alloy Orchestra",
          "series": []
        },
        {
          "id": 1234,
          "title": "Camille",
          "year": "1921",
          "version": "",
          "series": []
        },
        {
          "id": 2413,
          "title": "Camouflaged Destruction",
          "year": "1952",
          "version": "",
          "series": [
            "Radar Men from the Moon"
          ]
        },
        {
          "id": 2232,
          "title": "The Akira Production Report",
          "year": "",
          "version": "",
          "series":[]
        }
      ]
    }
    `
}

export function returnSearchListingJson(searchTerm: string, currentPage: number, nextPage: number, previousPage: number): string {
  return `
  {
    "search_metadata": {
        "search_term": "${searchTerm}",
        "current_programs": 3
    },
    "pagination_metadata": {
        "total_listings": 3557,
        "current_listings": 3,
        "total_pages": ${totalSearchPages},
        "programs_per_page": 3,
        "current_page": ${currentPage},
        "previous_page": ${previousPage},
        "next_page": ${nextPage}
    },
    "programs": [
        {
            "title": "April Fool's Day",
            "year": "1986",
            "version": "",
            "series": [],
            "id": 47
        },
        {
            "title": "The Food of the Gods",
            "year": "1976",
            "version": "",
            "series": [
                "Food of the Gods"
            ],
            "id": 684
        },
        {
            "title": "Yeti: Giant of the 20th Century",
            "year": "1977",
            "version": "",
            "series": [],
            "id": 2074
        }
    ]
}`
}