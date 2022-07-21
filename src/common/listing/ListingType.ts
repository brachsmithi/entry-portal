import DiscLinkGenerator from '../../discs/DiscLinkGenerator'
import ProgramLinkGenerator from '../../programs/ProgramLinkGenerator'

export class ListingType {
  static readonly discs = new ListingType('D', 'Discs', new DiscLinkGenerator().rootPath(), 'D')
  static readonly programs = new ListingType('P', 'Programs', new ProgramLinkGenerator().rootPath(), 'P')

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