// Contact details taken from the astrologer's business card.
// Email is still a PLACEHOLDER (not on the card).
export const site = {
  name: 'Sri Kara Maha Shakti Pettam Astro',
  short: 'Maha Shakti Pettam',
  tagline: 'Astrology & Spiritual Guidance',
  phones: ['+91 98661 90087', '+91 93976 56999'],
  landline: '08856-230539',
  whatsapp: '919397656999',
  whatsappMessage: 'Namaste, I found your website and would like to know more about your astrology services and book an appointment.',
  email: 'admin@srikaramahashaktipettamastro.com',
  address: 'A.Vemavaram - 533 577, Amalapuram Mandal, East Godavari Dist. (A.P.)',
  mapEmbed: 'https://www.google.com/maps?q=A.+Vemavaram,+Amalapuram,+Andhra+Pradesh+533577&output=embed',
  youtube: 'https://www.youtube.com/@srikaramahaastro', // ← put the real channel URL here
}

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/panchangam', label: 'Nitya Panchangam' },
  { to: '/blog', label: 'Blog' },
  { href: site.youtube, label: 'YouTube', external: true },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export const testimonials = [
  { name: 'Demo Client A', place: 'Sample City', text: 'Demo testimonial: a calm, clear and respectful consultation experience.' },
  { name: 'Demo Client B', place: 'Sample City', text: 'Demo testimonial: the guidance was explained patiently and in simple language.' },
  { name: 'Demo Client C', place: 'Sample City', text: 'Demo testimonial: an easy booking process and a thoughtful discussion.' },
]