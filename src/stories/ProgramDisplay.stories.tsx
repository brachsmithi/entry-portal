import React from 'react'
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ProgramDisplay } from "../programs/ProgramDisplay"
import { programData1, programData2 } from "../testhelpers/ProgramJson";

export default {
  title: 'ProgramDisplay',
  component: ProgramDisplay
} as ComponentMeta<typeof ProgramDisplay>

const Template: ComponentStory<typeof ProgramDisplay> = (args) => <ProgramDisplay {...args} />

export const WithVersion = Template.bind({})
WithVersion.args = {
  program: programData1
}
export const WithSeries = Template.bind({})
WithSeries.args = {
  program: programData2
}
