'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Copy,
  FileText,
  Home,
  KeyRound,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  RotateCcw,
  ShieldCheck,
  Send,
  Wrench
} from 'lucide-react';
import { contact } from '@/lib/siteData';

const propertyTypes = [
  {
    id: 'home',
    label: 'Home / homeowner',
    intro: 'A practical check for locks, doors, windows, keys, outbuildings and everyday home security.',
    starter: 'We will look at home access, lock condition, door reliability, window security and common weak points around a typical Tendring property.',
  },
  {
    id: 'landlord',
    label: 'Landlord / rental property',
    intro: 'A rental-focused check for tenant changes, key control, door reliability, key safes and maintenance warning signs.',
    starter: 'Rental properties need strong key control and doors that tenants can lock easily without forcing handles or damaging mechanisms.',
  },
  {
    id: 'holiday-let',
    label: 'Holiday let',
    intro: 'A guest-turnover check for key safes, access routines, door wear, lock changes and reliable arrival/departure access.',
    starter: 'Holiday lets often have more key use, repeated door operation and guest access routines, so reliable locking and clear key control matter.',
  },
  {
    id: 'guest-house',
    label: 'Guest house / accommodation',
    intro: 'A higher-use property check for guest doors, staff keys, access points, window locks and everyday lock reliability.',
    starter: 'Guest accommodation can put more wear on locks, handles and doors, especially where several people use the same access points every day.',
  },
  {
    id: 'caravan',
    label: 'Static caravan / holiday park',
    intro: 'A caravan and holiday park check for seasonal access, lost keys, key safes, door locks, sheds, gates and guest handovers.',
    starter: 'Static caravans and holiday park properties often need simple, reliable access plans, especially before busy holiday periods.',
  },
  {
    id: 'business',
    label: 'Small business',
    intro: 'A business premises check for front/rear access, staff keys, storage areas, side doors, windows and lock reliability.',
    starter: 'Small businesses should look at customer entrances, rear doors, staff key control, stock/storage areas and how quickly a failed lock would disrupt opening.',
  },
  {
    id: 'care',
    label: 'Elderly relative / care access',
    intro: 'A safe-access check for carers, family, key safes, smooth-locking doors and reducing lockout or lock-in risk.',
    starter: 'For elderly relatives or care access, the main priority is safe, reliable entry without leaving spare keys in risky places.',
  }
];

const areaOptions = [
  {
    id: 'clacton',
    label: 'Clacton / Great Clacton / Holland-on-Sea / Jaywick',
    note: 'Busy coastal and residential areas often benefit from good key control, uPVC door checks, anti-snap lock upgrades and secure access planning for flats, rentals and holiday properties.',
    publicData: 'Your selected area is used to tailor practical advice around property layout, coastal exposure, access arrangements and common local property types. It does not change your score on its own.',
    focus: ['uPVC door repairs', 'anti-snap lock upgrades', 'lock changes', 'key safes']
  },
  {
    id: 'frinton-walton',
    label: 'Frinton / Walton / Kirby / Great Holland',
    note: 'Coastal homes, holiday properties and well-used uPVC or composite doors can benefit from lock upgrades, door alignment checks, window locks and key safe placement advice.',
    publicData: 'Your selected area is used to tailor practical advice around property layout, coastal exposure, access arrangements and common local property types. It does not change your score on its own.',
    focus: ['composite door repairs', 'window lock repairs', 'holiday let security', 'security surveys']
  },
  {
    id: 'harwich-dovercourt',
    label: 'Harwich / Dovercourt / Parkeston / Oakley',
    note: 'Older doors, rental homes, coastal weather and small business premises make door reliability, cylinder suitability and rear access worth checking.',
    publicData: 'Your selected area is used to tailor practical advice around property layout, coastal exposure, access arrangements and common local property types. It does not change your score on its own.',
    focus: ['multipoint lock repairs', 'door alignment', 'business security', 'euro cylinder replacement']
  },
  {
    id: 'manningtree',
    label: 'Manningtree / Lawford / Mistley / Bradfield',
    note: 'Homes, village properties, garages, sheds, side access and outbuildings often benefit from a practical all-round security review.',
    publicData: 'Your selected area is used to tailor practical advice around property layout, coastal exposure, access arrangements and common local property types. It does not change your score on its own.',
    focus: ['garage locks', 'shed and gate locks', 'security surveys', 'lock upgrades']
  },
  {
    id: 'brightlingsea',
    label: 'Brightlingsea / Alresford / Thorrington',
    note: 'Coastal homes, holiday accommodation and everyday residential doors may need attention to alignment, cylinders, window locks and weather-related wear.',
    publicData: 'Your selected area is used to tailor practical advice around property layout, coastal exposure, access arrangements and common local property types. It does not change your score on its own.',
    focus: ['door alignment', 'patio door lock repairs', 'window lock repairs', 'key safes']
  },
  {
    id: 'villages',
    label: 'Tendring villages / rural property',
    note: 'Rural and village properties should consider outbuildings, garages, gates, side access, spare keys and practical emergency access.',
    publicData: 'Your selected area is used to tailor practical advice around property layout, coastal exposure, access arrangements and common local property types. It does not change your score on its own.',
    focus: ['shed and gate locks', 'garage locks', 'key safes', 'security surveys']
  },
  {
    id: 'unsure',
    label: 'Not sure / nearby area',
    note: 'A basic check of doors, locks, windows, key control and access points is still a useful starting point.',
    publicData: 'Your selected area is used to tailor practical advice around property layout, coastal exposure, access arrangements and common local property types. It does not change your score on its own.',
    focus: ['security surveys', 'lock changes', 'door repairs']
  }
];

