import { PackageDisplay } from './PackageDisplay'
import { render } from '@testing-library/react'
import PackageData, { emptyPackageData, PackageContainedPackage, PackageDisc } from '../models/PackageData'
import { sequencedContentsTestId } from '../common/sequence/SequencedContents'

describe('PackageDisplay', () => {

  it('puts discs and contained packages into sequenced contents', () => {
    const packageData = (id: number, sequence: number): PackageContainedPackage => {
      return {
        id: id,
        name: `Content ${sequence}`,
        sequence: sequence
      }
    }
    const discData = (id: number, sequence: number): PackageDisc => {
      return {
        id: id,
        name: `Content ${sequence}`,
        format: 'DVD',
        programs: [],
        sequence: sequence
      }
    }
    const pkg: PackageData = {
      id: 1,
      name: 'The Package',
      containedPackages: [
        packageData(211, 3),
        packageData(212, 1)
      ],
      discs: [
          discData(311, 2),
          discData(312, 4)
      ]
    }
    const { getByTestId } = render(<PackageDisplay package={pkg}/>)

    const sequencedContents = getByTestId(sequencedContentsTestId).textContent
    expect(sequencedContents?.match(/Content 3.*Content 1.*Content 2.*Content 4/)).not.toBeNull()
  })

  it('does not include sequenced contents when there are no discs or packages',() => {
    const { queryByTestId } = render(<PackageDisplay package={emptyPackageData}/>)

    expect(queryByTestId(sequencedContentsTestId)).not.toBeInTheDocument()
  })

})