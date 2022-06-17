import FilterResponse from './FilterResponse'
import { FilterType } from '../services/FilterType'

export default interface FilterStrategy {
  filterAction: (key: FilterType, id: number) => Promise<FilterResponse>
}