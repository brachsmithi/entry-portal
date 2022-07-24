import { render, screen } from '@testing-library/react'
import React from 'react'
import { expectDetailLink } from '../testhelpers/ElementExpectations'
import SeriesData from '../models/SeriesData'
import { SeriesDisplay } from './SeriesDisplay'
import loadRegistries from '../registries/RegistryLoader'

describe('SeriesDisplay', () => {

  it('shows details of fully filled series', () => {
    loadRegistries()
    const idSeries = 111
    const nameSeries = 'Test Series'
    const idProgram1 = 2111
    const nameProgram1 = 'Program One'
    const yearProgram1 = '2011'
    const versionProgram1 = 'Theatrical'
    const alternateTitlesProgram1 = [
      'Program 1',
      'First Program'
    ]
    const sequenceProgram1 = 1
    const idProgram2 = 2222
    const nameProgram2 = 'Program Two'
    const yearProgram2 = '2022'
    const versionProgram2 = 'TV Edit'
    const alternateTitlesProgram2 = [
      'Program 2',
      'Second Program'
    ]
    const sequenceProgram2 = 2
    const idPackage1 = 3111
    const namePackage1 = 'Package 1'
    const sequencePackage1 = 3
    const idPackage2 = 3222
    const namePackage2 = 'Package 2'
    const sequencePackage2 = 4
    const idDisc1 = 4111
    const nameDisc1 = 'Disc 1'
    const sequenceDisc1 = 5
    const idDisc2 = 4222
    const nameDisc2 = 'Disc 2'
    const sequenceDisc2 = 6
    const idContainedSeries1 = 5111
    const nameContainedSeries1 = 'Sub-series 1'
    const sequenceContainedSeries1 = 7
    const idContainedSeries2 = 5222
    const nameContainedSeries2 = 'Sub-series 2'
    const sequenceContainedSeries2 = 8
    const idWrapperSeries1 = 6111
    const nameWrapperSeries1 = 'Super-series One'
    const idWrapperSeries2 = 6222
    const nameWrapperSeries2 = 'Super-series Two'
    const series: SeriesData = {
      id: idSeries,
      name: nameSeries,
      programs: [
        {
          id: idProgram1,
          title: nameProgram1,
          year: yearProgram1,
          version: versionProgram1,
          alternateTitles: alternateTitlesProgram1,
          sequence: sequenceProgram1
        },
        {
          id: idProgram2,
          title: nameProgram2,
          year: yearProgram2,
          version: versionProgram2,
          alternateTitles: alternateTitlesProgram2,
          sequence: sequenceProgram2
        }
      ],
      packages: [
        {
          id: idPackage1,
          name: namePackage1,
          sequence: sequencePackage1
        },
        {
          id: idPackage2,
          name: namePackage2,
          sequence: sequencePackage2
        }
      ],
      discs: [
        {
          id: idDisc1,
          name: nameDisc1,
          sequence: sequenceDisc1
        },
        {
          id: idDisc2,
          name: nameDisc2,
          sequence: sequenceDisc2
        }
      ],
      containedSeries: [
        {
          id: idContainedSeries1,
          name: nameContainedSeries1,
          sequence: sequenceContainedSeries1
        },
        {
          id: idContainedSeries2,
          name: nameContainedSeries2,
          sequence: sequenceContainedSeries2
        }
      ],
      wrapperSeries: [
        {
          id: idWrapperSeries1,
          name: nameWrapperSeries1
        },
        {
          id: idWrapperSeries2,
          name: nameWrapperSeries2
        }
      ]
    }
    render(<SeriesDisplay series={series}/>)

    expect(screen.queryByText(nameSeries)).toBeInTheDocument()
    expectProgramData(idProgram1, nameProgram1, yearProgram1, alternateTitlesProgram1, versionProgram1, sequenceProgram1)
    expectProgramData(idProgram2, nameProgram2, yearProgram2, alternateTitlesProgram2, versionProgram2, sequenceProgram2)
    expectPackageData(namePackage1, sequencePackage1)
    expectPackageData(namePackage2, sequencePackage2)
    expectDiscData(nameDisc1, sequenceDisc1)
    expectDiscData(nameDisc2, sequenceDisc2)
    expectContainedSeries(idContainedSeries1, nameContainedSeries1, sequenceContainedSeries1)
    expectContainedSeries(idContainedSeries2, nameContainedSeries2, sequenceContainedSeries2)
    expectWrapperSeries(idWrapperSeries1, nameWrapperSeries1)
    expectWrapperSeries(idWrapperSeries2, nameWrapperSeries2)
  })

  function expectProgramData(id: number, title: string, year: string, alternateTitles: string[], version: string, sequence: number) {
    expectProgramLink(id, title)
    expect(screen.queryByText(year)).toBeInTheDocument()
    expect(screen.queryByText(`${alternateTitles.join('/')}`)).toBeInTheDocument()
    expect(screen.queryByText(version)).toBeInTheDocument()
    expect(screen.queryByText(sequence)).toBeInTheDocument()
  }

  function expectProgramLink(id: number, title: string) {
    expectDetailLink(id, title, '/programs')
  }

  function expectPackageData(name: string, sequence: number) {
    expect(screen.queryByText(name)).toBeInTheDocument()
    expect(screen.queryByText(sequence)).toBeInTheDocument()
  }

  function expectDiscData(name: string, sequence: number) {
    expect(screen.queryByText(name)).toBeInTheDocument()
    expect(screen.queryByText(sequence)).toBeInTheDocument()
  }

  function expectContainedSeries(id: number, name: string, sequence: number) {
    expectSeriesLink(id, name)
    expect(screen.queryByText(sequence)).toBeInTheDocument()
  }

  function expectWrapperSeries(id: number, name: string) {
    expectSeriesLink(id, name)
  }

  function expectSeriesLink(id: number, name: string) {
    expectDetailLink(id, name, '/series')
  }

})