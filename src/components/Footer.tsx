export function Footer() {
  return (
    <footer className="border-t border-[#E4E4DF] bg-[#F8F8F6]">
      <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
        <div>
          <span className="font-display text-base font-bold tracking-tight text-[#111317]">
            CAB SHIELD
          </span>
          <p className="mt-1 text-xs text-[#636874]">
            Commercial Fleet Telematics &amp; Claims Intelligence · Mumbai, Pune &amp; Bengaluru
          </p>
        </div>

        <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-6 text-xs font-medium text-[#4A4E57]">
          <a href="#denial-defense" className="hover:text-[#111317] transition-colors">
            Denial Defense
          </a>
          <a href="#capabilities" className="hover:text-[#111317] transition-colors">
            Capabilities
          </a>
          <a href="#hindustan-cabs" className="hover:text-[#111317] transition-colors">
            Hindustan Cabs Case Study
          </a>
          <a href="#savings-estimator" className="hover:text-[#111317] transition-colors">
            Savings Model
          </a>
        </nav>

        <p className="text-xs text-[#636874]">
          &copy; {new Date().getFullYear()} CAB SHIELD Mobility Systems
        </p>
      </div>
    </footer>
  );
}
