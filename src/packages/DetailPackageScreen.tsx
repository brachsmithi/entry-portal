import React, { useEffect, useState } from 'react'
import { emptyPackageData } from '../models/PackageData'
import { loadPackageDetails } from '../services/PackageSearchServices'
import DetailNav from '../common/detail/DetailNav'
import { PackageDisplay } from './PackageDisplay'

interface DetailPackageScreenProps {
  packageId: number
}

export default function DetailPackageScreen(props: DetailPackageScreenProps) {
  const [pkg, setPkg] = useState(emptyPackageData)
  useEffect(() => {
    loadPackageDetails(props.packageId).then((response) => {
      setPkg(response.data ?? emptyPackageData)
    })
  }, [props.packageId, setPkg])
  return (
      <>
        <DetailNav />
        <PackageDisplay package={pkg}/>
      </>
  )
}