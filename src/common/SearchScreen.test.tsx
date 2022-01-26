import { render } from "@testing-library/react"
import SearchScreen from "./SearchScreen"
import SearchStrategy from "../models/SearchStrategy"

describe('SearchScreen', () => {

  it('contains a field and a button', () => {
    const strategy: SearchStrategy = {
      searchAction: jest.fn(),
      loadAction: jest.fn()
    }
    const { getByRole } = render(<SearchScreen searchStrategy={strategy}/>)

    expect(getByRole('textbox')).toBeInTheDocument()
    expect(getByRole('button')).toBeInTheDocument()
  })
})