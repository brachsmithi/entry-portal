import { ChangeEvent } from "react"

interface SearchFieldProps {
  action: (searchTerm: string) => {}
}

export function SearchField(props: SearchFieldProps): JSX.Element {
  const callAction = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value
    if (searchTerm.length >= 3) {
      props.action(searchTerm)
    }
  }
  return (
     <input
         id='searchField'
         type='text'
         placeholder='Enter search text'
         onChange={callAction}
     />
  )
}