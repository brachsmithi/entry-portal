import { act, render } from "@testing-library/react"
import { SearchField } from "./SearchField"
import userEvent from "@testing-library/user-event"
import SearchTermResponse from "../models/SearchTermResponse"

describe('SearchField', () => {

  it('renders a text field', () => {
    const { getByRole } = render(<SearchField action={jest.fn()}/>)
    const textbox = getByRole('textbox') as HTMLInputElement
    expect(textbox.placeholder).toEqual('Enter search text')
    expect(textbox).toHaveAttribute('id', 'searchField')
  })

  it('fires action when there are 3 letters in search text', async () => {
    const action = jest.fn((_: string) => Promise.resolve(new SearchTermResponse({})))
    const { getByRole } = render(<SearchField action={action}/>)
    const textbox = getByRole('textbox')

    userEvent.type(textbox, 'ab')
    expect(action).not.toHaveBeenCalled()

    await act(() => userEvent.type(textbox, 'c'))

    expect(action).toHaveBeenCalledWith('abc')
  })

  it('displays list of options matching search text', async () => {
    const searchTerm = 'disco'
    const response = new SearchTermResponse({
      data: {
        data: [
          {
            id: 5463,
            primary: 'Disco Godfather',
            secondary: ['1979'],
            tertiary: []
          },
          {
            id: 5065,
            primary: 'Star Trek VI: The Undiscovered Country',
            secondary: ['1991'],
            tertiary: ['Star Trek (TOS Films)']
          }
        ],
        searchMetadata: {
          searchTerm: searchTerm,
          resultCount: 2
        }
      }
    })
    const action = jest.fn()
    action.mockResolvedValue(Promise.resolve(response))

    const { getByRole } = render(<SearchField action={action}/>)
    const textbox = getByRole('textbox')

    await act(() => userEvent.type(textbox, searchTerm))

    const list = getByRole('listbox')
    const options = list.getElementsByTagName('li')
    expect(options.length).toEqual(2)
    expect(options[0].textContent).toEqual('Disco Godfather')
    expect(options[1].textContent).toEqual('Star Trek VI: The Undiscovered Country')
  })
})