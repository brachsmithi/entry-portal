import SeriesData from '../models/SeriesData'

export const seriesWithProgramsData: SeriesData = {
  id: 313,
  name: 'Alien',
  programs: [
    {
      id: 3190,
      title: 'Alien',
      year: '1979',
      version: '',
      alternateTitles: [],
      sequence: 1
    },
    {
      id: 3191,
      title: 'Aliens',
      year: '1986',
      version: '',
      alternateTitles: [
        'Alien 2'
      ],
      sequence: 2
    },
    {
      id: 3192,
      title: 'Alien 3',
      year: '1992',
      version: '',
      alternateTitles: [],
      sequence: 3
    },
    {
      id: 3193,
      title: 'Alien: Resurrection',
      year: '1997',
      version: '',
      alternateTitles: [
        'Alien Resurrection'
      ],
      sequence: 4
    }
  ],
  discs: [],
  packages: [],
  containedSeries: [],
  wrapperSeries: []
}

export const seriesWithProgramsJson: string = `
  {
    "id": 313,
    "name": "Alien",
    "programs": [
      {
        "id": 3190,
        "name": "Alien",
        "year": "1979",
        "version": "",
        "alternate_titles": [],
        "sequence": 1
      },
      {
        "id": 3191,
        "name": "Aliens",
        "year": "1986",
        "version": "",
        "alternate_titles": [
          "Alien 2"
        ],
        "sequence": 2
      },
      {
        "id": 3192,
        "name": "Alien 3",
        "year": "1992",
        "version": "",
        "alternate_titles": [],
        "sequence": 3
      },
      {
        "id": 3193,
        "name": "Alien: Resurrection",
        "year": "1997",
        "version": "",
        "alternate_titles": [
          "Alien Resurrection"
        ],
        "sequence": 4
      }
    ],
    "discs": [],
    "packages": [],
    "contained_series": [],
    "wrapper_series": []
  }
`

export const seriesWithWrapperAndDiscsData: SeriesData = {
  id: 261,
  name: 'Doctor Who: Season 18',
  programs: [],
  discs: [
    {
      id: 2457,
      name: 'Doctor Who: The Leisure Hive',
      sequence: 1
    }
  ],
  packages: [],
  containedSeries: [],
  wrapperSeries: [
    {
      id: 259,
      name: 'Doctor Who'
    }
  ]
}

export const seriesWithWrapperAndDiscsJson = `
  {
    "id": 261,
    "name": "Doctor Who: Season 18",
    "programs": [],
    "discs": [
      {
        "id": 2457,
        "name": "Doctor Who: The Leisure Hive",
        "sequence": 1
      }
    ],
    "packages": [],
    "contained_series": [],
    "wrapper_series": [
      {
        "id": 259,
        "name": "Doctor Who"
      }
    ]
  }
`

export const seriesWithContainedSeriesData: SeriesData = {
  id: 334,
  name: '3x3 Eyes',
  programs: [],
  discs: [],
  packages: [],
  containedSeries: [
    {
      id: 335,
      name: '3x3 Eyes: Immortals',
      sequence: 1
    },
    {
      id: 336,
      name: '3x3 Eyes: Legend of the Divine Demon',
      sequence: 2
    }
  ],
  wrapperSeries: []
}

export const seriesWithContainedSeriesJson = `
  {
    "id": 334,
    "name": "3x3 Eyes",
    "programs": [],
    "discs": [],
    "packages": [],
    "contained_series": [
      {
        "id": 335,
        "name": "3x3 Eyes: Immortals",
        "sequence": 1
      },
      {
        "id": 336,
        "name": "3x3 Eyes: Legend of the Divine Demon",
        "sequence": 2
      }
    ],
    "wrapper_series": []
  }
`

export const seriesWithPackagesData: SeriesData = {
  id: 554,
  name: 'Quincy M.E.: Complete Season Collections',
  programs: [],
  discs: [],
  packages: [
    {
      id: 522,
      name: 'Quincy, M.E.: Seasons 1 \u0026 2',
      sequence: 1
    },
    {
      id: 948,
      name: 'Quincy, M.E.: Season 3',
      sequence: 2
    },
    {
      id: 945,
      name: 'Quincy, M.E.: Season 4',
      sequence: 3
    },
    {
      id: 953,
      name: 'Quincy, M.E.: Season 7',
      sequence: 6
    },
    {
      id: 954,
      name: 'Quincy, M.E.: The Final Season',
      sequence: 7
    },
    {
      id: 951,
      name: 'Quincy, M.E.: Season 5',
      sequence: 4
    },
    {
      id: 952,
      name: 'Quincy, M.E.: Season 6',
      sequence: 5
    }
  ],
  containedSeries: [],
  wrapperSeries: []
}

export const seriesWithPackagesJson = `
  {
    "id": 554,
    "name": "Quincy M.E.: Complete Season Collections",
    "programs": [],
    "discs": [],
    "packages": [
      {
        "id": 522,
        "name": "Quincy, M.E.: Seasons 1 \u0026 2",
        "sequence": 1
      },
      {
        "id": 948,
        "name": "Quincy, M.E.: Season 3",
        "sequence": 2
      },
      {
        "id": 945,
        "name": "Quincy, M.E.: Season 4",
        "sequence": 3
      },
      {
        "id": 953,
        "name": "Quincy, M.E.: Season 7",
        "sequence": 6
      },
      {
        "id": 954,
        "name": "Quincy, M.E.: The Final Season",
        "sequence": 7
      },
      {
        "id": 951,
        "name": "Quincy, M.E.: Season 5",
        "sequence": 4
      },
      {
        "id": 952,
        "name": "Quincy, M.E.: Season 6",
        "sequence": 5
      }
    ],
    "contained_series": [],
    "wrapper_series": []
  }
`