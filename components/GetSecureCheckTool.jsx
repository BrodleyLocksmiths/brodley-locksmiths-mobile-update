'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { AlertTriangle, ArrowRight, CheckCircle2, Home, KeyRound, Mail, Phone, RotateCcw, ShieldCheck } from 'lucide-react';
import { contact } from '@/lib/siteData';

const questions = [
  {
    id: 'moved',
    question: 'Have you moved into the property, taken on a tenancy or had a tenant/staff change recently?',
    detail: 'Unknown keys in circulation are one of the simplest security risks to fix.',
    points: 2,
    services: ['/services/lock-changes', '/services/move-in-lock-change-service']
  },
  {
    id: 'lostkeys',
    question: 'Have any keys been lost, stolen, snapped or not returned?',
    detail: 'Lost or unreturned keys can create an immediate access and security concern.',
    points: 3,
    services: ['/services/lock-changes', '/services/euro-cylinder-replacement']
  },
  {
    id: 'harddoor',
    question: 'Is any uPVC, composite or timber door hard to lock, stiff to close or needing to be lifted?',
    detail: 'This can point to alignment problems, worn keeps or a failing multipoint mechanism.',
    points: 2,
    services: ['/services/upvc-door-repairs-tendring', '/services/multipoint-lock-repairs']
  },
  {
    id: 'handle',
    question: 'Does any handle feel floppy, loose, very stiff or different from normal?',
    detail: 'A handle problem can be an early warning sign before a door lock or mechanism fails completely.',
    points: 2,
    services: ['/services/door-repairs', '/services/upvc-door-mechanism-replacement']
  },
  {
    id: 'antisnap',
    question: 'Are you unsure whether your front or back door cylinders are anti-snap or security-rated?',
    detail: 'Older cylinders can be an easy upgrade point, especially on uPVC and composite doors.',
    points: 2,
    services: ['/services/anti-snap-lock-upgrades', '/services/lock-upgrades']
  },
  {
    id: 'windows',
    question: 'Are ground-floor windows, patio doors or accessible side windows missing reliable locks?',
    detail: 'Accessible windows and patio doors are often overlooked in basic home security checks.',
    points: 1,
    services: ['/services/window-lock-repairs', '/services/security-surveys']
  },
  {
    id: 'outbuildings',
    question: 'Are sheds, garages, gates, side access routes or outbuildings poorly secured?',
    detail: 'Tools, bikes, storage areas and side entrances often need simple but effective security improvements.',
    points: 1,
    services: ['/services/garage-shed-gate-locks', '/services/security-surveys']
  },
  {
    id: 'keysafe',
    question: 'Do carers, family members, guests or trusted trades need safe access?',
    detail: 'A correctly fitted key safe can support care access, elderly relatives, holiday lets and managed properties.',
    points: 1,
    services: ['/services/key-safes', '/services/locksmith-for-care-access-key-safes']
  },
  {
    id: 'rental',
    question: 'Is the property a rental, holiday let, guest house, caravan, flat block or small business?',
    detail: 'Shared access, guest turnover and key control make these properties worth checking more carefully.',
    points: 1,
    services: ['/services/landlord-locksmith-services', '/services/holiday-let-guest-house-security', '/services/caravan-holiday-park-locksmith-services', '/services/locksmith-for-small-businesses']
  },
  {
    id: 'securityworry',
    question: 'Do you have any general security concern, recent incident or area of the property you are unsure about?',
    detail: 'A security survey can help prioritise the most useful improvements rather than guessing.',
    points: 2,
    services: ['/services/security-surveys', '/example-security-survey-report']
  }
];

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
  '/services/landlord-locksmith-services': 'Landlord Locksmith Services',
  '/services/holiday-let-guest-house-security': 'Holiday Let / Guest House Security',
  '/services/caravan-holiday-park-locksmith-services': 'Caravan & Holiday Park Locksmith Services',
  '/services/locksmith-for-small-businesses': 'Small Business Locksmith Services',
  '/example-security-survey-report': 'Example Security Survey Report'
};

function resultForScore(score) {
  if (score >= 8) {
    return {
      level: 'High priority security check recommended',
      tone: 'high',
      icon: AlertTriangle,
      text: 'Your answers suggest several areas that may need attention. A practical Brodley Locksmiths security survey can help prioritise locks, doors, windows, key control and access points before a small problem becomes a bigger one.'
    };
  }
  if (score >= 4) {
    return {
      level: 'Several improvements worth considering',
      tone: 'medium',
      icon: ShieldCheck,
      text: 'Your answers show a few possible weak points. A lock change, door adjustment, key safe, anti-snap upgrade or targeted security check could help you Get Secure without unnecessary work.'
    };
  }
  return {
    level: 'Basic security check worthwhile',
    tone: 'low',
    icon: CheckCircle2,
    text: 'Your answers do not suggest major concerns, but a quick lock, door and window check can still be useful, especially after moving home, losing keys or changing tenants.'
  };
}

