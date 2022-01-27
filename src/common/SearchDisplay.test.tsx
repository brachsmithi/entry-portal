import { render } from "@testing-library/react"
import SearchDisplay from "./SearchDisplay"
import SearchStrategy from "../models/SearchStrategy"
import userEvent from "@testing-library/user-event"

describe('SearchDisplay', () => {

  it('contains a field and a link', async () => {
    const strategy: SearchStrategy = {
      searchAction: jest.fn(),
      loadAction: jest.fn(),
      rootPath: '/category'
    }
    const { getByRole } = render(<SearchDisplay searchStrategy={strategy}/>)
    const textbox = getByRole('textbox')
    userEvent.type(textbox, 'mu')
    const anchor = getByRole('link')
    expect(anchor).toHaveAttribute('href', '/category?search=mu')
  })

})