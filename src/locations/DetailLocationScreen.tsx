import React, { useEffect, useState } from 'react'
import { emptyLocationData } from '../models/LocationData'
import { loadLocationDetails } from '../services/LocationSearchServices'
import DetailNav from '../common/detail/DetailNav'
import { LocationDisplay } from './LocationDisplay'

interface DetailLocationScreenProps {
  locationId: number
}

export default function DetailLocationScreen(props: DetailLocationScreenProps) {
  const [location, setLocation] = useState(emptyLocationData)
  useEffect(() => {
    loadLocationDetails(props.locationId).then((response) => {
      setLocation(response.locationData)
    })
  }, [props.locationId, setLocation])
  return (
      <>
        <DetailNav />
        <LocationDisplay location={location}/>
      </>
  )
}