import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { LocationDisplay } from '../locations/LocationDisplay'
import { locationFilledData } from '../testhelpers/LocationJson'

export default {
  title: 'LocationDisplay',
  component: LocationDisplay
} as ComponentMeta<typeof LocationDisplay>

const Template: ComponentStory<typeof LocationDisplay> = (args) => <LocationDisplay {...args} />

export const WithStatusFilled = Template.bind({})
WithStatusFilled.args = {
  location: locationFilledData
}