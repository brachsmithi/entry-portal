import { DiscLinkGenerator } from '../discs/DiscLinkGenerator'
import { LocationLinkGenerator } from '../locations/LocationLinkGenerator'
import { PackageLinkGenerator } from '../packages/PackageLinkGenerator'
import { PersonLinkGenerator } from '../persons/PersonLinkGenerator'
import { ProgramLinkGenerator } from '../programs/ProgramLinkGenerator'
import { SeriesLinkGenerator } from '../series/SeriesLinkGenerator'

export default function loadRegistries() {
  DiscLinkGenerator.register()
  LocationLinkGenerator.register()
  PackageLinkGenerator.register()
  PersonLinkGenerator.register()
  ProgramLinkGenerator.register()
  SeriesLinkGenerator.register()
}