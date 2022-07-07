import LocationData, { emptyLocationData } from './LocationData'

export default class LocationResponse {
  locationData: LocationData
  error: string | undefined;

  constructor(input: { data?: LocationData, error?: string }) {
    this.locationData = input.data ?? emptyLocationData
    this.error = input.error
  }

  isError() {
    return this.error !== undefined
  }
}