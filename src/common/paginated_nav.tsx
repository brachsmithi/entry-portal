import React from 'react'
import PaginationMetadata from "../models/PaginationMetadata";

interface PaginatedNavProps {
  metadata: PaginationMetadata
}

export function PaginatedNav(props: PaginatedNavProps): JSX.Element {
  return (
      <div>
        Page {props.metadata.currentPage} of {props.metadata.totalPages}
      </div>
  )
}
