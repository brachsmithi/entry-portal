import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import SearchDisplay from '../common/search/SearchDisplay'
import DataResponse from '../models/DataResponse'
import SearchData from '../models/SearchData'
import { rootPathFor } from '../registries/LinkGeneratorRegistry'
import { ModelType } from '../models/ModelType'

export default {
  title: 'SearchDisplay',
  component: SearchDisplay
} as ComponentMeta<typeof SearchDisplay>

const Template: ComponentStory<typeof SearchDisplay> = (args) => <SearchDisplay {...args} />

export const ProgramSearch = Template.bind({})
ProgramSearch.args = {
  searchStrategy: {
    searchAction: (term: string) => {
      return Promise.resolve(new DataResponse<SearchData>({
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
          },
          paginationMetadata: {
            currentPage: 1,
            previousPage: 1,
            nextPage: 1,
            totalPages: 1
          }
        }
      }))
    }
  },
  linkAction: {
    loadAction: (_: number) => {},
    rootPath: rootPathFor(ModelType.Program)
  }
}