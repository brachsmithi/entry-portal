import SearchField from "./SearchField"
import "./SearchScreen.css"
import SearchStrategy from "../models/SearchStrategy"
import { useState } from "react"

interface SearchScreenProps {
  searchStrategy: SearchStrategy
}

export default function SearchScreen(props: SearchScreenProps): JSX.Element {
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