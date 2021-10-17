import ProgramData from "../models/ProgramData"

export const programData1: ProgramData = {
  id: 2193,
  title: 'Kidnapped',
  year: '1974',
  version: 'Lamberto Bava Reconstruction',
  series: [],
  lengthInMinutes: 96,
  alternateTitles: [
    {
      name: 'Wild Dogs'
    }
  ],
  people: [
    {
      name: 'Mario Bava',
      aliases: [
        {
          name: 'John M. Old'
        },
        {
          name: 'John Hold'
        }
      ]
    },
    {
      name: 'Lamberto Bava',
      aliases: []
    }
  ]
}

export const programJson1: string = `
  {
    "id": 2193,
    "title": "Kidnapped",
    "year": "1974",
    "version": "Lamberto Bava Reconstruction",
    "series": [],
    "length_in_minutes": 96,
    "alternate_titles": [
      {
        "name":"Wild Dogs"
      }
    ],
    "people": [
      {
        "name": "Mario Bava",
        "aliases": [
          {
            "name": "John M. Old"
          },
          {
            "name": "John Hold"
          }
        ]
      },
      {
        "name": "Lamberto Bava",
        "aliases": []
      }
    ]
  }
`

export const programData2: ProgramData = {
  id: 2070,
  title: 'You Only Live Twice',
  year: '1967',
  version: '',
  series: [
      'James Bond (Eon)',
      'James Bond (Connery)'
  ],
  lengthInMinutes: 97,
  alternateTitles: [
    {
      name: 'Ian Fleming\'s You Only Live Twice'
    }
  ],
  people: [
    {
      name: 'Lewis Gilbert',
      aliases: []
    }
  ]
}

export const programJson2: string = `
  {
    "id": 2070,
    "title": "You Only Live Twice",
    "year": "1967",
    "version": "",
    "series": [
      "James Bond (Eon)",
      "James Bond (Connery)"
    ],
    "length_in_minutes": 97,
    "alternate_titles": [
      {
        "name":"Ian Fleming's You Only Live Twice"
      }
    ],
    "people": [
      {
        "name":"Lewis Gilbert",
        "aliases": []
      }
    ]
  }
 `