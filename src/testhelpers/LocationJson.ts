import LocationData from '../models/LocationData'

export const locationData: LocationData =
    {
      id: 1,
      name: 'NOT SET',
      filled: false,
      discs: [
        {
          id: 3900,
          displayName: 'L\'Inferno/Haxan'
        },
        {
          id: 2689,
          displayName: 'Midnite Movies Double Feature: The Tomb of Ligeia/An Evening of Edgar Allan Poe'
        },
        {
          id: 1595,
          displayName: 'Se7en (1995)'
        }
      ]
    }

export const locationJson: string = `
  {
    "id": 1,
    "name": "NOT SET",
    "filled": false,
    "discs": [
      {
        "id": 3900,
        "display_title": "L'Inferno/Haxan"
      },
      {
        "id": 2689,
        "display_title": "Midnite Movies Double Feature: The Tomb of Ligeia/An Evening of Edgar Allan Poe"
      },
      {
        "id": 1595,
        "display_title": "Se7en (1995)"
      }
    ]
  }
`

export const locationFilledData: LocationData =
    {
      id: 2,
      name: "Someplace",
      filled: true,
      discs: [
        {
          id: 111,
          displayName: 'Movie/Sequel'
        },
        {
          id: 211,
          displayName: 'Disc Two'
        },
        {
          id: 311,
          displayName: 'Three (2001)'
        }
      ]
    }

export const locationFilledJson: string = `
  {
    "id": 2,
    "name": "Someplace",
    "filled": true,
    "discs": [
      {
        "id": 111,
        "display_title": "Movie/Sequel"
      },
      {
        "id": 211,
        "display_title": "Disc Two"
      },
      {
        "id": 311,
        "display_title": "Three (2001)"
      }
    ]
  }
`