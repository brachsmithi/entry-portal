import PersonData from '../models/PersonData'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { PersonDisplay } from './PersonDisplay'

describe('PersonDisplay', () => {

  it('shows details of fully filled person', () => {
    const expectProgramLink = (id: number, title: string) => {
      const element = screen.queryByText(title)
      expect(element).not.toBeNull()
      expect(element?.getAttribute('href')).toEqual(`/programs/${id}`)
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
    const yearProgram2 = '2001';
    const versionProgram1 = 'restored'
    const versionProgram2 = 'theatrical cut'
    const seriesProgram1 = 'The Foibles of Francis'
    const series1Program2 = 'Franchise'
    const series2Program2 = 'Sub-Franchise'
    const idProgram1 = 111;
    const idProgram2 = 222;
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
              id: 1111,
              name: seriesProgram1
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
              id: 2111,
              name: series1Program2
            },
            {
              id: 2222,
              name: series2Program2
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
    expect(screen.queryByText(seriesProgram1)).toBeInTheDocument()
    expectProgramLink(idProgram2, titleProgram2)
    expect(screen.queryByText(yearProgram2)).toBeInTheDocument()
    expect(screen.queryByText(`${alternateTitle1Program2}/${alternateTitle2Program2}`)).toBeInTheDocument()
    expect(screen.queryByText(versionProgram2)).toBeInTheDocument()
    expect(screen.queryByText(`${series1Program2}/${series2Program2}`)).toBeInTheDocument()
  })

})