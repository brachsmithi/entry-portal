import React from 'react'
import './PaginatedNav.css'
import PaginationMetadata from "../models/PaginationMetadata"

interface PaginatedNavProps {
  metadata: PaginationMetadata,
  nextAction: () => void,
  previousAction: () => void
}

export function PaginatedNav(props: PaginatedNavProps): JSX.Element {
  return (
      <div className='paginatedNav'>
        { props.metadata.currentPage > 1 &&
          <div className='navButton'>
            <button onClick={props.previousAction}>Prev</button>
          </div>
        }
        <div className='location'>
          Page {props.metadata.currentPage} of {props.metadata.totalPages}
        </div>
        { props.metadata.totalPages > props.metadata.currentPage &&
          <div className='navButton'>
            <button onClick={props.nextAction}>Next</button>
          </div>
        }
      </div>
  )
}
