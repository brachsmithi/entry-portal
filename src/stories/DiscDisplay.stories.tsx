import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { DiscDisplay } from '../discs/DiscDisplay'
import { discWithProgramsPackageAndNameData } from '../testhelpers/DiscJson'

export default {
  title: 'DiscDisplay',
  component: DiscDisplay
} as ComponentMeta<typeof DiscDisplay>

const Template: ComponentStory<typeof DiscDisplay> = (args) => <DiscDisplay {...args} />

export const WithProgramsAndPackage = Template.bind({})
WithProgramsAndPackage.args = {
  disc: discWithProgramsPackageAndNameData
}