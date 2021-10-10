import React, { useEffect, useState } from 'react'
import { PaginatedNav } from "../common/PaginatedNav"
import loadPrograms from "../services/ProgramSearchService"
import { emptyPaginatedPrograms } from "../models/PaginatedPrograms"

export function ProgramScreen(): JSX.Element {
  const [paginatedPrograms, setPaginatedPrograms] = useState(emptyPaginatedPrograms)
  useEffect(() => {
    loadPrograms()
        .then(result => setPaginatedPrograms(result.paginatedData ?? emptyPaginatedPrograms))
  }, [])
  return (
      <PaginatedNav metadata={ paginatedPrograms.paginationMetadata }/>
  )
}
