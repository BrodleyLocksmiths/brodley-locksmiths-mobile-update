'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  AlertTriangle,
  ArrowRight,
  Award,
  CheckCircle2,
  ClipboardCheck,
  Home,
  KeyRound,
  Mail,
  Phone,
  RotateCcw,
  ShieldCheck,
  Wrench
} from 'lucide-react';
import { contact } from '@/lib/siteData';

const propertyTypes = [
  {
    id: 'home',
    label: 'Home / homeowner',
    intro: 'A simple security and reliability check for everyday home locks, doors, windows, keys and access points.',
    modifier: 0
  },
  {
    id: 'landlord',
    label: 'Landlord / rental property',
    intro: 'Focuses on tenant changes, key control, door reliability, key safes and rental property security.',
    modifier: 2
  },
  {
    id: 'holiday-let',
    label: 'Holiday let',
    intro: 'Checks guest turnover, key safes, door wear, access control and security between bookings.',
    modifier: 3
  },
  {
    id: 'guest-house',
    label: 'Guest house / accommodation',
    intro: 'Looks at higher-use doors, guest access, staff access, key control and common lock wear.',
    modifier: 3
  },
  {
    id: 'caravan',
    label: 'Static caravan / holiday park',
    intro: 'Covers caravan door locks, seasonal handovers, lost keys, holiday park access and key safe options.',
    modifier: 3
  },
  {
    id: 'business',
    label: 'Small business',
    intro: 'Checks front doors, rear access, staff keys, storage areas, outbuildings and everyday lock reliability.',
    modifier: 3
  },
  {
    id: 'care',
    label: 'Elderly relative / care access',
    intro: 'Focuses on safe access, key safes, door reliability and reducing the risk of someone being locked in or out.',
    modifier: 2
  }
];

const areaOptions = [
  { id: 'clacton', label: 'Clacton / Great Clacton / Holland-on-Sea / Jaywick', modifier: 2, note: 'Busy coastal and residential areas often benefit from good key control, uPVC door checks, anti-snap upgrades and holiday/rental access planning.' },
  { id: 'frinton-walton', label: 'Frinton / Walton / Kirby / Great Holland', modifier: 2, note: 'Coastal homes, holiday properties and well-used uPVC or composite doors can benefit from lock upgrades, door adjustments and key safe checks.' },
  { id: 'harwich-dovercourt', label: 'Harwich / Dovercourt / Parkeston / Oakley', modifier: 2, note: 'Older doors, rental properties, coastal weather and small business premises make door reliability and lock suitability worth checking.' },
  { id: 'manningtree', label: 'Manningtree / Lawford / Mistley / Bradfield', modifier: 1, note: 'Homes, village properties, garages, sheds, side access and outbuildings often benefit from a practical all-round security review.' },
  { id: 'brightlingsea', label: 'Brightlingsea / Alresford / Thorrington', modifier: 2, note: 'Coastal properties, holiday accommodation and everyday residential doors may need attention to alignment, cylinders and window security.' },
  { id: 'villages', label: 'Tendring villages / rural property', modifier: 1, note: 'Rural and village properties should consider outbuildings, garages, gates, side access, spare keys and practical emergency access.' },
  { id: 'unsure', label: 'Not sure / nearby area', modifier: 1, note: 'A basic check of doors, locks, windows, key control and access points is still a useful starting point.' }
];

