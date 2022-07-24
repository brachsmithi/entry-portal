import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, useLocation, useParams, useRouteMatch } from 'react-router-dom'
import { PaginatedProgramsScreen } from './programs/PaginatedProgramsScreen'
import DetailProgramScreen from './programs/DetailProgramScreen'
import SearchDisplay from './common/search/SearchDisplay'
import ProgramSearchStrategy from './programs/ProgramSearchStrategy'
import DetailPersonScreen from './persons/DetailPersonScreen'
import DetailSeriesScreen from './series/DetailSeriesScreen'
import { makeActionForRoot } from './common/detail/DetailLinkAction'
import { PaginatedDiscsScreen } from './discs/PaginatedDiscsScreen'
import DetailDiscScreen from './discs/DetailDiscScreen'
import DetailLocationScreen from './locations/DetailLocationScreen'
import DetailPackageScreen from './packages/DetailPackageScreen'
import { ModelType } from './models/ModelType'
import { linkGeneratorRegistry } from './registries/LinkGeneratorRegistry'

function App() {
  return (
      <Router>
        <Switch>
          <Route path={pathFor(ModelType.Program)}>
            <Programs/>
          </Route>
          <Route path={pathFor(ModelType.Person)}>
            <Persons/>
          </Route>
          <Route path={pathFor(ModelType.Series)}>
            <Series/>
          </Route>
          <Route path={pathFor(ModelType.Disc)}>
            <Discs/>
          </Route>
          <Route path={pathFor(ModelType.Location)}>
            <Locations/>
          </Route>
          <Route path={pathFor(ModelType.Package)}>
            <Packages/>
          </Route>
          <Route path='/search'>
            <Search/>
          </Route>
          <Route path='/'>
            <ProgramList/>
          </Route>
        </Switch>
      </Router>
  )
}

export default App

function pathFor(modelType: ModelType): string {
  return linkGeneratorRegistry.get(modelType).rootPath()
}

function Search() {
  let match = useRouteMatch()
  return (
      <Switch>
        <Route path={`${match.path}`}>
          <ProgramSearch/>
        </Route>
      </Switch>
  )
}

function Programs() {
  let match = useRouteMatch()
  return (
    <Switch>
      <Route path={`${match.path}/:programId`}>
        <ProgramDetail/>
      </Route>
      <Route path={match.path}>
        <ProgramList/>
      </Route>
    </Switch>
  )
}

function ProgramList() {
  const searchTerm = useQuery().get('search') ?? undefined
  return <PaginatedProgramsScreen searchTerm={searchTerm}/>
}

function ProgramSearch() {
  return <SearchDisplay
      searchStrategy={ProgramSearchStrategy()}
      linkAction={makeActionForRoot(linkGeneratorRegistry.get(ModelType.Program))}
  />
}

function ProgramDetail() {
  // @ts-ignore
  const { programId } = useParams()

  return <DetailProgramScreen programId={programId}/>
}

function Persons() {
  let match = useRouteMatch()
  return (
      <Switch>
        <Route path={`${match.path}/:personId`}>
          <PersonDetail/>
        </Route>
        <Route path={match.path}>
          <ProgramList/>
        </Route>
      </Switch>
  )
}

function Locations() {
  let match = useRouteMatch()
  return (
      <Switch>
        <Route path={`${match.path}/:locationId`}>
          <LocationDetail/>
        </Route>
        <Route path={match.path}>
          <ProgramList/>
        </Route>
      </Switch>
  )
}

function Packages() {
  let match = useRouteMatch()
  return (
      <Switch>
        <Route path={`${match.path}/:packageId`}>
          <PackageDetail/>
        </Route>
        <Route path={match.path}>
          <ProgramList/>
        </Route>
      </Switch>
  )
}

function LocationDetail() {
  // @ts-ignore
  const { locationId } = useParams()

  return <DetailLocationScreen locationId={locationId}/>
}

function PackageDetail() {
  // @ts-ignore
  const { packageId } = useParams()

  return <DetailPackageScreen packageId={packageId}/>
}

function Discs() {
  let match = useRouteMatch()
  return (
      <Switch>
        <Route path={`${match.path}/program`}>
          <DiscListFilteredByProgram/>
        </Route>
        <Route path={`${match.path}/:discId`}>
          <DiscDetail/>
        </Route>
        <Route path={match.path}>
          <DiscList/>
        </Route>
      </Switch>
  )
}

function DiscList() {
  return <PaginatedDiscsScreen />
}

function DiscListFilteredByProgram() {
  const query = useQuery()
  const programId = query.get('programId') ?? undefined
  return <PaginatedDiscsScreen
      programId={programId}
  />
}

function DiscDetail() {
  // @ts-ignore
  const { discId } = useParams()

  return <DetailDiscScreen discId={discId}/>
}

function PersonDetail() {
  // @ts-ignore
  const { personId } = useParams()

  return <DetailPersonScreen personId={personId}/>
}

function Series() {
  let match = useRouteMatch()
  return (
      <Switch>
        <Route path={`${match.path}/:seriesId`}>
          <SeriesDetail/>
        </Route>
        <Route path={match.path}>
          <ProgramList/>
        </Route>
      </Switch>
  )
}

function SeriesDetail() {
  // @ts-ignore
  const { seriesId } = useParams()

  return <DetailSeriesScreen seriesId={seriesId}/>
}

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}