import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Shield, Quote } from 'lucide-react';
import {
  ASSET_PATHS,
  HINDUSTAN_CABS_STATS,
  HINDUSTAN_LEGACY_MILESTONES,
  HINDUSTAN_TESTIMONIAL,
  type MetricCategory,
} from '../data/caseStudyData';
import { HindustanFleetCorridorGraphic } from './TaxiGraphics';

const FILTER_TABS: { id: MetricCategory; label: string }[] = [
  { id: 'all', label: 'All Outcomes' },
  { id: 'claims', label: 'Claims & Cost' },
  { id: 'uptime', label: 'Fleet Uptime' },
  { id: 'safety', label: 'Driver Safety' },
];

export function HindustanCabsCaseStudy() {
  const [activeFilter, setActiveFilter] = useState<MetricCategory>('all');
  const [selectedMilestoneYear, setSelectedMilestoneYear] = useState<string>('2026');
  const [legacyImgError, setLegacyImgError] = useState(false);
  const [portraitImgError, setPortraitImgError] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const activeMilestone =
    HINDUSTAN_LEGACY_MILESTONES.find((m) => m.year === selectedMilestoneYear) ??
    HINDUSTAN_LEGACY_MILESTONES[HINDUSTAN_LEGACY_MILESTONES.length - 1];

  return (
    <section
      id="hindustan-cabs"
      aria-labelledby="hindustan-heading"
      className="bg-[#111317] py-16 text-[#F8F8F6] md:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Case Study Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-white/12 pb-8 lg:flex-row lg:items-end">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium tracking-wide text-[#FBBF24]">
              <span>Case Study Integration</span>
              <span aria-hidden="true">·</span>
              <span>Hindustan Cabs</span>
              <span aria-hidden="true">·</span>
              <span>Est. 1996 (30-Year Legacy)</span>
            </div>
            <h2
              id="hindustan-heading"
              className="mt-3 max-w-3xl font-display text-3xl font-bold tracking-tight text-[#F8F8F6] [text-wrap:balance] sm:text-4xl lg:text-[2.65rem]"
            >
              How a 30-year Mumbai cab fleet lifted roadside crash claim approvals from 66% to 94%.
            </h2>
          </div>

          <div className="text-sm text-[#C4C9D4] lg:max-w-sm">
            <p className="leading-relaxed">
              Operating 1,450 Kaali-Peeli metered taxis and executive CNG sedans across Mumbai,
              Pune, and Delhi NCR, Hindustan Cabs stopped insurer claim denials without halting a
              single depot dispatch shift.
            </p>
          </div>
        </div>

        {/* 2-Column Legacy Split: Documentary Photo + Interactive 30-Year Milestone Scrubber */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-6">
            <div className="relative h-full min-h-[280px] overflow-hidden rounded-xl border border-white/12 bg-[#181B21]">
              {!legacyImgError ? (
                <img
                  src={ASSET_PATHS.hindustanLegacy}
                  alt="Hindustan Cabs historic Mumbai terminal bay showing classic and modern black-and-yellow taxis lined up under steel trusses"
                  referrerPolicy="no-referrer"
                  onError={() => setLegacyImgError(true)}
                  className="aspect-[4/3] h-full w-full object-cover"
                />
              ) : (
                <div className="flex aspect-[4/3] h-full w-full flex-col items-center justify-center bg-[#181B21] p-8 text-center">
                  <Shield className="h-10 w-10 text-[#FBBF24]" aria-hidden="true" />
                  <p className="mt-3 font-display text-lg font-semibold text-[#F8F8F6]">
                    Hindustan Cabs Terminal Bay · 1996–2026
                  </p>
                  <p className="mt-1 text-xs text-[#9BA1AE]">
                    30 years of continuous commercial passenger transit
                  </p>
                </div>
              )}

              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#111317]/90 via-[#111317]/50 to-transparent p-5">
                <p className="font-mono text-xs text-[#FBBF24] tabular-nums">
                  1996 — 2026 · 30 Years of Continuous Service
                </p>
                <p className="mt-1 text-sm text-[#E5E7EB]">
                  Dadar &amp; Wadala Central Maintenance Yard, Mumbai
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-xl border border-white/12 bg-[#181B21] p-6 sm:p-7 lg:col-span-6">
            <div>
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-display text-lg font-semibold tracking-wide text-[#F8F8F6]">
                  30-Year Fleet Modernization Timeline
                </h3>
                <span className="font-mono text-xs text-[#9BA1AE] tabular-nums">
                  40 → 1,450 Cabs
                </span>
              </div>

              {/* Interactive Timeline Year Selector */}
              <div
                role="tablist"
                aria-label="Hindustan Cabs 30-year milestones"
                className="mt-5 grid grid-cols-4 gap-2 rounded-lg bg-[#111317] p-1.5"
              >
                {HINDUSTAN_LEGACY_MILESTONES.map((milestone) => {
                  const isActive = milestone.year === selectedMilestoneYear;
                  return (
                    <button
                      key={milestone.year}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setSelectedMilestoneYear(milestone.year)}
                      className={`min-h-[40px] rounded-md px-2 py-1.5 font-mono text-xs font-semibold tabular-nums whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FBBF24] ${
                        isActive
                          ? 'bg-[#F5A623] text-[#111317]'
                          : 'text-[#9BA1AE] hover:bg-white/5 hover:text-[#F8F8F6]'
                      }`}
                    >
                      {milestone.year}
                    </button>
                  );
                })}
              </div>

              {/* Selected Epoch Details */}
              <motion.div
                key={activeMilestone.year}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.18 }}
                className="mt-6"
              >
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#FBBF24]">
                  <span>{activeMilestone.era}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono tabular-nums">{activeMilestone.fleetCount}</span>
                </div>
                <h4 className="mt-2 font-display text-xl font-semibold text-[#F8F8F6] [text-wrap:balance]">
                  {activeMilestone.headline}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-[#C4C9D4]">
                  {activeMilestone.summary}
                </p>
              </motion.div>
            </div>

            <div className="mt-6 border-t border-white/10 pt-4 text-xs text-[#9BA1AE]">
              <span>Rollout Window: 90-day phased yard installation</span>
              <span className="mx-2" aria-hidden="true">·</span>
              <span>Zero shift cancellations</span>
            </div>
          </div>
        </div>

        {/* Stat Cards Header & Interactive Filter Controls */}
        <div className="mt-14 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h3 className="font-display text-2xl font-bold tracking-tight text-[#F8F8F6]">
              Verified Success Metrics with CAB SHIELD
            </h3>
            <p className="mt-1 text-sm text-[#9BA1AE]">
              Filter audited operational benchmarks across claims, dispatch availability, and safety response.
            </p>
          </div>

          <div
            role="group"
            aria-label="Filter case study metrics"
            className="inline-flex flex-wrap items-center gap-1 rounded-lg border border-white/12 bg-[#181B21] p-1"
          >
            {FILTER_TABS.map((tab) => {
              const selected = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id)}
                  className={`min-h-[36px] rounded-md px-3 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FBBF24] ${
                    selected
                      ? 'bg-[#F5A623] text-[#111317] font-semibold'
                      : 'text-[#C4C9D4] hover:text-[#F8F8F6] hover:bg-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Prominent Stat Cards Grid */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {HINDUSTAN_CABS_STATS.map((stat) => {
            const isHighlighted = activeFilter === 'all' || stat.category === activeFilter;

            return (
              <article
                key={stat.id}
                className={`flex flex-col justify-between rounded-xl border p-6 transition-opacity duration-150 ${
                  isHighlighted
                    ? 'border-white/15 bg-[#181B21] opacity-100'
                    : 'border-white/8 bg-[#15181E] opacity-40'
                }`}
              >
                <div>
                  <p className="font-mono text-4xl font-semibold tracking-tight text-[#FBBF24] tabular-nums">
                    {stat.value}
                  </p>
                  <h4 className="mt-3 font-display text-base font-semibold text-[#F8F8F6]">
                    {stat.label}
                  </h4>
                  <p className="mt-1.5 text-xs font-medium text-[#C4C9D4]">{stat.baseline}</p>
                </div>

                <div className="mt-5 border-t border-white/10 pt-4">
                  <p className="text-xs leading-relaxed text-[#9BA1AE]">{stat.detail}</p>
                  <p className="mt-2 font-mono text-[11px] text-[#7D8492]">{stat.timeframe}</p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Animated Taxi-Themed Corridor Graphic */}
        <div className="mt-10">
          <HindustanFleetCorridorGraphic />
        </div>

        {/* Professional Testimonial Card (All-around hairline border, NO thick left accent border) */}
        <figure className="mt-10 rounded-xl border border-white/12 bg-[#181B21] p-6 sm:p-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-3 lg:col-span-2">
              <div className="h-24 w-24 overflow-hidden rounded-xl border border-white/15 bg-[#111317] sm:h-28 sm:w-28">
                {!portraitImgError ? (
                  <img
                    src={ASSET_PATHS.directorPortrait}
                    alt="Rajeshwar Kulkarni, Director of Fleet Operations at Hindustan Cabs"
                    referrerPolicy="no-referrer"
                    onError={() => setPortraitImgError(true)}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[#20242C] font-display text-xl font-bold text-[#FBBF24]">
                    RK
                  </div>
                )}
              </div>
            </div>

            <div className="md:col-span-9 lg:col-span-10">
              <Quote className="h-5 w-5 text-[#FBBF24]" aria-hidden="true" />
              <blockquote className="mt-3 text-base leading-relaxed text-[#F8F8F6] sm:text-lg">
                &ldquo;{HINDUSTAN_TESTIMONIAL.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
                <div>
                  <span className="font-display text-base font-semibold text-[#F8F8F6]">
                    {HINDUSTAN_TESTIMONIAL.name}
                  </span>
                  <span className="mx-2 text-[#7D8492]" aria-hidden="true">·</span>
                  <span className="text-sm text-[#C4C9D4]">
                    {HINDUSTAN_TESTIMONIAL.role}, {HINDUSTAN_TESTIMONIAL.organization}
                  </span>
                </div>
                <span className="font-mono text-xs text-[#9BA1AE]">
                  {HINDUSTAN_TESTIMONIAL.beforeAfter}
                </span>
              </figcaption>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}
