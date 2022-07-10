import PackageData from '../models/PackageData'

export const packageWithProgramsData: PackageData = {
  id: 636,
  name: '4 Film Favorites: Critters 1-4',
  containedPackages: [],
  discs: [
    {
      id: 2740,
      name: 'Critters/Critters 2',
      format: 'DVD',
      sequence: 1,
      programs: [
        {
          id: 2983,
          name: 'Critters',
          version: ''
        },
        {
          id: 2984,
          name: 'Critters 2',
          version: ''
        }
      ]
    },
    {
      id: 2741,
      name: 'Critters 3/Critters 4',
      format: 'DVD',
      sequence: 2,
      programs: [
        {
          id: 2985,
          name: 'Critters 3',
          version: ''
        },
        {
          id: 2986,
          name: 'Critters 4',
          version: ''
        }
      ]
    }
  ]
}

export const packageWithProgramsJson: string = `
  {
    "id": 636,
    "name": "4 Film Favorites: Critters 1-4",
    "contained_packages": [],
    "discs": [
      {
        "id": 2740,
        "name": "Critters/Critters 2",
        "format": "DVD",
        "sequence": 1,
        "programs": [
          {
            "id": 2983,
            "name": "Critters",
            "version": ""
          },
          {
            "id": 2984,
            "name": "Critters 2",
            "version": ""
          }
        ]
      },
      {
        "id": 2741,
        "name": "Critters 3/Critters 4",
        "format": "DVD",
        "sequence": 2,
        "programs": [
          {
            "id": 2985,
            "name": "Critters 3",
            "version": ""
          },
          {
            "id": 2986,
            "name": "Critters 4",
            "version": ""
          }
        ]
      }
    ]
  }
`

export const packageContainingPackagesData: PackageData = {
  id: 948,
  name: 'Quincy, M.E.: Season 3',
  containedPackages: [
    {
      id: 966,
      name: 'Quincy, M.E.: Season 3 - Disc 2',
      sequence: 2
    },
    {
      id: 965,
      name: 'Quincy, M.E.: Season 3 - Disc 1',
      sequence: 1
    },
    {
      id: 972,
      name: 'Quincy, M.E.: Season 3 - Discs 3 and 4',
      sequence: 3
    }
  ],
  discs: []
}

export const packageContainingPackagesJson: string = `
  {
    "id": 948,
    "name": "Quincy, M.E.: Season 3",
    "contained_packages": [
      {
        "id": 966,
        "name": "Quincy, M.E.: Season 3 - Disc 2",
        "sequence": 2
      },
      {
        "id": 965,
        "name": "Quincy, M.E.: Season 3 - Disc 1",
        "sequence": 1
      },
      {
        "id": 972,
        "name": "Quincy, M.E.: Season 3 - Discs 3 and 4",
        "sequence": 3
      }
    ],
    "discs": []
  }
`