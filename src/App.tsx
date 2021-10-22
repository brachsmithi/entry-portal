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
            <Programs/>
          </Route>
        </Switch>
      </Router>
  )
}

export default App

function Programs() {
  return <PaginatedProgramsScreen/>
}
