export default class DataResponse<T> {
  data: T | undefined
  error: string | undefined;

  constructor(input: { data?: T, error?: string }) {
    this.data = input.data
    this.error = DataResponse.errorMessage(input.data, input.error)
  }

  isError() {
    return this.data === undefined
  }

  private static errorMessage(data?: any, error?: string) {
    if (data) return undefined
    if (error) return error
    return 'no explicit error provided'
  }
}