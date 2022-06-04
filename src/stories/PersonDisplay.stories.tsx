import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { PersonDisplay } from '../persons/PersonDisplay'
import { personData, personWithAliasesData, personWithProgramsInSeries } from '../testhelpers/PersonJson'

export default {
  title: 'PersonDisplay',
  component: PersonDisplay
} as ComponentMeta<typeof PersonDisplay>

const Template: ComponentStory<typeof PersonDisplay> = (args) => <PersonDisplay {...args} />

export const NoAlias = Template.bind({})
NoAlias.args = {
  person: personData
}
export const WithAliases = Template.bind({})
WithAliases.args = {
  person: personWithAliasesData
}

export const WithProgramsInSeries = Template.bind({})
WithProgramsInSeries.args = {
  person: personWithProgramsInSeries
}
