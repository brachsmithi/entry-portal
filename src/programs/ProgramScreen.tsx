import React, { useEffect, useState } from 'react'
import { PaginatedNav } from "../common/PaginatedNav"
import loadPrograms from "../services/ProgramSearchService"
import { emptyPaginatedData } from "../models/PaginatedData"

export function ProgramScreen(): JSX.Element {
  const [paginatedData, setPaginatedData] = useState(emptyPaginatedData)
  const loadPage = (page: number) => {
    loadPrograms(page)
        .then(result => setPaginatedData(result.paginatedData ?? emptyPaginatedData))
  }
  const loadNextPage = () => {
    loadPage(paginatedData.paginationMetadata.nextPage)
  }
  const loadPreviousPage = () => {
    loadPage(paginatedData.paginationMetadata.previousPage)
  }
  useEffect(() => {
    loadPage(1)
  }, [])

  return (
      <PaginatedNav
          metadata={ paginatedData.paginationMetadata }
          nextAction={loadNextPage}
          previousAction={loadPreviousPage}
      />
  )
}
