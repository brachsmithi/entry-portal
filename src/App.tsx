import React from 'react'
import './App.css'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    useParams,
    useRouteMatch
} from "react-router-dom"
import { PaginatedProgramsScreen } from "./programs/PaginatedProgramsScreen"
import DetailProgramScreen from "./programs/DetailProgramScreen"
import SearchDisplay from "./common/SearchDisplay"
import ProgramSearchStrategy from "./programs/ProgramSearchStrategy"

function App() {
  return (
      <Router>
        <Switch>
          <Route path='/programs'>
            <Programs/>
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
  return <PaginatedProgramsScreen/>
}

function ProgramSearch() {
  return <SearchDisplay searchStrategy={ProgramSearchStrategy()}/>
}

function ProgramDetail() {
  // @ts-ignore
  const { programId } = useParams()

  return <DetailProgramScreen programId={programId}/>
}
