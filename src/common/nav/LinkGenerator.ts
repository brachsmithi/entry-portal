import { FilterType } from '../../services/FilterType'

export default abstract class LinkGenerator {

  abstract rootPath(): string

  detailPath(id: number): string {
    return `${this.rootPath()}/${id}`
  }

  filterPath(filterType: FilterType, id: number) {
    return `${this.rootPath()}/${filterType.toLowerCase()}?${filterType.toLowerCase()}=${id}`
  }

}