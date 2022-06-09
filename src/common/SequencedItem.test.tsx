import { render } from '@testing-library/react'
import SequencedItem from './SequencedItem'

describe('SequencedItem', () => {

  it('renders sequence data in template', () => {
    const sequence = 4
    const {getByText} = render(<SequencedItem sequence={sequence}/>)
    let sequenceElement = getByText(sequence);
    expect(sequenceElement).toBeInTheDocument()
    expect(sequenceElement.parentElement).toHaveAttribute('data-sequence', `${sequence}`)
  })

  it('renders child components', () => {
    const sequence = 12
    const textChildComponent1 = 'Foo'
    const textChildComponent2 = 'Baz'
    const {getByText} = render(
        <SequencedItem sequence={sequence}>
          <div>{textChildComponent1}</div>
          <div>{textChildComponent2}</div>
        </SequencedItem>
    )
    const sequenceElement = getByText(sequence)
    const childElements = sequenceElement.parentElement?.children.item(1)?.children
    expect(childElements?.item(0)).toHaveTextContent(textChildComponent1)
    expect(childElements?.item(1)).toHaveTextContent(textChildComponent2)
  })

})