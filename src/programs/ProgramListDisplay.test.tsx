import React from 'react'
import { render, screen } from '@testing-library/react'
import { ProgramListDisplay } from "./ProgramListDisplay"

describe('ProgramListDisplay', () => {

  it('lists given programs',  () => {
    const programs = [
      {
        primary: 'Line Item One',
        secondary: '2001'
      },
      {
        primary: 'Line Item Two'
      }
    ]
    render(<ProgramListDisplay listings={programs}/>)

    expect(screen.getByText('Line Item One')).toBeInTheDocument()
    expect(screen.getByText('2001')).toBeInTheDocument()
    expect(screen.getByText('Line Item Two')).toBeInTheDocument()
  })

})