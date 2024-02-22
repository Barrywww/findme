import { IFindMeMapData } from '@/types/IFindMeMap'
import { useState, useEffect } from 'react'
import { useAppSelector } from './redux'
import { Device } from '@/types/LocationUnit'

const useFindMeMap: () => IFindMeMapData = () => {
  const [mapData, setMapData] = useState<IFindMeMapData>({
    viewOptions: {
      center: {
        latitude: 40.444,
        longitude: -79.99,
      },
    },
    pushpins: [],
  })

  const devices = useAppSelector((state) => state.userInfo.devices)

  useEffect(() => {
    if (devices?.length > 0) {
      const newPushpins = devices.map((d: Device) => ({
        center: {
          latitude: d.lat,
          longitude: d.lng,
        },
        options: {
          title: d.unitName,
        },
      }))
      setMapData({
        ...mapData,
        pushpins: newPushpins,
      })
    }
  }, [devices])

  return mapData
}

export { useFindMeMap }
