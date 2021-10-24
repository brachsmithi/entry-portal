import React from "react"

interface DetailNavProps {
  backAction: () => void
}

export default function DetailNav(props: DetailNavProps) {
  return (
      <div>
        <button
          onClick={props.backAction}
        >
          Back
        </button>
      </div>
  )
}