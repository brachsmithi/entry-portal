import React from "react"
import './DetailNav.css'

interface DetailNavProps {
  backPath: string
}

export default function DetailNav(props: DetailNavProps) {
  return (
      <div className='detailNav'>
        <a
            className='navButton'
            href={props.backPath}
        >
          Back
        </a>
      </div>
  )
}