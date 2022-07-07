import './SequencedItem.css'
interface SequencedItemProps {
  sequence: number,
  children?: JSX.Element[] | JSX.Element,
  className?: string
}

export default function SequencedItem(props: SequencedItemProps): JSX.Element {
  const classes = ['sequenced-item']
  if (props.className) classes.push(props.className)
  return (
      <div className={ `${ classes.join(' ') }`} style={{order: props.sequence}} >
        <div className='sequence'>{props.sequence}</div>
        <div className='sequenced-content'>
          { props.children && props.children }
        </div>
      </div>
  )
}