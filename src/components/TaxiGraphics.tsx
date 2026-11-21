import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Pause, Play } from 'lucide-react';

export function CabShieldEmblem({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M18 3L5 8.5V17.5C5 25.3 10.55 32.1 18 34C25.45 32.1 31 25.3 31 17.5V8.5L18 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Stylized roof taxi sign & sedan silhouette */}
      <rect x="14.5" y="10" width="7" height="2.8" rx="0.8" fill="#F5A623" />
      <path
        d="M10.5 18.5L12.6 14H23.4L25.5 18.5H27V22.5H24.6V24H22.2V22.5H13.8V24H11.4V22.5H9V18.5H10.5Z"
        fill="currentColor"
      />
      <rect x="12" y="19.5" width="2.4" height="1.5" rx="0.5" fill="#F5A623" />
      <rect x="21.6" y="19.5" width="2.4" height="1.5" rx="0.5" fill="#F5A623" />
    </svg>
  );
}

export function TaxiCheckerDivider({ dark = false }: { dark?: boolean }) {
  const squares = Array.from({ length: 24 }, (_, idx) => idx);

  return (
    <div
      aria-hidden="true"
      className={`w-full overflow-hidden border-y ${
        dark ? 'border-white/10 bg-[#14171C]' : 'border-[#E4E4DF] bg-[#F1F1EC]'
      }`}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-2">
        <div className="grid grid-cols-12 gap-1.5 opacity-60">
          {squares.slice(0, 12).map((i) => (
            <span
              key={i}
              className={`h-1.5 w-3 ${
                i % 2 === 0
                  ? 'bg-[#F5A623]'
                  : dark
                    ? 'bg-white/20'
                    : 'bg-[#111317]/20'
              }`}
            />
          ))}
        </div>
        <span
          className={`font-mono text-[11px] tracking-wider uppercase ${
            dark ? 'text-[#9BA1AE]' : 'text-[#636874]'
          }`}
        >
          Commercial Transit Standard
        </span>
        <div className="hidden sm:grid grid-cols-12 gap-1.5 opacity-60">
          {squares.slice(12).map((i) => (
            <span
              key={i}
              className={`h-1.5 w-3 ${
                i % 2 === 1
                  ? 'bg-[#F5A623]'
                  : dark
                    ? 'bg-white/20'
                    : 'bg-[#111317]/20'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface TaxiVehicleSvgProps {
  plate: string;
  variant?: 'kaali-peeli' | 'sedan';
}

function TaxiVehicleSvg({ plate, variant = 'kaali-peeli' }: TaxiVehicleSvgProps) {
  const roofFill = variant === 'kaali-peeli' ? '#FBBF24' : '#E5E7EB';
  const bodyFill = variant === 'kaali-peeli' ? '#0F1115' : '#1F242D';

  return (
    <g>
      {/* Shield Halo */}
      <ellipse cx="44" cy="24" rx="42" ry="14" fill="rgba(251, 191, 36, 0.14)" />
      {/* Cab Chassis */}
      <rect x="8" y="17" width="72" height="14" rx="4" fill={bodyFill} stroke="#FBBF24" strokeWidth="1.2" />
      {/* Yellow/Silver Roofline */}
      <path d="M20 17L26 9H58L66 17H20Z" fill={roofFill} />
      {/* Taxi Top Sign */}
      <rect x="36" y="5.5" width="12" height="3.5" rx="1" fill="#F59E0B" />
      {/* Side Windows */}
      <path d="M24 15.5L28 11H41V15.5H24Z" fill="#181C24" />
      <path d="M44 15.5V11H56L61 15.5H44Z" fill="#181C24" />
      {/* Checker Door Stripe */}
      <rect x="26" y="21" width="4" height="2.5" fill="#FBBF24" />
      <rect x="30" y="23.5" width="4" height="2.5" fill="#FBBF24" />
      <rect x="34" y="21" width="4" height="2.5" fill="#FBBF24" />
      <rect x="38" y="23.5" width="4" height="2.5" fill="#FBBF24" />
      {/* Headlight Beam */}
      <path d="M80 21L96 17V29L80 25V21Z" fill="url(#headlightBeam)" />
      {/* Wheels */}
      <circle cx="23" cy="31" r="4.5" fill="#0A0C0F" stroke="#9CA3AF" strokeWidth="1.5" />
      <circle cx="65" cy="31" r="4.5" fill="#0A0C0F" stroke="#9CA3AF" strokeWidth="1.5" />
      {/* License Plate */}
      <text
        x="48"
        y="25"
        fill="#E5E7EB"
        fontSize="5.5"
        fontFamily="JetBrains Mono, monospace"
        fontWeight="600"
      >
        {plate}
      </text>
    </g>
  );
}

export function HindustanFleetCorridorGraphic() {
  const prefersReducedMotion = useReducedMotion();
  const [paused, setPaused] = useState(false);

  const shouldAnimate = !prefersReducedMotion && !paused;

  return (
    <div className="rounded-xl border border-white/12 bg-[#161920] p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <p className="font-mono text-xs tracking-wide text-[#FBBF24]">
            Protected Dispatch Corridor Schematic
          </p>
          <p className="mt-1 text-sm text-[#C4C9D4]">
            Hindustan Cabs active transit lanes under automated CAB SHIELD impact &amp; checkpoint telemetry
          </p>
        </div>

        <button
          type="button"
          onClick={() => setPaused((prev) => !prev)}
          aria-label={paused ? 'Play route animation' : 'Pause route animation'}
          className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-[#F8F8F6] whitespace-nowrap shrink-0 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FBBF24] cursor-pointer"
        >
          {paused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
          <span>{paused ? 'Resume Corridor' : 'Pause Corridor'}</span>
        </button>
      </div>

      <div className="relative mt-5 overflow-hidden rounded-lg border border-white/10 bg-[#0E1015] p-4">
        <svg
          viewBox="0 0 880 210"
          className="h-auto w-full"
          role="img"
          aria-label="Animated graphic showing Hindustan Cabs black-and-yellow taxis moving along two protected Mumbai and Pune transit lanes passing through CAB SHIELD verification arches"
        >
          <defs>
            <linearGradient id="headlightBeam" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#FBBF24" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="laneGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F5A623" stopOpacity="0.08" />
              <stop offset="50%" stopColor="#F5A623" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#F5A623" stopOpacity="0.08" />
            </linearGradient>
          </defs>

          {/* Subtle architectural road grid */}
          <rect x="0" y="34" width="880" height="58" fill="#141821" />
          <rect x="0" y="114" width="880" height="58" fill="#141821" />

          {/* Road Lane Markings */}
          <line x1="0" y1="63" x2="880" y2="63" stroke="#F5A623" strokeOpacity="0.28" strokeWidth="1.5" strokeDasharray="16 14" />
          <line x1="0" y1="143" x2="880" y2="143" stroke="#9CA3AF" strokeOpacity="0.22" strokeWidth="1.5" strokeDasharray="16 14" />

          {/* Corridor Labels */}
          <text x="16" y="24" fill="#9BA1AE" fontSize="11" fontFamily="JetBrains Mono, monospace">
            LANE 01 · DADAR TERMINAL — BANDRA EXPRESSWAY
          </text>
          <text x="16" y="106" fill="#9BA1AE" fontSize="11" fontFamily="JetBrains Mono, monospace">
            LANE 02 · AIRPORT T2 — PUNE INTERCITY BAY
          </text>

          {/* CAB SHIELD Verification Arches (Checkpoints) */}
          {[220, 460, 700].map((cx, index) => (
            <g key={cx}>
              <rect x={cx - 1} y="30" width="2" height="148" fill="url(#laneGlow)" />
              <rect x={cx - 14} y="182" width="28" height="18" rx="3" fill="#1C2029" stroke="#FBBF24" strokeOpacity="0.45" />
              <text
                x={cx}
                y="194"
                textAnchor="middle"
                fill="#FBBF24"
                fontSize="8.5"
                fontFamily="JetBrains Mono, monospace"
              >
                {`NODE 0${index + 1}`}
              </text>
              <motion.circle
                cx={cx}
                cy="34"
                r="4"
                fill="#FBBF24"
                animate={
                  shouldAnimate
                    ? { opacity: [0.35, 1, 0.35], scale: [0.9, 1.25, 0.9] }
                    : { opacity: 0.7, scale: 1 }
                }
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  delay: index * 0.75,
                  ease: 'easeInOut',
                }}
              />
            </g>
          ))}

          {/* Animated Cab 1: Kaali-Peeli on Lane 01 */}
          <motion.g
            initial={{ x: 40, y: 42 }}
            animate={shouldAnimate ? { x: [-90, 890] } : { x: 185 }}
            transition={
              shouldAnimate
                ? { duration: 11, repeat: Infinity, ease: 'linear' }
                : { duration: 0.2 }
            }
          >
            <TaxiVehicleSvg plate="MH-01" variant="kaali-peeli" />
          </motion.g>

          {/* Animated Cab 2: Kaali-Peeli staggered on Lane 01 */}
          <motion.g
            initial={{ x: 440, y: 42 }}
            animate={shouldAnimate ? { x: [-90, 890] } : { x: 525 }}
            transition={
              shouldAnimate
                ? { duration: 11, repeat: Infinity, ease: 'linear', delay: -5.5 }
                : { duration: 0.2 }
            }
          >
            <TaxiVehicleSvg plate="MH-02" variant="kaali-peeli" />
          </motion.g>

          {/* Animated Cab 3: Executive Sedan on Lane 02 */}
          <motion.g
            initial={{ x: 260, y: 122 }}
            animate={shouldAnimate ? { x: [-90, 890] } : { x: 350 }}
            transition={
              shouldAnimate
                ? { duration: 13.5, repeat: Infinity, ease: 'linear', delay: -2.4 }
                : { duration: 0.2 }
            }
          >
            <TaxiVehicleSvg plate="MH-12" variant="sedan" />
          </motion.g>
        </svg>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-3 text-xs text-[#9BA1AE]">
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-2">
              <span className="h-2.5 w-4 rounded-xs bg-[#FBBF24]" aria-hidden="true" />
              <span>Kaali-Peeli Metered Fleet (980 units)</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2.5 w-4 rounded-xs bg-[#E5E7EB]" aria-hidden="true" />
              <span>Executive CNG Sedans (470 units)</span>
            </span>
          </div>
          <span className="font-mono tabular-nums text-[#C4C9D4]">
            1,450 Protected Vehicles · 14 min Triage SLA
          </span>
        </div>
      </div>
    </div>
  );
}
