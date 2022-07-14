import React, { ChangeEvent, useState } from "react"
import './PicklistInputField.css'
import { ListingData } from '../../models/ListingData'
import DataResponse from '../../models/DataResponse'
import SearchData from '../../models/SearchData'

interface PicklistInputFieldProps {
  termAction: (term: string) => Promise<DataResponse<SearchData>>
  loadAction: (id: number) => void
  setTerm: (term: string) => void
}

interface OptionLinkData {
  id: number
  text: string
}

const emptyOptionLinks: Array<OptionLinkData> = []

export default function PicklistInputField(props: PicklistInputFieldProps): JSX.Element {
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
  const onTermChange = (event: ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value
    props.setTerm(term)
    if (term.length >= 3) {
      props.termAction(term)
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
      <div className='picklist-input-entry'>
        <input
            id='picklistInputField'
            type='text'
            className='picklist-input-field'
            placeholder='Enter text'
            onChange={onTermChange}
        />
        { optionLinks.length > 0 &&
          <ul className='picklist-input-options' role='listbox'>{options(optionLinks)}</ul>
        }
      </div>
  )
}