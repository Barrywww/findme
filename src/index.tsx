import React from 'react'
import { createRoot } from 'react-dom/client'

import FindMeMap from '@components/Map'

import './global.less'

const App = () => (
  <div>
    <h1>FindMe</h1>
    <FindMeMap
      apiKey='AlhLqZs0pqdoyHP0vUUsWvQvUggyh2NaCtLj9Cpf2qZ7KJvJtLC_MTAaGtJLFtir'
      lat={111.00}
      lng={40.00}
    />
  </div>
)

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(<App />)
