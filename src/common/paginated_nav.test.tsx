import React from 'react'
import { render, screen } from '@testing-library/react'
import { PaginatedNav } from './paginated_nav'

describe('PaginatedNav', () => {

  it('renders with empty metadata', () => {
    render(<PaginatedNav />)
    const currentPageDisplay = screen.getByText(/Page 1 of 1/i)
    expect(currentPageDisplay).toBeInTheDocument()
  })

})
