import LinkGenerator from '../common/nav/LinkGenerator'
import { linkGeneratorRegistry } from '../registries/LinkGeneratorRegistry'
import { ModelType } from '../models/ModelType'

export class ProgramLinkGenerator extends LinkGenerator {

  private constructor() {
    super()
  }

  rootPath(): string {
    return '/programs'
  }

  static register() {
    linkGeneratorRegistry.register(ModelType.Program, new ProgramLinkGenerator())
  }

}