import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { PackageDisplay } from '../packages/PackageDisplay'
import {
  fullyLoadedPackageData,
  packageWithProgramsData,
  packageContainingPackagesData
} from '../testhelpers/PackageJson'

export default {
  title: 'PackageDisplay',
  component: PackageDisplay
} as ComponentMeta<typeof PackageDisplay>

const Template: ComponentStory<typeof PackageDisplay> = (args) => <PackageDisplay {...args} />

export const WithPackagesAndDiscs = Template.bind({})
WithPackagesAndDiscs.args = {
  package: fullyLoadedPackageData
}

export const WithDiscs = Template.bind({})
WithDiscs.args = {
  package: packageWithProgramsData
}

export const WithPackages = Template.bind({})
WithPackages.args = {
  package: packageContainingPackagesData
}