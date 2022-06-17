import React from 'react'
import './App.css'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    useParams,
    useRouteMatch,
    useLocation
} from 'react-router-dom'
import { PaginatedProgramsScreen } from './programs/PaginatedProgramsScreen'
import DetailProgramScreen from './programs/DetailProgramScreen'
import SearchDisplay from './common/SearchDisplay'
import ProgramSearchStrategy from './programs/ProgramSearchStrategy'
import DetailPersonScreen from './persons/DetailPersonScreen'
import DetailSeriesScreen from './series/DetailSeriesScreen'
import { makeActionForRoot } from "./common/DetailLinkAction";

function App() {
  return (
      <Router>
        <Switch>
          <Route path='/programs'>
            <Programs/>
          </Route>
          <Route path='/persons'>
            <Persons/>
          </Route>
          <Route path='/series'>
            <Series/>
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
      linkAction={makeActionForRoot('/program')}
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