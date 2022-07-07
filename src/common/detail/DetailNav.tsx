import React from "react"
import './DetailNav.css'
import { useHistory } from "react-router-dom"

export default function DetailNav() {
  const history = useHistory()
  const goBack = () => {
    history.goBack()
  }
  return (
      <div className='detailNav'>
        <button
            className='navButton'
            onClick={goBack}
        >
          Back
        </button>
      </div>
  )
}