const coreQuestions = [
  {
    id: 'keys',
    group: 'Keys & access control',
    question: 'How confident are you about who has keys to the property?',
    options: [
      { label: 'Confident — keys are controlled and locks were changed when needed', positive: 4, good: 'Good key control is one of the strongest security habits you can have.' },
      { label: 'Unsure — there may be old spare keys with previous owners, tenants, staff or family', security: 3, services: ['/services/lock-changes', '/services/move-in-lock-change-service'], concern: 'Unknown keys can leave you unsure who still has access.' },
      { label: 'Concerned — keys have been lost, stolen, snapped or not returned', security: 5, services: ['/services/lock-changes', '/services/euro-cylinder-replacement'], concern: 'Lost, stolen or unreturned keys are a clear reason to consider a lock change.' }
    ]
  },
  {
    id: 'door-operation',
    group: 'Door condition',
    question: 'How do your main doors feel when locking and unlocking?',
    options: [
      { label: 'They lock smoothly without lifting, forcing or pulling the door', positive: 4, good: 'Smooth locking is a good sign that the door and locking points are working together.' },
      { label: 'One door is slightly stiff, catches or sometimes needs lifting', reliability: 3, services: ['/services/upvc-door-repairs-tendring', '/services/door-repairs'], concern: 'A stiff or dropped door can put strain on the lock and multipoint mechanism.' },
      { label: 'A door often jams, needs forcing or feels close to failing', reliability: 6, security: 1, services: ['/services/multipoint-lock-repairs', '/services/upvc-door-mechanism-replacement'], concern: 'Forcing a stiff door can turn a repairable issue into a failed mechanism or lockout.' }
    ]
  },
  {
    id: 'cylinders',
    group: 'Lock security',
    question: 'Do you know whether your main door cylinders are modern anti-snap/security-rated locks?',
    options: [
      { label: 'Yes — the main cylinders have been upgraded or checked recently', positive: 4, good: 'Modern, suitable cylinders are a positive security step, especially on uPVC and composite doors.' },
      { label: 'Not sure — they may be old or standard cylinders', security: 3, services: ['/services/anti-snap-lock-upgrades', '/services/lock-upgrades'], concern: 'Older or unknown cylinders are worth checking, particularly on main entrance doors.' },
      { label: 'No — they look old, stick out, feel worn or have never been checked', security: 5, services: ['/services/anti-snap-lock-upgrades', '/services/euro-cylinder-replacement'], concern: 'Worn or unsuitable cylinders can be a simple but important upgrade point.' }
    ]
  },
  {
    id: 'windows-patio',
    group: 'Windows & patio doors',
    question: 'Are accessible windows and patio doors secure and working properly?',
    options: [
      { label: 'Yes — ground-floor windows and patio doors have working locks', positive: 3, good: 'Working window and patio door locks help reduce easy access points.' },
      { label: 'Some are working, but a few are old, missing keys or not checked', security: 2, services: ['/services/window-lock-repairs', '/services/security-surveys'], concern: 'Accessible windows and patio doors are often forgotten until there is a problem.' },
      { label: 'No — there are accessible windows or patio doors with poor or unreliable locks', security: 4, reliability: 1, services: ['/services/window-lock-repairs', '/services/door-repairs'], concern: 'Unreliable window or patio locks can create an avoidable weak point.' }
    ]
  },
  {
    id: 'outbuildings',
    group: 'Outside access',
    question: 'How secure are sheds, garages, gates and side access routes?',
    options: [
      { label: 'Well secured — useful items, tools and side access are protected', positive: 3, good: 'Secured outbuildings and side access make the whole property harder to target.' },
      { label: 'Basic — there are locks, but they are old or not very confidence-inspiring', security: 2, services: ['/services/garage-shed-gate-locks', '/services/security-surveys'], concern: 'Older shed, garage and gate locks may not match the value of what they protect.' },
      { label: 'Weak — tools, bikes, gates or outbuildings are easy to access', security: 4, services: ['/services/garage-shed-gate-locks', '/services/security-surveys'], concern: 'Weak side access and outbuildings can increase risk around the whole property.' }
    ]
  },
  {
    id: 'keysafe-care',
    group: 'Key safes & safe access',
    question: 'Do carers, family, trusted trades, staff or guests need safe access?',
    options: [
      { label: 'No shared access is needed and spare keys are not hidden outside', positive: 3, good: 'Not hiding spare keys outside is a very good security habit.' },
      { label: 'Yes, but access is handled through a fitted key safe or controlled process', positive: 3, security: 1, services: ['/services/key-safes'], good: 'A properly fitted key safe can be much better than leaving loose spare keys around.' },
      { label: 'Yes, and keys are sometimes left in risky places or access feels awkward', security: 4, services: ['/services/key-safes', '/services/locksmith-for-care-access-key-safes', '/services/security-for-elderly-relatives'], concern: 'Hidden spare keys and unclear access arrangements can create avoidable risks.' }
    ]
  }
];

