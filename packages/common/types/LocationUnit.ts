interface LocationUnit {
  unitType: 'device' | 'people'
  unitId: string
  unitName: string
  friendlyName?: string
  lastSeen: string
  lng: number
  lat: number
}

interface People extends LocationUnit {
  email: string
  phone: string
  profilePic?: string
}

interface Device extends LocationUnit {
  deviceType: 'phone' | 'tablet' | 'computer'
}

export { LocationUnit, People, Device }
