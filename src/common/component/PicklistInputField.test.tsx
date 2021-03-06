import { act, render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { defaultPaginationMetadata } from '../../models/PaginationMetadata'
import DataResponse from '../../models/DataResponse'
import SearchData from '../../models/SearchData'
import PicklistInputField from './PicklistInputField'

describe('PicklistInputField', () => {

  it('renders a text field', () => {
    const { getByRole } = render(<PicklistInputField termAction={jest.fn()} loadAction={jest.fn()} setTerm={jest.fn()}/>)
    const textbox = getByRole('textbox') as HTMLInputElement
    expect(textbox.placeholder).toEqual('Enter text')
    expect(textbox).toHaveAttribute('id', 'picklistInputField')
  })

  it('fires set search term action whenever search text changes', async () => {
    const searchAction = jest.fn((_: string) => Promise.resolve(new DataResponse<SearchData>({})))
    const setSearchTerm = jest.fn((_: string) => {})
    const { getByRole } = render(<PicklistInputField termAction={searchAction} loadAction={jest.fn()} setTerm={setSearchTerm}/>)
    const textbox = getByRole('textbox')

    userEvent.type(textbox, 'ca')
    expect(setSearchTerm).toHaveBeenCalledWith('ca')

    await act(() => userEvent.type(textbox, 't'))

    expect(setSearchTerm).toHaveBeenCalledWith('cat')
  })

  it('fires search action when there are 3 letters in search text', async () => {
    const searchAction = jest.fn((_: string) => Promise.resolve(new DataResponse<SearchData>({})))
    const { getByRole } = render(<PicklistInputField termAction={searchAction} loadAction={jest.fn()} setTerm={jest.fn()}/>)
    const textbox = getByRole('textbox')

    userEvent.type(textbox, 'ab')
    expect(searchAction).not.toHaveBeenCalled()

    await act(() => userEvent.type(textbox, 'c'))

    expect(searchAction).toHaveBeenCalledWith('abc')
  })

  it('displays list of options matching search text', async () => {
    const searchTerm = 'disco'
    const response = new DataResponse<SearchData>({
      data: {
        paginationMetadata: defaultPaginationMetadata,
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
    const searchAction = jest.fn()
    searchAction.mockResolvedValue(Promise.resolve(response))

    const { getByRole } = render(<PicklistInputField termAction={searchAction} loadAction={jest.fn()} setTerm={jest.fn()}/>)
    const textbox = getByRole('textbox')

    await act(() => userEvent.type(textbox, searchTerm))

    const list = getByRole('listbox')
    const options = list.getElementsByTagName('li')
    expect(options.length).toEqual(2)
    expect(options[0].textContent).toEqual('Disco Godfather')
    expect(options[1].textContent).toEqual('Star Trek VI: The Undiscovered Country')
  })

  it('clicking an option sends item id to load action', async () => {
    const searchTerm = 'sheen'
    const response = new DataResponse<SearchData>({
      data: {
        paginationMetadata: defaultPaginationMetadata,
        data: [
          {
            id: 1797,
            primary: 'Sheena: Queen of the Jungle',
            secondary: ['1984'],
            tertiary: []
          }
        ],
        searchMetadata: {
          searchTerm: searchTerm,
          resultCount: 1
        }
      }
    })
    const searchAction = jest.fn()
    searchAction.mockResolvedValue(Promise.resolve(response))
    const loadAction = jest.fn()

    const { getByRole } = render(<PicklistInputField termAction={searchAction} loadAction={loadAction} setTerm={jest.fn()}/>)
    const textbox = getByRole('textbox')

    await act(() => userEvent.type(textbox, searchTerm))

    const list = getByRole('listbox')
    const options = list.getElementsByTagName('li')
    act(() => userEvent.click(options[0]))
    expect(loadAction).toHaveBeenCalledWith(1797)
  })
})