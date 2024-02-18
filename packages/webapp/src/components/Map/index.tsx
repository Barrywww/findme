import BingMapsReact from 'bingmaps-react'
import React, { useEffect, useState } from 'react'

import { useAppSelector } from '@packages/common/hooks/redux'
import { Device } from '@packages/common/types/LocationUnit'
import './index.less'

interface IFindMeMapProps {
  apiKey: string
  lat: number
  lng: number
}

interface IMapViewOptions {
  center: {
    longitude: number
    latitude: number
  }
}

interface IMapPushpins {
  center: {
    latitude: number
    longitude: number
  }
  options: {
    title: string
  }
}

const FindMeMap: React.FC<IFindMeMapProps> = (props) => {
  const { apiKey, lat, lng } = props
  const [mapPushpins, setMapPushpins] = useState<IMapPushpins[]>([])
  const [viewOptions] = useState<IMapViewOptions>({
    center: {
      longitude: lng,
      latitude: lat,
    },
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
      setMapPushpins(newPushpins)
    }
  }, [devices])

  return (
    <div id="findme-map-wrapper">
      <BingMapsReact
        bingMapsKey={apiKey}
        pushPins={mapPushpins}
        viewOptions={viewOptions}
      />
    </div>
  )
}

export default FindMeMap
