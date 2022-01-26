import SearchField from "./SearchField"
import SearchStrategy from "../models/SearchStrategy"

interface SearchScreenProps {
  searchStrategy: SearchStrategy
}

export default function SearchScreen(props: SearchScreenProps): JSX.Element {
  return (
      <>
        <SearchField
            searchAction={props.searchStrategy.searchAction}
            loadAction={props.searchStrategy.loadAction}
        />
        <div>
          <button>Search</button>
        </div>
      </>
  )
}