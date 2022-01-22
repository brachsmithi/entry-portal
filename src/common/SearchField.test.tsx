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
    // create mock function
    const action = jest.fn()
    // attach return to mock function
    action.mockResolvedValue(Promise.resolve(response))
    // create search field with hooks
    const { getByRole } = render(<SearchField action={action}/>)
    // retrieve field from hook
    const textbox = getByRole('textbox')
    // fill in field with search text
    await act(() => userEvent.type(textbox, searchTerm))
    expect(action).toHaveBeenCalledWith(searchTerm)
    // retrieve list from hook
    const list = getByRole('listbox')
    // verify contents of list
    const options = list.getElementsByTagName('li')
    expect(options.length).toEqual(2)
  })
})