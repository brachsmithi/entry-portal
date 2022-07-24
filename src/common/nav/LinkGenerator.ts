import { FilterType } from '../../services/FilterType'

export default abstract class LinkGenerator {

  abstract rootPath(): string

  detailPath(id: number): string {
    return `${this.rootPath()}/${id}`
  }

  filterPath(filterType: FilterType, id: number) {
    return `${this.rootPath()}/${filterType.toLowerCase()}?${filterType.toLowerCase()}Id=${id}`
  }

}

class DefaultLinkGenerator extends LinkGenerator {
  rootPath(): string {
    return '/'
  }
  filterPath(filterType: FilterType, id: number): string {
    return this.rootPath()
  }
  detailPath(id: number): string {
    return this.rootPath()
  }
}

export const defaultLinkGenerator = new DefaultLinkGenerator()