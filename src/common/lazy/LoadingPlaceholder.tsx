import { useEffect, useState } from 'react'

interface LoadingPlaceholderProps {
  id: number,
  elKey: number,
  loader: (id: number, elKey: number) => Promise<JSX.Element>
}

export function LoadingPlaceholder(props: LoadingPlaceholderProps) {
  const [el, setEl] = useState(<div key={props.elKey} className='placeholder'>loading...</div>)
  useEffect(() => {
    props.loader(props.id, props.elKey).then(result => setEl(result))
  }, [props.id, props.elKey, props.loader, setEl, props])
  return el
}