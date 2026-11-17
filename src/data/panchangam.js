// Panchangam publications shown on the Nitya Panchangam page.
// Monthly PDFs live in public/panchangam/<year>/<month>.pdf
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const note = 'Hindu calendar for Hyderabad by Drik Panchang. Reference copy for review only.'

export const panchangamYears = ['All', '2027']
export const panchangamMonths = ['All', 'Full Year', ...months]

export const panchangam = [
  { id: '2027-full', year: '2027', month: 'Full Year', title: 'Panchangam 2027', note, file: '/panchangam/2027_panchang.pdf' },
  ...months.map((m) => ({
    id: `2027-${m.toLowerCase()}`,
    year: '2027',
    month: m,
    note,
    file: `/panchangam/2027/${m.toLowerCase()}.pdf`,
  })),
]
