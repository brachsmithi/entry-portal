import React, { useCallback, useEffect, useState } from 'react'
import { PaginatedNav } from '../common/paginate/PaginatedNav'
import loadProgramListings, { loadProgramSearchResults } from '../services/ProgramSearchService'
import { emptyPaginatedData } from '../models/PaginatedData'
import { ListingDisplay } from '../common/listing/ListingDisplay'
import ProgramSearchStrategy from './ProgramSearchStrategy'
import { makeActionForRoot } from '../common/detail/DetailLinkAction'
import { ListingType } from '../common/listing/ListingType'
import { linkGeneratorRegistry } from '../registries/LinkGeneratorRegistry'
import { ModelType } from '../models/ModelType'

interface PaginatedProgramsScreenProps {
  searchTerm?: string
}

export function PaginatedProgramsScreen(props: PaginatedProgramsScreenProps): JSX.Element {
  const [paginatedData, setPaginatedData] = useState(emptyPaginatedData)
  const loadUnfilteredResults = (page: number) => {
    loadProgramListings(page)
        .then(result => setPaginatedData(result.data ?? emptyPaginatedData))
  }
  const loadSearchResults = (searchTerm: string, page: number) => {
    loadProgramSearchResults(searchTerm, page)
        .then(result => setPaginatedData(result.data ?? emptyPaginatedData))
  }
  const loadPage = useCallback((page: number) => {
    if (props.searchTerm) {
      loadSearchResults(props.searchTerm, page)
    } else {
      loadUnfilteredResults(page)
    }
  }, [props.searchTerm])
  const loadNextPage = () => {
    loadPage(paginatedData.paginationMetadata.nextPage)
  }
  const loadPreviousPage = () => {
    loadPage(paginatedData.paginationMetadata.previousPage)
  }
  useEffect(() => {
    loadPage(1)
  }, [loadPage])

  return (
      <>
        <PaginatedNav
            listingType={ListingType.programs}
            metadata={ paginatedData.paginationMetadata }
            searchDisplayProps={{
              searchStrategy: ProgramSearchStrategy(),
              linkAction: makeActionForRoot(linkGeneratorRegistry.get(ModelType.Program))
            }}
            nextAction={loadNextPage}
            previousAction={loadPreviousPage}
        />
        <ListingDisplay listings={paginatedData.data} linkGenerator={linkGeneratorRegistry.get(ModelType.Program)}/>
      </>
  )
}