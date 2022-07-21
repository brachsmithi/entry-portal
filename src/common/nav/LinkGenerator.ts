export default abstract class LinkGenerator {

  abstract rootPath(): string

  detailPath(id: number): string {
    return `${this.rootPath()}/${id}`
  }

}