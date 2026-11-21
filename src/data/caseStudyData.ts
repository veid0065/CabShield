export type MetricCategory = 'all' | 'claims' | 'uptime' | 'safety';

export interface CaseStudyStat {
  id: string;
  category: Exclude<MetricCategory, 'all'>;
  value: string;
  label: string;
  baseline: string;
  timeframe: string;
  detail: string;
}

export interface LegacyMilestone {
  year: string;
  era: string;
  fleetCount: string;
  headline: string;
  summary: string;
}

export interface CapabilityItem {
  number: string;
  title: string;
  description: string;
  outcome: string;
  span: 'wide' | 'standard';
}

export interface ClaimDenialScenario {
  id: string;
  denialCode: string;
  title: string;
  shortSummary: string;
  impactStat: string;
  turnaroundDelta: string;
  insurerDenialArgument: string;
  withoutOutcome: string;
  shieldCounterProof: string;
  withOutcome: string;
  evidenceArtifacts: { label: string; detail: string }[];
}

export const ASSET_PATHS = {
  heroFleet: '/src/assets/images/hero_cab_fleet_1795274437183.jpg',
  hindustanLegacy: '/src/assets/images/hindustan_cabs_legacy_1795274438130.jpg',
  directorPortrait: '/src/assets/images/testimonial_director_portrait_1795274437220.jpg',
} as const;

