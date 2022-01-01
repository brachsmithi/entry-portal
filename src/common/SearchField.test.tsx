import { render } from "@testing-library/react";
import { SearchField } from "./SearchField";

describe('SearchField', () => {

  it('renders a text field', () => {
    const {getByPlaceholderText} = render(<SearchField/>)
    const element = getByPlaceholderText('Enter search text')
    expect(element).toBeInTheDocument()
    expect(element).toHaveAttribute('id', 'searchField')
  })
})