import LinkGenerator from '../common/nav/LinkGenerator'
import { linkGeneratorRegistry } from '../registries/LinkGeneratorRegistry'
import { ModelType } from '../models/ModelType'

export class SeriesLinkGenerator extends LinkGenerator {

  private constructor() {
    super()
  }

  rootPath(): string {
    return '/series'
  }

  static register() {
    linkGeneratorRegistry.register(ModelType.Series, new SeriesLinkGenerator())
  }

}