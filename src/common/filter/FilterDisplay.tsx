import './FilterDisplay.css'
import FilterStrategy from '../../models/FilterStrategy'
import { IdLinkAction } from '../nav/IdLinkAction'
import { FilterType } from '../../services/FilterType'
import PicklistInputField from '../component/PicklistInputField'

export interface FilterDisplayProps {
  filterStrategy: FilterStrategy
  linkAction: IdLinkAction
  filterType: FilterType
  id?: number
}

export default function FilterDisplay(props: FilterDisplayProps) {
  const active: boolean = !(props.id === undefined || Number.isNaN(props.id))
  return(
      <div className='filter'>
        { active &&
          <div className='filter-active'>
            <div className='description'>
              Filter on {props.filterType.toLowerCase()}
            </div>
            <div className='clear-button'>
              <a href={props.linkAction.rootPath}>Clear</a>
            </div>
          </div> }
        { !active &&
          <div className='filter-form'>
            <PicklistInputField
                termAction={props.filterStrategy.filterAction}
                loadAction={props.linkAction.loadAction}
                setTerm={(_: string) => {}}/>
          </div> }
      </div>
  )
}