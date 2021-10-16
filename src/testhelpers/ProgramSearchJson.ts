import { ListingData } from "../models/ListingData";

export const totalProgramPages = 346

export const programListing1: ListingData = {
  primary: 'The Cameraman\'s Revenge',
  secondary: ['1912']
}
export const programListing2: ListingData = {
  primary: 'Camille',
  secondary: ['1921']
}
export const programListing3: ListingData = {
  primary: 'Camouflaged Destruction',
  secondary: ['1952', 'Radar Men from the Moon']
}
export const programListing4: ListingData = {
  primary: 'The Akira Production Report',
  secondary: []
}

export function returnJson(currentPage: number): string {
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
          "title": "The Cameraman's Revenge",
          "year": "1912",
          "version": "Alloy Orchestra",
          "series": []
        },
        {
          "title": "Camille",
          "year": "1921",
          "version": "",
          "series": []
        },
        {
          "title": "Camouflaged Destruction",
          "year": "1952",
          "version": "",
          "series": [
            "Radar Men from the Moon"
          ]
        },
        {
          "title": "The Akira Production Report",
          "year": "",
          "version": "",
          "series":[]
        }
      ]
    }
    `
}