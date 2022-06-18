import React, { useCallback, useEffect, useState } from 'react'
import { PaginatedNav } from '../common/PaginatedNav'
import { emptyPaginatedData } from '../models/PaginatedData'
import { ListingDisplay } from '../common/ListingDisplay'
import DiscFilterStrategy from './DiscFilterStrategy'
import { loadFilteredDiscListings } from '../services/DiscSearchService'
import { FilterType } from '../services/FilterType'
import { makeActionForRoot } from "../common/DetailLinkAction";

interface PaginatedDiscsScreenProps {
  programId?: string
}

export function PaginatedDiscsScreen(props: PaginatedDiscsScreenProps): JSX.Element {
  const [paginatedData, setPaginatedData] = useState(emptyPaginatedData)
  const loadFilteredResults = (programId: number) => {
    loadFilteredDiscListings(FilterType.Program, programId)
        .then(result => setPaginatedData(result.data ?? emptyPaginatedData))
  }
  const loadPage = useCallback(() => {
    if (props.programId) {
      loadFilteredResults(+props.programId)
    }
  }, [props.programId])
  const loadNextPage = () => {}
  const loadPreviousPage = () => {}
  useEffect(() => {
    loadPage()
  }, [loadPage])

  return (
      <>
        <PaginatedNav
            metadata={ paginatedData.paginationMetadata }
            filterDisplayProps={
              {
                filterStrategy: DiscFilterStrategy(),
                filterType: FilterType.Program,
                linkAction: makeActionForRoot('/discs')
              }
            }
            nextAction={loadNextPage}
            previousAction={loadPreviousPage}
        />
        <ListingDisplay listings={paginatedData.data} path='/discs'/>
      </>
  )
}