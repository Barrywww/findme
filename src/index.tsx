import React from 'react'
import { createRoot } from 'react-dom/client'

import Com from './Com'

const App = () => {
  const [nbr, setNbr] = React.useState<number>(0)

  return (
    <div>
      <h1>Hello React!</h1>
      <Com />
    </div>
  )
}

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(<App />)