const tailoredQuestions = {
  home: [
    {
      id: 'home-move',
      group: 'Homeowner check',
      question: 'Have you moved home, had building work, or given spare keys to people who no longer need them?',
      options: [
        { label: 'No — key access is known and up to date', positive: 3, good: 'Keeping track of spare keys is a strong habit for long-term home security.' },
        { label: 'Yes / not sure — key access could do with reviewing', security: 3, services: ['/services/lock-changes', '/services/move-in-lock-change-service'], concern: 'A lock change can quickly restore control when key history is unclear.' }
      ]
    }
  ],
  landlord: [
    {
      id: 'landlord-turnover',
      group: 'Rental property',
      question: 'How do you handle locks and keys between tenants or property handovers?',
      options: [
        { label: 'Locks/keys are reviewed at each changeover', positive: 4, good: 'Reviewing key control at tenant changeover is a strong landlord practice.' },
        { label: 'Keys are returned, but locks are not always reviewed', security: 3, services: ['/services/landlord-locksmith-services', '/services/locksmith-for-landlords'], concern: 'Returned keys do not always guarantee that no copies exist.' },
        { label: 'There has been a recent tenant/key issue', security: 5, services: ['/services/lock-changes', '/services/landlord-locksmith-services'], concern: 'Tenant/key disputes or missing keys are a strong reason to consider a lock change.' }
      ]
    }
  ],
  'holiday-let': [
    {
      id: 'holiday-turnover',
      group: 'Holiday let access',
      question: 'How is guest access managed between bookings?',
      options: [
        { label: 'Access is controlled, checked and kept simple for guests', positive: 4, good: 'Clear guest access reduces stress for both owners and visitors.' },
        { label: 'It works, but keys/key safes/door locks are not reviewed often', security: 2, reliability: 2, services: ['/services/holiday-let-guest-house-security', '/services/key-safes'], concern: 'Guest turnover can quickly expose tired locks, stiff handles and awkward access.' },
        { label: 'There have been guest access problems, lost keys or lock issues', security: 4, reliability: 3, services: ['/services/holiday-let-guest-house-security', '/services/lock-changes', '/services/key-safes'], concern: 'Guest access problems can affect reviews, bookings and property security.' }
      ]
    }
  ],
  'guest-house': [
    {
      id: 'guest-staff',
      group: 'Guest house access',
      question: 'Are guest, staff and back-of-house keys controlled and easy to manage?',
      options: [
        { label: 'Yes — access is clear, controlled and reviewed', positive: 4, good: 'Good key control is especially valuable in guest accommodation.' },
        { label: 'Mostly, but some locks or access points feel dated', security: 2, reliability: 2, services: ['/services/locksmith-for-guest-houses', '/services/security-surveys'], concern: 'High-use accommodation doors and locks can wear faster than a normal home.' },
        { label: 'No — there are guest/staff key concerns or worn locks', security: 4, reliability: 3, services: ['/services/locksmith-for-guest-houses', '/services/lock-changes'], concern: 'Unclear guest or staff access can create both security and reliability problems.' }
      ]
    }
  ],
  caravan: [
    {
      id: 'caravan-seasonal',
      group: 'Caravan / holiday park',
      question: 'How confident are you in the caravan door lock, key control and seasonal handover setup?',
      options: [
        { label: 'Confident — the lock and access setup are working well', positive: 4, good: 'A simple, reliable access setup is ideal for static caravans and holiday park use.' },
        { label: 'It works, but the lock, keys or door feel old or awkward', security: 2, reliability: 3, services: ['/services/caravan-holiday-park-locksmith-services'], concern: 'Caravan locks and doors can become unreliable with age, weather and seasonal use.' },
        { label: 'There are lost keys, guest access issues or a lock that feels unreliable', security: 4, reliability: 4, services: ['/services/caravan-holiday-park-locksmith-services', '/services/key-safes'], concern: 'Caravan access problems can quickly become urgent during holiday stays or changeovers.' }
      ]
    }
  ],
  business: [
    {
      id: 'business-access',
      group: 'Small business access',
      question: 'Are staff keys, rear doors, storage areas and entrance locks well controlled?',
      options: [
        { label: 'Yes — access is controlled and locks are working well', positive: 4, good: 'Controlled staff access and reliable locks are strong foundations for business security.' },
        { label: 'Some areas are fine, but rear doors/storage/key control need checking', security: 3, reliability: 1, services: ['/services/locksmith-for-small-businesses', '/services/security-surveys'], concern: 'Rear doors, storage rooms and staff key changes are common business security weak points.' },
        { label: 'There has been a staff change, lost key or business security concern', security: 5, services: ['/services/locksmith-for-small-businesses', '/services/lock-changes'], concern: 'Staff changes or missing keys are a good time to review locks and access.' }
      ]
    }
  ],
  care: [
    {
      id: 'care-reliability',
      group: 'Care access',
      question: 'Could the person safely get help if a door lock failed, a key snapped or access was needed quickly?',
      options: [
        { label: 'Yes — access is planned and the main door works smoothly', positive: 4, good: 'Reliable doors and planned access are very important for care and elderly-relative situations.' },
        { label: 'Mostly, but the door/key safe/access setup could be improved', reliability: 3, security: 2, services: ['/services/security-for-elderly-relatives', '/services/key-safes'], concern: 'Small door or access issues can become more serious when care access is involved.' },
        { label: 'No — there is a real worry about being locked out/in or emergency access', reliability: 6, security: 2, services: ['/services/security-for-elderly-relatives', '/services/locksmith-for-care-access-key-safes', '/services/upvc-door-repairs-tendring'], concern: 'This should be treated as a priority because access and reliability matter as much as security.' }
      ]
    }
  ]
};

