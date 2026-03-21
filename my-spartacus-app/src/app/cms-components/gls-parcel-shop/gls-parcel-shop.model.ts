export interface GlsParcelShopContact {
  countryCode: string;
  postalCode: string;
  city: string;
  address: string;
  name: string;
  email?: string;
}

export interface GlsParcelShop {
  id: string;
  name: string;
  contact: GlsParcelShopContact;
}

// Countries supported by GLS ParcelShop map widget
export const GLS_SUPPORTED_COUNTRIES: Record<string, string> = {
  HR: 'HR', // Croatia
  DE: 'DE', // Germany
  AT: 'AT', // Austria
  CZ: 'CZ', // Czech Republic
  SK: 'SK', // Slovakia
  HU: 'HU', // Hungary
  SI: 'SI', // Slovenia
  PL: 'PL', // Poland
  RO: 'RO', // Romania
  FR: 'FR', // France
  ES: 'ES', // Spain
  PT: 'PT', // Portugal
  IT: 'IT', // Italy
  NL: 'NL', // Netherlands
  BE: 'BE', // Belgium
  DK: 'DK', // Denmark
};
