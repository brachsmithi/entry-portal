import React from 'react'
import { render, screen } from '@testing-library/react'
import { ListingDisplay } from "./ListingDisplay"
import { ListingData } from "../models/ListingData";

describe('ProgramListDisplay', () => {

  it('lists given programs',  () => {
    const programs: ListingData[] = [
      {
        id: 236,
        primary: 'Line Item One',
        secondary: ['2001'],
        tertiary: []
      },
      {
        id: 252,
        primary: 'Line Item Two',
        secondary: [],
        tertiary: ['Movie Franchise', '2nd Series']
      },
      {
        id: 634,
        primary: 'Line Item Three',
        secondary: ['1987', 'Full Screen'],
        tertiary: []
      }
    ]
    render(<ListingDisplay listings={programs}/>)

    expect(screen.queryByText('No listings loaded yet.')).not.toBeInTheDocument()
    expect(screen.queryByText('Line Item One')).toBeInTheDocument()
    expect(screen.queryByText('(2001)')).toBeInTheDocument()
    expect(screen.queryByText('Line Item Two')).toBeInTheDocument()
    expect(screen.queryByText('()')).not.toBeInTheDocument()
    expect(screen.queryByText('Movie Franchise/2nd Series')).toBeInTheDocument()
    expect(screen.queryByText('Line Item Three')).toBeInTheDocument()
    expect(screen.queryByText('(1987/Full Screen)')).toBeInTheDocument()
  })

  it('shows default text when there is no content', () => {
    render(<ListingDisplay listings={[]}/>)

    expect(screen.queryByText('No listings loaded yet.')).toBeInTheDocument()
  })

})