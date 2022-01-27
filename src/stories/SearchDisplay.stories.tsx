import React from 'react'
import { ComponentMeta, ComponentStory } from "@storybook/react"
import SearchDisplay from "../common/SearchDisplay"
import SearchTermResponse from "../models/SearchTermResponse"

export default {
  title: 'SearchDisplay',
  component: SearchDisplay
} as ComponentMeta<typeof SearchDisplay>

const Template: ComponentStory<typeof SearchDisplay> = (args) => <SearchDisplay {...args} />

export const Default = Template.bind({})
Default.args = {
  searchStrategy: {
    setSearchResponse: (_) => {},
    searchAction: (term: string) => {
      return Promise.resolve(new SearchTermResponse({
        data: {
          data: [
            {
              id: 123,
              primary: 'First Item In List',
              secondary: ['2021', 'Director\'s Cut'],
              tertiary: ['Series One', 'Series Two']
            },
            {
              id: 124,
              primary: 'This Item Has Quite a Lot of Text To Fit Into the Option List',
              secondary: ['2019', 'European Version'],
              tertiary: ['Series One', 'Series Four']
            },
            {
              id: 125,
              primary: 'Third Item In List',
              secondary: ['2022', 'TV Edit'],
              tertiary: ['Series Three']
            }
          ],
          searchMetadata: {
            searchTerm: term,
            resultCount: 3
          }
        }
      }))
    },
    loadAction: (_: number) => {}
  }
}