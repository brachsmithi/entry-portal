import LinkGenerator, { defaultLinkGenerator } from '../common/nav/LinkGenerator'
import { ModelType } from '../models/ModelType'
import { FilterType } from '../services/FilterType'

class LinkGeneratorRegistry {

  private readonly registry: Map<ModelType, LinkGenerator>

  private constructor() {
    this.registry = new Map<ModelType, LinkGenerator>()
  }

  register(key: ModelType, value: LinkGenerator) {
    this.registry.set(key, value)
  }

  get(key: ModelType): LinkGenerator {
    return this.registry.get(key) ?? defaultLinkGenerator
  }

  static init(): LinkGeneratorRegistry {
    return new LinkGeneratorRegistry()
  }
}

export const linkGeneratorRegistry: LinkGeneratorRegistry = LinkGeneratorRegistry.init()

export function detailPathFor(modelType: ModelType, id: number): string {
  return linkGeneratorRegistry.get(modelType).detailPath(id)
}

export function rootPathFor(modelType: ModelType): string {
  return linkGeneratorRegistry.get(modelType).rootPath()
}

export function filterPathFor(modelType: ModelType, filterType: FilterType, id: number): string {
  return linkGeneratorRegistry.get(modelType).filterPath(filterType, id)
}