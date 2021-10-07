import React from 'react'
import './App.css'
import { PaginatedNav } from "./common/PaginatedNav";
import { defaultPaginationMetadata } from "./models/PaginationMetadata";

function App() {
  return (
    <div className="App">
      <PaginatedNav metadata={defaultPaginationMetadata}/>
    </div>
  )
}

export default App
