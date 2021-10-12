import React, { useEffect, useState } from 'react'
import { PaginatedNav } from "../common/PaginatedNav"
import loadPrograms from "../services/ProgramSearchService"
import { emptyPaginatedData } from "../models/PaginatedData"

export function ProgramScreen(): JSX.Element {
  const [paginatedData, setPaginatedData] = useState(emptyPaginatedData)
  const loadNextPage = () => {
    loadPrograms(paginatedData.paginationMetadata.nextPage)
        .then(result => setPaginatedData(result.paginatedData ?? emptyPaginatedData))
  }
  useEffect(() => {
    loadPrograms(paginatedData.paginationMetadata.currentPage)
        .then(result => setPaginatedData(result.paginatedData ?? emptyPaginatedData))
  }, [])

  return (
      <PaginatedNav metadata={ paginatedData.paginationMetadata } nextAction={loadNextPage}/>
  )
}
