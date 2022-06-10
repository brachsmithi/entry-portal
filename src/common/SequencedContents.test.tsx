import { render } from '@testing-library/react'
import SequencedContents, { SequencedElement } from './SequencedContents'


describe('SequencedContents', () => {

  it('puts content into sequenced items', () => {
    const sequencedElements: SequencedElement[] = [
      {
        sequence: 1,
        className: 'foo',
        element: (<div>First Element</div>)
      },
      {
        sequence: 2,
        className: 'bar',
        element: (<div>Fifth Element</div>)
      }
    ]
    const {getByText} = render(<SequencedContents sequencedElements={sequencedElements} />)

    const sequenceItem1 = getByText("1").parentElement
    expect(sequenceItem1).toHaveAttribute('class', 'sequenced-item foo')
    expect(sequenceItem1?.children.item(1)).toHaveTextContent('First Element')
    const sequenceItem2 = getByText("2").parentElement
    expect(sequenceItem2).toHaveAttribute('class', 'sequenced-item bar')
    expect(sequenceItem2?.children.item(1)).toHaveTextContent('Fifth Element')
  })

})