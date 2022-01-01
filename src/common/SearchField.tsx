interface SearchFieldProps {
}

export function SearchField(props: SearchFieldProps): JSX.Element {
  return (
     <input
         id='searchField'
         type='text'
         placeholder='Enter search text'
     />
  )
}