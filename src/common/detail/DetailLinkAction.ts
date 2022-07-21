import { IdLinkAction } from '../nav/IdLinkAction'
import LinkGenerator from '../nav/LinkGenerator'

export function makeActionForRoot(linkGenerator: LinkGenerator): IdLinkAction {
  return {
    rootPath: linkGenerator.rootPath(),
    loadAction: (id: number) => {
      window.location.href = linkGenerator.detailPath(id)
    }
  }
}