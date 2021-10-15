import { ListingData } from "../models/ListingData";

export const totalPages = 346

export const programListing1: ListingData = {
  primary: 'The Cameraman\'s Revenge',
  secondary: '1912'
}
export const programListing2: ListingData = {
  primary: 'Camille',
  secondary: '1921'
}
export const programListing3: ListingData = {
  primary: 'Camouflaged Destruction',
  secondary: '1952'
}

export function returnJson(currentPage: number): string {
  return `
    {
      "pagination_metadata": {
        "total_programs": 5177,
        "current_programs": 3,
        "total_pages": ${totalPages},
        "programs_per_page": 3,
        "current_page": ${currentPage},
        "previous_page": ${currentPage === 1 ? 1 : currentPage - 1},
        "next_page": ${currentPage === totalPages ? totalPages: currentPage + 1}
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
        }
      ]
    }
    `
}