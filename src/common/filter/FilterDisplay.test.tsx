import FilterStrategy from '../../models/FilterStrategy'
import { DetailLinkAction } from '../detail/DetailLinkAction'
import { ByRoleMatcher, ByRoleOptions, Matcher, SelectorMatcherOptions, render } from '@testing-library/react'
import FilterDisplay from './FilterDisplay'
import { FilterType } from '../../services/FilterType'
import DataResponse from '../../models/DataResponse'
import FilterData from '../../models/FilterData'

describe('FilterDisplay', () => {

  describe('when filtering', () => {

    let roleGetter: (text: ByRoleMatcher, options?: (ByRoleOptions | undefined), waitForElementOptions?: unknown) => HTMLElement
    let textGetter: (text: Matcher, options?: (SelectorMatcherOptions | undefined), waitForElementOptions?: unknown) => HTMLElement
    let roleQuerier: (text: ByRoleMatcher, options?: (ByRoleOptions | undefined), waitForElementOptions?: unknown) => (HTMLElement | null)

    beforeEach(() => {
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
      const {getByRole, getByText, queryByRole} = render(
          <FilterDisplay filterStrategy={filterStrategy} linkAction={linkAction} filterType={FilterType.Program} id={id}/>
      )
      roleGetter = getByRole
      textGetter = getByText
      roleQuerier = queryByRole
    })

    it('presents filter description and clear button', () => {
      expect(textGetter('Filter on program')).toBeInTheDocument()
      const link = roleGetter('link')
      expect(link).toHaveAttribute('href', '/filter')
      expect(link).toHaveTextContent('Clear')
    })

    it('does not contain program search form', () => {
      expect(roleQuerier('textbox')).not.toBeInTheDocument()
    })

  })

  describe('when filter is not set', () => {

    let roleGetter: (text: ByRoleMatcher, options?: (ByRoleOptions | undefined), waitForElementOptions?: unknown) => HTMLElement
    let textQuerier: (text: Matcher, options?: (SelectorMatcherOptions | undefined), waitForElementOptions?: unknown) => (HTMLElement | null)
    let roleQuerier: (text: ByRoleMatcher, options?: (ByRoleOptions | undefined), waitForElementOptions?: unknown) => (HTMLElement | null)

    beforeEach(() => {
      const filterStrategy: FilterStrategy = {
        filterAction: (_, __) => {
          return Promise.resolve(new DataResponse<FilterData>({}))
        }
      }
      const linkAction: DetailLinkAction = {
        loadAction: _ => {},
        rootPath: '/filter'
      }
      const {getByRole, queryByRole, queryByText} = render(
          <FilterDisplay filterStrategy={filterStrategy} linkAction={linkAction} filterType={FilterType.Program}/>
      )
      roleGetter = getByRole
      roleQuerier = queryByRole
      textQuerier = queryByText
    })

    it('presents program search form', () => {
      expect(roleGetter('textbox')).toHaveAttribute('placeholder', 'Enter text')
    })

    it('does not provide filter description and clear button', () => {
      expect(textQuerier('Filter on program')).not.toBeInTheDocument()
      expect(roleQuerier('link')).not.toBeInTheDocument()
    })

  })

})