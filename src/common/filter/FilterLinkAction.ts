import { IdLinkAction } from '../nav/IdLinkAction'

export function makeActionForRoot(rootPath: string): IdLinkAction {
  return {
    rootPath: rootPath,
    loadAction: (id: number) => {
      window.location.href = `${ rootPath }/program?programId=${ id }`
    }
  }
}