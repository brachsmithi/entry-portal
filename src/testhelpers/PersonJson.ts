import PersonData from '../models/PersonData'

export const personData: PersonData = {
  id: 30,
  name: 'Ib Melchior',
  aliases: [],
  programs: [
    {
      id: 46,
      title: 'The Angry Red Planet',
      year: '1959',
      version: '',
      series: [],
      alternateTitles: []
    },
    {
      id: 2203,
      title: 'The Time Travelers',
      year: '1964',
      version: '',
      series: [],
      alternateTitles: [
        'The Time Travellers',
        'Time Travelers',
        'Depths of the Unknown',
        'The Return of the Time Traveler',
        'The Return of the Time Travelers',
        'This Time Tomorrow',
        'Time Trap'
      ]
    }
  ]
}

export const personJson: string = `
  {
    "id": 30,
    "name": "Ib Melchior",
    "aliases": [],
    "programs": [
      {
        "id": 46,
        "title": "The Angry Red Planet",
        "year": "1959",
        "version": "",
        "series": [],
        "alternate_titles": []
      },
      {
        "id": 2203,
        "title": "The Time Travelers",
        "year": "1964",
        "version": "",
        "series": [],
        "alternate_titles": [
          "The Time Travellers",
          "Time Travelers",
          "Depths of the Unknown",
          "The Return of the Time Traveler",
          "The Return of the Time Travelers",
          "This Time Tomorrow",
          "Time Trap"
        ]
      }
    ]
  }
`

export const personWithAliasesData: PersonData = {
  id: 128,
  name: 'Mario Bava',
  aliases: [
    'John M. Old',
    'John Hold'
  ],
  programs: [
    {
      id: 180,
      title: 'Blood and Black Lace',
      year: '1964',
      version: '',
      series: [],
      alternateTitles: []
    },
    {
      id: 342,
      title: 'Caltiki, the Immortal Monster',
      year: '1959',
      version: '',
      series: [],
      alternateTitles: []
    },
    {
      id: 766,
      title: 'The Evil Eye',
      year: '1963',
      version: 'US Theatrical Version',
      series: [],
      alternateTitles: [
        'Evil Eye',
        'The Girl Who Knew Too Much'
      ]
    },
    {
      id: 767,
      title: 'The Girl Who Knew Too Much',
      year: '1963',
      version: 'Theatrical',
      series: [],
      alternateTitles: [
        'The Evil Eye',
        'Evil Eye'
      ]
    },
    {
      id: 1416,
      title: 'Planet of the Vampires',
      year: '1965',
      version: '',
      series: [],
      alternateTitles: []
    },
    {
      id: 1994,
      title: 'The Whip and the Body',
      year: '1963',
      version: '',
      series: [],
      alternateTitles: [
        'The Whip and the Flesh',
        'What',
        'What!',
        'Son of Satan',
        'The Body and the Whip',
        'Night Is the Phantom'
      ]
    },
    {
      id: 2185,
      title: 'Baron Blood',
      year: '1972',
      version: '',
      series: [],
      alternateTitles: [
        'The Torture Chamber of Baron Blood',
        'Chamber of Tortures',
        'The Baron Blood',
        'The Thirst of Baron Blood'
      ]
    },
    {
      id: 2186,
      title: 'Lisa and the Devil',
      year: '1973',
      version: 'US Theatrical Version',
      series: [],
      alternateTitles: []
    },
    {
      id: 2187,
      title: 'House of Exorcism',
      year: '1973',
      version: 'Recut with Exorcism Plot',
      series: [],
      alternateTitles: []
    },
    {
      id: 2188,
      title: 'Roy Colt \u0026 Winchester Jack',
      year: '1970',
      version: '',
      series: [],
      alternateTitles: [
        'Colt Roy and Winchester Jack'
      ]
    },
    {
      id: 2189,
      title: 'Five Dolls for an August Moon',
      year: '1970',
      version: '',
      series: [],
      alternateTitles: [
        'Island of Terror',
        '4 Dolls for an August Moon'
      ]
    },
    {
      id: 2190,
      title: 'Four Times That Night',
      year: '1971',
      version: '',
      series: [],
      alternateTitles:[]
    },
    {
      id: 2191,
      title: 'A Bay of Blood',
      year: '1971',
      version: '',
      series: [],
      alternateTitles: [
        'Blood Bath',
        'The Last House on the Left, Part II',
        'The Antecedent',
        'Bay of Blood',
        'Twitch of the Death Nerve',
        'Carnage'
      ]
    },
    {
      id: 2192,
      title: 'Rabid Dogs',
      year: '1974',
      version: 'Completed from original footage',
      series: [],
      alternateTitles: [
        'Wild Dogs'
      ]
    },
    {
      id: 2193,
      title: 'Kidnapped',
      year: '1974',
      version: 'Lamberto Bava Reconstruction',
      series: [],
      alternateTitles: [
        'Wild Dogs'
      ]
    },
    {
      id: 2938,
      title: 'Shock',
      year: '1977',
      version: '',
      series: [],
      alternateTitles: [
        'Suspense',
        'Beyond the Door II'
      ]
    },
    {
      id: 2950,
      title: 'Black Sunday',
      year: '1960',
      version: '',
      series: [],
      alternateTitles: [
        'Revenge of the Vampire',
        'Fright',
        'The Mask of Satan',
        'House of Fright',
        'Mask of the Demon',
        'The Demon\'s Mask',
        'The Hour When Dracula Comes'
      ]
    },
    {
      id: 2951,
      title: 'Black Sabbath',
      year: '1963',
      version: '',
      series: [],
      alternateTitles: [
        'The Three Faces of Fear',
        'The Three Faces of Terror'
      ]
    },
    {
      id: 2952,
      title: 'Knives of the Avenger',
      year: '1966',
      version: '',
      series: [],
      alternateTitles: [
        'Viking Massacre',
        'The Knives of the Avenger',
        'Bladestorm'
      ]
    },
    {
      id: 2953,
      title: 'Kill, Baby... Kill!',
      year: '1966',
      version: '',
      series: [],
      alternateTitles: [
        'Curse of the Dead',
        'Kill Baby Kill',
        'Don\'t Walk in the Park',
        'Operation Fear'
      ]
    },
    {
      id: 3153,
      title: 'Hatchet for the Honeymoon',
      year: '1970',
      version: '',
      series: [],
      alternateTitles: [
        'A Hatchet for the Honeymoon',
        'An Axe for the Honeymoon',
        'Honeymoon',
        'Blood Brides',
        'Red Wedding Night'
      ]
    }
  ]
}

