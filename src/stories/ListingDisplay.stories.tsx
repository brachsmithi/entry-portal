// @ts-ignore
import React from 'react'
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ListingDisplay } from "../common/listing/ListingDisplay"

export default {
  title: 'ListingDisplay',
  component: ListingDisplay
} as ComponentMeta<typeof ListingDisplay>

const Template: ComponentStory<typeof ListingDisplay> = (args) => <ListingDisplay {...args} />

export const NoListings = Template.bind({})
NoListings.args = {
  listings: []
}

export const Listings = Template.bind({})
Listings.args = {
  listings: [
    {
      id: 1,
      primary: 'Asphalt',
      secondary: ['1929'],
      tertiary: []
    },
    {
      id: 2,
      primary: 'The Asphalt Jungle',
      secondary: ['1950'],
      tertiary: []
    },
    {
      id: 3,
      primary: 'Assassin',
      secondary: ['1986'],
      tertiary: []
    },
    {
      id: 4,
      primary: 'Assassin',
      secondary: ['2007'],
      tertiary: ['Flash Gordon: A Modern Space Opera']
    },
    {
      id: 5,
      primary: 'Assault on Precinct 13',
      secondary: ['1976'],
      tertiary: []
    },
    {
      id: 6,
      primary: 'Assault on the Girls Locker Room',
      secondary: ['1990'],
      tertiary: ['Ranma 1/2: Season 2']
    },
    {
      id: 7,
      primary: 'Assignment Terror',
      secondary: ['1972'],
      tertiary: ['Waldemar Daninsky']
    },
    {
      id: 8,
      primary: 'Asteroid Blues',
      secondary: ['2001'],
      tertiary: ['Cowboy Bebop']
    },
    {
      id: 9,
      primary: 'The Astounding She-Monster',
      secondary: ['1957'],
      tertiary: []
    },
    {
      id: 10,
      primary: 'The Astral Factor',
      secondary: ['1978'],
      tertiary: []
    },
    {
      id: 11,
      primary: 'The Astro-Zombies',
      secondary: ['1968'],
      tertiary: []
    },
    {
      id: 12,
      primary: 'Asylum',
      secondary: ['1972'],
      tertiary: []
    },
    {
      id: 13,
      primary: 'Asylum',
      secondary: ['2004'],
      tertiary: ['Smallville: Season 3']
    },
    {
      id: 14,
      primary: 'Asylum',
      secondary: ['2018'],
      tertiary: ['Titans: Season 1']
    },
    {
      id: 15,
      primary: 'At the Earth\'s Core',
      secondary: ['1976'],
      tertiary: []
    }
  ],
  path: '/programs'
}