type LocationUnit = {
  unitType: 'device' | 'people';
  unitId: string;
  unitName: string;
  friendlyName: string;
  lastSeen: Date;
  lng: number;
  lat: number;
}

export { LocationUnit }
