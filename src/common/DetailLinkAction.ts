export interface DetailLinkAction {
  rootPath: string,
  loadAction: (id: number) => void
}

export function makeActionForRoot(rootPath: string): DetailLinkAction {
  return {
    rootPath: rootPath,
    loadAction: (id: number) => {
      window.location.href = `${ rootPath }/${ id }`
    }
  }
}