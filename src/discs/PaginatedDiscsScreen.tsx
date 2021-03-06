import React, { useCallback, useEffect, useState } from 'react'
import { PaginatedNav } from '../common/paginate/PaginatedNav'
import { emptyPaginatedData } from '../models/PaginatedData'
import { ListingDisplay } from '../common/listing/ListingDisplay'
import DiscProgramFilterStrategy from './DiscProgramFilterStrategy'
import { loadDiscListings, loadFilteredDiscListings } from '../services/DiscSearchService'
import { FilterType } from '../services/FilterType'
import { makeActionForRoot } from '../common/filter/FilterLinkAction'
import { ListingType } from '../common/listing/ListingType'
import { linkGeneratorRegistry, rootPathFor } from '../registries/LinkGeneratorRegistry'
import { ModelType } from '../models/ModelType'

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
                filterStrategy: DiscProgramFilterStrategy(),
                filterType: FilterType.Program,
                linkAction: makeActionForRoot(rootPathFor(ModelType.Disc)),
                id: +props.programId!
              }
            }
            nextAction={loadNextPage}
            previousAction={loadPreviousPage}
        />
        <ListingDisplay listings={paginatedData.data} linkGenerator={linkGeneratorRegistry.get(ModelType.Disc)} />
      </>
  )
}