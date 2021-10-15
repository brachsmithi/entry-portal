// @ts-ignore
import React from 'react'
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ProgramListDisplay } from "../programs/ProgramListDisplay"

export default {
  title: 'ProgramListDisplay',
  component: ProgramListDisplay
} as ComponentMeta<typeof ProgramListDisplay>

const Template: ComponentStory<typeof ProgramListDisplay> = (args) => <ProgramListDisplay {...args} />

export const Listings = Template.bind({})
Listings.args = {
  listings: [
    {
      primary: 'Asphalt',
      secondary: ['1929']
    },
    {
      primary: 'The Asphalt Jungle',
      secondary: ['1950']
    },
    {
      primary: 'Assassin',
      secondary: ['1986']
    },
    {
      primary: 'Assassin',
      secondary: ['2007']
    },
    {
      primary: 'Assault on Precinct 13',
      secondary: ['1976']
    },
    {
      primary: 'Assault on the Girls Locker Room',
      secondary: ['1990']
    },
    {
      primary: 'Assignment Terror',
      secondary: ['1972']
    },
    {
      primary: 'Asteroid Blues',
      secondary: ['2001']
    },
    {
      primary: 'The Astounding She-Monster',
      secondary: ['1957']
    },
    {
      primary: 'The Astral Factor',
      secondary: ['1978']
    },
    {
      primary: 'The Astro-Zombies',
      secondary: ['1968']
    },
    {
      primary: 'Asylum',
      secondary: ['1972']
    },
    {
      primary: 'Asylum',
      secondary: ['2004']
    },
    {
      primary: 'Asylum',
      secondary: ['2018']
    },
    {
      primary: 'At the Earth\'s Core',
      secondary: ['1976']
    }
  ]
}