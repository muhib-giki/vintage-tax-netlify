// Service areas for Vintage Tax - Multi-location SEO
export interface Location {
  city: string;
  state: string;
  stateAbbr: string;
  isCapital?: boolean;
}

export const serviceLocations: Location[] = [
  // Kansas
  { city: 'Wichita', state: 'Kansas', stateAbbr: 'KS' },
  { city: 'Overland Park', state: 'Kansas', stateAbbr: 'KS' },
  { city: 'Kansas City', state: 'Kansas', stateAbbr: 'KS' },
  { city: 'Olathe', state: 'Kansas', stateAbbr: 'KS' },
  { city: 'Topeka', state: 'Kansas', stateAbbr: 'KS', isCapital: true },
  { city: 'Lawrence', state: 'Kansas', stateAbbr: 'KS' },
  
  // Missouri
  { city: 'Kansas City', state: 'Missouri', stateAbbr: 'MO' },
  { city: 'St. Louis', state: 'Missouri', stateAbbr: 'MO' },
  { city: 'Springfield', state: 'Missouri', stateAbbr: 'MO' },
  { city: 'Columbia', state: 'Missouri', stateAbbr: 'MO' },
  { city: 'Independence', state: 'Missouri', stateAbbr: 'MO' },
  { city: "Lee's Summit", state: 'Missouri', stateAbbr: 'MO' },
  
  // Illinois
  { city: 'Chicago', state: 'Illinois', stateAbbr: 'IL' },
  { city: 'Aurora', state: 'Illinois', stateAbbr: 'IL' },
  { city: 'Naperville', state: 'Illinois', stateAbbr: 'IL' },
  { city: 'Joliet', state: 'Illinois', stateAbbr: 'IL' },
  { city: 'Rockford', state: 'Illinois', stateAbbr: 'IL' },
  { city: 'Springfield', state: 'Illinois', stateAbbr: 'IL', isCapital: true },
  { city: 'Peoria', state: 'Illinois', stateAbbr: 'IL' },
  { city: 'Elgin', state: 'Illinois', stateAbbr: 'IL' },
  
  // Mississippi
  { city: 'Jackson', state: 'Mississippi', stateAbbr: 'MS', isCapital: true },
  { city: 'Gulfport', state: 'Mississippi', stateAbbr: 'MS' },
  { city: 'Southaven', state: 'Mississippi', stateAbbr: 'MS' },
  { city: 'Hattiesburg', state: 'Mississippi', stateAbbr: 'MS' },
  { city: 'Biloxi', state: 'Mississippi', stateAbbr: 'MS' },
  { city: 'Meridian', state: 'Mississippi', stateAbbr: 'MS' },
  { city: 'Tupelo', state: 'Mississippi', stateAbbr: 'MS' },
];

// Generate location keywords for SEO
export const getLocationKeywords = (): string[] => {
  return serviceLocations.map(loc => 
    `${loc.city} ${loc.stateAbbr}`
  );
};

// Generate location strings for content
export const getLocationString = (): string => {
  const states = Array.from(new Set(serviceLocations.map(l => l.state)));
  const cities = serviceLocations.map(l => l.city);
  return `Serving ${cities.join(', ')}, and businesses throughout ${states.join(', ')}`;
};

// Get cities by state
export const getCitiesByState = (state: string): Location[] => {
  return serviceLocations.filter(loc => loc.state === state);
};

