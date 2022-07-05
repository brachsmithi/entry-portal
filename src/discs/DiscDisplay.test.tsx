import { DiscDisplay } from './DiscDisplay'
import { render } from '@testing-library/react'
import DiscData, { emptyDiscData } from '../models/DiscData'
import { sequencedContentsTestId } from '../common/SequencedContents'

describe('DiscDisplay', () => {

  it('puts programs into sequenced contents', () => {
    const program = (sequence: number, title: string) => {
      return {
        id: Math.random() * 1000,
        version: '',
        programType: 'BONUS',
        year: '2022',
        title: title,
        sequence: sequence
      }
    }
    const disc: DiscData = {
      id: 1,
      name: 'Disc 1',
      format: 'DVD',
      state: 'FILED',
      location: {
        id: 1,
        name: 'place'
      },
      package: {},
      series: [],
      programs: [
        program(2, 'Program Two'),
        program(1, 'Program One'),
        program(3, 'Program Three'),
      ]
    }
    const { getByTestId } = render(<DiscDisplay disc={disc}/>)

    const programContents = getByTestId(sequencedContentsTestId).textContent
    expect(programContents?.match(/Program Two.*Program One.*Program Three/)).not.toBeNull()
  })

  it('does not include sequenced contents when there are no programs',() => {
    const { queryByTestId } = render(<DiscDisplay disc={emptyDiscData}/>)

    expect(queryByTestId(sequencedContentsTestId)).not.toBeInTheDocument()
  })

})