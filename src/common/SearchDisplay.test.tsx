import { render } from "@testing-library/react"
import SearchDisplay from "./SearchDisplay"
import SearchStrategy from "../models/SearchStrategy"
import userEvent from "@testing-library/user-event"

describe('SearchDisplay', () => {

  it('contains a field and a search link and a clear link', async () => {
    const strategy: SearchStrategy = {
      filterAction: jest.fn(),
      searchAction: jest.fn(),
      loadAction: jest.fn(),
      rootPath: '/category'
    }
    const { getByRole, getAllByRole } = render(<SearchDisplay searchStrategy={strategy}/>)
    const textbox = getByRole('textbox')
    userEvent.type(textbox, 'mu')
    const anchors = getAllByRole('link')
    expect(anchors[0]).toHaveAttribute('href', '/category?search=mu')
    expect(anchors[1]).toHaveAttribute('href', '/category')
  })

})