export const CLAIM_DENIAL_SCENARIOS: ClaimDenialScenario[] = [
  {
    id: 'disputed-fault',
    denialCode: 'CLAUSE 4B · FAULT DISPUTE',
    title: 'Disputed Roadside Fault & Missing Crash Proof',
    shortSummary: 'Insurers reject claims when neither driver nor witness can prove lane right-of-way.',
    impactStat: '38% of fleet denials',
    turnaroundDelta: '68 days disputed → 9 days settled',
    insurerDenialArgument:
      'Surveyor attributes fault to the commercial cab driver after a third-party motorist alleges sudden lane swerving on a congested arterial road.',
    withoutOutcome: 'Result: Claim repudiated · 100% repair cost borne by taxi company',
    shieldCounterProof:
      'Dual-lens dashcam automatically locks 20 seconds pre-impact and 10 seconds post-impact with GPS lane coordinates and braking telemetry.',
    withOutcome: 'Result: Non-fault verified · Full cashless body-shop settlement approved',
    evidenceArtifacts: [
      { label: 'Locked 30s Dual-Cam Clip', detail: 'Road-facing + cabin view with tamper-evident timestamp' },
      { label: '14-Min Roadside Intimation', detail: 'Auto-filed GPS crash pin & directional vector' },
      { label: 'OBD-II Braking Trace', detail: 'Proves safe speed & defensive deceleration before impact' },
      { label: 'Surveyor-Ready Dossier', detail: 'One-click PDF packet accepted by motor claim desks' },
    ],
  },
  {
    id: 'late-intimation',
    denialCode: 'CLAUSE 1 · LATE FNOL',
    title: 'Delayed First Notice of Loss (FNOL) Rejections',
    shortSummary: 'Night-shift roadside crashes reported 24–72 hours later trigger automatic policy rejection.',
    impactStat: '29% of fleet denials',
    turnaroundDelta: '3.5 hr manual lag → 14 min auto-filing',
    insurerDenialArgument:
      'Insurer denies coverage because the shaken night-shift driver returned to the depot before filing formal notice, citing delayed scene inspection.',
    withoutOutcome: 'Result: Technical repudiation for delayed intimation under policy terms',
    shieldCounterProof:
      'Impact G-force triggers instant automated FNOL alerts to the depot desk and insurer portal within 14 minutes with geo-tagged scene photos.',
    withOutcome: 'Result: Policy intimation clause satisfied · Immediate garage authorization',
    evidenceArtifacts: [
      { label: 'Geo-Tagged Crash Snapshot', detail: 'Captures exact highway milestone & lighting conditions' },
      { label: 'Instant Insurer Webhook', detail: 'Timestamps official First Notice of Loss automatically' },
      { label: 'Recovery Van Dispatch Log', detail: 'Proves immediate towing & zero post-crash driving damage' },
      { label: 'Depot Supervisor Sign-Off', detail: 'Digital chain-of-custody from roadside to service bay' },
    ],
  },
  {
    id: 'driver-compliance',
    denialCode: 'CLAUSE 7 · DRIVER LOGS',
    title: 'Driver Shift, Fatigue & Overspeeding Allegations',
    shortSummary: 'Adjusters void payouts by alleging unverified drivers, shift overruns, or reckless speed.',
    impactStat: '21% of fleet denials',
    turnaroundDelta: 'Zero shift-log gaps across 1,450 cabs',
    insurerDenialArgument:
      'Claim rejected after the insurer questions whether the driver held an active commercial badge or exceeded speed limits prior to the highway collision.',
    withoutOutcome: 'Result: Coverage voided under commercial driver compliance exclusion',
    shieldCounterProof:
      'Every shift begins with driver badge verification tied to the ignition relay and continuous speed-governor compliance logs.',
    withOutcome: 'Result: Driver eligibility & legal speed certified · Payout cleared without hold',
    evidenceArtifacts: [
      { label: 'Verified Driver Badge Log', detail: 'Matches active commercial license to exact shift hours' },
      { label: 'Continuous Speed Curve', detail: 'Signed 1Hz speed trace proving compliance with limits' },
      { label: 'Rest-Interval Audit', detail: 'Confirms driver rested between consecutive 12-hour shifts' },
      { label: 'MACT Legal Ready Pack', detail: 'Structured compliance log for third-party tribunal defense' },
    ],
  },
  {
    id: 'staged-third-party',
    denialCode: 'CLAUSE 9 · STAGED LIABILITY',
    title: 'Inflated Third-Party & Multi-Vehicle Claims',
    shortSummary: 'Minor roadside scrapes escalate into exaggerated injury or panel claims against cab fleets.',
    impactStat: '12% of fleet denials',
    turnaroundDelta: '91% of inflated claims dismissed pre-trial',
    insurerDenialArgument:
      'Third-party claimant submits pre-existing bumper damage and false passenger injury bills, driving up the taxi operator’s renewal deductible.',
    withoutOutcome: 'Result: Reserve locked for months · Commercial fleet premium spiked 28%',
    shieldCounterProof:
      'Low-G impact sensor signature paired with exterior and cabin footage proves minor contact energy and exact vehicle occupancy.',
    withOutcome: 'Result: Exaggerated claim refuted · Fleet No-Claim Bonus preserved',
    evidenceArtifacts: [
      { label: '3-Axis Impact Force Graph', detail: 'Demonstrates collision delta-V and minor contact energy' },
      { label: 'Cabin Occupancy Frame', detail: 'Verifies passenger count & seatbelt state at collision time' },
      { label: 'Pre-Existing Damage Check', detail: 'High-resolution frames show opposing vehicle condition' },
      { label: 'Adjuster Verification Link', detail: 'Read-only encrypted portal for third-party claim desks' },
    ],
  },
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    number: '01.',
    title: 'Automated First-Notice Claims Shield',
    description:
      'Captures calibrated dual-dashcam clips, impact G-force logs, and GPS timestamps within seconds of a roadside crash so insurers cannot deny claims over missing proof or late intimation.',
    outcome: 'Achieves 94% insurer claim approval rate across urban & highway routes',
    span: 'wide',
  },
  {
    number: '02.',
    title: 'Shift-Aware Driver Compliance Logs',
    description:
      'Links verified commercial driving badges, shift handover timestamps, and speed compliance directly to every trip record.',
    outcome: 'Eliminates policy rejections over driver authorization disputes',
    span: 'standard',
  },
  {
    number: '03.',
    title: 'Preventive Bay Maintenance Alerts',
    description:
      'Correlates OBD-II brake pad wear, battery health, and suspension shock signatures against daily mileage to schedule garage bays before mid-trip breakdowns.',
    outcome: 'Eliminates unscheduled roadside towing across metered and airport cabs',
    span: 'standard',
  },
  {
    number: '04.',
    title: '24/7 Priority Roadside & Legal Triage',
    description:
      'Connects stranded drivers directly to regional recovery vans, replacement cab dispatchers, and verified motor-claim counsel across 18 Indian metro corridors.',
    outcome: 'Median 14-minute incident intake from SOS trigger to insurer FNOL',
    span: 'wide',
  },
];

