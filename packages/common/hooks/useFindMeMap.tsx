import { IFindMeMapData, IMapPushpins, IMapViewOptions } from '@/types/IFindMeMap'
import { useState, useEffect } from 'react'
import { useAppSelector } from './redux'
import { Device } from '@/types/LocationUnit'

const useFindMeMap: () => IFindMeMapData = () => {
  const [viewOptions, setViewOptions] = useState<IMapViewOptions>({
    center: {
      latitude: 40.444,
      longitude: -79.99,
    }
  })
  const [pushpins, setPushpins] = useState<IMapPushpins[]>([])

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
      setPushpins(newPushpins)
    }
  }, [devices])

  return { viewOptions, pushpins }
}

export { useFindMeMap }
