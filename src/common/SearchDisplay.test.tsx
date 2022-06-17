import { render } from "@testing-library/react"
import SearchDisplay from "./SearchDisplay"
import SearchStrategy from "../models/SearchStrategy"
import userEvent from "@testing-library/user-event"
import { DetailLinkAction } from "./DetailLinkAction";

describe('SearchDisplay', () => {

  it('contains a field and a search link and a clear link', async () => {
    const strategy: SearchStrategy = {
      searchAction: jest.fn()
    }
    const action: DetailLinkAction = {
      loadAction: jest.fn(),
      rootPath: '/category'
    }
    const { getByRole, getAllByRole } = render(<SearchDisplay searchStrategy={strategy} linkAction={action}/>)
    const textbox = getByRole('textbox')
    userEvent.type(textbox, 'mu')
    const anchors = getAllByRole('link')
    expect(anchors[0]).toHaveAttribute('href', '/category?search=mu')
    expect(anchors[1]).toHaveAttribute('href', '/category')
  })

})