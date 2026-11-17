# Sri Kara Maha Shakti Pettam Astro – Website Prototype

React + Vite + Tailwind CSS 3 + React Router + Lucide + Framer Motion. No backend; all content is demo data in `src/data/`.

## Run locally (VS Code terminal)
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build check
npm run preview
```
Requires Node.js 18+.

## Replace after client approval
- `src/data/site.js` – phone, WhatsApp, email, address, YouTube link, testimonials (all demo)
- `src/data/services.js` – service descriptions
- `src/data/blogs.js` – articles and real dates
- `src/data/videos.js` – set `youtubeId` for each video
- `src/data/gallery.js` – set `src` to real photos (then swap `Placeholder` for `<img>` in GalleryGrid/Gallery)
- `src/data/panchangam.js` and `public/sample-panchangam.txt` – real Panchangam entries and PDFs
- Profile photo, About page text and "Demo placeholder" stats (About.jsx), Google Maps embed (Contact.jsx)
- Contact form: wire `submit` in `src/pages/Contact.jsx` to a backend
