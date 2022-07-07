import './SearchDisplay.css'
import SearchField from './SearchField'
import SearchStrategy from '../../models/SearchStrategy'
import { useState } from 'react'
import { DetailLinkAction } from '../detail/DetailLinkAction'

export interface SearchDisplayProps {
  searchStrategy: SearchStrategy,
  linkAction: DetailLinkAction
}

export default function SearchDisplay(props: SearchDisplayProps): JSX.Element {
  const [searchTerm, setSearchTerm] = useState('')
  return (
      <div className='search'>
        <SearchField
            searchAction={props.searchStrategy.searchAction}
            loadAction={props.linkAction.loadAction}
            setSearchTerm={setSearchTerm}
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