const serviceInfo = {
  '/services/security-surveys': {
    label: 'Security Surveys',
    text: 'Best when several areas need checking or you want clear priorities for locks, doors, windows and access points.'
  },
  '/services/lock-changes': {
    label: 'Lock Changes',
    text: 'Useful after moving home, lost keys, tenant changes, staff changes or unknown key history.'
  },
  '/services/move-in-lock-change-service': {
    label: 'Move-In Lock Change Service',
    text: 'A quick way to Get Secure when you do not know who still has keys to the property.'
  },
  '/services/anti-snap-lock-upgrades': {
    label: 'Anti-Snap Lock Upgrades',
    text: 'Suitable when cylinders are old, unknown, sticking out or have not been checked recently.'
  },
  '/services/euro-cylinder-replacement': {
    label: 'Euro Cylinder Replacement',
    text: 'A practical option for worn, old, unreliable or unsuitable uPVC/composite door cylinders.'
  },
  '/services/upvc-door-repairs-tendring': {
    label: 'uPVC Door Repairs',
    text: 'Recommended where doors are stiff, dropped, difficult to lock or putting strain on the mechanism.'
  },
  '/services/door-alignment-adjustment': {
    label: 'Door Alignment & Adjustment',
    text: 'Useful when a door needs lifting, pulling, pushing or extra force before it will lock.'
  },
  '/services/multipoint-lock-repairs': {
    label: 'Multipoint Lock Repairs',
    text: 'Recommended for stiff handles, jammed locking points, failed mechanisms or doors that feel close to failing.'
  },
  '/services/upvc-door-mechanism-replacement': {
    label: 'uPVC Door Mechanism Replacement',
    text: 'Relevant when a multipoint mechanism is worn, damaged or no longer reliable.'
  },
  '/services/door-handle-replacement': {
    label: 'Door Handle Replacement',
    text: 'Helpful where a handle is loose, floppy, worn or not operating the locking system cleanly.'
  },
  '/services/key-safes': {
    label: 'Key Safes',
    text: 'Useful for carers, elderly relatives, family access, holiday lets and controlled guest handovers.'
  },
  '/services/locksmith-for-care-access-key-safes': {
    label: 'Care Access / Key Safes',
    text: 'A good next step where carers or family need safe, reliable access without hidden spare keys.'
  },
  '/services/window-lock-repairs': {
    label: 'Window Lock Repairs',
    text: 'For accessible windows, missing keys, faulty locks or rooms that need stronger basic security.'
  },
  '/services/patio-door-lock-repairs': {
    label: 'Patio Door Lock Repairs',
    text: 'Useful where patio doors are loose, insecure, hard to lock or part of a rear-access concern.'
  },
  '/services/garage-shed-gate-locks': {
    label: 'Garage, Shed & Gate Locks',
    text: 'For side access, tools, bikes, garden equipment, garages and outbuildings.'
  },
  '/services/caravan-holiday-park-locksmith-services': {
    label: 'Caravan & Holiday Park Locksmiths',
    text: 'For static caravan lock changes, holiday park access, key safes and seasonal handovers.'
  },
  '/services/landlord-locksmith-services': {
    label: 'Landlord Locksmith Services',
    text: 'For tenant changes, key control, door maintenance and rental property security.'
  },
  '/services/holiday-let-guest-house-security': {
    label: 'Holiday Let & Guest House Security',
    text: 'For guest turnover, key safes, high-use doors and visitor access control.'
  },
  '/services/locksmith-for-small-businesses': {
    label: 'Small Business Locksmith',
    text: 'For staff keys, front and rear access, shop doors, storage areas and business lock reliability.'
  },
  '/services/emergency-locksmith-tendring': {
    label: 'Emergency Locksmith',
    text: 'For lockouts, lock-ins, snapped keys or doors that cannot be secured safely.'
  },
  '/services/locked-out-non-destructive-entry': {
    label: 'Locked Out / Gain Entry',
    text: 'For prompt, careful entry help when you are unable to get into a home or business.'
  },
  '/services/door-will-not-lock': {
    label: 'Door Will Not Lock',
    text: 'For stiff, dropped or jammed doors that may leave a property insecure or someone unable to get out.'
  }
};

const allServices = Object.keys(serviceInfo);

