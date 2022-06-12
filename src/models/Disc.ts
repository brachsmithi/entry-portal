import { Location } from './Location'
import { Package } from "./Package";

export interface Disc {
  id: number,
  name: string
  format: string
  location: Location
  package: Package
}