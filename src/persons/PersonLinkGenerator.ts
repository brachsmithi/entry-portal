import LinkGenerator from '../common/nav/LinkGenerator'
import { linkGeneratorRegistry } from '../registries/LinkGeneratorRegistry'
import { ModelType } from '../models/ModelType'

export class PersonLinkGenerator extends LinkGenerator {

  private constructor() {
    super()
  }

  rootPath(): string {
    return '/persons'
  }

  static register() {
    linkGeneratorRegistry.register(ModelType.Person, new PersonLinkGenerator())
  }

}