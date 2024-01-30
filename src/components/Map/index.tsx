import BingMapsReact from 'bingmaps-react'
import React, { useEffect, useState } from 'react'

import { useAppSelector } from '@/hooks/redux'

import { LocationUnit } from '@/types/LocationUnit'
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

  const locationUnits = useAppSelector((state) => state.userInfo.locationUnits)

  useEffect(() => {
    if (locationUnits?.length > 0) {
      const newPushpins = locationUnits.map((lu: LocationUnit) => ({
        center: {
          latitude: lu.lat,
          longitude: lu.lng,
        },
        options: {
          title: lu.unitName,
        },
      }))
      setMapPushpins(newPushpins)
    }
  }, [locationUnits])

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
