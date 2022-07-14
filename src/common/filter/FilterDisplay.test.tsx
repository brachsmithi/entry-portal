import FilterStrategy from '../../models/FilterStrategy'
import { DetailLinkAction } from '../detail/DetailLinkAction'
import { render } from '@testing-library/react'
import FilterDisplay from './FilterDisplay'
import { FilterType } from '../../services/FilterType'
import DataResponse from '../../models/DataResponse'
import FilterData from '../../models/FilterData'

describe('FilterDisplay', () => {

  it('filter description and clear button', () => {
    const id = 24
    const filterStrategy: FilterStrategy = {
      filterAction: (_, __) => {
        return Promise.resolve(new DataResponse<FilterData>({}))
      }
    }
    const linkAction: DetailLinkAction = {
      loadAction: _ => {},
      rootPath: '/filter'
    }
    const {getByRole, getByText} = render(
        <FilterDisplay filterStrategy={filterStrategy} linkAction={linkAction} filterType={FilterType.Program} id={id}/>
    )
    expect(getByText('Filter on program')).toBeInTheDocument()
    const link = getByRole('link')
    expect(link).toHaveAttribute('href', '/filter')
    expect(link).toHaveTextContent('Clear')
  })

})