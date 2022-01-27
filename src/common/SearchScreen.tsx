import SearchField from "./SearchField"
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
      <>
        <SearchField
            searchAction={props.searchStrategy.searchAction}
            loadAction={props.searchStrategy.loadAction}
            setSearchTerm={setSearchTerm}
        />
        <div>
          <button onClick={onClick}>Search</button>
        </div>
      </>
  )
}