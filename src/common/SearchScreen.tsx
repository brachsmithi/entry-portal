import SearchField from "./SearchField"
import SearchStrategy from "../models/SearchStrategy"
import { useState } from "react";

interface SearchScreenProps {
  searchStrategy: SearchStrategy
}

export default function SearchScreen(props: SearchScreenProps): JSX.Element {
  const [searchTerm, setSearchTerm] = useState('')
  return (
      <>
        <SearchField
            searchAction={props.searchStrategy.searchAction}
            loadAction={props.searchStrategy.loadAction}
            setSearchTerm={setSearchTerm}
        />
        <div>
          <button>Search</button>
        </div>
      </>
  )
}