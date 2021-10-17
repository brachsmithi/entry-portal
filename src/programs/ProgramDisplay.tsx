import React from 'react'
import ProgramData from "../models/ProgramData";

export interface ProgramDisplayProperties {
  program: ProgramData
}

export function ProgramDisplay(props: ProgramDisplayProperties): JSX.Element {
  return (
      <div className='program-display'>
        <div className='title'>{props.program.title}</div>
      </div>
  )
}