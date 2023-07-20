import React, {
  useState,
} from 'react'
import BingMapsReact from 'bingmaps-react'

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

const FindMeMap: React.FC<IFindMeMapProps> = (props) => {
  const { apiKey, lat, lng } = props
  const viewOptions = useState<IMapViewOptions>({
    center: {
      longitude: lng,
      latitude: lat,
    },
  })

  return (
    <div id='findme-map-wrapper'>
      <BingMapsReact
        bingMapsKey={apiKey}
        viewOptions={viewOptions}
      />
    </div>
  )
}

export default FindMeMap
