import SearchField from "./SearchField"
import "./SearchDisplay.css"
import SearchStrategy from "../models/SearchStrategy"
import { useState } from "react"

export interface SearchDisplayProps {
  searchStrategy: SearchStrategy
}

export default function SearchDisplay(props: SearchDisplayProps): JSX.Element {
  const [searchTerm, setSearchTerm] = useState('')
  return (
      <div className='search'>
        <SearchField
            searchAction={props.searchStrategy.searchAction}
            loadAction={props.searchStrategy.loadAction}
            setSearchTerm={setSearchTerm}
        />
        <div className='search-button'>
          <a href={props.searchStrategy.rootPath.concat('?search=', searchTerm)}>Search</a>
        </div>
      </div>
  )
}