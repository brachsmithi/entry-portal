import { render } from "@testing-library/react"
import { SearchField } from "./SearchField"
import userEvent from "@testing-library/user-event"

describe('SearchField', () => {

  it('renders a text field', () => {
    const {getByPlaceholderText} = render(<SearchField action={jest.fn()}/>)
    const element = getByPlaceholderText('Enter search text')
    expect(element).toBeInTheDocument()
    expect(element).toHaveAttribute('id', 'searchField')
  })

  it('fires action when there are 3 letters in search text', () => {
    const action = jest.fn()
    const {getByPlaceholderText} = render(<SearchField action={action}/>)
    const element = getByPlaceholderText('Enter search text')

    userEvent.type(element, 'ab')
    expect(action).not.toHaveBeenCalled()

    userEvent.type(element, 'c')
    expect(action).toHaveBeenCalledWith('abc')
  })
})