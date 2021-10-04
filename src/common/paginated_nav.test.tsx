import React from 'react'
import { render, screen } from '@testing-library/react'
import { PaginatedNav } from './paginated_nav'
import { defaultPaginationMetadata } from "../models/PaginationMetadata";

describe('PaginatedNav', () => {

  it('renders with empty metadata', () => {
    render(<PaginatedNav metadata={defaultPaginationMetadata} />)
    const currentPageDisplay = screen.getByText(/Page 1 of 1/i)
    expect(currentPageDisplay).toBeInTheDocument()
  })

  it('renders on first page of many', () => {
    const metadata = {
      ...defaultPaginationMetadata,
      totalPages: 90
    };
    render(<PaginatedNav metadata={metadata} />)
    const currentPageDisplay = screen.getByText(/Page 1 of 90/i)
    expect(currentPageDisplay).toBeInTheDocument()
  })

})
