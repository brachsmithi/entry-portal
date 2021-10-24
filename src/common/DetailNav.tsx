import React from "react"
import './DetailNav.css'

interface DetailNavProps {
  backAction: () => void
}

export default function DetailNav(props: DetailNavProps) {
  return (
      <div className='detailNav'>
        <button
            className='navButton'
            onClick={props.backAction}
        >
          Back
        </button>
      </div>
  )
}