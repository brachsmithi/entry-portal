import React from 'react'
import ProgramData from "../models/ProgramData";
import { formatDuration } from "../common/DisplayFormatters"

export interface ProgramDisplayProperties {
  program: ProgramData
}

export function ProgramDisplay(props: ProgramDisplayProperties): JSX.Element {
  return (
      <div className='program-display'>
        <div className='title'>{props.program.title}</div>
        <div className='year'>{props.program.year}</div>
        <div className='version'>{props.program.version}</div>
        <div className='duration'>{formatDuration(props.program.lengthInMinutes)}</div>
      </div>
  )
}