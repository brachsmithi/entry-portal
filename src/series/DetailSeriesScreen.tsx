import React, { useEffect, useState } from 'react'
import DetailNav from '../common/detail/DetailNav'
import { emptySeriesData } from '../models/SeriesData'
import { loadSeriesDetails } from '../services/SeriesSearchService'
import { SeriesDisplay } from './SeriesDisplay'

interface DetailSeriesScreenProps {
  seriesId: number
}
export default function DetailSeriesScreen(props: DetailSeriesScreenProps) {
  const [series, setSeries] = useState(emptySeriesData)
  useEffect(() => {
    loadSeriesDetails(props.seriesId).then((response) => {
      setSeries(response.seriesData)
    })
  }, [props.seriesId, setSeries])
  return (
      <>
        <DetailNav />
        <SeriesDisplay series={series}/>
      </>
  )
}