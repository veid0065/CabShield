import { useState, type FormEvent } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

type FleetProfile = 'metered' | 'airport' | 'intercity';

const PROFILE_MULTIPLIERS: Record<FleetProfile, { label: string; savingsPerCab: number; uptimeGain: string }> = {
  metered: {
    label: 'Metered City Fleet',
    savingsPerCab: 19300,
    uptimeGain: '+7.6% shift availability',
  },
  airport: {
    label: 'Airport & Corporate',
    savingsPerCab: 23800,
    uptimeGain: '+8.2% shift availability',
  },
  intercity: {
    label: 'Mixed Intercity',
    savingsPerCab: 26400,
    uptimeGain: '+9.1% shift availability',
  },
};

function formatInrCompact(amount: number): string {
  if (amount >= 10000000) {
    return `₹${(amount / 10000000).toFixed(2)} Cr`;
  }
  if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(1)} L`;
  }
  return `₹${amount.toLocaleString('en-IN')}`;
}

export function FleetEstimatorAndAudit() {
  const [fleetSize, setFleetSize] = useState<number>(350);
  const [profile, setProfile] = useState<FleetProfile>('metered');

  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [contactInput, setContactInput] = useState('');
  const [city, setCity] = useState('Mumbai');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const selectedModel = PROFILE_MULTIPLIERS[profile];
  const annualSavings = fleetSize * selectedModel.savingsPerCab;
  const recoveredVehicleDays = Math.round(fleetSize * 11.4);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors: Record<string, string> = {};

    if (fullName.trim().length < 2) {
      errors.fullName = 'Enter your full name.';
    }
    if (companyName.trim().length < 2) {
      errors.companyName = 'Enter your fleet or company name.';
    }

    const trimmedContact = contactInput.trim();
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedContact);
    const digitsOnly = trimmedContact.replace(/\D/g, '');
    const isPhone = digitsOnly.length >= 10 && digitsOnly.length <= 13;

    if (!isEmail && !isPhone) {
      errors.contactInput = 'Enter a valid work email or 10-digit mobile number.';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    const code = `CS-${String(fleetSize).padStart(4, '0')}-${Math.floor(100 + Math.random() * 900)}`;
    setSubmittedRef(code);
  };

  return (
    <section
      id="savings-estimator"
      className="mx-auto max-w-[1200px] px-6 py-16 md:py-24"
      aria-labelledby="estimator-heading"
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch">
        {/* Left: Fleet Impact Estimator */}
        <div className="flex flex-col justify-between rounded-xl border border-[#E4E4DF] bg-white p-6 sm:p-8 lg:col-span-6">
          <div>
            <p className="text-xs font-medium text-[#636874]">
              Modeled on Hindustan Cabs Benchmark
            </p>
            <h2
              id="estimator-heading"
              className="mt-2 font-display text-2xl font-bold tracking-tight text-[#111317] [text-wrap:balance] sm:text-3xl"
            >
              Estimate annual claims &amp; downtime recovery for your fleet.
            </h2>

            <div className="mt-7 space-y-6">
              <div>
                <div className="flex items-center justify-between gap-4">
                  <label htmlFor="fleet-size-slider" className="text-sm font-medium text-[#111317]">
                    Active Cabs in Fleet
                  </label>
                  <span className="font-mono text-lg font-semibold text-[#111317] tabular-nums">
                    {fleetSize.toLocaleString('en-IN')} cabs
                  </span>
                </div>
                <input
                  id="fleet-size-slider"
                  type="range"
                  min={50}
                  max={2500}
                  step={25}
                  value={fleetSize}
                  onChange={(e) => setFleetSize(Number(e.target.value))}
                  className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-lg bg-[#E4E4DF] accent-[#111317]"
                />
                <div className="mt-1.5 flex justify-between font-mono text-[11px] text-[#636874] tabular-nums">
                  <span>50</span>
                  <span>1,450 (Hindustan Cabs)</span>
                  <span>2,500</span>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-[#111317]">Operating Profile</p>
                <div
                  role="group"
                  aria-label="Fleet operating profile"
                  className="mt-2.5 grid grid-cols-1 gap-2 sm:grid-cols-3"
                >
                  {(Object.keys(PROFILE_MULTIPLIERS) as FleetProfile[]).map((key) => {
                    const active = profile === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setProfile(key)}
                        className={`min-h-[42px] rounded-lg border px-3 py-2 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111317] ${
                          active
                            ? 'border-[#111317] bg-[#111317] text-[#F8F8F6]'
                            : 'border-[#DCDCD5] bg-[#F8F8F6] text-[#2A2D34] hover:border-[#111317]/40'
                        }`}
                      >
                        {PROFILE_MULTIPLIERS[key].label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Projected Output Strip */}
          <div className="mt-8 grid grid-cols-1 gap-4 border-t border-[#E4E4DF] pt-6 sm:grid-cols-2">
            <div className="rounded-lg bg-[#F8F8F6] p-4">
              <p className="text-xs text-[#636874]">Projected Annual Net Savings</p>
              <p className="mt-1 font-mono text-2xl font-semibold text-[#111317] tabular-nums">
                {formatInrCompact(annualSavings)}
              </p>
              <p className="mt-1 text-[11px] text-[#636874]">
                Claims leakage + repair downtime avoided
              </p>
            </div>
            <div className="rounded-lg bg-[#F8F8F6] p-4">
              <p className="text-xs text-[#636874]">Recovered Revenue Days / Year</p>
              <p className="mt-1 font-mono text-2xl font-semibold text-[#111317] tabular-nums">
                {recoveredVehicleDays.toLocaleString('en-IN')} days
              </p>
              <p className="mt-1 text-[11px] text-[#636874]">{selectedModel.uptimeGain}</p>
            </div>
          </div>
        </div>

        {/* Right: Validated Lead Capture / Audit Request Form */}
        <div
          id="audit-form"
          className="flex flex-col justify-between rounded-xl border border-[#E4E4DF] bg-white p-6 sm:p-8 lg:col-span-6"
        >
          {submittedRef ? (
            <div className="flex h-full flex-col justify-between py-4">
              <div>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#166534]">
                  <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                  <span>Fleet Audit Request Confirmed</span>
                </div>

                <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-[#111317]">
                  Thank you, {fullName}. Your fleet briefing is scheduled for dispatch.
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#4A4E57]">
                  Our Mumbai operations engineering team has logged your{' '}
                  <span className="font-mono font-semibold text-[#111317] tabular-nums">
                    {fleetSize.toLocaleString('en-IN')}-cab
                  </span>{' '}
                  audit profile for <span className="font-medium text-[#111317]">{companyName}</span>{' '}
                  ({city}) and will reach out to{' '}
                  <span className="font-medium text-[#111317]">{contactInput}</span> within one
                  business day with the Hindustan Cabs rollout blueprint.
                </p>

                <div className="mt-6 rounded-lg border border-[#E4E4DF] bg-[#F8F8F6] p-4">
                  <p className="text-xs text-[#636874]">Audit Reference Number</p>
                  <p className="mt-1 font-mono text-base font-semibold text-[#111317] tabular-nums">
                    {submittedRef}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSubmittedRef(null);
                  setFullName('');
                  setCompanyName('');
                  setContactInput('');
                }}
                className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-lg border border-[#DCDCD5] bg-white px-4 py-2 text-sm font-medium text-[#111317] transition-colors hover:bg-[#F8F8F6] cursor-pointer"
              >
                Submit Another Fleet Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex h-full flex-col justify-between">
              <div>
                <p className="text-xs font-medium text-[#636874]">
                  Zero-Disruption Yard Rollout
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#111317]">
                  Request a 30-Day Pilot &amp; Claims Audit
                </h3>
                <p className="mt-2 text-sm text-[#4A4E57]">
                  Receive an itemized claims reduction forecast modeled on your current repair
                  ledger and depot schedule.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="audit-full-name"
                      className="block text-xs font-medium text-[#111317]"
                    >
                      Full Name
                    </label>
                    <input
                      id="audit-full-name"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Vikram Deshmukh"
                      className="mt-1.5 w-full rounded-lg border border-[#DCDCD5] bg-[#F8F8F6] px-3.5 py-2.5 text-sm text-[#111317] placeholder:text-[#8A8F99] focus:border-[#111317] focus:bg-white focus:outline-none"
                    />
                    {formErrors.fullName && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#B91C1C]">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{formErrors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="audit-company"
                      className="block text-xs font-medium text-[#111317]"
                    >
                      Fleet / Company Name
                    </label>
                    <input
                      id="audit-company"
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Deccan Radio Cabs"
                      className="mt-1.5 w-full rounded-lg border border-[#DCDCD5] bg-[#F8F8F6] px-3.5 py-2.5 text-sm text-[#111317] placeholder:text-[#8A8F99] focus:border-[#111317] focus:bg-white focus:outline-none"
                    />
                    {formErrors.companyName && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#B91C1C]">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{formErrors.companyName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="audit-contact"
                      className="block text-xs font-medium text-[#111317]"
                    >
                      Work Email or Mobile
                    </label>
                    <input
                      id="audit-contact"
                      type="text"
                      value={contactInput}
                      onChange={(e) => setContactInput(e.target.value)}
                      placeholder="ops@deccancabs.in"
                      className="mt-1.5 w-full rounded-lg border border-[#DCDCD5] bg-[#F8F8F6] px-3.5 py-2.5 text-sm text-[#111317] placeholder:text-[#8A8F99] focus:border-[#111317] focus:bg-white focus:outline-none"
                    />
                    {formErrors.contactInput && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#B91C1C]">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{formErrors.contactInput}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="audit-city"
                      className="block text-xs font-medium text-[#111317]"
                    >
                      Primary Operating City
                    </label>
                    <select
                      id="audit-city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-[#DCDCD5] bg-[#F8F8F6] px-3.5 py-2.5 text-sm text-[#111317] focus:border-[#111317] focus:bg-white focus:outline-none"
                    >
                      <option value="Mumbai">Mumbai Metropolitan</option>
                      <option value="Pune">Pune</option>
                      <option value="Delhi NCR">Delhi NCR</option>
                      <option value="Bengaluru">Bengaluru</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Chennai">Chennai</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-[#E4E4DF] pt-5">
                <span className="font-mono text-xs text-[#636874] tabular-nums">
                  Est. Fleet: {fleetSize.toLocaleString('en-IN')} cabs · {selectedModel.label}
                </span>

                <button
                  type="submit"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#111317] px-5 py-2.5 text-sm font-semibold text-[#F8F8F6] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#242830] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111317] cursor-pointer"
                >
                  Book Fleet Audit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
