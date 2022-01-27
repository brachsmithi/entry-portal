import { render, waitFor } from "@testing-library/react"
import SearchDisplay from "./SearchDisplay"
import SearchStrategy from "../models/SearchStrategy"
import SearchTermResponse from "../models/SearchTermResponse";
import userEvent from "@testing-library/user-event";

describe('SearchDisplay', () => {

  it('contains a field and a button', async () => {
    const strategy: SearchStrategy = {
      searchAction: jest.fn(),
      loadAction: jest.fn(),
      setSearchResponse: jest.fn()
    }
    const { getByRole } = render(<SearchDisplay searchStrategy={strategy}/>)

    expect(getByRole('textbox')).toBeInTheDocument()
    expect(getByRole('button')).toBeInTheDocument()
  })

  it('sends search when button clicked', async () => {
    const searchTermResponse = new SearchTermResponse({
      data: {
        data: [
          {
            primary: 'Abbott and Costello Meet the Mummy',
            secondary: ['1955'],
            tertiary: ['The Mummy (Universal I)', 'Classic Universal Monster'],
            id: 5966
          },
          {
            primary: 'Accused of Murder',
            secondary: ['1934'],
            tertiary: ['The Vanishing Shadow'],
            id: 2894
          },
          {
            primary: 'The Adventures of Baron Munchausen',
            secondary: ['1988'],
            tertiary: [],
            id: 5358
          }
        ],
        searchMetadata: {
          searchTerm: 'mu',
          resultCount: 3
        }
      }
    })
    const searchFunction = jest.fn()
    searchFunction.mockReturnValue(Promise.resolve(searchTermResponse))
    const setResponseFunction = jest.fn((_: SearchTermResponse) => {})
    const strategy: SearchStrategy = {
      searchAction: searchFunction,
      loadAction: jest.fn(),
      setSearchResponse: setResponseFunction
    }
    const { getByRole } = render(<SearchDisplay searchStrategy={strategy}/>)
    await waitFor(() => {
      const input = getByRole('textbox')
      userEvent.type(input, 'mu')
    })
    await waitFor(() => {
      const button = getByRole('button')
      userEvent.click(button)
    })
    expect(searchFunction).toHaveBeenCalledTimes(1)
    expect(searchFunction).toHaveBeenCalledWith('mu')
    expect(setResponseFunction).toHaveBeenCalled()
    expect(setResponseFunction).toHaveBeenCalledWith(searchTermResponse)
  })

})