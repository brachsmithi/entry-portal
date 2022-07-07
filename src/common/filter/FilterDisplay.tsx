import './FilterDisplay.css'
import FilterStrategy from '../../models/FilterStrategy'
import { DetailLinkAction } from '../detail/DetailLinkAction'
import { FilterType } from '../../services/FilterType'

export interface FilterDisplayProps {
  filterStrategy: FilterStrategy
  linkAction: DetailLinkAction
  filterType: FilterType
  id: number
}

export default function FilterDisplay(props: FilterDisplayProps) {
  return(
      <div className='filter'>
        <div className='description'>
          Filter on {props.filterType.toLowerCase()}
        </div>
        <div className='clear-button'>
          <a href={props.linkAction.rootPath}>Clear</a>
        </div>
      </div>
  )
}