const questions = [
  {
    id: 'secure-now',
    group: 'First, a quick safety check',
    question: 'Can you lock and secure the property safely right now?',
    options: [
      { label: 'Yes — the property is secure and doors are working normally', positive: 4, good: 'The property is secure right now, which is a good starting point.' },
      { label: 'Mostly — it locks, but a door is stiff or I am not fully confident', reliability: 8, services: ['/services/door-will-not-lock', '/services/door-alignment-adjustment'], concern: 'A door that is starting to feel stiff or unreliable is worth checking before it becomes a lockout, lock-in or security issue.' },
      { label: 'No — a door will not lock, someone is locked out/in, or the property cannot be secured', reliability: 15, security: 5, urgent: true, services: ['/services/emergency-locksmith-tendring', '/services/locked-out-non-destructive-entry', '/services/door-will-not-lock'], concern: 'This may need urgent attention because the property may be insecure or someone may be unable to enter or leave safely.' }
    ]
  },
  {
    id: 'key-control',
    group: 'Keys & access',
    question: 'How confident are you about who has keys to the property?',
    options: [
      { label: 'Confident — keys are controlled and locks were changed when needed', positive: 5, good: 'Key control is strong. Knowing who has access is one of the best security habits.' },
      { label: 'Not fully sure — previous owners, tenants, guests, staff or family may still have keys', security: 4, services: ['/services/lock-changes', '/services/move-in-lock-change-service'], concern: 'Unknown key history is worth tightening up, especially after moving home, tenant changes or staff changes.' },
      { label: 'Concerned — keys have been lost, stolen, snapped or not returned', security: 7, reliability: 1, urgent: true, services: ['/services/lock-changes', '/services/euro-cylinder-replacement', '/services/broken-key-extraction'], concern: 'Lost, stolen, snapped or unreturned keys can quickly become an access and security problem.' }
    ]
  },
  {
    id: 'door-operation',
    group: 'Door reliability',
    question: 'How do your main doors feel when you lock them?',
    options: [
      { label: 'Smooth — no lifting, pulling, forcing or second attempt needed', positive: 5, good: 'Smooth locking is a strong sign that the door, keeps and locking points are working together.' },
      { label: 'Slightly stiff — it catches, needs lifting or only locks smoothly sometimes', reliability: 8, services: ['/services/upvc-door-repairs-tendring', '/services/door-alignment-adjustment', '/services/multipoint-lock-repairs'], concern: 'Even slight stiffness can strain the locking mechanism and increase the risk of a future lockout, lock-in or failed multipoint lock.' },
      { label: 'Difficult — it jams, needs forcing or feels close to failing', reliability: 12, security: 2, urgent: true, services: ['/services/multipoint-lock-repairs', '/services/upvc-door-mechanism-replacement', '/services/door-alignment-adjustment'], concern: 'A door that needs forcing should be treated as high priority. It may fail suddenly and leave someone locked out, locked in or unable to secure the property.' }
    ]
  },
  {
    id: 'handle-key',
    group: 'Early warning signs',
    question: 'Do you notice any warning signs from the key, handle or mechanism?',
    options: [
      { label: 'No — the key turns cleanly and the handle feels firm', positive: 4, good: 'A clean key turn and firm handle are good signs that the lock is not obviously under strain.' },
      { label: 'A little — key sticks, handle feels loose or the lock needs a second try', reliability: 7, services: ['/services/euro-cylinder-replacement', '/services/door-handle-replacement', '/services/upvc-door-repairs-tendring'], concern: 'Small changes in the feel of a key or handle often appear before a bigger lock, cylinder or mechanism failure.' },
      { label: 'Often — the key or handle regularly feels unreliable', reliability: 11, security: 1, urgent: true, services: ['/services/multipoint-lock-repairs', '/services/upvc-door-mechanism-replacement', '/services/door-handle-replacement'], concern: 'Repeated stiffness, loose handles or unreliable locking raise the risk of being locked out, locked in or unable to lock the door properly.' }
    ]
  },
  {
    id: 'cylinder-security',
    group: 'Lock security',
    question: 'Do you know whether your main door cylinders are modern security-rated locks?',
    options: [
      { label: 'Yes — they have been upgraded or checked recently', positive: 5, good: 'Modern, suitable cylinders are a strong security step, especially on uPVC and composite doors.' },
      { label: 'Not sure — they may be old or standard cylinders', security: 4, services: ['/services/anti-snap-lock-upgrades', '/services/euro-cylinder-replacement'], concern: 'Older or unknown cylinders are worth checking, particularly on front, rear and side doors.' },
      { label: 'No — they look old, stick out, feel worn or have never been checked', security: 7, services: ['/services/anti-snap-lock-upgrades', '/services/euro-cylinder-replacement'], concern: 'Old, worn or unsuitable cylinders are one of the simplest security upgrades to review.' }
    ]
  },
  {
    id: 'windows-patio',
    group: 'Windows & patio doors',
    question: 'Are accessible windows and patio doors secure and working properly?',
    options: [
      { label: 'Yes — accessible windows and patio doors have working locks', positive: 4, good: 'Working window and patio door locks help reduce easy access points.' },
      { label: 'Mixed — some are old, missing keys or not recently checked', security: 3, reliability: 1, services: ['/services/window-lock-repairs', '/services/patio-door-lock-repairs', '/services/security-surveys'], concern: 'Accessible windows and patio doors are easy to overlook until a lock fails or a key is missing.' },
      { label: 'Poor — windows or patio doors feel insecure, faulty or unreliable', security: 6, reliability: 2, services: ['/services/window-lock-repairs', '/services/patio-door-lock-repairs', '/services/security-surveys'], concern: 'Poor window or patio door security can leave a property with avoidable weak points.' }
    ]
  },
  {
    id: 'outbuildings',
    group: 'Garages, sheds & side access',
    question: 'How secure are sheds, garages, gates and side access routes?',
    options: [
      { label: 'Well secured — useful items, tools and side routes are protected', positive: 4, good: 'Secured outbuildings and side access make the whole property harder to target.' },
      { label: 'Basic — there are locks, but they are old or not confidence-inspiring', security: 3, services: ['/services/garage-shed-gate-locks', '/services/security-surveys'], concern: 'Older shed, garage and gate locks may not match the value of what they protect.' },
      { label: 'Weak — tools, bikes, gates or outbuildings are easy to access', security: 6, services: ['/services/garage-shed-gate-locks', '/services/security-surveys'], concern: 'Weak side access and outbuildings can increase risk around the whole property.' }
    ]
  },
  {
    id: 'safe-access',
    group: 'Safe access',
    question: 'Do carers, family, trusted trades, staff or guests need access?',
    options: [
      { label: 'No shared access is needed and spare keys are not hidden outside', positive: 4, good: 'Not hiding spare keys outside is a strong security habit.' },
      { label: 'Yes — access is handled with a fitted key safe or controlled process', positive: 3, security: 1, services: ['/services/key-safes'], good: 'A properly fitted key safe or controlled access routine is much better than loose spare keys.' },
      { label: 'Yes — keys are sometimes left in risky places or access feels awkward', security: 6, services: ['/services/key-safes', '/services/locksmith-for-care-access-key-safes'], concern: 'If people need access, a properly fitted key safe or lock plan is safer than hiding keys or leaving access uncertain.' }
    ]
  },
  {
    id: 'security-habits',
    group: 'Everyday habits',
    question: 'Which best describes your everyday locking routine?',
    options: [
      { label: 'Consistent — doors and windows are locked, keys are controlled and issues are dealt with early', positive: 5, good: 'Good daily habits make a real difference to property security.' },
      { label: 'Mostly good, but some areas have not been checked for a while', security: 2, reliability: 1, services: ['/services/security-surveys'], concern: 'A quick review can help spot small issues before they become expensive or urgent.' },
      { label: 'Patchy — some locks, keys, windows or access points are not really under control', security: 5, reliability: 2, services: ['/services/security-surveys', '/services/lock-upgrades'], concern: 'When several small issues build up, a security survey can help put them in priority order.' }
    ]
  },
  {
    id: 'landlord-turnover',
    appliesTo: ['landlord'],
    group: 'Rental property',
    question: 'How are locks and keys handled between tenants?',
    options: [
      { label: 'Locks/keys are reviewed at each tenant change', positive: 5, good: 'Reviewing locks between tenants is a strong landlord security habit.' },
      { label: 'Keys are collected, but locks are not always changed or checked', security: 5, services: ['/services/landlord-locksmith-services', '/services/lock-changes'], concern: 'Collected keys do not always tell the full story; copies may still exist.' },
      { label: 'There have been missing keys, tenant issues or unclear key history', security: 8, services: ['/services/landlord-locksmith-services', '/services/lock-changes', '/services/move-in-lock-change-service'], concern: 'Unclear rental key history is a strong reason to consider lock changes or upgrades.' }
    ]
  },
  {
    id: 'landlord-maintenance',
    appliesTo: ['landlord'],
    group: 'Rental maintenance',
    question: 'How reliable are the doors for tenants day to day?',
    options: [
      { label: 'Reliable — tenants are not reporting stiff handles or difficult locking', positive: 4, good: 'Reliable doors reduce tenant frustration and emergency callouts.' },
      { label: 'Occasional reports of stiffness, loose handles or hard-to-lock doors', reliability: 7, services: ['/services/upvc-door-repairs-tendring', '/services/door-alignment-adjustment', '/services/landlord-locksmith-services'], concern: 'Tenant reports of stiffness should be checked early to reduce lockout and mechanism failure risk.' },
      { label: 'Repeated problems or a door that feels close to failing', reliability: 12, services: ['/services/multipoint-lock-repairs', '/services/upvc-door-mechanism-replacement', '/services/landlord-locksmith-services'], concern: 'Repeated rental door problems can become urgent if a tenant is locked out, locked in or unable to secure the property.' }
    ]
  },
  {
    id: 'guest-turnover',
    appliesTo: ['holiday-let', 'guest-house'],
    group: 'Guest access',
    question: 'How is guest access handled between bookings or stays?',
    options: [
      { label: 'Controlled — access is planned, codes/keys are reviewed and locks work smoothly', positive: 5, good: 'Controlled guest access helps protect the property and avoids arrival problems.' },
      { label: 'It works, but keys/codes/locks are not reviewed as often as they should be', security: 4, reliability: 2, services: ['/services/holiday-let-guest-house-security', '/services/key-safes'], concern: 'Guest turnover can create key-control gaps if access is not reviewed regularly.' },
      { label: 'Access is awkward, keys have gone missing or guests struggle with the door', security: 7, reliability: 7, services: ['/services/holiday-let-guest-house-security', '/services/key-safes', '/services/upvc-door-repairs-tendring'], concern: 'Guest access problems can quickly affect reviews, security and booking handovers.' }
    ]
  },
  {
    id: 'caravan-season',
    appliesTo: ['caravan'],
    group: 'Caravan access',
    question: 'How ready is the caravan or holiday park property for regular seasonal use?',
    options: [
      { label: 'Ready — locks, keys and access are checked before busy periods', positive: 5, good: 'Checking locks and keys before the season helps avoid guest or family access problems.' },
      { label: 'Mostly ready, but spare keys, key safes or door locks could be better organised', security: 4, reliability: 2, services: ['/services/caravan-holiday-park-locksmith-services', '/services/key-safes'], concern: 'Caravan access is much easier when spare keys, key safes and door locks are planned before busy periods.' },
      { label: 'Not ready — keys are missing, locks are old or access has caused problems before', security: 7, reliability: 7, services: ['/services/caravan-holiday-park-locksmith-services', '/services/key-safes', '/services/lock-changes'], concern: 'Old caravan locks, missing keys or poor access planning can create unnecessary stress during holiday periods.' }
    ]
  },
  {
    id: 'business-keys',
    appliesTo: ['business'],
    group: 'Business access',
    question: 'How well controlled are staff keys and business access points?',
    options: [
      { label: 'Controlled — staff keys and access points are clearly managed', positive: 5, good: 'Clear staff key control is a strong business security habit.' },
      { label: 'Somewhat controlled, but old staff keys or rear access have not been reviewed', security: 5, services: ['/services/locksmith-for-small-businesses', '/services/lock-changes'], concern: 'Staff changes and rear doors are common reasons for business lock reviews.' },
      { label: 'Unclear — keys, rear doors or storage areas are not well controlled', security: 8, reliability: 2, services: ['/services/locksmith-for-small-businesses', '/services/security-surveys', '/services/lock-changes'], concern: 'Unclear business access can affect stock, staff safety and day-to-day confidence.' }
    ]
  },
  {
    id: 'care-reliability',
    appliesTo: ['care'],
    group: 'Care access',
    question: 'Could a stiff door, lost key or awkward access put someone vulnerable at risk?',
    options: [
      { label: 'Low concern — access is reliable and there is a sensible backup plan', positive: 5, good: 'Reliable access and a backup plan are especially important for elderly relatives and care visits.' },
      { label: 'Some concern — access works, but the door or keys could be easier', reliability: 7, security: 2, services: ['/services/locksmith-for-care-access-key-safes', '/services/key-safes', '/services/door-alignment-adjustment'], concern: 'For care access, even slight door or key issues are worth checking before they become urgent.' },
      { label: 'High concern — access has already caused stress, delays or near lockouts', reliability: 12, security: 4, urgent: true, services: ['/services/locksmith-for-care-access-key-safes', '/services/key-safes', '/services/upvc-door-repairs-tendring'], concern: 'Care access problems should be treated as high priority because they can affect safety and peace of mind.' }
    ]
  }
];

