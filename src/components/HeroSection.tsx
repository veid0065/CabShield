import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { ASSET_PATHS } from '../data/caseStudyData';
import { CabShieldEmblem } from './TaxiGraphics';

interface HeroSectionProps {
  onAuditClick: () => void;
}

export function HeroSection({ onAuditClick }: HeroSectionProps) {
  const [heroImageError, setHeroImageError] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const benchmarks = [
    { metric: '94%', label: 'Crash Claim Approval', context: 'Up from 66% industry baseline' },
    { metric: '-42%', label: 'Disputed Liability Loss', context: 'Audited 12-mo fleet average' },
    { metric: '14 min', label: 'Automated FNOL Filing', context: 'Stops late-intimation denials' },
    { metric: '₹2.8 Cr', label: 'Hindustan Cabs Savings', context: 'Recovered denied claims & uptime' },
  ];

  return (
    <section className="mx-auto max-w-[1200px] px-6 pt-10 pb-14 md:pt-14 md:pb-20">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch">
        {/* Left: Focal Proposition */}
        <div className="flex flex-col justify-between lg:col-span-5">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-medium text-[#5A5F6A]">
              <CabShieldEmblem className="h-5 w-5 text-[#111317]" />
              <span>Commercial Fleet Protection</span>
              <span aria-hidden="true">·</span>
              <span>Roadside Crash Claims Defense</span>
            </div>

            <h1
              className="mt-5 font-display font-bold tracking-tight text-[#111317] [text-wrap:balance]"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.35rem)', lineHeight: 1.06 }}
            >
              End roadside crash claim denials against your taxi fleet.
            </h1>

            <p className="mt-5 max-w-[56ch] text-base leading-relaxed text-[#4A4E57]">
              Insurance companies routinely reject commercial cab crash claims over missing video,
              disputed fault, or late filing. CAB SHIELD locks timestamped road evidence and files
              insurer-ready crash packets in 14 minutes—so valid claims get paid.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <button
              type="button"
              onClick={onAuditClick}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#F5A623] px-5 py-2.5 text-sm font-semibold text-[#111317] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#E09416] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111317] cursor-pointer"
            >
              <span>Book Fleet Audit</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>

            <a
              href="#denial-defense"
              className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-medium text-[#111317] underline decoration-[#C5C7CC] underline-offset-4 whitespace-nowrap shrink-0 transition-colors hover:decoration-[#111317] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111317]"
            >
              <span>Inspect Denial Defense</span>
            </a>
          </div>
        </div>

        {/* Right: Dominant 16:9 Fleet Photography */}
        <div className="lg:col-span-7">
          <div className="relative h-full min-h-[280px] overflow-hidden rounded-xl border border-[#DCDCD5] bg-[#161920]">
            {!heroImageError ? (
              <img
                src={ASSET_PATHS.heroFleet}
                alt="Modern black-and-yellow commercial taxi fleet lined up in formation outside a transit hub at twilight"
                referrerPolicy="no-referrer"
                onError={() => setHeroImageError(true)}
                className="aspect-video h-full w-full object-cover"
              />
            ) : (
              <div className="flex aspect-video h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#1C2028] to-[#111317] p-8 text-center text-[#F8F8F6]">
                <ShieldCheck className="h-12 w-12 text-[#F5A623]" aria-hidden="true" />
                <p className="mt-3 font-display text-lg font-semibold">
                  CAB SHIELD Metropolitan Fleet Formation
                </p>
                <p className="mt-1 text-sm text-[#9BA1AE]">
                  Kaali-Peeli &amp; executive sedan fleet protection across Mumbai and Pune
                </p>
              </div>
            )}

            {/* Measured contrast scrim for bottom caption */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#111317]/90 via-[#111317]/45 to-transparent p-5 sm:p-6">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-xs text-[#FBBF24]">
                    Featured Deployment · Hindustan Cabs
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#F8F8F6]">
                    1,450 active cabs protected across Mumbai, Pune &amp; Delhi NCR
                  </p>
                </div>

                {/* Animated miniature taxi beacon sweep */}
                <div
                  aria-hidden="true"
                  className="hidden sm:flex items-center gap-2 rounded-md border border-white/15 bg-[#111317]/80 px-3 py-1.5"
                >
                  <div className="relative h-2 w-14 overflow-hidden rounded-full bg-white/15">
                    <motion.div
                      className="absolute inset-y-0 left-0 w-5 rounded-full bg-[#FBBF24]"
                      animate={prefersReducedMotion ? { x: 18 } : { x: [-8, 56] }}
                      transition={
                        prefersReducedMotion
                          ? { duration: 0 }
                          : { duration: 2.2, repeat: Infinity, ease: 'linear' }
                      }
                    />
                  </div>
                  <span className="font-mono text-[11px] text-[#E5E7EB]">ROUTE SHIELD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width 4-column benchmark strip below hero split */}
      <div className="mt-10 grid grid-cols-1 divide-y divide-[#E4E4DF] rounded-xl border border-[#E4E4DF] bg-white sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
        {benchmarks.map((item) => (
          <div key={item.label} className="px-6 py-5">
            <p className="font-mono text-2xl font-semibold tracking-tight text-[#111317] tabular-nums">
              {item.metric}
            </p>
            <p className="mt-1 text-sm font-semibold text-[#111317]">{item.label}</p>
            <p className="mt-0.5 text-xs text-[#636874]">{item.context}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
