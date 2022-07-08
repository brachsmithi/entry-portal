import LocationData from '../models/LocationData'

export const locationData: LocationData =
    {
      id: 1,
      name: 'NOT SET',
      filled: false,
      discs: [
        {
          id: 3900
        },
        {
          id: 2689
        },
        {
          id: 1595
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
        "id": 3900
      },
      {
        "id": 2689
      },
      {
        "id": 1595
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
          id: 111
        },
        {
          id: 2958
        },
        {
          id: 14
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
        "id": 111
      },
      {
        "id": 2958
      },
      {
        "id": 14
      }
    ]
  }
`