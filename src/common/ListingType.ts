export class ListingType {
  static readonly discs = new ListingType('D', 'Discs', '/discs', 'D')
  static readonly programs = new ListingType('P', 'Programs', '/programs', 'P')

  private constructor(
      public readonly key: string,
      public readonly name: string,
      public readonly path: string,
      public readonly icon: string) {
  }

  toString(): string {
    return this.key
  }
}