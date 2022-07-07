import DetailNav from '../common/detail/DetailNav'
import React, { useEffect, useState } from 'react'
import { emptyDiscData } from '../models/DiscData'
import { loadDiscDetails } from '../services/DiscSearchService'
import { DiscDisplay } from './DiscDisplay'

interface DetailDiscScreenProps {
  discId: number
}

export default function DetailDiscScreen(props: DetailDiscScreenProps) {
  const [disc, setDisc] = useState(emptyDiscData)
  useEffect(() => {
    loadDiscDetails(props.discId).then((response) => {
      setDisc(response.discData)
    })
  }, [props.discId, setDisc])
  return (
      <>
        <DetailNav />
        <DiscDisplay disc={disc}/>
      </>
  )
}