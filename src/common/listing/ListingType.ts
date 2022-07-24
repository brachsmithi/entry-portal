import { ModelType } from '../../models/ModelType'
import { rootPathFor } from '../../registries/LinkGeneratorRegistry'

export class ListingType {
  static readonly discs = new ListingType('D', 'Discs', ModelType.Disc, 'D')
  static readonly programs = new ListingType('P', 'Programs', ModelType.Program, 'P')

  private constructor(
      public readonly key: string,
      public readonly name: string,
      private readonly modelType: ModelType,
      public readonly icon: string) {
  }

  path(): string {
    return rootPathFor(this.modelType)
  }

  toString(): string {
    return this.key
  }
}