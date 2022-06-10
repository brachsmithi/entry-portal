import PersonData from '../models/PersonData'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { PersonDisplay } from './PersonDisplay'
import { expectDetailLink } from '../testhelpers/ElementExpectations'

describe('PersonDisplay', () => {

  it('shows details of fully filled person', () => {
    const expectProgramLink = (id: number, title: string) => {
      expectDetailLink(id, title, '/programs')
    }
    const expectSeriesLink = (id: number, name: string) => {
      expectDetailLink(id, name, '/series')
    }
    const name = 'Percy McGee'
    const alias1 = 'Percival McGee'
    const alias2 = 'Percy MacGee'
    const titleProgram1 = 'Program One'
    const titleProgram2 = 'Second Program'
    const alternateTitleProgram1 = 'The Foibles of Francis 3: Program One'
    const alternateTitle1Program2 = 'Sub-Franchise 2'
    const alternateTitle2Program2 = 'Franchise: Second Program'
    const yearProgram1 = '1901'
    const yearProgram2 = '2001'
    const versionProgram1 = 'restored'
    const versionProgram2 = 'theatrical cut'
    const nameSeriesProgram1 = 'The Foibles of Francis'
    const nameSeries1Program2 = 'Franchise'
    const nameSeries2Program2 = 'Sub-Franchise'
    const idProgram1 = 111
    const idProgram2 = 22
    let idSeries1Program2 = 2111
    let idSeries2Program2 = 2222
    let idSeriesProgram1 = 1111
    const person: PersonData = {
      id: 123,
      name: name,
      aliases: [
        alias1,
        alias2
      ],
      programs: [
        {
          id: idProgram1,
          title: titleProgram1,
          year: yearProgram1,
          version: versionProgram1,
          series: [
            {
              id: idSeriesProgram1,
              name: nameSeriesProgram1
            }
          ],
          alternateTitles: [
            alternateTitleProgram1
          ]
        },
        {
          id: idProgram2,
          title: titleProgram2,
          year: yearProgram2,
          version: versionProgram2,
          series: [
            {
              id: idSeries1Program2,
              name: nameSeries1Program2
            },
            {
              id: idSeries2Program2,
              name: nameSeries2Program2
            }
          ],
          alternateTitles: [
            alternateTitle1Program2,
            alternateTitle2Program2
          ]
        }
      ]
    }
    render(<PersonDisplay person={person}/>)

    expect(screen.queryByText(name)).toBeInTheDocument()
    expect(screen.queryByText(`${alias1}/${alias2}`)).toBeInTheDocument()
    expectProgramLink(idProgram1, titleProgram1)
    expect(screen.queryByText(yearProgram1)).toBeInTheDocument()
    expect(screen.queryByText(alternateTitleProgram1)).toBeInTheDocument()
    expect(screen.queryByText(versionProgram1)).toBeInTheDocument()
    expectSeriesLink(idSeriesProgram1, nameSeriesProgram1)
    expectProgramLink(idProgram2, titleProgram2)
    expect(screen.queryByText(yearProgram2)).toBeInTheDocument()
    expect(screen.queryByText(`${alternateTitle1Program2}/${alternateTitle2Program2}`)).toBeInTheDocument()
    expect(screen.queryByText(versionProgram2)).toBeInTheDocument()
    expectSeriesLink(idSeries1Program2, nameSeries1Program2)
    expectSeriesLink(idSeries2Program2, nameSeries2Program2)
  })

})