function visibleQuestionsFor(type) {
  return questions.filter((item) => !item.appliesTo || item.appliesTo.includes(type));
}

function levelFor(score, type) {
  if (type === 'reliability') {
    if (score >= 18) return { label: 'High lockout risk', tone: 'high', text: 'There are warning signs that could lead to a failed mechanism, lockout, lock-in or a door that will not secure properly.' };
    if (score >= 9) return { label: 'Worth checking soon', tone: 'medium', text: 'The door or lock may still be usable, but the answers suggest early wear or alignment issues worth checking.' };
    return { label: 'Looks manageable', tone: 'low', text: 'No major reliability warning signs have been selected yet.' };
  }
  if (score >= 18) return { label: 'High security priority', tone: 'high', text: 'Several answers suggest key-control, access or lock-security concerns that are worth dealing with.' };
  if (score >= 9) return { label: 'Improvements likely', tone: 'medium', text: 'There are some areas where a lock change, upgrade, key safe or security review may help.' };
  return { label: 'Lower concern', tone: 'low', text: 'The answers so far do not point to a major security concern.' };
}

function positiveLevel(score) {
  if (score >= 18) return 'Strong security habits';
  if (score >= 9) return 'Good habits in place';
  if (score > 0) return 'Some good signs';
  return 'Still building picture';
}