export const personWithAliasesJson: string = `
  {
    "id": 128,
    "name": "Mario Bava",
    "aliases": [
      "John M. Old",
      "John Hold"
    ],
    "programs": [
      {
        "id": 180,
        "title": "Blood and Black Lace",
        "year": "1964",
        "version": "",
        "series": [],
        "alternate_titles": []
      },
      {
        "id": 342,
        "title": "Caltiki, the Immortal Monster",
        "year": "1959",
        "version": "",
        "series": [],
        "alternate_titles": []
      },
      {
        "id": 766,
        "title": "The Evil Eye",
        "year": "1963",
        "version": "US Theatrical Version",
        "series":[],
        "alternate_titles": [
          "Evil Eye",
          "The Girl Who Knew Too Much"
        ]
      },
      {
        "id": 767,
        "title": "The Girl Who Knew Too Much",
        "year": "1963",
        "version": "Theatrical",
        "series": [],
        "alternate_titles": [
          "The Evil Eye",
          "Evil Eye"
        ]
      },
      {
        "id": 1416,
        "title": "Planet of the Vampires",
        "year": "1965",
        "version": "",
        "series": [],
        "alternate_titles": []
      },
      {
        "id": 1994,
        "title": "The Whip and the Body",
        "year": "1963",
        "version": "",
        "series": [],
        "alternate_titles": [
          "The Whip and the Flesh",
          "What",
          "What!",
          "Son of Satan",
          "The Body and the Whip",
          "Night Is the Phantom"
        ]
      },
      {
        "id": 2185,
        "title": "Baron Blood",
        "year": "1972",
        "version": "",
        "series": [],
        "alternate_titles": [
          "The Torture Chamber of Baron Blood",
          "Chamber of Tortures",
          "The Baron Blood",
          "The Thirst of Baron Blood"
        ]
      },
      {
        "id": 2186,
        "title": "Lisa and the Devil",
        "year": "1973",
        "version": "US Theatrical Version",
        "series": [],
        "alternate_titles": []
      },
      {
        "id": 2187,
        "title": "House of Exorcism",
        "year": "1973",
        "version": "Recut with Exorcism Plot",
        "series": [],
        "alternate_titles": []
      },
      {
        "id": 2188,
        "title": "Roy Colt \u0026 Winchester Jack",
        "year": "1970",
        "version": "",
        "series": [],
        "alternate_titles": [
          "Colt Roy and Winchester Jack"
        ]
      },
      {
        "id": 2189,
        "title": "Five Dolls for an August Moon",
        "year": "1970",
        "version": "",
        "series": [],
        "alternate_titles": [
          "Island of Terror",
          "4 Dolls for an August Moon"
        ]
      },
      {
        "id": 2190,
        "title": "Four Times That Night",
        "year": "1971",
        "version": "",
        "series": [],
        "alternate_titles":[]
      },
      {
        "id": 2191,
        "title": "A Bay of Blood",
        "year": "1971",
        "version": "",
        "series": [],
        "alternate_titles": [
          "Blood Bath",
          "The Last House on the Left, Part II",
          "The Antecedent",
          "Bay of Blood",
          "Twitch of the Death Nerve",
          "Carnage"
        ]
      },
      {
        "id": 2192,
        "title": "Rabid Dogs",
        "year": "1974",
        "version": "Completed from original footage",
        "series": [],
        "alternate_titles": [
          "Wild Dogs"
        ]
      },
      {
        "id": 2193,
        "title": "Kidnapped",
        "year": "1974",
        "version": "Lamberto Bava Reconstruction",
        "series": [],
        "alternate_titles": [
          "Wild Dogs"
        ]
      },
      {
        "id": 2938,
        "title": "Shock",
        "year": "1977",
        "version": "",
        "series": [],
        "alternate_titles": [
          "Suspense",
          "Beyond the Door II"
        ]
      },
      {
        "id": 2950,
        "title": "Black Sunday",
        "year": "1960",
        "version": "",
        "series": [],
        "alternate_titles": [
          "Revenge of the Vampire",
          "Fright",
          "The Mask of Satan",
          "House of Fright",
          "Mask of the Demon",
          "The Demon's Mask",
          "The Hour When Dracula Comes"
        ]
      },
      {
        "id": 2951,
        "title": "Black Sabbath",
        "year": "1963",
        "version": "",
        "series": [],
        "alternate_titles": [
          "The Three Faces of Fear",
          "The Three Faces of Terror"
        ]
      },
      {
        "id": 2952,
        "title": "Knives of the Avenger",
        "year": "1966",
        "version": "",
        "series": [],
        "alternate_titles": [
          "Viking Massacre",
          "The Knives of the Avenger",
          "Bladestorm"
        ]
      },
      {
        "id": 2953,
        "title": "Kill, Baby... Kill!",
        "year": "1966",
        "version": "",
        "series": [],
        "alternate_titles": [
          "Curse of the Dead",
          "Kill Baby Kill",
          "Don't Walk in the Park",
          "Operation Fear"
        ]
      },
      {
        "id": 3153,
        "title": "Hatchet for the Honeymoon",
        "year": "1970",
        "version": "",
        "series": [],
        "alternate_titles": [
          "A Hatchet for the Honeymoon",
          "An Axe for the Honeymoon",
          "Honeymoon",
          "Blood Brides",
          "Red Wedding Night"
        ]
      }
    ]
  }
`