const serviceLabels = {
  '/services/lock-changes': 'Lock Changes',
  '/services/move-in-lock-change-service': 'Move-In Lock Change Service',
  '/services/euro-cylinder-replacement': 'Euro Cylinder Replacement',
  '/services/upvc-door-repairs-tendring': 'uPVC Door Repairs Tendring',
  '/services/multipoint-lock-repairs': 'Multipoint Lock Repairs',
  '/services/door-repairs': 'Door Repairs',
  '/services/upvc-door-mechanism-replacement': 'uPVC Door Mechanism Replacement',
  '/services/anti-snap-lock-upgrades': 'Anti-Snap Lock Upgrades',
  '/services/lock-upgrades': 'Lock Upgrades',
  '/services/window-lock-repairs': 'Window Lock Repairs',
  '/services/security-surveys': 'Security Surveys',
  '/services/garage-shed-gate-locks': 'Garage, Shed & Gate Locks',
  '/services/key-safes': 'Key Safes',
  '/services/locksmith-for-care-access-key-safes': 'Care Access / Key Safes',
  '/services/security-for-elderly-relatives': 'Security for Elderly Relatives',
  '/services/landlord-locksmith-services': 'Landlord Locksmith Services',
  '/services/locksmith-for-landlords': 'Locksmith for Landlords',
  '/services/holiday-let-guest-house-security': 'Holiday Let / Guest House Security',
  '/services/locksmith-for-guest-houses': 'Locksmith for Guest Houses',
  '/services/caravan-holiday-park-locksmith-services': 'Caravan & Holiday Park Locksmith Services',
  '/services/locksmith-for-small-businesses': 'Small Business Locksmith Services',
  '/example-security-survey-report': 'Example Security Survey Report'
};

function levelFor(score, type) {
  const high = type === 'reliability' ? 10 : 11;
  const medium = type === 'reliability' ? 5 : 6;
  if (score >= high) return { label: 'High priority', tone: 'high' };
  if (score >= medium) return { label: 'Worth checking', tone: 'medium' };
  return { label: 'Looks reasonable', tone: 'low' };
}

function explainSecurity(score) {
  if (score >= 11) return 'Your answers suggest several security and access-control concerns. A Brodley Locksmiths security survey or targeted lock upgrade could help you prioritise what matters most.';
  if (score >= 6) return 'There are a few areas worth reviewing. A lock change, anti-snap upgrade, key safe or security survey may help you Get Secure without unnecessary work.';
  return 'Your security answers look fairly positive. A quick check is still useful if anything changes, especially after moving home, tenant changes or lost keys.';
}

function explainReliability(score) {
  if (score >= 10) return 'Your answers suggest a higher risk of being locked out, locked in or having a door mechanism fail. Stiff doors, loose handles and failing multipoint locks are best checked early.';
  if (score >= 5) return 'There are early warning signs that a door, handle, cylinder or mechanism may need attention. A repair or adjustment now can prevent a more stressful failure later.';
  return 'Your door and lock reliability answers look positive. Keep an eye on any new stiffness, grinding, lifting or handle movement.';
}

