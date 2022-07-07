import React from 'react'
import './PaginatedNav.css'
import PaginationMetadata from '../../models/PaginationMetadata'
import SearchDisplay, { SearchDisplayProps } from '../search/SearchDisplay'
import FilterDisplay, { FilterDisplayProps } from '../filter/FilterDisplay'
import { ListingTypeMenu } from '../listing/ListingTypeMenu'
import { ListingType } from '../listing/ListingType'

interface PaginatedNavProps {
  metadata: PaginationMetadata,
  listingType: ListingType,
  searchDisplayProps?: SearchDisplayProps,
  filterDisplayProps?: FilterDisplayProps,
  nextAction: () => void,
  previousAction: () => void
}

export function PaginatedNav(props: PaginatedNavProps): JSX.Element {
  const prevEnabled = props.metadata.currentPage > 1
  const nextEnabled = props.metadata.totalPages > props.metadata.currentPage
  const filterEnabled = props.filterDisplayProps?.filterStrategy && props.filterDisplayProps?.id > 0
  const searchEnabled = props.searchDisplayProps?.searchStrategy
  return (
      <>
        <ListingTypeMenu listingType={props.listingType} />
        { searchEnabled &&
              <SearchDisplay
                  searchStrategy={props.searchDisplayProps?.searchStrategy!}
                  linkAction={props.searchDisplayProps?.linkAction!}
              /> }
        { filterEnabled &&
              <FilterDisplay
                  filterStrategy={props.filterDisplayProps!.filterStrategy}
                  linkAction={props.filterDisplayProps!.linkAction}
                  filterType={props.filterDisplayProps!.filterType}
                  id={props.filterDisplayProps!.id}
              /> }
        <div className='paginatedNav'>
          <div className='navButton'>
            <button
                onClick={props.previousAction}
                disabled={!prevEnabled}
            >
              Prev
            </button>
          </div>
          <div className='location'>
            Page {props.metadata.currentPage} of {props.metadata.totalPages}
          </div>
          <div className='navButton'>
            <button
                onClick={props.nextAction}
                disabled={!nextEnabled}
            >
              Next
            </button>
          </div>
        </div>
      </>
  )
}
