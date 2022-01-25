import { ChangeEvent, useState } from "react"
import SearchTermResponse from "../models/SearchTermResponse"
import { ListingData } from "../models/ListingData"

interface SearchFieldProps {
  searchAction: (searchTerm: string) => Promise<SearchTermResponse>
}

interface OptionLinkData {
  text: string
}

const emptyOptionLinks: Array<OptionLinkData> = []

export function SearchField(props: SearchFieldProps): JSX.Element {
  const [optionLinks, setOptionLinks] = useState(emptyOptionLinks)
  const createOptionLinkData = (listing: ListingData) => {
    return {
      text: listing.primary
    }
  }
  const callAction = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value
    if (searchTerm.length >= 3) {
      props.searchAction(searchTerm)
          .then(result => {
            const options = result.data.data.map(listing => createOptionLinkData(listing))
            setOptionLinks(options)
          })
    }
  }
  const options = (linkData: Array<OptionLinkData>) => linkData.map((data, i) => {
    return <li key={i}>{data.text}</li>
  })
  return (
      <>
        <input
            id='searchField'
            type='text'
            placeholder='Enter search text'
            onChange={callAction}
        />
        <ul role='listbox'>{options(optionLinks)}</ul>
      </>
  )
}