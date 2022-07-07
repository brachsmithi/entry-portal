import React from 'react'
import { ComponentMeta, ComponentStory } from "@storybook/react"
import DetailNav from "../common/detail/DetailNav"

export default {
  title: 'DetailNav',
  component: DetailNav
} as ComponentMeta<typeof DetailNav>

const Template: ComponentStory<typeof DetailNav> = (_) => <DetailNav />

export const Default = Template.bind({})