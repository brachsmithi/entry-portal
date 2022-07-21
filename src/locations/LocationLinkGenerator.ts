import LinkGenerator from '../common/nav/LinkGenerator'

export default class LocationLinkGenerator extends LinkGenerator {

  rootPath(): string {
    return '/locations'
  }

}