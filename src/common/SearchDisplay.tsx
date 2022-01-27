import SearchField from "./SearchField"
import "./SearchDisplay.css"
import SearchStrategy from "../models/SearchStrategy"
import { useState } from "react"

interface SearchDisplayProps {
  searchStrategy: SearchStrategy
}

export default function SearchDisplay(props: SearchDisplayProps): JSX.Element {
  const [searchTerm, setSearchTerm] = useState('')
  const onClick = () => {
    props.searchStrategy.searchAction(searchTerm).then(value => {
      props.searchStrategy.setSearchResponse(value)
    })
  }
  return (
      <div className='search'>
        <SearchField
            searchAction={props.searchStrategy.searchAction}
            loadAction={props.searchStrategy.loadAction}
            setSearchTerm={setSearchTerm}
        />
        <div className='search-button'>
          <button onClick={onClick}>Search</button>
        </div>
      </div>
  )
}