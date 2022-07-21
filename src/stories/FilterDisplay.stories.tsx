import FilterDisplay from '../common/filter/FilterDisplay'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { FilterType } from '../services/FilterType'
import { makeActionForRoot } from '../common/detail/DetailLinkAction'
import DataResponse from '../models/DataResponse'
import SearchData from '../models/SearchData'
import LinkGenerator from '../common/nav/LinkGenerator'

class DemoLinkGenerator extends LinkGenerator {
  rootPath(): string {
    return '/demo'
  }
}

export default {
  title: 'FilterDisplay',
  component: FilterDisplay
} as ComponentMeta<typeof FilterDisplay>

const Template: ComponentStory<typeof FilterDisplay> = (args) => <FilterDisplay {...args} />

export const ProgramFilterActive = Template.bind({})
ProgramFilterActive.args = {
  id: 1,
  filterType: FilterType.Program,
  linkAction: makeActionForRoot(new DemoLinkGenerator()),
  filterStrategy: {
    filterAction: (_) => {return Promise.resolve(new DataResponse<SearchData>({}))}
  }
}

export const ReadyToFilter = Template.bind({})
ReadyToFilter.args = {
  filterType: FilterType.Program,
  linkAction: makeActionForRoot(new DemoLinkGenerator()),
  filterStrategy: {
    filterAction: (_) => {return Promise.resolve(new DataResponse<SearchData>({}))}
  }
}