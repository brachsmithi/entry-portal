import PersonData from '../models/PersonData'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { PersonDisplay } from './PersonDisplay'

describe('PersonDisplay', () => {

  it('shows details of fully filled person', () => {
    const name = 'Percy McGee'
    const alias1 = 'Percival McGee'
    const alias2 = 'Percy MacGee'
    const titleProgram1 = 'Program One';
    const titleProgram2 = 'Second Program';
    const alternateTitleProgram1 = 'The Foibles of Francis 3: Program One';
    const alternateTitle1Program2 = 'Sub-Franchise 2';
    const alternatetitle2Program2 = 'Franchise: Second Program';
    const yearProgram1 = '1901';
    const yearProgram2 = '2001';
    const versionProgram1 = 'restored';
    const versionProgram2 = 'theatrical cut';
    const seriesProgram1 = 'The Foibles of Francis';
    const series1Program2 = 'Franchise';
    const series2Program2 = 'Sub-Franchise';
    const person: PersonData = {
      id: 123,
      name: name,
      aliases: [
        alias1,
        alias2
      ],
      programs: [
        {
          id: 111,
          title: titleProgram1,
          year: yearProgram1,
          version: versionProgram1,
          series: [
            seriesProgram1
          ],
          alternateTitles: [
            alternateTitleProgram1
          ]
        },
        {
          id: 222,
          title: titleProgram2,
          year: yearProgram2,
          version: versionProgram2,
          series: [
            series1Program2,
            series2Program2
          ],
          alternateTitles: [
            alternateTitle1Program2,
            alternatetitle2Program2
          ]
        }
      ]
    }
    render(<PersonDisplay person={person}/>)

    expect(screen.queryByText(name)).toBeInTheDocument()
    expect(screen.queryByText(`${alias1}/${alias2}`)).toBeInTheDocument()
    expect(screen.queryByText(titleProgram1)).toBeInTheDocument()
    expect(screen.queryByText(yearProgram1)).toBeInTheDocument()
    expect(screen.queryByText(alternateTitleProgram1)).toBeInTheDocument()
    expect(screen.queryByText(versionProgram1)).toBeInTheDocument()
    expect(screen.queryByText(seriesProgram1)).toBeInTheDocument()
    expect(screen.queryByText(titleProgram2)).toBeInTheDocument()
    expect(screen.queryByText(yearProgram2)).toBeInTheDocument()
    expect(screen.queryByText(`${alternateTitle1Program2}/${alternatetitle2Program2}`)).toBeInTheDocument()
    expect(screen.queryByText(versionProgram2)).toBeInTheDocument()
    expect(screen.queryByText(`${series1Program2}/${series2Program2}`)).toBeInTheDocument()
  })

})