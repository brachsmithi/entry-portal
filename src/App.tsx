import React from 'react'
import './App.css'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom"
import { PaginatedProgramsScreen } from "./programs/PaginatedProgramsScreen"

function App() {
  return (
      <Router>
        <Switch>
          <Route path='/'>
            <ProgramList/>
          </Route>
        </Switch>
      </Router>
  )
}

export default App

function ProgramList() {
  return <PaginatedProgramsScreen/>
}
