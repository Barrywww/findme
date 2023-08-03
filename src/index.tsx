import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'

import { useAppDispatch } from '@hooks/redux'
import { setUsername } from '@slices/userInfoSlice'
import FindMeMap from '@components/Map'
import SidePanel from '@components/SidePanel'

import './global.less'
import { Provider } from 'react-redux'
import { store } from '@store/index'

const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    setTimeout(() => dispatch(setUsername('Barry Wang')), 3000)
  })

  return (
    <div id='findme-root'>
      <SidePanel />
      <FindMeMap
        apiKey='AlhLqZs0pqdoyHP0vUUsWvQvUggyh2NaCtLj9Cpf2qZ7KJvJtLC_MTAaGtJLFtir'
        lat={111.00}
        lng={40.00}
      />
    </div>
  )
}

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
)
