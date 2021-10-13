import React from 'react'
import PaginationMetadata from "../models/PaginationMetadata"

interface PaginatedNavProps {
  metadata: PaginationMetadata,
  nextAction: () => void,
  previousAction: () => void
}

export function PaginatedNav(props: PaginatedNavProps): JSX.Element {
  return (
      <div>
        { props.metadata.currentPage > 1 &&
          <div>
            <button onClick={props.previousAction}>Prev</button>
          </div>
        }
        <div>
          Page {props.metadata.currentPage} of {props.metadata.totalPages}
        </div>
        { props.metadata.totalPages > props.metadata.currentPage &&
          <div>
            <button onClick={props.nextAction}>Next</button>
          </div>
        }
      </div>
  )
}
