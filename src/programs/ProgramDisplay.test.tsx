import React from 'react'
import { render, screen } from '@testing-library/react'
import { ProgramDisplay } from "./ProgramDisplay";
import ProgramData from "../models/ProgramData";

describe('ProgramDisplay', () => {

  it('shows details of fully filled program', () => {
    const program: ProgramData = {
      id: 223,
      title: 'The Film\'s Title',
      year: '2021',
      version: 'TV Edit',
      lengthInMinutes: 87,
      people: [
        {
          name: 'Director One',
          aliases: [
            {
              name: 'D. One'
            },
            {
              name: 'Director Uno'
            }
          ]
        },
        {
          name: 'Director Two',
          aliases: [
            {
              name: 'D. Two'
            },
            {
              name: 'Director Dos'
            }
          ]
        }
      ],
      series: [
        'The Film Series',
        'The Unofficial Film Series'
      ],
      alternateTitles: [
        {
          name: 'The Title of the Film'
        },
        {
          name: 'Title: The Film'
        }
      ]
    }
    render(<ProgramDisplay program={program}/>)

    expect(screen.queryByText('The Film\'s Title')).toBeInTheDocument()
    expect(screen.queryByText('2021')).toBeInTheDocument()
    expect(screen.queryByText('TV Edit')).toBeInTheDocument()
    expect(screen.queryByText('1:27')).toBeInTheDocument()
    expect(screen.queryByText('Director One')).toBeInTheDocument()
    expect(screen.queryByText('D. One/Director Uno')).toBeInTheDocument()
    expect(screen.queryByText('Director Two')).toBeInTheDocument()
    expect(screen.queryByText('D. Two/Director Dos')).toBeInTheDocument()
  })

})