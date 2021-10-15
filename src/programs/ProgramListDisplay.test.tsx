import React from 'react'
import { render, screen } from '@testing-library/react'
import { ProgramListDisplay } from "./ProgramListDisplay"

describe('ProgramListDisplay', () => {

  it('lists given programs',  () => {
    const programs = [
      {
        primary: 'Line Item One'
      },
      {
        primary: 'Line Item Two'
      }
    ]
    render(<ProgramListDisplay listings={programs}/>)

    expect(screen.getByText('Line Item One')).toBeInTheDocument()
  })

})