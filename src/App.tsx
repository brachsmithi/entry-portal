import React, { useEffect, useState } from 'react'
import './App.css'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    useParams,
    useRouteMatch
} from "react-router-dom"
import { PaginatedProgramsScreen } from "./programs/PaginatedProgramsScreen"
import { ProgramDisplay } from "./programs/ProgramDisplay"
import { loadProgramDetails } from "./services/ProgramSearchService"
import { emptyProgramData } from "./models/ProgramData"

function App() {
  return (
      <Router>
        <Switch>
          <Route path='/programs'>
            <Programs/>
          </Route>
          <Route path='/'>
            <ProgramList/>
          </Route>
        </Switch>
      </Router>
  )
}

export default App

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

function ProgramDetail() {
  // @ts-ignore
  let { programId } = useParams()
  const [program, setProgram] = useState(emptyProgramData)
  useEffect(() => {
    loadProgramDetails(programId).then((response) => {
      setProgram(response.programData)
    })
  }, [programId, setProgram])

  return <ProgramDisplay program={program}/>
}
