import LinkGenerator from '../common/nav/LinkGenerator'
import { linkGeneratorRegistry } from '../registries/LinkGeneratorRegistry'
import { ModelType } from '../models/ModelType'

export class LocationLinkGenerator extends LinkGenerator {

  private constructor() {
    super()
  }

  rootPath(): string {
    return '/locations'
  }

  static register() {
    linkGeneratorRegistry.register(ModelType.Location, new LocationLinkGenerator())
  }

}