export default function GetSecureCheckTool() {
  const [answers, setAnswers] = useState({});
  const [areaId, setAreaId] = useState('unsure');
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('home');

  const property = propertyTypes.find((item) => item.id === propertyType) || propertyTypes[0];
  const area = areaOptions.find((item) => item.id === areaId) || areaOptions[areaOptions.length - 1];
  const visibleQuestions = [...coreQuestions, ...(tailoredQuestions[propertyType] || [])];
  const answeredOptions = visibleQuestions.map((q) => ({ question: q, option: answers[q.id] })).filter((item) => item.option);

  const totals = useMemo(() => {
    const base = {
      security: property.modifier + area.modifier,
      reliability: propertyType === 'care' ? 1 : 0,
      positive: 0,
      services: ['/services/security-surveys'],
      good: [],
      concerns: []
    };
    answeredOptions.forEach(({ question, option }) => {
      base.security += option.security || 0;
      base.reliability += option.reliability || 0;
      base.positive += option.positive || 0;
      if (option.good) base.good.push(option.good);
      if (option.concern) base.concerns.push(option.concern);
      (option.services || []).forEach((service) => base.services.push(service));
    });
    if (base.reliability >= 5 && !base.services.includes('/services/upvc-door-repairs-tendring')) base.services.push('/services/upvc-door-repairs-tendring');
    if (base.security >= 6 && !base.services.includes('/services/security-surveys')) base.services.push('/services/security-surveys');
    return { ...base, services: [...new Set(base.services)].slice(0, 9) };
  }, [answeredOptions, area.modifier, property.modifier, propertyType]);

  const securityLevel = levelFor(totals.security, 'security');
  const reliabilityLevel = levelFor(totals.reliability, 'reliability');
  const positiveLevel = totals.positive >= 14 ? 'Strong habits' : totals.positive >= 8 ? 'Good habits' : 'Building picture';

  const emailBody = encodeURIComponent([
    'Hello Brodley Locksmiths,',
    '',
    'I completed the Get Secure Property Check and would like some advice.',
    '',
    `Property type: ${property.label}`,
    `Area selected: ${area.label}`,
    `Town/village entered: ${location || 'Not provided'}`,
    `Security risk result: ${securityLevel.label} (${totals.security})`,
    `Door and lock reliability result: ${reliabilityLevel.label} (${totals.reliability})`,
    `Positive security habits: ${positiveLevel} (${totals.positive})`,
    '',
    'Answers:',
    ...(answeredOptions.length ? answeredOptions.map(({ question, option }) => `- ${question.question}: ${option.label}`) : ['- No questions answered yet']),
    '',
    'Suggested pages:',
    ...totals.services.map((href) => `- ${serviceLabels[href] || href}`),
    '',
    'Please contact me about the best next step.',
    ''
  ].join('\n'));

  const mailHref = `${contact.emailHref}?subject=${encodeURIComponent('Get Secure Property Check Results')}&body=${emailBody}`;

  function setAnswer(questionId, option) {
    setAnswers((current) => ({ ...current, [questionId]: option }));
  }

  function reset() {
    setAnswers({});
    setLocation('');
    setPropertyType('home');
    setAreaId('unsure');
  }

  return (
    <div className="security-check-wrap advanced-check-wrap">
      <section className="security-check-intro advanced-check-intro">
        <div className="info-box advanced-start-box">
          <Home size={34} />
          <p className="eyebrow gold">Start here</p>
          <h2>Choose your property type</h2>
          <p>{property.intro}</p>
          <div className="form-grid compact-form-grid">
            <label>
              Property type
              <select value={propertyType} onChange={(event) => { setPropertyType(event.target.value); setAnswers({}); }}>
                {propertyTypes.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}
              </select>
            </label>
            <label>
              Tendring area
              <select value={areaId} onChange={(event) => setAreaId(event.target.value)}>
                {areaOptions.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}
              </select>
            </label>
            <label className="full-field">
              Town, village or notes
              <input value={location} onChange={(event) => setLocation(event.target.value)} placeholder="e.g. Clacton, Harwich, Frinton, caravan park, flat block" />
            </label>
          </div>
          <div className="area-note-card">
            <MapNote area={area} />
          </div>
        </div>

        <div className="score-stack">
          <ScoreCard icon={ShieldCheck} title="Security risk" level={securityLevel.label} tone={securityLevel.tone} score={totals.security} text={explainSecurity(totals.security)} />
          <ScoreCard icon={Wrench} title="Door & lock reliability" level={reliabilityLevel.label} tone={reliabilityLevel.tone} score={totals.reliability} text={explainReliability(totals.reliability)} />
          <ScoreCard icon={Award} title="Positive habits" level={positiveLevel} tone="positive" score={totals.positive} text="This score recognises the good security habits you already have, so the check stays fair and useful rather than only looking for problems." />
        </div>
      </section>

      <section className="advanced-question-list" aria-label="Get Secure questions">
        {visibleQuestions.map((item, index) => (
          <article className="advanced-question" key={item.id}>
            <div className="question-heading">
              <span>{index + 1}</span>
              <div>
                <p className="eyebrow red">{item.group}</p>
                <h2>{item.question}</h2>
              </div>
            </div>
            <div className="choice-grid">
              {item.options.map((option) => {
                const selected = answers[item.id]?.label === option.label;
                return (
                  <button type="button" key={option.label} className={`choice-card ${selected ? 'selected' : ''} ${option.positive && !option.security && !option.reliability ? 'positive-choice' : ''}`} onClick={() => setAnswer(item.id, option)}>
                    <span>{selected ? '✓' : '+'}</span>
                    <strong>{option.label}</strong>
                    {option.good && <small>{option.good}</small>}
                    {option.concern && <small>{option.concern}</small>}
                  </button>
                );
              })}
            </div>
          </article>
        ))}
      </section>

      <section className="security-result-panel advanced-result-panel">
        <div>
          <p className="eyebrow red">Your Get Secure summary</p>
          <h2>What your answers suggest</h2>
          <p>The check separates security risk from door and lock reliability risk. That means it can highlight burglary/key-control concerns as well as the risk of being locked out, locked in or left with a failed uPVC or composite door mechanism.</p>
          <div className="summary-grid">
            <SummaryBox title="Things you are doing well" items={totals.good.length ? totals.good : ['Answer a few questions to see positive habits recognised here.']} positive />
            <SummaryBox title="Areas worth checking" items={totals.concerns.length ? totals.concerns : ['No major concerns selected yet. Keep answering to build a fuller picture.']} />
          </div>
          <div className="security-service-links">
            {totals.services.map((href) => (
              <Link key={href} href={href}>{serviceLabels[href] || 'View service'} <ArrowRight size={15} /></Link>
            ))}
          </div>
        </div>
        <div className="security-action-card advanced-action-card">
          <KeyRound size={34} />
          <h3>Ready to Get Secure?</h3>
          <p>Brodley Locksmiths can turn your check results into practical advice for lock changes, anti-snap upgrades, uPVC door repairs, key safes, garage locks, window locks and security surveys across Tendring.</p>
          <div className="button-row">
            <a href={contact.phoneHref} className="btn btn-red"><Phone size={18} /> Call {contact.phoneDisplay}</a>
            <a href={mailHref} className="btn btn-outline"><Mail size={18} /> Email my results</a>
          </div>
          <button type="button" className="text-link reset-button" onClick={reset}><RotateCcw size={16} /> Reset check</button>
        </div>
      </section>
    </div>
  );
}

function MapNote({ area }) {
  return (
    <>
      <ClipboardCheck size={24} />
      <div>
        <strong>Local security context</strong>
        <p>{area.note}</p>
      </div>
    </>
  );
}

function ScoreCard({ icon: Icon, title, level, tone, score, text }) {
  return (
    <div className={`security-score-card compact-score-card ${tone}`}>
      <Icon size={30} />
      <div>
        <p className="eyebrow gold">{title}</p>
        <h2>{level}</h2>
        <p>{text}</p>
      </div>
      <div className="security-score-number">{score}</div>
    </div>
  );
}

function SummaryBox({ title, items, positive = false }) {
  return (
    <div className={`summary-box ${positive ? 'positive-summary' : ''}`}>
      <h3>{title}</h3>
      <ul>
        {items.slice(0, 5).map((item) => <li key={item}><CheckCircle2 size={17} /> {item}</li>)}
      </ul>
    </div>
  );
}
