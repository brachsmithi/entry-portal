import React from 'react'
import { render, screen } from '@testing-library/react'
import { PaginatedNav } from './PaginatedNav'
import { defaultPaginationMetadata } from '../../models/PaginationMetadata'
import userEvent from '@testing-library/user-event'
import { SearchDisplayProps } from '../search/SearchDisplay'
import { act } from 'react-dom/test-utils'
import { FilterDisplayProps } from '../filter/FilterDisplay'
import { FilterType } from '../../services/FilterType'
import { ListingType } from '../listing/ListingType'
import DataResponse from '../../models/DataResponse'
import SearchData from '../../models/SearchData'
import FilterData from '../../models/FilterData'

describe('PaginatedNav', () => {

  it('renders with empty metadata', () => {
    render(<PaginatedNav
        listingType={ListingType.programs}
        metadata={defaultPaginationMetadata}
        nextAction={jest.fn()}
        previousAction={jest.fn()} />)
    expect(screen.getByText(/Page 1 of 1/i)).toBeInTheDocument()
    expect(screen.queryByText('Prev')).not.toBeEnabled()
    expect(screen.queryByText('Next')).not.toBeEnabled()
  })

  it('renders on first page of many', () => {
    const metadata = {
      ...defaultPaginationMetadata,
      totalPages: 90
    }
    render(<PaginatedNav
        listingType={ListingType.programs}
        metadata={metadata}
        nextAction={jest.fn()}
        previousAction={jest.fn()} />)
    expect(screen.getByText(/Page 1 of 90/i)).toBeInTheDocument()
    expect(screen.queryByText('Prev')).not.toBeEnabled()
    expect(screen.queryByText('Next')).toBeEnabled()
  })

  it('renders on last page of many', () => {
    const metadata = {
      ...defaultPaginationMetadata,
      currentPage: 12,
      totalPages: 12
    }
    render(<PaginatedNav
        listingType={ListingType.programs}
        metadata={metadata}
        nextAction={jest.fn()}
        previousAction={jest.fn()} />)
    expect(screen.getByText(/Page 12 of 12/i)).toBeInTheDocument()
    expect(screen.queryByText('Prev')).toBeEnabled()
    expect(screen.queryByText('Next')).not.toBeEnabled()
  })

  it('uses provided callback for next action', () => {
    const metadata = {
      ...defaultPaginationMetadata,
      totalPages: 3
    }
    const nextFunction = jest.fn()
    const previousFunction = jest.fn()
    render(<PaginatedNav
        listingType={ListingType.programs}
        metadata={metadata}
        nextAction={nextFunction}
        previousAction={previousFunction} />)

    const nextElement = screen.getByText('Next')
    userEvent.click(nextElement)

    expect(nextFunction).toHaveBeenCalled()
    expect(previousFunction).not.toHaveBeenCalled()
  })

  it('uses provided callback for previous action', () => {
    const metadata = {
      ...defaultPaginationMetadata,
      totalPages: 3,
      currentPage: 2
    }
    const nextFunction = jest.fn()
    const previousFunction = jest.fn()
    render(<PaginatedNav
        listingType={ListingType.programs}
        metadata={metadata}
        nextAction={nextFunction}
        previousAction={previousFunction} />)

    const previousButton = screen.getByText('Prev')
    userEvent.click(previousButton)

    expect(nextFunction).not.toHaveBeenCalled()
    expect(previousFunction).toHaveBeenCalled()
  })

  it('includes search when search props are provided', async () => {
    const searchAction = jest.fn()
    searchAction.mockResolvedValue(new DataResponse<SearchData>({}))
    const loadAction = jest.fn()
    const rootPath = '/root_path'
    const searchTerm = 'atl'
    const searchProperties: SearchDisplayProps = {
      searchStrategy: {
        searchAction: searchAction
      },
      linkAction: {
        loadAction: loadAction,
        rootPath: rootPath
      }
    }
    render(<PaginatedNav
        listingType={ListingType.programs}
        metadata={defaultPaginationMetadata}
        searchDisplayProps={searchProperties}
        nextAction={jest.fn()}
        previousAction={jest.fn()}
    />)
    const textbox = screen.getByRole('textbox')
    await act(() => userEvent.type(textbox, searchTerm))
    expect(searchAction).toHaveBeenCalledWith(searchTerm)
  })

  it('includes filter when filter props are provided', async () => {
    const filterAction = jest.fn()
    filterAction.mockResolvedValue(new DataResponse<FilterData>({}))
    const loadAction = jest.fn()
    const rootPath = '/root_path'
    const filterProperties: FilterDisplayProps = {
      id: 12,
      filterStrategy: {
        filterAction: filterAction
      },
      filterType: FilterType.Program,
      linkAction: {
        loadAction: loadAction,
        rootPath: rootPath
      }
    }
    render(<PaginatedNav
        listingType={ListingType.programs}
        metadata={defaultPaginationMetadata}
        filterDisplayProps={filterProperties}
        nextAction={jest.fn()}
        previousAction={jest.fn()}
    />)
    expect(screen.getByText('Filter on program')).toBeInTheDocument()
  })

})
