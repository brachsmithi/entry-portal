import React, { useEffect, useState } from 'react'
import { PaginatedNav } from "../common/PaginatedNav"
import loadPrograms from "../services/ProgramSearchService"
import { emptyPaginatedData } from "../models/PaginatedData"

export function ProgramScreen(): JSX.Element {
  const [paginatedPrograms, setPaginatedPrograms] = useState(emptyPaginatedData)
  useEffect(() => {
    loadPrograms()
        .then(result => setPaginatedPrograms(result.paginatedData ?? emptyPaginatedData))
  }, [])
  return (
      <PaginatedNav metadata={ paginatedPrograms.paginationMetadata } nextAction={() => {}}/>
  )
}
