import './SearchDisplay.css'
import SearchStrategy from '../../models/SearchStrategy'
import { useState } from 'react'
import { DetailLinkAction } from '../detail/DetailLinkAction'
import PicklistInputField from '../component/PicklistInputField'

export interface SearchDisplayProps {
  searchStrategy: SearchStrategy,
  linkAction: DetailLinkAction
}

export default function SearchDisplay(props: SearchDisplayProps): JSX.Element {
  const [searchTerm, setSearchTerm] = useState('')
  return (
      <div className='search'>
        <PicklistInputField
            termAction={props.searchStrategy.searchAction}
            loadAction={props.linkAction.loadAction}
            setTerm={setSearchTerm}
        />
        <div className='search-button'>
          <a href={props.linkAction.rootPath.concat('?search=', searchTerm)}>Search</a>
        </div>
        <div className='clear-button'>
          <a href={props.linkAction.rootPath}>Clear</a>
        </div>
      </div>
  )
}