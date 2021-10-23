import { ListingData } from "../models/ListingData";

export const totalProgramPages = 346

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

export function returnProgramListingJson(currentPage: number = 1): string {
  return `
    {
      "pagination_metadata": {
        "total_programs": 5177,
        "current_programs": 4,
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