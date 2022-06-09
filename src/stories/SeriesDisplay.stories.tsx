import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SeriesDisplay } from '../series/SeriesDisplay'
import {
  seriesWithContainedSeriesData,
  seriesWithPackagesData,
  seriesWithProgramsData,
  seriesWithWrapperAndDiscsData
} from '../testhelpers/SeriesJson'

export default {
  title: 'SeriesDisplay',
  component: SeriesDisplay
} as ComponentMeta<typeof SeriesDisplay>

const Template: ComponentStory<typeof SeriesDisplay> = (args) => <SeriesDisplay {...args} />

export const WithPrograms = Template.bind({})
WithPrograms.args = {
  series: seriesWithProgramsData
}

export const WithPackages = Template.bind({})
WithPackages.args = {
  series: seriesWithPackagesData
}

export const WithWrapperAndDiscs = Template.bind({})
WithWrapperAndDiscs.args = {
  series: seriesWithWrapperAndDiscsData
}

export const WithContainedSeries = Template.bind({})
WithContainedSeries.args = {
  series: seriesWithContainedSeriesData
}
