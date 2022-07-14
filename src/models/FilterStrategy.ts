import { FilterType } from '../services/FilterType'
import DataResponse from './DataResponse'
import FilterData from './FilterData'

export default interface FilterStrategy {
  filterAction: (key: FilterType, id: number) => Promise<DataResponse<FilterData>>
}