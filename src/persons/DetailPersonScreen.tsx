import React, { useEffect, useState } from 'react'
import { emptyPersonData } from '../models/PersonData'
import { loadPersonDetails } from '../services/PersonSearchService'
import DetailNav from '../common/detail/DetailNav'
import { PersonDisplay } from './PersonDisplay'

interface DetailPersonScreenProps {
  personId: number
}
export default function DetailPersonScreen(props: DetailPersonScreenProps) {
  const [person, setPerson] = useState(emptyPersonData)
  useEffect(() => {
    loadPersonDetails(props.personId).then((response) => {
      setPerson(response.personData)
    })
  }, [props.personId, setPerson])
  return (
      <>
        <DetailNav />
        <PersonDisplay person={person}/>
      </>
  )
}