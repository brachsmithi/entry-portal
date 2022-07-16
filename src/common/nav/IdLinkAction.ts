export interface IdLinkAction {
  rootPath: string,
  loadAction: (id: number) => void
}