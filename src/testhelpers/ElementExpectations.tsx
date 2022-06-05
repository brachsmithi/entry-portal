import { screen } from '@testing-library/react'

export function expectDetailLink(id: number, text: string, rootPath: string) {
  const element = screen.queryByText(text)
  expect(element).not.toBeNull()
  expect(element?.getAttribute('href')).toEqual(`${ rootPath }/${ id }`)
}