function urgencyLabel(totals) {
  if (totals.reliability >= 18 || totals.security >= 20 || totals.urgentCount >= 2) return 'High priority';
  if (totals.reliability >= 9 || totals.security >= 9 || totals.urgentCount >= 1) return 'Worth checking';
  return 'Keep monitoring';
}

function buildAssistantSummary({ totals, property, area, location, answeredCount }) {
  const place = location?.trim() ? location.trim() : area.label;
  const immediate = totals.emergency;
  if (immediate) {
    return `Your first answer suggests an urgent access or security issue at this ${property.label.toLowerCase()} in ${place}. The priority is to get the property secure and make sure nobody is left locked out, locked in or relying on a door that may fail further.`;
  }
  if (answeredCount === 0) {
    return `Start with the questions above and the check will build a more useful picture for your ${property.label.toLowerCase()} in ${place}. It will look separately at security, key control and the chance of door or lock failure.`;
  }
  if (totals.reliability >= 18 && totals.security >= 14) {
    return `For this ${property.label.toLowerCase()} in ${place}, the main message is to act before a small door or lock problem becomes urgent. Your answers suggest both security concerns and door/lock reliability warning signs. A practical Brodley Locksmiths visit could check the locks, cylinders, door alignment and access points in one go.`;
  }
  if (totals.reliability >= 18) {
    return `For this ${property.label.toLowerCase()} in ${place}, the biggest concern is door and lock reliability. Stiffness, loose handles, difficult keys or multipoint strain can lead to a lockout, lock-in or a door that will not secure properly. A door adjustment, multipoint repair or mechanism check would be a sensible next step.`;
  }
  if (totals.security >= 18) {
    return `For this ${property.label.toLowerCase()} in ${place}, the main concern is security and access control. The answers point towards key history, older cylinders, shared access or weak points that would benefit from a lock change, anti-snap upgrade, key safe or security survey.`;
  }
  if (totals.good.length >= 4 && totals.concerns.length <= 2) {
    return `Your answers show several good habits already in place for this ${property.label.toLowerCase()}. There may still be a couple of areas worth checking, but the overall picture is positive. A quick Get Secure visit can confirm whether anything needs attention.`;
  }
  if (totals.concerns.length >= 3) {
    return `Your answers show a few practical areas worth reviewing. Nothing has to feel complicated: the best next step is usually to check the doors, locks, windows and key control, then deal with the highest-risk issues first.`;
  }
  return `Your answers do not suggest a major immediate issue, but they have highlighted useful areas to keep an eye on. If anything starts to feel stiff, uncertain or insecure, it is better to check it early than wait for a failed lock or door mechanism.`;
}

