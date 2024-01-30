import React, { useEffect } from 'react'

import FindMeMap from '@/components/Map'
import SidePanel from '@/components/SidePanel'
import { useAppDispatch } from '@/hooks/redux'
import { setLocationUnits, setUsername } from '@/slices/userInfoSlice'

import { store } from '@/store/index'
import { LocationUnit } from '@/types/LocationUnit'
import { Provider } from 'react-redux'
import './global.less'

const locationUnits: LocationUnit[] = [
  {
    unitType: 'device',
    unitId: 'device-01',
    unitName: 'Barry',
    lng: -79.99589,
    lat: 40.44062,
    lastSeen: new Date('2023-08-08').toISOString(),
  },
  {
    unitType: 'device',
    unitId: 'device-01',
    unitName: 'Barry',
    lng: -79.936,
    lat: 40.44062,
    lastSeen: new Date('2023-08-08').toISOString(),
  },
]

const App: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    setTimeout(() => {
      dispatch(setUsername('Barry Wang'))
      dispatch(setLocationUnits(locationUnits))
    }, 3000)
  })

  return (
    <div id="findme-root">
      <SidePanel />
      <FindMeMap
        apiKey="AlhLqZs0pqdoyHP0vUUsWvQvUggyh2NaCtLj9Cpf2qZ7KJvJtLC_MTAaGtJLFtir"
        lat={40.444}
        lng={-79.99}
      />
    </div>
  )
}

const HomePageWithStore: React.FC = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default HomePageWithStore
