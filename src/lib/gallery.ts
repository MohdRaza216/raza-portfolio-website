export type Series = 'Edges' | 'After Hours' | 'Still Life' | 'Faces'

export type Frame = {
  id: string
  src: string
  title: string
  place: string
  year: number
  series: Series
  width: number
  height: number
  alt: string
}

export const series: Series[] = ['Edges', 'After Hours', 'Still Life', 'Faces']

export const frames: Frame[] = [
  {
    id: '01',
    src: '/img/g-01-salt-flats.jpg',
    title: 'Red coat, white ground',
    place: 'Salar de Uyuni, BO',
    year: 2025,
    series: 'Edges',
    width: 896,
    height: 1200,
    alt: 'A lone figure in a red coat walking across cracked white salt flats under a dusk sky',
  },
  {
    id: '02',
    src: '/img/g-02-stairwell.jpg',
    title: 'Descent',
    place: 'Porto, PT',
    year: 2024,
    series: 'Edges',
    width: 928,
    height: 1152,
    alt: 'Looking straight down a spiral concrete stairwell with hard shadows',
  },
  {
    id: '03',
    src: '/img/g-03-laundromat.jpg',
    title: 'Spin cycle, 1:40 a.m.',
    place: 'Lisbon, PT',
    year: 2025,
    series: 'After Hours',
    width: 1264,
    height: 848,
    alt: 'A laundromat window at night with fluorescent light spilling onto wet pavement',
  },
  {
    id: '04',
    src: '/img/g-04-hands.jpg',
    title: 'Figs, cracked bowl',
    place: 'Alentejo, PT',
    year: 2024,
    series: 'Still Life',
    width: 1024,
    height: 1024,
    alt: 'Weathered hands holding a cracked ceramic bowl of figs in soft window light',
  },
  {
    id: '05',
    src: '/img/g-05-coast.jpg',
    title: 'Buoy',
    place: 'Ericeira, PT',
    year: 2023,
    series: 'Edges',
    width: 1376,
    height: 768,
    alt: 'A single orange buoy floating off a foggy rocky coastline at dawn',
  },
  {
    id: '06',
    src: '/img/g-06-portrait.jpg',
    title: 'Senhor Abel',
    place: 'Nazaré, PT',
    year: 2024,
    series: 'Faces',
    width: 928,
    height: 1152,
    alt: 'An older fisherman in a knit cap standing in a dark doorway, lit from the side',
  },
  {
    id: '07',
    src: '/img/g-07-pool.jpg',
    title: 'Closed for the season',
    place: 'Cascais, PT',
    year: 2025,
    series: 'Still Life',
    width: 896,
    height: 1200,
    alt: 'An empty winter swimming pool with pale blue tiles and a single fallen red leaf',
  },
  {
    id: '08',
    src: '/img/g-08-market.jpg',
    title: 'Steam & lanterns',
    place: 'Taipei, TW',
    year: 2023,
    series: 'After Hours',
    width: 1264,
    height: 848,
    alt: 'A busy night market seen through steam, with red paper lanterns and blurred people',
  },
  {
    id: '09',
    src: '/img/g-09-greenhouse.jpg',
    title: 'Glasshouse breathing',
    place: 'Coimbra, PT',
    year: 2024,
    series: 'Still Life',
    width: 928,
    height: 1152,
    alt: 'Ferns crowding a condensation-covered Victorian greenhouse',
  },
]
