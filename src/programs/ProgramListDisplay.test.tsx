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
      }
    ]
    render(<ProgramListDisplay listings={programs}/>)

    expect(screen.queryByText('Line Item One')).toBeInTheDocument()
    expect(screen.queryByText('(2001)')).toBeInTheDocument()
    expect(screen.queryByText('Line Item Two')).toBeInTheDocument()
    expect(screen.queryByText('()')).not.toBeInTheDocument()
  })

})