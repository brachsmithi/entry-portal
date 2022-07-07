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