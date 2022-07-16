import './FilterDisplay.css'
import FilterStrategy from '../../models/FilterStrategy'
import { IdLinkAction } from '../nav/IdLinkAction'
import { FilterType } from '../../services/FilterType'
import PicklistInputField from '../component/PicklistInputField'
import { useState } from 'react'

export interface FilterDisplayProps {
  filterStrategy: FilterStrategy
  linkAction: IdLinkAction
  filterType: FilterType
  id?: number
}

export default function FilterDisplay(props: FilterDisplayProps) {
  const [filterTerm, setFilterTerm] = useState('')

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
          <div>
            <PicklistInputField
                termAction={props.filterStrategy.filterAction}
                loadAction={props.linkAction.loadAction}
                setTerm={setFilterTerm}/>
          </div> }
      </div>
  )
}