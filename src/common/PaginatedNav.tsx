import React from 'react'
import PaginationMetadata from "../models/PaginationMetadata"

interface PaginatedNavProps {
  metadata: PaginationMetadata
}

export function PaginatedNav(props: PaginatedNavProps): JSX.Element {
  return (
      <div>
        { props.metadata.currentPage > 1 &&
          <div>Prev</div>
        }
        <div>
          Page {props.metadata.currentPage} of {props.metadata.totalPages}
        </div>
        { props.metadata.totalPages > props.metadata.currentPage &&
          <div>Next</div>
        }
      </div>
  )
}