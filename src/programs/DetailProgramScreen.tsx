import React, { useEffect, useState } from "react"
import DetailNav from "../common/DetailNav"
import { ProgramDisplay } from "./ProgramDisplay"
import { emptyProgramData } from "../models/ProgramData"
import { loadProgramDetails } from "../services/ProgramSearchService"

interface DetailProgramScreenProps {
  programId: number
}

export default function DetailProgramScreen(props: DetailProgramScreenProps) {
  const [program, setProgram] = useState(emptyProgramData)
  useEffect(() => {
    loadProgramDetails(props.programId).then((response) => {
      setProgram(response.programData)
    })
  }, [props.programId, setProgram])
  return (
      <>
        <DetailNav backAction={() => {}}/>
        <ProgramDisplay program={program}/>
      </>
  )
}