import React, { useCallback, useEffect, useState } from 'react'
import { PaginatedNav } from '../common/paginate/PaginatedNav'
import { emptyPaginatedData } from '../models/PaginatedData'
import { ListingDisplay } from '../common/listing/ListingDisplay'
import DiscFilterStrategy from './DiscFilterStrategy'
import { loadDiscListings, loadFilteredDiscListings } from '../services/DiscSearchService'
import { FilterType } from '../services/FilterType'
import { makeActionForRoot } from '../common/detail/DetailLinkAction'
import { ListingType } from '../common/listing/ListingType'

interface PaginatedDiscsScreenProps {
  programId?: string
}

export function PaginatedDiscsScreen(props: PaginatedDiscsScreenProps): JSX.Element {
  const [paginatedData, setPaginatedData] = useState(emptyPaginatedData)
  const loadFilteredResults = (programId: number) => {
    loadFilteredDiscListings(FilterType.Program, programId)
        .then(result => {
          setPaginatedData(result.data ?? emptyPaginatedData)
        })
  }
  const loadPaginatedResults = (page: number) => {
    loadDiscListings(page)
        .then(result => {
          setPaginatedData(result.data ?? emptyPaginatedData)
        })
  }
  const loadPage = useCallback(() => {
    if (props.programId) {
      loadFilteredResults(+props.programId)
    } else {
      loadPaginatedResults(1)
    }
  }, [props.programId])
  const loadNextPage = () => {
    loadPaginatedResults(paginatedData.paginationMetadata.nextPage)
  }
  const loadPreviousPage = () => {
    loadPaginatedResults(paginatedData.paginationMetadata.previousPage)
  }
  useEffect(() => {
    loadPage()
  }, [loadPage])

  return (
      <>
        <PaginatedNav
            listingType={ListingType.discs}
            metadata={ paginatedData.paginationMetadata }
            filterDisplayProps={
              {
                filterStrategy: DiscFilterStrategy(),
                filterType: FilterType.Program,
                linkAction: makeActionForRoot('/discs'),
                id: +props.programId!
              }
            }
            nextAction={loadNextPage}
            previousAction={loadPreviousPage}
        />
        <ListingDisplay listings={paginatedData.data} path='/discs'/>
      </>
  )
}