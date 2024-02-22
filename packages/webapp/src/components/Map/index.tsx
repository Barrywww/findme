import BingMapsReact from 'bingmaps-react'
import React, { useState } from 'react'
import './index.less'
import { IFindMeMapProps, IMapViewOptions } from '@packages/common/types/IFindMeMap'
import { useFindMeMap } from '@p/common/hooks/useFindMeMap'

const FindMeMap: React.FC<IFindMeMapProps> = (props) => {
  const { apiKey, lat, lng } = props
  const mapData = useFindMeMap()
  const [viewOptions] = useState<IMapViewOptions>({
    center: {
      longitude: lng,
      latitude: lat,
    },
  })
  return (
    <div id="findme-map-wrapper">
      <BingMapsReact
        bingMapsKey={apiKey}
        pushPins={mapData.pushpins}
        viewOptions={viewOptions}
      />
    </div>
  )
}

export default FindMeMap
