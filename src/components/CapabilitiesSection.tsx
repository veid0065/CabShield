import { CAPABILITIES } from '../data/caseStudyData';

export function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="mx-auto max-w-[1200px] px-6 py-16 md:py-22"
      aria-labelledby="capabilities-heading"
    >
      <div className="flex flex-col justify-between gap-4 border-b border-[#E4E4DF] pb-8 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-medium tracking-wide text-[#636874]">
            Platform Architecture · Four Core Modules
          </p>
          <h2
            id="capabilities-heading"
            className="mt-2 max-w-2xl font-display text-3xl font-bold tracking-tight text-[#111317] [text-wrap:balance] sm:text-4xl"
          >
            Built for high-mileage commercial taxi operators, not personal cars.
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-[#4A4E57]">
          Every hardware beacon and claims workflow handles double-shift handovers, congested
          urban junctions, and monsoon road conditions without slowing dispatchers.
        </p>
      </div>

      {/* Asymmetric Bento Grid */}
      <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {CAPABILITIES.map((cap) => (
          <article
            key={cap.number}
            className={`flex flex-col justify-between rounded-xl border border-[#E4E4DF] bg-white p-6 sm:p-7 transition-colors duration-150 hover:border-[#C5C7CC] ${
              cap.span === 'wide' ? 'lg:col-span-2' : 'lg:col-span-1'
            }`}
          >
            <div>
              <span className="font-mono text-sm font-medium text-[#A16207] tabular-nums">
                {cap.number}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-[#111317]">
                {cap.title}
              </h3>
              <p className="mt-3 max-w-[62ch] text-sm leading-relaxed text-[#4A4E57]">
                {cap.description}
              </p>
            </div>

            <div className="mt-6 border-t border-[#F0F0EB] pt-4">
              <p className="text-xs font-medium text-[#111317]">{cap.outcome}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
