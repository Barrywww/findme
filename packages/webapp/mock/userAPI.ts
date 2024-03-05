import { Device, People } from '@p/common/types/LocationUnit'

const people: People[] = [
  {
    email: 'test@findme.com',
    phone: '(412) 456-7890',
    unitType: 'people',
    unitId: 'd3dbf976-357e-4544-baaf-34cd53a5c84b',
    unitName: '@hejBarry',
    friendlyName: 'Barry Wang',
    lastSeen: '2024-03-05T15:56:21.847Z',
    lng: -79.99589,
    lat: 40.44062,
  },
  {
    email: 'test1@findme.com',
    phone: '(412) 456-7891',
    unitType: 'people',
    unitId: 'fe11e9c9-cc89-4c24-b0bd-cad9f8ba1a80',
    unitName: '@hiBarry',
    lastSeen: '2024-03-05T12:36:11.276Z',
    lng: -79.936,
    lat: 40.44062,
  },
]

const devices: Device[] = [
  {
    deviceType: 'phone',
    unitType: 'people',
    unitId: '7ddfbb4a-d08e-4ff7-ace5-e0a6f4dd38e3',
    unitName: "Barry's Phone",
    lastSeen: '2024-03-05T18:36:11.276Z',
    lng: -79.956,
    lat: 40.40062,
  },
]

export default {
  'GET /api/v1/location-history': {
    success: true,
    data: {
      people: people,
      devices: devices,
    },
    errorCode: 0,
  },
}
