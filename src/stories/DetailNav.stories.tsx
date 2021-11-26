import React from 'react'
import { ComponentMeta, ComponentStory } from "@storybook/react"
import DetailNav from "../common/DetailNav"

export default {
  title: 'DetailNav',
  component: DetailNav
} as ComponentMeta<typeof DetailNav>

const Template: ComponentStory<typeof DetailNav> = (args) => <DetailNav {...args} />

export const Default = Template.bind({})
Default.args = {
  backPath: ""
}