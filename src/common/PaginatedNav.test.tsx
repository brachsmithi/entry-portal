import React from 'react'
import { render, screen } from '@testing-library/react'
import { PaginatedNav } from './PaginatedNav'
import { defaultPaginationMetadata } from "../models/PaginationMetadata"
import userEvent from "@testing-library/user-event"

describe('PaginatedNav', () => {

  it('renders with empty metadata', () => {
    render(<PaginatedNav metadata={defaultPaginationMetadata} nextAction={jest.fn()} previousAction={jest.fn()} />)
    expect(screen.getByText(/Page 1 of 1/i)).toBeInTheDocument()
    expect(screen.queryByText('Prev')).not.toBeEnabled()
    expect(screen.queryByText('Next')).not.toBeEnabled()
  })

  it('renders on first page of many', () => {
    const metadata = {
      ...defaultPaginationMetadata,
      totalPages: 90
    }
    render(<PaginatedNav metadata={metadata} nextAction={jest.fn()} previousAction={jest.fn()} />)
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
    render(<PaginatedNav metadata={metadata} nextAction={jest.fn()} previousAction={jest.fn()} />)
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
    render(<PaginatedNav metadata={metadata} nextAction={nextFunction} previousAction={previousFunction} />)

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
    render(<PaginatedNav metadata={metadata} nextAction={nextFunction} previousAction={previousFunction} />)

    const previousButton = screen.getByText('Prev')
    userEvent.click(previousButton)

    expect(nextFunction).not.toHaveBeenCalled()
    expect(previousFunction).toHaveBeenCalled()
  })

})
