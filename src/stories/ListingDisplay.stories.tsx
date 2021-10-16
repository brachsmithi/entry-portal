// @ts-ignore
import React from 'react'
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ListingDisplay } from "../common/ListingDisplay"

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
      primary: 'Asphalt',
      secondary: ['1929'],
      tertiary: []
    },
    {
      primary: 'The Asphalt Jungle',
      secondary: ['1950'],
      tertiary: []
    },
    {
      primary: 'Assassin',
      secondary: ['1986'],
      tertiary: []
    },
    {
      primary: 'Assassin',
      secondary: ['2007'],
      tertiary: ['Flash Gordon: A Modern Space Opera']
    },
    {
      primary: 'Assault on Precinct 13',
      secondary: ['1976'],
      tertiary: []
    },
    {
      primary: 'Assault on the Girls Locker Room',
      secondary: ['1990'],
      tertiary: ['Ranma 1/2: Season 2']
    },
    {
      primary: 'Assignment Terror',
      secondary: ['1972'],
      tertiary: ['Waldemar Daninsky']
    },
    {
      primary: 'Asteroid Blues',
      secondary: ['2001'],
      tertiary: ['Cowboy Bebop']
    },
    {
      primary: 'The Astounding She-Monster',
      secondary: ['1957'],
      tertiary: []
    },
    {
      primary: 'The Astral Factor',
      secondary: ['1978'],
      tertiary: []
    },
    {
      primary: 'The Astro-Zombies',
      secondary: ['1968'],
      tertiary: []
    },
    {
      primary: 'Asylum',
      secondary: ['1972'],
      tertiary: []
    },
    {
      primary: 'Asylum',
      secondary: ['2004'],
      tertiary: ['Smallville: Season 3']
    },
    {
      primary: 'Asylum',
      secondary: ['2018'],
      tertiary: ['Titans: Season 1']
    },
    {
      primary: 'At the Earth\'s Core',
      secondary: ['1976'],
      tertiary: []
    }
  ]
}