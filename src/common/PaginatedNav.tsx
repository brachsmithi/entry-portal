import React from 'react'
import './PaginatedNav.css'
import PaginationMetadata from "../models/PaginationMetadata"

interface PaginatedNavProps {
  metadata: PaginationMetadata,
  nextAction: () => void,
  previousAction: () => void
}

export function PaginatedNav(props: PaginatedNavProps): JSX.Element {
  const prevEnabled = props.metadata.currentPage > 1
  const nextEnabled = props.metadata.totalPages > props.metadata.currentPage
  return (
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
  )
}