export default function GetSecureCheckTool() {
  const [answers, setAnswers] = useState({});
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('Home');

  const selectedQuestions = questions.filter((q) => answers[q.id]);
  const score = selectedQuestions.reduce((total, q) => total + q.points, 0);
  const result = resultForScore(score);
  const ResultIcon = result.icon;

  const recommendedServices = useMemo(() => {
    const paths = [];
    selectedQuestions.forEach((q) => q.services.forEach((service) => paths.push(service)));
    if (!paths.includes('/services/security-surveys')) paths.push('/services/security-surveys');
    return [...new Set(paths)].slice(0, 8);
  }, [selectedQuestions]);

  const emailBody = encodeURIComponent([
    'Hello Brodley Locksmiths,',
    '',
    'I completed the Get Secure Property Check and would like some advice.',
    '',
    `Property type: ${propertyType}`,
    `Location: ${location || 'Not provided'}`,
    `Result: ${result.level}`,
    `Security score: ${score}`,
    '',
    'Areas I selected:',
    ...(selectedQuestions.length ? selectedQuestions.map((q) => `- ${q.question}`) : ['- No specific concerns selected']),
    '',
    'Please contact me about the best next step.',
    ''
  ].join('\n'));

  const mailHref = `${contact.emailHref}?subject=${encodeURIComponent('Get Secure Property Check')}&body=${emailBody}`;

  function toggle(id) {
    setAnswers((current) => ({ ...current, [id]: !current[id] }));
  }

  function reset() {
    setAnswers({});
    setLocation('');
    setPropertyType('Home');
  }

  return (
    <div className="security-check-wrap">
      <section className="security-check-intro">
        <div className="info-box">
          <Home size={34} />
          <h2>Start your Get Secure check</h2>
          <p>Answer the quick questions below. The tool will highlight common lock, door, window and access concerns, then point you towards the most relevant Brodley Locksmiths services.</p>
          <div className="form-grid compact-form-grid">
            <label>
              Property type
              <select value={propertyType} onChange={(event) => setPropertyType(event.target.value)}>
                <option>Home</option>
                <option>Rental property</option>
                <option>Holiday let</option>
                <option>Guest house</option>
                <option>Static caravan / holiday park</option>
                <option>Small business</option>
                <option>Care access / elderly relative</option>
              </select>
            </label>
            <label>
              Town or village
              <input value={location} onChange={(event) => setLocation(event.target.value)} placeholder="e.g. Clacton, Harwich, Frinton, St Osyth" />
            </label>
          </div>
        </div>
        <div className={`security-score-card ${result.tone}`}>
          <ResultIcon size={38} />
          <p className="eyebrow gold">Your result</p>
          <h2>{result.level}</h2>
          <p>{result.text}</p>
          <div className="security-score-number">{score}</div>
          <span>Security concern score</span>
        </div>
      </section>

      <section className="security-question-list">
        {questions.map((item) => (
          <button key={item.id} type="button" className={`security-question ${answers[item.id] ? 'selected' : ''}`} onClick={() => toggle(item.id)}>
            <span className="security-question-check">{answers[item.id] ? '✓' : '+'}</span>
            <span>
              <strong>{item.question}</strong>
              <small>{item.detail}</small>
            </span>
          </button>
        ))}
      </section>

      <section className="security-result-panel">
        <div>
          <p className="eyebrow red">Get Secure</p>
          <h2>Recommended next steps</h2>
          <p>Based on your answers, these pages may help you understand the most useful next step. For direct advice, call Brodley Locksmiths or send your check results by email.</p>
          <div className="security-service-links">
            {recommendedServices.map((href) => (
              <Link key={href} href={href}>{serviceLabels[href] || 'View service'} <ArrowRight size={15} /></Link>
            ))}
          </div>
        </div>
        <div className="security-action-card">
          <KeyRound size={34} />
          <h3>Turn this check into practical advice.</h3>
          <p>Brodley Locksmiths can help with lock changes, uPVC door repairs, anti-snap upgrades, key safes, window locks, garage locks and property security surveys across Tendring.</p>
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
