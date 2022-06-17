export function makeActionForRoot(rootPath: string) {
  return (id: number) => {
    window.location.href = `${rootPath}/${id}`
  }
}