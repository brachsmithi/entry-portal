import React, { useEffect, useState } from "react"
import DetailNav from "../common/DetailNav"
import { ProgramDisplay } from "./ProgramDisplay"
import { emptyProgramData } from "../models/ProgramData"
import { loadProgramDetails } from "../services/ProgramSearchService"

interface DetailProgramDisplayProps {
  programId: number
}

export default function DetailProgramDisplay(props: DetailProgramDisplayProps) {
  const [program, setProgram] = useState(emptyProgramData)
  useEffect(() => {
    loadProgramDetails(props.programId).then((response) => {
      setProgram(response.programData)
    })
  }, [props.programId, setProgram])
  return (
      <>
        <DetailNav backPath='/programs'/>
        <ProgramDisplay program={program}/>
      </>
  )
}