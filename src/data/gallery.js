// Placeholder tiles (generated artwork). Replace `src` with real photos later.
export const galleryCategories = ['All', 'Spiritual Events', 'Astrology Events', 'Temple & Cultural']
export const gallery = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `Demo photo ${i + 1}`,
  category: galleryCategories[(i % 3) + 1],
  src: null,
  tone: i % 3,
}))
