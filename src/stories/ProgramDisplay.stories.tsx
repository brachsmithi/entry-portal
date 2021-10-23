import React from 'react'
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ProgramDisplay } from "../programs/ProgramDisplay"
import { programData2, programData3 } from "../testhelpers/ProgramJson";

export default {
  title: 'ProgramDisplay',
  component: ProgramDisplay
} as ComponentMeta<typeof ProgramDisplay>

const Template: ComponentStory<typeof ProgramDisplay> = (args) => <ProgramDisplay {...args} />

export const WithVersion = Template.bind({})
WithVersion.args = {
  program: programData2
}
export const WithSeries = Template.bind({})
WithSeries.args = {
  program: programData3
}
