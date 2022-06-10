import React from 'react'
import { render, screen } from '@testing-library/react'
import { ProgramDisplay } from './ProgramDisplay'
import ProgramData from '../models/ProgramData'
import { expectDetailLink } from '../testhelpers/ElementExpectations'

describe('ProgramDisplay', () => {

  it('shows details of fully filled program', () => {
    const expectPersonLink = (id: number, title: string) => {
      expectDetailLink(id, title, '/persons')
    }
    const idPerson1 = 111;
    const namePerson1 = 'Director One'
    const alias1Person1 = 'D. One'
    const alias2Person1 = 'Director Uno'
    const idPerson2 = 222
    const namePerson2 = 'Director Two'
    const alias1Person2 = 'D. Two'
    const alias2Person2 = 'Director Dos'
    const title = 'The Film\'s Title'
    const year = '2021'
    const version = 'TV Edit'
    const idSeries1 = 3111
    const nameSeries1 = 'The Film Series'
    const idSeries2 = 4111
    const nameSeries2 = 'The Unofficial Film Series'
    const alternateTitle1 = 'The Title of the Film'
    const alternateTitle2 = 'Title: The Film'
    const program: ProgramData = {
      id: 223,
      title: title,
      year: year,
      version: version,
      lengthInMinutes: 87,
      people: [
        {
          id: idPerson1,
          name: namePerson1,
          aliases: [
            {
              name: alias1Person1
            },
            {
              name: alias2Person1
            }
          ]
        },
        {
          id: idPerson2,
          name: namePerson2,
          aliases: [
            {
              name: alias1Person2
            },
            {
              name: alias2Person2
            }
          ]
        }
      ],
      series: [
        {
          id: idSeries1,
          name: nameSeries1
        },
        {
          id: idSeries2,
          name: nameSeries2
        }
      ],
      alternateTitles: [
        {
          name: alternateTitle1
        },
        {
          name: alternateTitle2
        }
      ]
    }
    render(<ProgramDisplay program={program}/>)

    expect(screen.queryByText(title)).toBeInTheDocument()
    expect(screen.queryByText(year)).toBeInTheDocument()
    expect(screen.queryByText(version)).toBeInTheDocument()
    expect(screen.queryByText('1:27')).toBeInTheDocument()
    expectPersonLink(idPerson1, namePerson1)
    expect(screen.queryByText(`${alias1Person1}/${alias2Person1}`)).toBeInTheDocument()
    expectPersonLink(idPerson2, namePerson2)
    expect(screen.queryByText(`${alias1Person2}/${alias2Person2}`)).toBeInTheDocument()
    expect(screen.queryByText(`${nameSeries1}/${nameSeries2}`)).toBeInTheDocument()
    expect(screen.queryByText(`${alternateTitle1}/${alternateTitle2}`)).toBeInTheDocument()
  })

})