export const personWithProgramsInSeriesData: PersonData = {
  id: 2190,
  name: 'John Glen',
  aliases: [],
  programs: [
    {
      id: 4482,
      title: 'The Living Daylights',
      year: '1987',
      version: "",
      series: [
        {
          id: 58,
          name: 'James Bond (Eon)'
        },
        {
          id: 428,
          name: 'James Bond (Dalton)'
        }
      ],
      alternateTitles: [
        'James Bond 007: The Living Daylights',
        'Bond 15',
        'The Skin of a Corpse'
      ]
    },
    {
      id: 4483,
      title: 'Licence to Kill',
      year: '1989',
      version: '',
      series: [
        {
          id: 58,
          name: 'James Bond (Eon)'
        },
        {
          id: 428,
          name: 'James Bond (Dalton)'
        }
      ],
      alternateTitles: [
        '007: Licence to Kill'
      ]
    }
  ]
}

export const personWithProgramsInSeriesJson: string = `
  {
    "id": 2190,
    "name": "John Glen",
    "aliases": [],
    "programs": [
      {
        "id": 4482,
        "title": "The Living Daylights",
        "year": "1987",
        "version": "",
        "series": [
          {
            "id": 58,
            "name": "James Bond (Eon)",
            "created_at":"2020-08-28T23:42:07.623Z",
            "updated_at":"2020-08-28T23:42:07.623Z"
          },
          {
            "id": 428,
            "name": "James Bond (Dalton)",
            "created_at": "2021-07-16T22:40:35.625Z",
            "updated_at":"2021-07-16T22:40:35.625Z"
          }
        ],
        "alternate_titles": [
          "James Bond 007: The Living Daylights",
          "Bond 15",
          "The Skin of a Corpse"
        ]
      },
      {
        "id": 4483,
        "title": "Licence to Kill",
        "year": "1989",
        "version": "",
        "series": [
          {
            "id": 58,
            "name": "James Bond (Eon)",
            "created_at": "2020-08-28T23:42:07.623Z",
            "updated_at":"2020-08-28T23:42:07.623Z"
          },
          {
            "id": 428,
            "name": "James Bond (Dalton)",
            "created_at":"2021-07-16T22:40:35.625Z",
            "updated_at":"2021-07-16T22:40:35.625Z"
          }
        ],
        "alternate_titles": [
          "007: Licence to Kill"
        ]
      }
    ]
  }
`