import React, { useEffect, useState } from 'react'
import { PaginatedNav } from "../common/PaginatedNav"
import loadPrograms from "../services/ProgramSearchService"
import { emptyPaginatedPrograms } from "../models/PaginatedPrograms"
import { waitFor } from "@testing-library/react"

export function ProgramScreen(): JSX.Element {
  const [paginatedPrograms, setPaginatedPrograms] = useState(emptyPaginatedPrograms)
  useEffect(() => {
    waitFor(() => loadPrograms())
        .then(result => setPaginatedPrograms(result.paginatedPrograms ?? emptyPaginatedPrograms))
  })
  return (
      <PaginatedNav metadata={ paginatedPrograms.paginationMetadata }/>
  )
}
