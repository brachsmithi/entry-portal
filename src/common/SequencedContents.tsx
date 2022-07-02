import './SequencedContents.css'
import SequencedItem from './SequencedItem'

export const sequencedContentsTestId = 'sequenced-contents'

export interface SequencedContentsProps {
  sequencedElements: SequencedElement[]
}

export interface SequencedElement {
  sequence: number,
  className: string,
  element: JSX.Element
}

export default function SequencedContents(props: SequencedContentsProps): JSX.Element {
  const sequencedItems = (sequencedElements: SequencedElement[]) => {
    const sequencedItem = (sequencedElement: SequencedElement) => {
      return (
          <SequencedItem
              key={sequencedElement.sequence}
              className={sequencedElement.className}
              sequence={sequencedElement.sequence}
              children={sequencedElement.element}
          />)
    }
    return sequencedElements.map((element) => {
      return sequencedItem(element)
    })
  }
  return (
      <div className='sequenced-contents' data-testid={sequencedContentsTestId}>
        {sequencedItems(props.sequencedElements)}
      </div>
  )
}