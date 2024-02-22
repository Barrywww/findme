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

interface IFindMeMapData {
  viewOptions: IMapViewOptions
  pushpins: IMapPushpins[]
}

export type { IFindMeMapProps, IMapPushpins, IMapViewOptions, IFindMeMapData }
