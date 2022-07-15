import './FilterDisplay.css'
import FilterStrategy from '../../models/FilterStrategy'
import { DetailLinkAction } from '../detail/DetailLinkAction'
import { FilterType } from '../../services/FilterType'
import PicklistInputField from '../component/PicklistInputField'
import DataResponse from "../../models/DataResponse";
import SearchData from "../../models/SearchData";

export interface FilterDisplayProps {
  filterStrategy: FilterStrategy
  linkAction: DetailLinkAction
  filterType: FilterType
  id?: number
}

export default function FilterDisplay(props: FilterDisplayProps) {
  const termAction = (_: string) => {
    return new Promise<DataResponse<SearchData>>(_ => new DataResponse<SearchData>({}))
  }
  const loadAction = () => {

  }
  const setTerm = () => {

  }

  return(
      <div className='filter'>
        { props.id &&
          <div>
            <div className='description'>
              Filter on {props.filterType.toLowerCase()}
            </div>
            <div className='clear-button'>
              <a href={props.linkAction.rootPath}>Clear</a>
            </div>
          </div>
        }

        { !props.id &&
          <div>
            <PicklistInputField
                termAction={termAction}
                loadAction={loadAction}
                setTerm={setTerm}/>
          </div> }
      </div>
  )
}