import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ShieldAlert, ShieldCheck, FileCheck2, Clock, Video, Gauge } from 'lucide-react';
import { CLAIM_DENIAL_SCENARIOS } from '../data/caseStudyData';

export function ClaimsDenialDefense() {
  const [selectedId, setSelectedId] = useState<string>(CLAIM_DENIAL_SCENARIOS[0].id);
  const prefersReducedMotion = useReducedMotion();

  const activeScenario =
    CLAIM_DENIAL_SCENARIOS.find((item) => item.id === selectedId) ?? CLAIM_DENIAL_SCENARIOS[0];

  const getArtifactIcon = (index: number) => {
    switch (index) {
      case 0:
        return Video;
      case 1:
        return Clock;
      case 2:
        return Gauge;
      default:
        return FileCheck2;
    }
  };

  return (
    <section
      id="denial-defense"
      aria-labelledby="denial-defense-heading"
      className="mx-auto max-w-[1200px] px-6 py-16 md:py-22"
    >
      <div className="flex flex-col justify-between gap-4 border-b border-[#E4E4DF] pb-8 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-medium tracking-wide text-[#A16207]">
            Roadside Crash Claims Defense · Zero Unanswered Denials
          </p>
          <h2
            id="denial-defense-heading"
            className="mt-2 max-w-2xl font-display text-3xl font-bold tracking-tight text-[#111317] [text-wrap:balance] sm:text-4xl"
          >
            Stop insurance companies from denying roadside crash claims against your fleet.
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-[#4A4E57]">
          Commercial cab operators lose crores every year when insurers reject roadside accident
          claims over missing footage, late intimation, or unverified driver logs. Select a common
          denial ground below to inspect the CAB SHIELD counter-packet.
        </p>
      </div>

      {/* Interactive Denial Ground Selector + Evidence Comparison */}
      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
        {/* Left: 4 Denial Reason Selectors */}
        <div
          role="tablist"
          aria-label="Common insurer claim denial reasons"
          className="flex flex-col gap-3 lg:col-span-5"
        >
          {CLAIM_DENIAL_SCENARIOS.map((scenario, idx) => {
            const isSelected = scenario.id === activeScenario.id;
            return (
              <button
                key={scenario.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedId(scenario.id)}
                className={`flex w-full flex-col items-start rounded-xl border p-5 text-left transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111317] ${
                  isSelected
                    ? 'border-[#111317] bg-[#111317] text-[#F8F8F6]'
                    : 'border-[#E4E4DF] bg-white text-[#111317] hover:border-[#C5C7CC]'
                }`}
              >
                <div className="flex w-full items-center justify-between gap-3">
                  <span
                    className={`font-mono text-xs font-medium tabular-nums ${
                      isSelected ? 'text-[#FBBF24]' : 'text-[#A16207]'
                    }`}
                  >
                    {`0${idx + 1}. ${scenario.denialCode}`}
                  </span>
                  <span
                    className={`font-mono text-xs tabular-nums ${
                      isSelected ? 'text-[#C4C9D4]' : 'text-[#636874]'
                    }`}
                  >
                    {scenario.impactStat}
                  </span>
                </div>
                <span className="mt-2 font-display text-base font-semibold">
                  {scenario.title}
                </span>
                <span
                  className={`mt-1 text-xs leading-relaxed ${
                    isSelected ? 'text-[#C4C9D4]' : 'text-[#4A4E57]'
                  }`}
                >
                  {scenario.shortSummary}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right: Before vs. After Insurer Audit Comparison */}
        <motion.div
          key={activeScenario.id}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18 }}
          className="flex flex-col justify-between rounded-xl border border-[#E4E4DF] bg-white p-6 sm:p-8 lg:col-span-7"
        >
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E4E4DF] pb-4">
              <div>
                <p className="font-mono text-xs text-[#636874]">
                  Insurer Adjudication Breakdown
                </p>
                <h3 className="mt-1 font-display text-xl font-bold text-[#111317]">
                  {activeScenario.title}
                </h3>
              </div>
              <span className="font-mono text-xs font-semibold text-[#111317] tabular-nums">
                {activeScenario.turnaroundDelta}
              </span>
            </div>

            {/* Without vs With CAB SHIELD side-by-side */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-[#E4E4DF] bg-[#F8F8F6] p-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#991B1B]">
                  <ShieldAlert className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Without CAB SHIELD · Claim Denied</span>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-[#2A2D34]">
                  {activeScenario.insurerDenialArgument}
                </p>
                <p className="mt-3 border-t border-[#E4E4DF] pt-2.5 font-mono text-xs text-[#636874]">
                  {activeScenario.withoutOutcome}
                </p>
              </div>

              <div className="rounded-lg border border-[#111317] bg-[#111317] p-4 text-[#F8F8F6]">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#FBBF24]">
                  <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>With CAB SHIELD · Claim Approved</span>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-[#E5E7EB]">
                  {activeScenario.shieldCounterProof}
                </p>
                <p className="mt-3 border-t border-white/12 pt-2.5 font-mono text-xs text-[#FBBF24]">
                  {activeScenario.withOutcome}
                </p>
              </div>
            </div>

            {/* Automatically Bundled Insurer Artifacts */}
            <div className="mt-6">
              <p className="text-xs font-semibold tracking-wide text-[#4A4E57]">
                Auto-Generated Roadside Evidence Packet
              </p>
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {activeScenario.evidenceArtifacts.map((artifact, index) => {
                  const Icon = getArtifactIcon(index);
                  return (
                    <div
                      key={artifact.label}
                      className="flex items-start gap-3 rounded-lg border border-[#E4E4DF] bg-[#F8F8F6] p-3.5"
                    >
                      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#111317]" aria-hidden="true" />
                      <div>
                        <p className="text-xs font-semibold text-[#111317]">{artifact.label}</p>
                        <p className="mt-0.5 text-xs text-[#636874]">{artifact.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#E4E4DF] pt-4 text-xs text-[#4A4E57]">
            <span>Admissible across major Indian commercial motor insurers &amp; MACT tribunals</span>
            <a
              href="#hindustan-cabs"
              className="font-semibold text-[#111317] underline decoration-[#C5C7CC] underline-offset-4 hover:decoration-[#111317]"
            >
              See Hindustan Cabs 94% Approval Rate
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
