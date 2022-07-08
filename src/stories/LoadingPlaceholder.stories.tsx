import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { LoadingPlaceholder } from '../common/lazy/LoadingPlaceholder'

export default {
  title: 'LoadingPlaceholder',
  component: LoadingPlaceholder
} as ComponentMeta<typeof LoadingPlaceholder>

const Template: ComponentStory<typeof LoadingPlaceholder> = (args) => <LoadingPlaceholder {...args} />

export const WhileLoading = Template.bind({})
WhileLoading.args = {
  id: 388,
  elKey: 23,
  loader: (_, __) => {
    return new Promise((resolve) => setTimeout(resolve, 30000)).then(
        (_) => {
          return new Promise((_) => <div>loaded</div>)
        }
    )
  }
}