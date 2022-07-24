import LinkGenerator from '../common/nav/LinkGenerator'
import { linkGeneratorRegistry } from '../registries/LinkGeneratorRegistry'
import { ModelType } from '../models/ModelType'

export class DiscLinkGenerator extends LinkGenerator {

  private constructor() {
    super()
  }

  rootPath(): string {
    return '/discs'
  }

  static register() {
    linkGeneratorRegistry.register(ModelType.Disc, new DiscLinkGenerator())
  }

}