export const HINDUSTAN_CABS_STATS: CaseStudyStat[] = [
  {
    id: 'claim-approval',
    category: 'claims',
    value: '94%',
    label: 'Roadside Crash Claim Approval Rate',
    baseline: 'Up from 66% (34% previously denied by insurers)',
    timeframe: '12-month audited rollout (FY 2025–26)',
    detail:
      'Timestamped dual-camera crash packets eliminated insurer repudiations over disputed fault and delayed intimation.',
  },
  {
    id: 'claims-ratio',
    category: 'claims',
    value: '-42%',
    label: 'Collision & Third-Party Loss Ratio',
    baseline: 'Down from 18.4% annual fleet loss rate',
    timeframe: 'Audited across 1,450 active cabs',
    detail:
      '91% of inflated third-party roadside claims were dismissed before MACT tribunal escalation.',
  },
  {
    id: 'dispatch-uptime',
    category: 'uptime',
    value: '99.4%',
    label: 'Active Fleet Dispatch Availability',
    baseline: 'Up from 91.8% pre-integration baseline',
    timeframe: 'Mumbai, Pune & Delhi NCR corridors',
    detail:
      'Faster cashless insurer garage approvals and off-peak preventive servicing cut vehicle body-shop idle time.',
  },
  {
    id: 'annual-savings',
    category: 'safety',
    value: '₹2.8 Cr',
    label: 'Annual Denied-Claim & Downtime Savings',
    baseline: 'Verified against FY 2024–25 repair ledger',
    timeframe: '14-min average roadside crash triage',
    detail:
      'Recovered payouts from previously denied roadside crashes plus lower commercial fleet insurance renewal rates.',
  },
];

export const HINDUSTAN_LEGACY_MILESTONES: LegacyMilestone[] = [
  {
    year: '1996',
    era: 'South Mumbai Founding',
    fleetCount: '40 Cabs',
    headline: 'Premier Padmini metered operations at Colaba & Nariman Point',
    summary:
      'Founded with 40 black-and-yellow metered taxis serving corporate commuters, banking shifts, and dockyard transfers with paper logbooks and manual garage inspections.',
  },
  {
    year: '2006',
    era: 'Airport & Radio Expansion',
    fleetCount: '380 Cabs',
    headline: 'Prepaid airport terminal bays and VHF radio dispatch network',
    summary:
      'Expanded into 24-hour Mumbai airport queues and Pune intercity corridors, introducing dedicated night-shift supervisors and centralized maintenance yards.',
  },
  {
    year: '2016',
    era: 'Claims Denial Bottleneck',
    fleetCount: '920 Cabs',
    headline: 'Rising fleet scale met with 34% insurer roadside claim denials',
    summary:
      'Despite adding basic GPS trackers across 920 vehicles, insurance companies rejected over a third of roadside crash claims due to missing video proof and delayed night-shift filings.',
  },
  {
    year: '2026',
    era: 'CAB SHIELD Integration',
    fleetCount: '1,450 Cabs',
    headline: '30-year heritage protected by automated roadside crash evidence',
    summary:
      'Deployed CAB SHIELD across all 1,450 cabs in 90 days—lifting roadside crash claim approvals from 66% to 94% and recovering ₹2.8 Cr annually.',
  },
];

export const HINDUSTAN_TESTIMONIAL = {
  quote:
    'For nearly thirty years, our biggest silent bleed was insurance companies denying legitimate roadside crash claims against our cabs because night-shift drivers lacked video proof or missed filing windows. Within ninety days of deploying CAB SHIELD across 1,450 vehicles, our claim approval rate jumped from 66% to 94%, triage dropped to fourteen minutes, and we saved ₹2.8 Crore in one fiscal year.',
  name: 'Rajeshwar Kulkarni',
  role: 'Director of Fleet Operations',
  organization: 'Hindustan Cabs',
  tenure: '22 years overseeing Mumbai & Pune depots',
  beforeAfter: 'Before: 34% claims denied · After: 94% approved & 14 min roadside triage',
};
