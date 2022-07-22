import LinkGenerator from '../common/nav/LinkGenerator'

export default class PackageLinkGenerator extends LinkGenerator {

  rootPath(): string {
    return '/packages'
  }

}