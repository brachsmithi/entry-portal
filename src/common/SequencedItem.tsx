import './SequencedItem.css'
interface SequencedItemProps {
  sequence: number,
  children?: JSX.Element[]
}

export default function SequencedItem(props: SequencedItemProps): JSX.Element {
  return (
      <div key={props.sequence} data-sequence={props.sequence} className='sequenced-item'>
        <div className='sequence'>{props.sequence}</div>
        <div className='sequenced-content'>
          { props.children && props.children }
        </div>
      </div>
  )
}