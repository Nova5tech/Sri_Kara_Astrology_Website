const basePath = '/panchangam/2026-27'

export const panchangamSections = [
  {
    id: 'daily',
    title: 'Daily Panchangam',
    description: 'Daily Hindu Panchangam and auspicious timings.',
    icon: 'calendar',
    files: [
      {
        id: 'daily-panchangam',
        title: 'Daily Panchangam 2026-27',
        file: `${basePath}/daily-panchangam.pdf`,
      },
    ],
  },
  {
    id: 'months',
    title: 'Monthly Panchangam',
    description: 'Month-wise Panchangam publications for 2026-27.',
    icon: 'calendar-days',
    files: [
      {
        id: 'chaitra',
        title: 'Chaitra',
        file: `${basePath}/months/chaitra.pdf`,
      },
      {
        id: 'vaishakha',
        title: 'Vaishakha',
        file: `${basePath}/months/vaishakha.pdf`,
      },
      {
        id: 'jyeshtha',
        title: 'Adhika Jyeshtha',
        file: `${basePath}/months/adhika-jyeshtha.pdf`,
      },
      {
        id: 'nija-jyeshtha',
        title: 'Nija Jyeshtha',
        file: `${basePath}/months/nija-jyeshtha.pdf`,
      },
      {
        id: 'ashadha',
        title: 'Ashadha',
        file: `${basePath}/months/ashadha.pdf`,
      },
      {
        id: 'shravana',
        title: 'Shravana',
        file: `${basePath}/months/shravana.pdf`,
      },
      {
        id: 'bhadrapada',
        title: 'Bhadrapada',
        file: `${basePath}/months/bhadrapada.pdf`,
      },
      {
        id: 'ashwayuja',
        title: 'Ashwayuja',
        file: `${basePath}/months/ashwayuja.pdf`,
      },
      {
        id: 'kartika',
        title: 'Kartika',
        file: `${basePath}/months/kartika.pdf`,
      },
      {
        id: 'margashira',
        title: 'Margashira',
        file: `${basePath}/months/margashira.pdf`,
      },
      {
        id: 'pushya',
        title: 'Pushya',
        file: `${basePath}/months/pushya.pdf`,
      },
      {
        id: 'magha',
        title: 'Magha',
        file: `${basePath}/months/magha.pdf`,
      },
      {
        id: 'phalguna',
        title: 'Phalguna',
        file: `${basePath}/months/phalguna.pdf`,
      },
    ],
  },
  {
    id: 'festivals',
    title: 'Festivals',
    description: 'Hindu festivals and important religious occasions.',
    icon: 'sparkles',
    files: [
      {
        id: 'festivals',
        title: 'Festivals 2026-27',
        file: `${basePath}/festivals.pdf`,
      },
    ],
  },
  {
    id: 'rashi',
    title: 'Rashi Phalalu',
    description: 'Yearly zodiac predictions and horoscope details.',
    icon: 'star',
    files: [
      {
        id: 'rashi-phalalu',
        title: 'Rashi Phalalu 2026-27',
        file: `${basePath}/rashi-phalalu.pdf`,
      },
    ],
  },
  {
    id: 'muhurtams',
    title: 'Muhurtams',
    description: 'Auspicious dates and timings for important occasions.',
    icon: 'clock',
    files: [
      {
        id: 'muhurtams',
        title: 'Muhurtams 2026-27',
        file: `${basePath}/muhurtams.pdf`,
      },
    ],
  },
]
// Backward compatibility for Home.jsx
export const panchangam = [
  {
    id: 'daily-2026-27',
    year: '2026-27',
    month: 'Daily',
    title: 'Daily Panchangam',
    note: 'Daily Panchangam 2026-27',
    file: '/panchangam/2026-27/daily-panchangam.pdf',
  },
  {
    id: 'festivals-2026-27',
    year: '2026-27',
    month: 'Festivals',
    title: 'Festivals',
    note: 'Festival calendar and details.',
    file: '/panchangam/2026-27/festivals.pdf',
  },
  {
    id: 'rashi-2026-27',
    year: '2026-27',
    month: 'Rashi Phalalu',
    title: 'Rashi Phalalu',
    note: 'Rashi predictions and yearly horoscope.',
    file: '/panchangam/2026-27/rashi-phalalu.pdf',
  },
  {
    id: 'muhurtams-2026-27',
    year: '2026-27',
    month: 'Muhurtams',
    title: 'Muhurtams',
    note: 'Auspicious dates and timings.',
    file: '/panchangam/2026-27/muhurtams.pdf',
  },
]
