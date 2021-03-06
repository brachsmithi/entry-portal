import LinkGenerator from '../common/nav/LinkGenerator'
import { linkGeneratorRegistry } from '../registries/LinkGeneratorRegistry'
import { ModelType } from '../models/ModelType'

export class PackageLinkGenerator extends LinkGenerator {

  private constructor() {
    super()
  }

  rootPath(): string {
    return '/packages'
  }

  static register() {
    linkGeneratorRegistry.register(ModelType.Package, new PackageLinkGenerator())
  }

}