function buildNextStep(totals) {
  if (totals.emergency) return 'Suggested next step: call Brodley Locksmiths now so the door, lock or access problem can be dealt with before it becomes more stressful or leaves the property insecure.';
  if (totals.reliability >= 18) return 'Suggested next step: arrange a door and lock reliability check, especially if any door needs lifting, pulling, forcing or repeated attempts to lock.';
  if (totals.security >= 18) return 'Suggested next step: arrange a security survey or lock review to look at key control, cylinders, window locks, outbuildings and access points.';
  if (totals.services.includes('/services/key-safes')) return 'Suggested next step: consider whether a properly fitted key safe or access plan would make the property safer and easier to manage.';
  if (totals.services.includes('/services/anti-snap-lock-upgrades')) return 'Suggested next step: check whether the main door cylinders are suitable, especially on uPVC or composite doors.';
  return 'Suggested next step: keep this checklist in mind and contact Brodley Locksmiths if anything starts to feel stiff, worn, insecure or uncertain.';
}

function buildReport({ property, area, location, totals, securityLevel, reliabilityLevel, assistantSummary, nextStepText, answeredOptions }) {
  return [
    'Get Secure Property Check Results',
    '',
    `Property type: ${property.label}`,
    `Area: ${area.label}`,
    `Town/village/notes: ${location || 'Not provided'}`,
    `Security result: ${securityLevel.label} (${totals.security})`,
    `Door and lock reliability result: ${reliabilityLevel.label} (${totals.reliability})`,
    `Positive habits: ${positiveLevel(totals.positive)} (${totals.positive})`,
    `Overall priority: ${urgencyLabel(totals)}`,
    '',
    'Practical summary:',
    assistantSummary,
    nextStepText,
    '',
    'Things already looking positive:',
    ...(totals.good.length ? totals.good.slice(0, 8).map((item) => `- ${item}`) : ['- Complete more questions to build this section.']),
    '',
    'Areas worth checking:',
    ...(totals.concerns.length ? totals.concerns.slice(0, 8).map((item) => `- ${item}`) : ['- No major concerns selected yet.']),
    '',
    'Answers:',
    ...(answeredOptions.length ? answeredOptions.map(({ question, option }) => `- ${question.question}: ${option.label}`) : ['- No answers provided yet.']),
    '',
    'Suggested Brodley Locksmiths pages:',
    ...totals.services.map((href) => `- ${serviceInfo[href]?.label || href}: ${href}`),
    ''
  ].join('\n');
}

