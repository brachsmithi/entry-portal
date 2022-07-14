import React, { ChangeEvent, useState } from "react"
import './SearchField.css'
import { ListingData } from '../../models/ListingData'
import DataResponse from '../../models/DataResponse'
import SearchData from '../../models/SearchData'

interface SearchFieldProps {
  searchAction: (searchTerm: string) => Promise<DataResponse<SearchData>>
  loadAction: (id: number) => void
  setSearchTerm: (term: string) => void
}

interface OptionLinkData {
  id: number
  text: string
}

const emptyOptionLinks: Array<OptionLinkData> = []

export default function SearchField(props: SearchFieldProps): JSX.Element {
  const [optionLinks, setOptionLinks] = useState(emptyOptionLinks)
  const callLoadAction = (event: React.MouseEvent<HTMLLIElement>) => {
    props.loadAction(event.currentTarget.value)
  }
  const createOptionLinkData = (listing: ListingData) => {
    return {
      id: listing.id,
      text: listing.primary
    }
  }
  const onSearchTermChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value
    props.setSearchTerm(searchTerm)
    if (searchTerm.length >= 3) {
      props.searchAction(searchTerm)
          .then(result => {
            if (result.data?.data) {
              const options = result.data!.data.map(listing => createOptionLinkData(listing))
              setOptionLinks(options)
            }
          })
    }
  }
  const options = (linkData: Array<OptionLinkData>) => linkData.map((data) => {
    return <li key={data.id} value={data.id} onClick={callLoadAction}>{data.text}</li>
  })
  return (
      <div className='search-entry'>
        <input
            id='searchField'
            type='text'
            className='search-field'
            placeholder='Enter search text'
            onChange={onSearchTermChange}
        />
        { optionLinks.length > 0 &&
          <ul className='search-options' role='listbox'>{options(optionLinks)}</ul>
        }
      </div>
  )
}