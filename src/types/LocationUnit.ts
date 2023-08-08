type LocationUnit = {
  unitType: 'device' | 'people';
  unitId: string;
  unitName: string;
  friendlyName?: string;
  lastSeen: string;
  lng: number;
  lat: number;
}

export { LocationUnit }
