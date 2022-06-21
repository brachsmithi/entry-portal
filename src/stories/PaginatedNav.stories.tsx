import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { PaginatedNav } from '../common/PaginatedNav'
import { defaultPaginationMetadata } from '../models/PaginationMetadata'
import SearchTermResponse from '../models/SearchTermResponse'
import { defaultSearchMetadata } from '../models/SearchMetadata'
import { FilterType } from '../services/FilterType'
import FilterResponse from '../models/FilterResponse'

export default {
  title: 'PaginatedNav',
  component: PaginatedNav
} as ComponentMeta<typeof PaginatedNav>

const Template: ComponentStory<typeof PaginatedNav> = (args) => <PaginatedNav {...args} />

export const Default = Template.bind({})
Default.args = {
  metadata: defaultPaginationMetadata,
  previousAction: () => {},
  nextAction: () => {}
}

export const FirstOfMany = Template.bind({})
FirstOfMany.args = {
  metadata: {
    ...defaultPaginationMetadata,
    currentPage: 1,
    totalPages: 50
  },
  previousAction: () => {},
  nextAction: () => {}
}

export const MidstOfMany = Template.bind({})
MidstOfMany.args = {
  metadata: {
    ...defaultPaginationMetadata,
    currentPage: 26,
    totalPages: 50
  },
  previousAction: () => {},
  nextAction: () => {}
}

export const LastOfMany = Template.bind({})
LastOfMany.args = {
  metadata: {
    ...defaultPaginationMetadata,
    currentPage: 50,
    totalPages: 50
  },
  previousAction: () => {},
  nextAction: () => {}
}

export const WithSearch = Template.bind({})
WithSearch.args = {
  metadata: {
    ...defaultPaginationMetadata,
    currentPage: 26,
    totalPages: 50
  },
  previousAction: () => {},
  nextAction: () => {},
  searchDisplayProps: {
    searchStrategy: {
      searchAction: (_: string) => new Promise(() => new SearchTermResponse({
        data: {
          data: [],
          searchMetadata: defaultSearchMetadata,
          paginationMetadata: defaultPaginationMetadata
        },
      }))
    },
    linkAction: {
      loadAction: (_: number) => {},
      rootPath: '/demo'
    }
  }
}

export const WithFilter = Template.bind({})
WithFilter.args = {
  metadata: defaultPaginationMetadata,
  previousAction: () => {},
  nextAction: () => {},
  filterDisplayProps: {
    filterType: FilterType.Program,
    filterStrategy: {
      filterAction: (_, __) => {return Promise.resolve(new FilterResponse({}))}
    },
    linkAction: {
      loadAction: (_: number) => {},
      rootPath: '/demo'
    },
    id: 3
  }
}