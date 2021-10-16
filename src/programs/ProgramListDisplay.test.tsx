import React from 'react'
import { render, screen } from '@testing-library/react'
import { ProgramListDisplay } from "./ProgramListDisplay"
import { ListingData } from "../models/ListingData";

describe('ProgramListDisplay', () => {

  it('lists given programs',  () => {
    const programs: ListingData[] = [
      {
        primary: 'Line Item One',
        secondary: ['2001']
      },
      {
        primary: 'Line Item Two',
        secondary: []
      },
      {
        primary: 'Line Item Three',
        secondary: ['1987', 'Full Screen']
      }
    ]
    render(<ProgramListDisplay listings={programs}/>)

    expect(screen.queryByText('Line Item One')).toBeInTheDocument()
    expect(screen.queryByText('(2001)')).toBeInTheDocument()
    expect(screen.queryByText('Line Item Two')).toBeInTheDocument()
    expect(screen.queryByText('()')).not.toBeInTheDocument()
    expect(screen.queryByText('Line Item Three')).toBeInTheDocument()
    expect(screen.queryByText('(1987/Full Screen)')).toBeInTheDocument()
  })

})