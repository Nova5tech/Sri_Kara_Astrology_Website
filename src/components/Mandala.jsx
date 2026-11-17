// Decorative SVG mandala / celestial art (no external images needed)
export default function Mandala({ className = '', stroke = '#B79555', opacity = 0.35 }) {
  const petals = Array.from({ length: 16 })
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" stroke={stroke} strokeWidth="0.6" opacity={opacity} aria-hidden="true">
      {[95, 80, 60, 40, 20].map((r) => <circle key={r} cx="100" cy="100" r={r} />)}
      {petals.map((_, i) => (
        <g key={i} transform={`rotate(${i * 22.5} 100 100)`}>
          <path d="M100 20 C108 45 108 60 100 80 C92 60 92 45 100 20Z" />
          <circle cx="100" cy="12" r="2" />
        </g>
      ))}
      <path d="M100 5 L106 94 L195 100 L106 106 L100 195 L94 106 L5 100 L94 94Z" />
    </svg>
  )
}
