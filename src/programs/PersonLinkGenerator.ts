import LinkGenerator from '../common/nav/LinkGenerator'

export default class PersonLinkGenerator extends LinkGenerator {

  rootPath(): string {
    return '/persons'
  }

}