export default function GetSecureCheckTool() {
  const [answers, setAnswers] = useState({});
  const [areaId, setAreaId] = useState('unsure');
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('home');
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);
  const [lead, setLead] = useState({ name: '', phone: '', email: '', preferredContact: 'Phone call', website: '' });
  const [sendState, setSendState] = useState('idle');
  const [sendMessage, setSendMessage] = useState('');

  const property = propertyTypes.find((item) => item.id === propertyType) || propertyTypes[0];
  const area = areaOptions.find((item) => item.id === areaId) || areaOptions[areaOptions.length - 1];
  const visibleQuestions = visibleQuestionsFor(propertyType);
  const answeredOptions = visibleQuestions.map((q) => ({ question: q, option: answers[q.id] })).filter((item) => item.option);

  const totals = useMemo(() => {
    const base = {
      security: 0,
      reliability: 0,
      positive: 0,
      urgentCount: 0,
      emergency: false,
      services: ['/services/security-surveys'],
      good: [],
      concerns: []
    };

    answeredOptions.forEach(({ option }) => {
      base.security += option.security || 0;
      base.reliability += option.reliability || 0;
      base.positive += option.positive || 0;
      if (option.urgent) {
        base.urgentCount += 1;
        if (option.label.startsWith('No — a door will not lock')) base.emergency = true;
      }
      if (option.good) base.good.push(option.good);
      if (option.concern) base.concerns.push(option.concern);
      (option.services || []).forEach((service) => base.services.push(service));
    });

    // Area information personalises advice only; it does not automatically add risk points.
    if (base.concerns.length) {
      area.focus.forEach((focus) => {
        const match = allServices.find((href) => serviceInfo[href].label.toLowerCase().includes(focus.split(' ')[0]));
        if (match) base.services.push(match);
      });
    }

    if (base.emergency) base.services.push('/services/emergency-locksmith-tendring', '/services/locked-out-non-destructive-entry', '/services/door-will-not-lock');
    if (base.reliability >= 9) base.services.push('/services/upvc-door-repairs-tendring', '/services/door-alignment-adjustment');
    if (base.reliability >= 16) base.services.push('/services/multipoint-lock-repairs');
    if (base.security >= 9) base.services.push('/services/lock-changes', '/services/anti-snap-lock-upgrades');
    if (propertyType === 'caravan') base.services.push('/services/caravan-holiday-park-locksmith-services');
    if (propertyType === 'landlord') base.services.push('/services/landlord-locksmith-services');
    if (propertyType === 'holiday-let' || propertyType === 'guest-house') base.services.push('/services/holiday-let-guest-house-security');
    if (propertyType === 'business') base.services.push('/services/locksmith-for-small-businesses');
    if (propertyType === 'care') base.services.push('/services/locksmith-for-care-access-key-safes');

    return { ...base, services: [...new Set(base.services)].slice(0, 8) };
  }, [answeredOptions, area, property, propertyType]);

  const securityLevel = levelFor(totals.security, 'security');
  const reliabilityLevel = levelFor(totals.reliability, 'reliability');
  const assistantSummary = buildAssistantSummary({ totals, property, area, location, answeredCount: answeredOptions.length });
  const nextStepText = buildNextStep(totals);
  const reportText = buildReport({ property, area, location, totals, securityLevel, reliabilityLevel, assistantSummary, nextStepText, answeredOptions });
  const emailHref = `${contact.emailHref}?subject=${encodeURIComponent('Get Secure Property Check Results')}&body=${encodeURIComponent(['Hello Brodley Locksmiths,', '', 'I completed the Get Secure Property Check and would like some advice.', '', reportText, '', 'My contact details:', `Name: ${lead.name || 'Not provided'}`, `Phone: ${lead.phone || 'Not provided'}`, `Email: ${lead.email || 'Not provided'}`, `Preferred contact: ${lead.preferredContact}`, '', 'Please contact me about the best next step.'].join('\n'))}`;

  function setAnswer(questionId, option) {
    setAnswers((current) => ({ ...current, [questionId]: option }));
    setCopied(false);
    setSaved(false);
  }

  function reset() {
    setAnswers({});
    setLocation('');
    setPropertyType('home');
    setAreaId('unsure');
    setCopied(false);
    setSaved(false);
    setLead({ name: '', phone: '', email: '', preferredContact: 'Phone call', website: '' });
    setSendState('idle');
    setSendMessage('');
  }

  async function copyResults() {
    try {
      await navigator.clipboard.writeText(reportText);
      setCopied(true);
    } catch (error) {
      setCopied(false);
    }
  }

  function saveResults() {
    try {
      localStorage.setItem('brodleyGetSecureCheck', reportText);
      setSaved(true);
    } catch (error) {
      setSaved(false);
    }
  }

  function updateLead(field, value) {
    setLead((current) => ({ ...current, [field]: value }));
    if (sendState !== 'idle') {
      setSendState('idle');
      setSendMessage('');
    }
  }

  async function sendResults(event) {
    event.preventDefault();
    if (!lead.name || (!lead.phone && !lead.email)) {
      setSendState('error');
      setSendMessage('Please add your name and a phone number or email address.');
      return;
    }
    setSendState('sending');
    setSendMessage('Sending your check…');
    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'Get Secure Property Check',
          data: {
            ...lead,
            propertyType: property.label,
            location: location || area.label,
            service: totals.emergency ? 'Urgent door / lock issue' : 'Property security and reliability check',
            urgency: urgencyLabel(totals),
            message: 'Customer completed the Get Secure Property Check and would like advice.',
            report: reportText
          }
        })
      });
      const result = await response.json();
      if (response.ok && result.ok) {
        setSendState('success');
        setSendMessage('Thanks — your Get Secure check has been sent. Brodley Locksmiths will use the contact details you supplied to get back to you.');
        return;
      }
      if (result.fallback) {
        setSendState('fallback');
        setSendMessage('Your results are ready in an email so you can send them now. For urgent issues, please call.');
        window.location.href = emailHref;
        return;
      }
      setSendState('error');
      setSendMessage(result.error || 'The check could not send right now. Please call or email instead.');
    } catch {
      setSendState('error');
      setSendMessage('The check could not send right now. Please call or email instead.');
    }
  }

  return (
    <div className="security-check-wrap advanced-check-wrap get-secure-v3">
      <section className="security-check-intro advanced-check-intro">
        <div className="info-box advanced-start-box get-secure-welcome">
          <Home size={34} />
          <p className="eyebrow gold">Start here</p>
          <h2>Choose your property type</h2>
          <p>{property.intro}</p>
          <p className="quiet-intro">{property.starter}</p>
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
              Town, village, park name or notes
              <input value={location} onChange={(event) => setLocation(event.target.value)} placeholder="e.g. Clacton, Harwich, Frinton, St Osyth caravan park, flat block" />
            </label>
          </div>
          <div className="area-note-card enhanced-area-note">
            <MapPin size={24} />
            <div>
              <strong>Local context</strong>
              <p>{area.note}</p>
              <small>{area.publicData}</small>
            </div>
          </div>
        </div>

        <div className="score-stack">
          {totals.emergency && (
            <div className="tool-urgent-alert" role="alert">
              <strong>Urgent door or access issue</strong>
              <p>A door may not be secure, or somebody may be locked out or in. Calling is usually the quickest route.</p>
              <a href={contact.phoneHref} className="btn btn-red"><Phone size={18} /> Call {contact.phoneDisplay}</a>
            </div>
          )}
          <ScoreCard icon={ShieldCheck} title="Security risk" level={securityLevel.label} tone={securityLevel.tone} score={totals.security} text={securityLevel.text} />
          <ScoreCard icon={Wrench} title="Door & lock reliability" level={reliabilityLevel.label} tone={reliabilityLevel.tone} score={totals.reliability} text={reliabilityLevel.text} />
          <ScoreCard icon={Award} title="Positive habits" level={positiveLevel(totals.positive)} tone="positive" score={totals.positive} text="This recognises the good things already in place, such as known key control, smooth-locking doors, working window locks and planned access." />
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
                const positiveOnly = option.positive && !option.security && !option.reliability;
                return (
                  <button type="button" key={option.label} className={`choice-card ${selected ? 'selected' : ''} ${positiveOnly ? 'positive-choice' : ''}`} onClick={() => setAnswer(item.id, option)}>
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
          <div className="assistant-summary-card">
            <MessageSquare size={26} />
            <div>
              <strong>Practical Brodley Locksmiths recommendation</strong>
              <p>{assistantSummary}</p>
              <em>{nextStepText}</em>
            </div>
          </div>
          <div className="priority-pill-row">
            <span>Overall priority: <strong>{urgencyLabel(totals)}</strong></span>
            <span>{answeredOptions.length} of {visibleQuestions.length} questions answered</span>
          </div>
          <div className="summary-grid deeper-summary-grid">
            <SummaryBox title="Things already looking positive" items={totals.good.length ? totals.good : ['Answer a few questions and this section will show what is already working well.']} positive />
            <SummaryBox title="Things worth checking" items={totals.concerns.length ? totals.concerns : ['No major concerns selected yet. Keep answering to build a fuller picture.']} />
          </div>
          <div className="result-service-cards">
            {totals.services.map((href) => (
              <Link key={href} href={href} className="result-service-card">
                <strong>{serviceInfo[href]?.label || 'View service'}</strong>
                <small>{serviceInfo[href]?.text || 'View the relevant Brodley Locksmiths service page.'}</small>
                <span>View service <ArrowRight size={15} /></span>
              </Link>
            ))}
          </div>
        </div>
        <aside className="security-action-card advanced-action-card">
          <KeyRound size={34} />
          <h3>{totals.emergency ? 'Get urgent locksmith help' : 'Send your check to Brodley Locksmiths'}</h3>
          <p>{totals.emergency ? 'A door that will not lock, a lockout or a lock-in can become more stressful quickly. Call now for the fastest response, or send the summary below if it is safe to do so.' : 'Send the results through for practical advice on the most sensible next step, whether that is a lock change, anti-snap upgrade, uPVC door repair, key safe, garage lock, window lock or security survey across Tendring.'}</p>
          <div className="button-row stacked-actions">
            <a href={contact.phoneHref} className="btn btn-red"><Phone size={18} /> Call {contact.phoneDisplay}</a>
          </div>
          <form className="tool-lead-form" onSubmit={sendResults}>
            <label>Your name<input required value={lead.name} onChange={(event) => updateLead('name', event.target.value)} placeholder="Your name" autoComplete="name" /></label>
            <label>Phone number<input value={lead.phone} onChange={(event) => updateLead('phone', event.target.value)} placeholder="Best number to call" inputMode="tel" autoComplete="tel" /></label>
            <label>Email address<input type="email" value={lead.email} onChange={(event) => updateLead('email', event.target.value)} placeholder="Optional if you prefer email" autoComplete="email" /></label>
            <label>Preferred contact<select value={lead.preferredContact} onChange={(event) => updateLead('preferredContact', event.target.value)}><option>Phone call</option><option>Text message</option><option>Email</option></select></label>
            <label className="honeypot-field" aria-hidden="true">Leave this blank<input tabIndex="-1" autoComplete="off" value={lead.website} onChange={(event) => updateLead('website', event.target.value)} /></label>
            <button type="submit" className="btn btn-outline" disabled={sendState === 'sending'}><Send size={18} /> {sendState === 'sending' ? 'Sending…' : 'Send my check'}</button>
          </form>
          {sendMessage && <p className={`form-status ${sendState}`} role="status">{sendMessage}</p>}
          <div className="button-row stacked-actions secondary-tool-actions">
            <a href={emailHref} className="btn btn-outline"><Mail size={18} /> Email results instead</a>
            <button type="button" className="btn btn-outline" onClick={copyResults}><Copy size={18} /> {copied ? 'Copied' : 'Copy results'}</button>
            <button type="button" className="btn btn-outline" onClick={saveResults}><FileText size={18} /> {saved ? 'Saved on this device' : 'Save results'}</button>
          </div>
          <p className="form-note tool-privacy-note">By sending your check, you are asking Brodley Locksmiths to use these details to respond. <Link href="/privacy-policy">Privacy Policy</Link></p>
          <button type="button" className="text-link reset-button" onClick={reset}><RotateCcw size={16} /> Reset check</button>
        </aside>
      </section>
    </div>
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
        {items.slice(0, 8).map((item) => <li key={item}><CheckCircle2 size={17} /> {item}</li>)}
      </ul>
    </div>
  );
}
