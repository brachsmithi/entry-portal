import FilterDisplay from '../common/filter/FilterDisplay'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { FilterType } from '../services/FilterType'
import { makeActionForRoot } from '../common/detail/DetailLinkAction'
import FilterResponse from '../models/FilterResponse'

export default {
  title: 'FilterDisplay',
  component: FilterDisplay
} as ComponentMeta<typeof FilterDisplay>

const Template: ComponentStory<typeof FilterDisplay> = (args) => <FilterDisplay {...args} />

export const ProgramFilter = Template.bind({})
ProgramFilter.args = {
  filterType: FilterType.Program,
  linkAction: makeActionForRoot('/demo'),
  filterStrategy: {
    filterAction: (_, __) => {return Promise.resolve(new FilterResponse({}))}
  }
}