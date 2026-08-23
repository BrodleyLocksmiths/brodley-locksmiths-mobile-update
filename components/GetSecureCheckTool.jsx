'use client';

import { useMemo, useRef, useState } from 'react';
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
  Wrench,
  ClipboardCheck,
  Sparkles
} from 'lucide-react';
import { contact } from '@/lib/siteData';
import { trackEvent } from '@/lib/analytics';

const propertyTypes = [
  {
    id: 'home',
    label: 'Homeowner',
    intro: 'A practical check for your doors, locks, keys, windows, side access and everyday home security.',
    starter: 'We will focus on the access points you use every day, plus the things that are easy to overlook.',
    placeholder: 'e.g. Clacton, Frinton, Harwich or a nearby village'
  },
  {
    id: 'tenant',
    label: 'Tenant',
    intro: 'A renter-friendly check for doors, locks and access issues you can spot and report clearly.',
    starter: 'This route focuses on what you are experiencing day to day and what may need reporting to a landlord or managing agent.',
    placeholder: 'e.g. Clacton flat, Frinton rental or nearby area'
  },
  {
    id: 'landlord',
    label: 'Landlord / rental property owner',
    intro: 'A landlord check for tenant changeovers, key control, void properties and door maintenance warning signs.',
    starter: 'We will focus on the checks that help prevent tenant lockouts, unclear key history and avoidable emergency repairs.',
    placeholder: 'e.g. Clacton rental, flat block or portfolio area'
  },
  {
    id: 'holiday-let',
    label: 'Holiday let owner',
    intro: 'A guest-turnover check for keys, key safes, reliable locks and smoother arrivals and departures.',
    starter: 'We will focus on the access routines and door wear that matter most between bookings.',
    placeholder: 'e.g. Walton holiday let, St Osyth park or nearby area'
  },
  {
    id: 'guest-house',
    label: 'Guest house / accommodation',
    intro: 'A higher-use property check for guest doors, staff keys, access points and lock reliability.',
    starter: 'We will focus on the doors and access routines that need to work cleanly every day.',
    placeholder: 'e.g. Harwich guest house, hotel or accommodation'
  },
  {
    id: 'caravan',
    label: 'Static caravan / holiday park',
    intro: 'A caravan and holiday-park check for seasonal access, keys, door locks, storage and outdoor security.',
    starter: 'We will focus on simple, reliable access before busy periods or changeovers.',
    placeholder: 'e.g. St Osyth caravan park, Jaywick or nearby site'
  },
  {
    id: 'business',
    label: 'Small business',
    intro: 'A business premises check for staff keys, front and rear doors, storage areas and reliable opening routines.',
    starter: 'We will focus on the locks and access points that could disrupt the business if they fail.',
    placeholder: 'e.g. Clacton shop, Harwich office or workshop'
  },
  {
    id: 'care',
    label: 'Elderly relative / care access',
    intro: 'A safe-access check for carers, family, key safes and doors that must remain easy to use.',
    starter: 'We will focus on reliable entry and reducing the chance of a stressful lockout or lock-in.',
    placeholder: 'e.g. Holland-on-Sea, Frinton or nearby area'
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
  '/services/gatemate-gate-security': {
    label: 'GateMate® Gate Security',
    text: 'For practical side-gate, rear-access, shed and workshop security with suitable outdoor hardware and key control.'
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
    group: 'Quick safety check',
    question: 'Can the property be locked and secured safely right now?',
    options: [
      { label: 'Yes — doors are secure and working normally', positive: 4, good: 'The property is secure right now.' },
      { label: 'Mostly — it locks, but a door is stiff or not fully reliable', reliability: 8, services: ['/services/door-will-not-lock', '/services/door-alignment-adjustment'], concern: 'A door that is becoming stiff or unreliable is worth checking before it becomes a lockout, lock-in or security issue.' },
      { label: 'No — a door will not lock, someone is locked out/in, or the property cannot be secured', reliability: 15, security: 5, urgent: true, services: ['/services/emergency-locksmith-tendring', '/services/locked-out-non-destructive-entry', '/services/door-will-not-lock'], concern: 'This may need urgent attention because the property may be insecure or someone may be unable to enter or leave safely.' }
    ]
  },
  {
    id: 'door-operation',
    group: 'Door reliability',
    question: 'How do the main doors feel when locking?',
    options: [
      { label: 'Smooth — no lifting, pulling, forcing or second attempt needed', positive: 5, good: 'The main door locks smoothly without obvious strain.' },
      { label: 'Slightly stiff — it catches, needs lifting or only locks smoothly sometimes', reliability: 8, services: ['/services/upvc-door-repairs-tendring', '/services/door-alignment-adjustment', '/services/multipoint-lock-repairs'], concern: 'Even slight stiffness can strain the locking mechanism and increase the chance of a future lockout, lock-in or failed multipoint lock.' },
      { label: 'Difficult — it jams, needs forcing or feels close to failing', reliability: 12, security: 2, urgent: true, services: ['/services/multipoint-lock-repairs', '/services/upvc-door-mechanism-replacement', '/services/door-alignment-adjustment'], concern: 'A door that needs forcing should be treated as high priority. It may fail suddenly and leave someone locked out, locked in or unable to secure the property.' }
    ]
  },
  {
    id: 'handle-key',
    group: 'Early warning signs',
    question: 'Do you notice any warning signs from the key, handle or lock?',
    options: [
      { label: 'No — the key turns cleanly and the handle feels firm', positive: 4, good: 'The key and handle are not showing obvious signs of strain.' },
      { label: 'Sometimes — the key sticks, the handle feels loose or the lock needs a second try', reliability: 7, services: ['/services/euro-cylinder-replacement', '/services/door-handle-replacement', '/services/upvc-door-repairs-tendring'], concern: 'Small changes in the feel of a key or handle can appear before a bigger lock, cylinder or mechanism failure.' },
      { label: 'Often — the key or handle regularly feels unreliable', reliability: 11, security: 1, urgent: true, services: ['/services/multipoint-lock-repairs', '/services/upvc-door-mechanism-replacement', '/services/door-handle-replacement'], concern: 'Repeated stiffness, loose handles or unreliable locking increase the risk of being locked out, locked in or unable to lock the door properly.' }
    ]
  },

  // Homeowner route
  {
    id: 'home-key-history',
    appliesTo: ['home'],
    group: 'Keys & lock history',
    question: 'How confident are you about who has keys to your home?',
    options: [
      { label: 'Confident — locks were changed when needed and keys are accounted for', positive: 5, good: 'You have a clear picture of who has access to your home.' },
      { label: 'Not fully sure — previous owners, family or trades may still have keys', security: 4, services: ['/services/lock-changes', '/services/move-in-lock-change-service'], concern: 'Unknown key history is worth tightening up, especially after moving home.' },
      { label: 'Concerned — keys have been lost, stolen or are unaccounted for', security: 7, reliability: 1, urgent: true, services: ['/services/lock-changes', '/services/euro-cylinder-replacement', '/services/broken-key-extraction'], concern: 'Lost, stolen or unaccounted-for keys can quickly become an access and security problem.' }
    ]
  },
  {
    id: 'home-windows',
    appliesTo: ['home'],
    group: 'Windows & patio doors',
    question: 'Are accessible windows and patio doors secure and working properly?',
    options: [
      { label: 'Yes — locks work and keys are available where needed', positive: 4, good: 'Accessible windows and patio doors are part of a sound security setup.' },
      { label: 'Mixed — some are old, missing keys or not recently checked', security: 3, reliability: 1, services: ['/services/window-lock-repairs', '/services/patio-door-lock-repairs', '/services/security-surveys'], concern: 'Accessible windows and patio doors are easy to overlook until a lock fails or a key is missing.' },
      { label: 'Poor — a window or patio door feels insecure, faulty or unreliable', security: 6, reliability: 2, services: ['/services/window-lock-repairs', '/services/patio-door-lock-repairs', '/services/security-surveys'], concern: 'A faulty window or patio door can leave an avoidable weak point.' }
    ]
  },
  {
    id: 'home-outdoor-access',
    appliesTo: ['home'],
    group: 'Side & rear access',
    question: 'How secure are your side gate, shed, garage or rear access routes?',
    options: [
      { label: 'Well secured — side access and outdoor storage are protected', positive: 4, good: 'Side access and outdoor storage have sensible protection in place.' },
      { label: 'Basic — there are locks, but they are old, awkward or not confidence-inspiring', security: 4, reliability: 2, services: ['/services/gatemate-gate-security', '/services/garage-shed-gate-locks'], concern: 'Older gate, shed and garage locks may not match the value of what they protect.' },
      { label: 'Weak — a gate, shed or rear route is easy to access or does not lock reliably', security: 7, reliability: 4, services: ['/services/gatemate-gate-security', '/services/garage-shed-gate-locks', '/services/security-surveys'], concern: 'Weak side access can make the rear of the property and outdoor storage easier to reach.' }
    ]
  },
  {
    id: 'home-shared-access',
    appliesTo: ['home'],
    group: 'Shared access',
    question: 'Do family, carers or trusted trades need a safe way to access the property?',
    options: [
      { label: 'No shared access is needed and spare keys are not hidden outside', positive: 4, good: 'There are no risky spare-key arrangements outside the property.' },
      { label: 'Yes — access is handled by a fitted key safe or clear plan', positive: 3, security: 1, services: ['/services/key-safes'], good: 'Shared access is managed through a clear, controlled process.' },
      { label: 'Yes — keys are sometimes hidden, left out or access feels awkward', security: 6, services: ['/services/key-safes', '/services/locksmith-for-care-access-key-safes'], concern: 'A fitted key safe or clearer access plan can be safer than hidden spare keys.' }
    ]
  },

  // Tenant route
  {
    id: 'tenant-reporting',
    appliesTo: ['tenant'],
    group: 'Reporting a fault',
    question: 'Have you reported any door, handle or lock issue to your landlord or managing agent?',
    options: [
      { label: 'No issue to report — doors and locks are working normally', positive: 4, good: 'There is no current door or lock issue needing attention.' },
      { label: 'Yes — I have reported it and it is being dealt with', positive: 2, reliability: 1, good: 'The issue has been raised, which helps stop a small problem being missed.' },
      { label: 'Not yet — there is a stiff door, loose handle or unreliable lock I need to report', reliability: 8, services: ['/services/landlord-locksmith-services', '/services/upvc-door-repairs-tendring'], concern: 'A stiff door, loose handle or unreliable lock is worth reporting early so it does not become a lockout or security problem.' },
      { label: 'I have reported it, but the door still will not lock or feels unsafe', reliability: 12, security: 3, urgent: true, services: ['/services/emergency-locksmith-tendring', '/services/door-will-not-lock', '/services/landlord-locksmith-services'], concern: 'If a rental door will not lock or feels unsafe, it needs prompt attention so the property can be secured.' }
    ]
  },
  {
    id: 'tenant-keys',
    appliesTo: ['tenant'],
    group: 'Keys & access',
    question: 'Do you have the keys and contact details you need if there is an access problem?',
    options: [
      { label: 'Yes — I have the keys I need and know who to contact', positive: 4, good: 'You have a clear access plan if a key or door issue occurs.' },
      { label: 'Mostly — I have keys, but I am unsure about spares or who to call out of hours', security: 3, services: ['/services/landlord-locksmith-services'], concern: 'Knowing the correct contact route can reduce stress if there is a lock or key problem.' },
      { label: 'No — keys are missing, damaged or I do not know who to contact', security: 6, reliability: 2, urgent: true, services: ['/services/locked-out-non-destructive-entry', '/services/broken-key-extraction', '/services/landlord-locksmith-services'], concern: 'Missing, damaged or uncertain keys can create an access problem quickly. Keep the landlord or managing agent informed.' }
    ]
  },
  {
    id: 'tenant-security',
    appliesTo: ['tenant'],
    group: 'Day-to-day security',
    question: 'Do you feel able to lock the home securely each day?',
    options: [
      { label: 'Yes — doors, windows and patio doors can be locked without difficulty', positive: 4, good: 'The main access points can be secured without difficulty.' },
      { label: 'Mostly — one access point is old, awkward or has not been checked recently', security: 3, reliability: 2, services: ['/services/window-lock-repairs', '/services/patio-door-lock-repairs', '/services/landlord-locksmith-services'], concern: 'An awkward window, patio door or lock is worth noting and reporting before it becomes a bigger problem.' },
      { label: 'No — there is an access point that does not feel secure', security: 6, reliability: 3, services: ['/services/security-surveys', '/services/landlord-locksmith-services'], concern: 'A door or window that does not feel secure should be reported clearly so the right repair can be arranged.' }
    ]
  },

  // Landlord route
  {
    id: 'landlord-turnover',
    appliesTo: ['landlord'],
    group: 'Tenant changeovers',
    question: 'How are locks and keys handled between tenants?',
    options: [
      { label: 'Locks and keys are reviewed at every tenant change', positive: 5, good: 'Locks and keys are reviewed as part of each tenant changeover.' },
      { label: 'Keys are collected, but locks are not always changed or checked', security: 5, services: ['/services/landlord-locksmith-services', '/services/lock-changes'], concern: 'Collected keys do not always tell the full story; copies may still exist.' },
      { label: 'There have been missing keys, tenant issues or unclear key history', security: 8, services: ['/services/landlord-locksmith-services', '/services/lock-changes', '/services/move-in-lock-change-service'], concern: 'Unclear rental key history is a strong reason to consider lock changes or upgrades.' }
    ]
  },
  {
    id: 'landlord-maintenance',
    appliesTo: ['landlord'],
    group: 'Door maintenance',
    question: 'How reliable are the doors for tenants day to day?',
    options: [
      { label: 'Reliable — tenants are not reporting stiff handles or difficult locking', positive: 4, good: 'Tenant doors are working reliably without reported locking strain.' },
      { label: 'Occasional reports of stiffness, loose handles or hard-to-lock doors', reliability: 7, services: ['/services/upvc-door-repairs-tendring', '/services/door-alignment-adjustment', '/services/landlord-locksmith-services'], concern: 'Tenant reports of stiffness should be checked early to reduce lockout and mechanism failure risk.' },
      { label: 'Repeated problems or a door that feels close to failing', reliability: 12, services: ['/services/multipoint-lock-repairs', '/services/upvc-door-mechanism-replacement', '/services/landlord-locksmith-services'], concern: 'Repeated rental door problems can become urgent if a tenant is locked out, locked in or unable to secure the property.' }
    ]
  },
  {
    id: 'landlord-access',
    appliesTo: ['landlord'],
    group: 'Agent & trade access',
    question: 'How are agent, contractor or cleaner keys controlled?',
    options: [
      { label: 'Controlled — keys are logged or access uses a fitted key safe', positive: 4, good: 'Agent and trade access is managed through a clear process.' },
      { label: 'Mostly controlled, but spare keys or access arrangements could be clearer', security: 4, services: ['/services/key-safes', '/services/landlord-locksmith-services'], concern: 'A clearer key or key-safe process can make rental access easier to manage.' },
      { label: 'Unclear — several people may hold keys or keys are passed around informally', security: 7, services: ['/services/key-safes', '/services/lock-changes', '/services/landlord-locksmith-services'], concern: 'Informal shared keys can make it hard to know who has access to a rental property.' }
    ]
  },
  {
    id: 'landlord-voids',
    appliesTo: ['landlord'],
    group: 'Empty periods',
    question: 'How is the property checked and secured while empty?',
    options: [
      { label: 'Checked — doors, windows, locks and key control are reviewed between lets', positive: 4, good: 'Empty-period security is part of the rental handover routine.' },
      { label: 'Basic — it is locked up, but a full door and lock check is not routine', security: 3, reliability: 2, services: ['/services/security-surveys', '/services/landlord-locksmith-services'], concern: 'An empty period is a useful time to catch worn locks, weak cylinders or door alignment issues.' },
      { label: 'Concerned — the property is empty and there are known lock, key or door issues', security: 6, reliability: 7, services: ['/services/landlord-locksmith-services', '/services/lock-changes', '/services/upvc-door-repairs-tendring'], concern: 'Known access or door problems are best dealt with before the next tenant moves in.' }
    ]
  },

  // Holiday let route
  {
    id: 'holiday-turnover',
    appliesTo: ['holiday-let'],
    group: 'Guest turnover',
    question: 'How are keys, codes and locks handled between bookings?',
    options: [
      { label: 'Controlled — access is organised and locks work smoothly', positive: 5, good: 'Guest access is organised and controlled between bookings.' },
      { label: 'It works, but keys, codes or locks are not reviewed as often as they should be', security: 4, reliability: 2, services: ['/services/holiday-let-guest-house-security', '/services/key-safes'], concern: 'Guest turnover can create access gaps if keys, codes and locks are not reviewed regularly.' },
      { label: 'Access is awkward, keys have gone missing or guests struggle with the door', security: 7, reliability: 7, services: ['/services/holiday-let-guest-house-security', '/services/key-safes', '/services/upvc-door-repairs-tendring'], concern: 'Guest access problems can quickly affect security, reviews and booking handovers.' }
    ]
  },
  {
    id: 'holiday-key-safe',
    appliesTo: ['holiday-let'],
    group: 'Arrival access',
    question: 'How is out-of-hours guest access handled?',
    options: [
      { label: 'Clearly — a fitted key safe or reliable handover process is in place', positive: 4, good: 'Out-of-hours access has a clear and controlled plan.' },
      { label: 'Sometimes awkward — guests may need to wait for keys or instructions', security: 3, services: ['/services/key-safes', '/services/holiday-let-guest-house-security'], concern: 'A more reliable access plan can reduce guest arrival issues.' },
      { label: 'Risky — keys are hidden, codes are shared loosely or access is uncertain', security: 7, services: ['/services/key-safes', '/services/lock-changes'], concern: 'Hidden keys or loosely shared codes can create avoidable security gaps.' }
    ]
  },
  {
    id: 'holiday-doors',
    appliesTo: ['holiday-let'],
    group: 'Door wear',
    question: 'Do doors and handles stay reliable through regular guest use?',
    options: [
      { label: 'Yes — doors lock smoothly and guests do not report problems', positive: 4, good: 'Door and handle reliability is not causing guest issues.' },
      { label: 'Mostly — there is occasional stiffness or an awkward handle', reliability: 6, services: ['/services/door-alignment-adjustment', '/services/upvc-door-repairs-tendring'], concern: 'Small door issues are easier to deal with before a guest is unable to lock or enter.' },
      { label: 'No — the door is regularly difficult to lock or guests have struggled before', reliability: 11, services: ['/services/multipoint-lock-repairs', '/services/holiday-let-guest-house-security'], concern: 'A difficult guest door can become an urgent access problem during a booking.' }
    ]
  },
  {
    id: 'holiday-outdoor',
    appliesTo: ['holiday-let'],
    group: 'Outdoor access',
    question: 'Are side gates, sheds or outdoor storage secure for guest use?',
    options: [
      { label: 'Yes — outdoor access is controlled and locks work properly', positive: 4, good: 'Outdoor access is controlled for guests and property owners.' },
      { label: 'Basic — locks are old, awkward or have not been checked recently', security: 4, reliability: 2, services: ['/services/gatemate-gate-security', '/services/garage-shed-gate-locks'], concern: 'Outdoor locks are worth checking before busy guest periods.' },
      { label: 'No — a gate, shed or storage area is easy to access or unreliable', security: 7, reliability: 4, services: ['/services/gatemate-gate-security', '/services/garage-shed-gate-locks'], concern: 'Weak outdoor access can make storage or the rear of the property easier to reach.' }
    ]
  },

  // Guest house route
  {
    id: 'accommodation-keys',
    appliesTo: ['guest-house'],
    group: 'Guest & staff keys',
    question: 'How well controlled are guest and staff keys?',
    options: [
      { label: 'Controlled — keys are clearly managed and returned', positive: 5, good: 'Guest and staff key control is clear.' },
      { label: 'Mostly controlled, but older keys or spare access have not been reviewed', security: 4, services: ['/services/holiday-let-guest-house-security', '/services/lock-changes'], concern: 'Older key sets and spare access are worth reviewing in busy accommodation.' },
      { label: 'Unclear — keys can go missing or it is hard to know who has access', security: 7, services: ['/services/holiday-let-guest-house-security', '/services/lock-changes'], concern: 'Unclear key control can affect both guest confidence and property security.' }
    ]
  },
  {
    id: 'accommodation-doors',
    appliesTo: ['guest-house'],
    group: 'Door reliability',
    question: 'Do guest doors, handles and locks stay reliable during regular use?',
    options: [
      { label: 'Yes — doors lock smoothly and there are no regular reports', positive: 4, good: 'Guest doors are operating reliably.' },
      { label: 'Mostly — one or two doors feel stiff, loose or awkward', reliability: 7, services: ['/services/door-alignment-adjustment', '/services/door-handle-replacement'], concern: 'High-use doors are worth checking early when handles or locking start to feel different.' },
      { label: 'No — there are repeated problems or a door feels close to failing', reliability: 12, services: ['/services/multipoint-lock-repairs', '/services/upvc-door-mechanism-replacement'], concern: 'Repeated door issues can quickly become urgent when guests are unable to enter, leave or secure a room.' }
    ]
  },
  {
    id: 'accommodation-access',
    appliesTo: ['guest-house'],
    group: 'Everyday access',
    question: 'Is there a clear plan for late arrivals, cleaners and maintenance visits?',
    options: [
      { label: 'Yes — access is organised and controlled', positive: 4, good: 'Late arrivals and trusted access have a clear plan.' },
      { label: 'Mostly — it works, but instructions or spare keys could be clearer', security: 3, services: ['/services/key-safes', '/services/holiday-let-guest-house-security'], concern: 'A clearer process can make trusted access easier without relying on loose keys.' },
      { label: 'No — access often depends on hidden keys or informal arrangements', security: 7, services: ['/services/key-safes', '/services/holiday-let-guest-house-security'], concern: 'Hidden keys and informal access can create unnecessary security and service issues.' }
    ]
  },
  {
    id: 'accommodation-perimeter',
    appliesTo: ['guest-house'],
    group: 'Windows & rear access',
    question: 'Are accessible windows, patio doors and rear access checked regularly?',
    options: [
      { label: 'Yes — they are checked and work correctly', positive: 4, good: 'Windows, patio doors and rear access are part of the property routine.' },
      { label: 'Some are old or not checked as often as they should be', security: 3, reliability: 1, services: ['/services/window-lock-repairs', '/services/patio-door-lock-repairs'], concern: 'Less-used access points can become weak spots when they are not checked regularly.' },
      { label: 'There is an access point that feels insecure or unreliable', security: 6, reliability: 3, services: ['/services/security-surveys', '/services/window-lock-repairs'], concern: 'An insecure window, patio door or rear route is worth dealing with before it affects guests or the property.' }
    ]
  },

  // Caravan route
  {
    id: 'caravan-season',
    appliesTo: ['caravan'],
    group: 'Seasonal readiness',
    question: 'How ready is the caravan or holiday-park property for regular use?',
    options: [
      { label: 'Ready — locks, keys and access are checked before busy periods', positive: 5, good: 'Locks and access are reviewed before busy periods.' },
      { label: 'Mostly ready — spare keys, key safes or door locks could be better organised', security: 4, reliability: 2, services: ['/services/caravan-holiday-park-locksmith-services', '/services/key-safes'], concern: 'Caravan access is easier to manage when keys, key safes and door locks are ready before busy periods.' },
      { label: 'Not ready — keys are missing, locks are old or access has caused problems before', security: 7, reliability: 7, services: ['/services/caravan-holiday-park-locksmith-services', '/services/key-safes', '/services/lock-changes'], concern: 'Old locks, missing keys or poor access planning can create unnecessary stress during holiday periods.' }
    ]
  },
  {
    id: 'caravan-doors',
    appliesTo: ['caravan'],
    group: 'Door & lock condition',
    question: 'How do the caravan doors and handles feel in day-to-day use?',
    options: [
      { label: 'Reliable — doors close, lock and unlock easily', positive: 4, good: 'Caravan doors and handles are working reliably.' },
      { label: 'A little stiff or awkward at times', reliability: 6, services: ['/services/caravan-holiday-park-locksmith-services', '/services/door-alignment-adjustment'], concern: 'A stiff caravan door or lock is worth checking before a holiday period or changeover.' },
      { label: 'Unreliable — a door, handle or lock is difficult to use', reliability: 11, services: ['/services/caravan-holiday-park-locksmith-services', '/services/lock-changes'], concern: 'An unreliable caravan door can leave occupants unable to secure or access the property when they need to.' }
    ]
  },
  {
    id: 'caravan-access',
    appliesTo: ['caravan'],
    group: 'Shared access',
    question: 'How is shared family, guest or site access managed?',
    options: [
      { label: 'Clearly — keys and access are known and controlled', positive: 4, good: 'Shared access is controlled and understood.' },
      { label: 'Mostly — there are spare keys, but the plan could be clearer', security: 3, services: ['/services/key-safes', '/services/caravan-holiday-park-locksmith-services'], concern: 'A clearer key or key-safe plan can reduce arrival and access problems.' },
      { label: 'Unclear — keys are shared loosely, hidden or have gone missing', security: 7, services: ['/services/key-safes', '/services/lock-changes'], concern: 'Loose or missing keys can create both access problems and security concerns.' }
    ]
  },
  {
    id: 'caravan-outdoor',
    appliesTo: ['caravan'],
    group: 'Storage & outdoor access',
    question: 'How secure are storage boxes, sheds, gates or outdoor equipment?',
    options: [
      { label: 'Secure — storage and outdoor access are protected', positive: 4, good: 'Outdoor storage and access are protected.' },
      { label: 'Basic — locks are old, weathered or not recently checked', security: 4, reliability: 3, services: ['/services/gatemate-gate-security', '/services/garage-shed-gate-locks'], concern: 'Weathered outdoor locks can become awkward or unreliable over time.' },
      { label: 'Weak — storage or side access is easy to reach or does not lock properly', security: 7, reliability: 4, services: ['/services/gatemate-gate-security', '/services/garage-shed-gate-locks'], concern: 'Weak outdoor access can leave storage and the property easier to reach.' }
    ]
  },

  // Business route
  {
    id: 'business-keys',
    appliesTo: ['business'],
    group: 'Staff & key control',
    question: 'How well controlled are staff keys and business access points?',
    options: [
      { label: 'Controlled — keys and access points are clearly managed', positive: 5, good: 'Staff key control is clear and organised.' },
      { label: 'Somewhat controlled, but old staff keys or rear access have not been reviewed', security: 5, services: ['/services/locksmith-for-small-businesses', '/services/lock-changes'], concern: 'Staff changes and rear doors are common reasons for a business lock review.' },
      { label: 'Unclear — keys, rear doors or storage areas are not well controlled', security: 8, reliability: 2, services: ['/services/locksmith-for-small-businesses', '/services/security-surveys', '/services/lock-changes'], concern: 'Unclear business access can affect stock, staff safety and day-to-day confidence.' }
    ]
  },
  {
    id: 'business-doors',
    appliesTo: ['business'],
    group: 'Opening reliability',
    question: 'Could a stiff or failed lock stop the business opening or closing properly?',
    options: [
      { label: 'Low concern — doors and locks are reliable', positive: 4, good: 'Door and lock reliability is not currently affecting opening or closing.' },
      { label: 'Some concern — one door or shutter is starting to feel awkward', reliability: 7, services: ['/services/door-alignment-adjustment', '/services/locksmith-for-small-businesses'], concern: 'An awkward business door is worth checking before it disrupts opening, closing or staff access.' },
      { label: 'High concern — a lock, handle or door already causes delays or difficulty', reliability: 12, services: ['/services/emergency-locksmith-tendring', '/services/multipoint-lock-repairs', '/services/locksmith-for-small-businesses'], concern: 'A failing business door or lock can disrupt trading and may leave the premises insecure.' }
    ]
  },
  {
    id: 'business-rear-access',
    appliesTo: ['business'],
    group: 'Rear access & storage',
    question: 'How secure are rear doors, storage areas, gates and side access?',
    options: [
      { label: 'Secure — rear access and storage are controlled', positive: 4, good: 'Rear access and storage are included in the security plan.' },
      { label: 'Basic — there are locks, but they are old or have not been reviewed', security: 4, services: ['/services/locksmith-for-small-businesses', '/services/gatemate-gate-security'], concern: 'Rear access is worth checking because it is often less visible during the day.' },
      { label: 'Weak — a rear door, gate or storage area feels easy to access', security: 7, services: ['/services/security-surveys', '/services/locksmith-for-small-businesses'], concern: 'Weak rear access can affect stock, staff safety and the security of the premises.' }
    ]
  },
  {
    id: 'business-plan',
    appliesTo: ['business'],
    group: 'If a lock fails',
    question: 'Is there a clear plan if a key, lock or door fails outside normal hours?',
    options: [
      { label: 'Yes — the right contacts and access arrangements are known', positive: 4, good: 'There is a clear plan for an unexpected access problem.' },
      { label: 'Mostly — we know who to call, but spare access or instructions could be clearer', security: 2, services: ['/services/locksmith-for-small-businesses'], concern: 'A clearer plan can reduce disruption if a key or lock fails.' },
      { label: 'No — an unexpected lock problem would cause real disruption', reliability: 5, security: 3, services: ['/services/emergency-locksmith-tendring', '/services/locksmith-for-small-businesses'], concern: 'A simple lock-failure plan can reduce stress if the premises cannot be opened or secured.' }
    ]
  },

  // Care route
  {
    id: 'care-reliability',
    appliesTo: ['care'],
    group: 'Reliable entry',
    question: 'Could a stiff door, lost key or awkward access put someone vulnerable at risk?',
    options: [
      { label: 'Low concern — access is reliable and there is a sensible backup plan', positive: 5, good: 'Reliable access and a backup plan are in place.' },
      { label: 'Some concern — access works, but the door or keys could be easier', reliability: 7, security: 2, services: ['/services/locksmith-for-care-access-key-safes', '/services/key-safes', '/services/door-alignment-adjustment'], concern: 'For care access, even slight door or key issues are worth checking before they become urgent.' },
      { label: 'High concern — access has already caused stress, delays or near lockouts', reliability: 12, security: 4, urgent: true, services: ['/services/locksmith-for-care-access-key-safes', '/services/key-safes', '/services/upvc-door-repairs-tendring'], concern: 'Care access problems should be treated as high priority because they can affect safety and peace of mind.' }
    ]
  },
  {
    id: 'care-key-safe',
    appliesTo: ['care'],
    group: 'Key safe & access plan',
    question: 'How do carers or family get in if they are needed?',
    options: [
      { label: 'Clearly — a fitted key safe or agreed access plan is in place', positive: 4, good: 'Carers and family have a clear, controlled access plan.' },
      { label: 'Mostly — a key is available, but the arrangement could be more secure', security: 4, services: ['/services/key-safes', '/services/locksmith-for-care-access-key-safes'], concern: 'A properly fitted key safe can make trusted access safer and easier to manage.' },
      { label: 'Uncertain — keys are hidden, passed around or access depends on luck', security: 7, services: ['/services/key-safes', '/services/locksmith-for-care-access-key-safes'], concern: 'Uncertain emergency access can cause stress when help is needed quickly.' }
    ]
  },
  {
    id: 'care-door-use',
    appliesTo: ['care'],
    group: 'Door use',
    question: 'Can the main door be locked and unlocked comfortably without force?',
    options: [
      { label: 'Yes — the door and handle are easy to use', positive: 4, good: 'The main door can be used without obvious strain.' },
      { label: 'Sometimes difficult — the handle is stiff, loose or the door needs lifting', reliability: 8, services: ['/services/door-alignment-adjustment', '/services/door-handle-replacement'], concern: 'An awkward door can be harder to manage for someone with limited strength or mobility.' },
      { label: 'Difficult — the door often needs force or feels unreliable', reliability: 12, urgent: true, services: ['/services/upvc-door-repairs-tendring', '/services/multipoint-lock-repairs'], concern: 'A door that needs force can become a serious access issue and is worth dealing with promptly.' }
    ]
  },
  {
    id: 'care-backup',
    appliesTo: ['care'],
    group: 'Back-up plan',
    question: 'Is there a safe back-up plan if a key is lost or a lock fails?',
    options: [
      { label: 'Yes — trusted people know the plan and access is controlled', positive: 4, good: 'There is a clear back-up plan if access is needed.' },
      { label: 'Partly — someone could help, but the plan is not fully clear', security: 3, services: ['/services/locksmith-for-care-access-key-safes'], concern: 'A clearer plan can reduce stress if a key, lock or door problem happens unexpectedly.' },
      { label: 'No — there is no safe back-up plan at the moment', security: 6, reliability: 2, services: ['/services/key-safes', '/services/locksmith-for-care-access-key-safes'], concern: 'A safe access plan is worth putting in place before it is urgently needed.' }
    ]
  }
];

function visibleQuestionsFor(type) {
  // Every route gets the safety, door-operation and warning-sign questions first.
  // The remaining questions are selected for the chosen property or role.
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

function foundationLevel(score) {
  if (score >= 18) return 'Several safeguards selected';
  if (score >= 9) return 'Some safeguards selected';
  if (score > 0) return 'A few safeguards selected';
  return 'More detail needed';
}

function urgencyLabel(totals) {
  if (totals.reliability >= 18 || totals.security >= 20 || totals.urgentCount >= 2) return 'High priority';
  if (totals.reliability >= 9 || totals.security >= 9 || totals.urgentCount >= 1) return 'Worth checking';
  return 'Keep monitoring';
}

function buildAssistantSummary({ totals, property, area, location, answeredCount }) {
  const place = location?.trim() ? location.trim() : area.label;
  const type = property.id;

  if (totals.emergency) {
    return `Your answers suggest an urgent door, lock or access issue at this ${property.label.toLowerCase()} in ${place}. The priority is to get the property secure and make sure nobody is left locked out, locked in or relying on a door that may fail further.`;
  }
  if (answeredCount === 0) {
    return `Answer the questions that apply to this ${property.label.toLowerCase()} in ${place} and we will build a practical security and door-reliability result.`;
  }
  if (type === 'tenant') {
    if (totals.reliability >= 9 || totals.security >= 9) {
      return `For this rented home in ${place}, your answers highlight details worth reporting clearly to the landlord or managing agent. Mention any stiffness, loose handles, difficult keys, missing keys or access point that does not feel secure so the right repair can be arranged before it becomes more urgent.`;
    }
    return `For this rented home in ${place}, the answers do not point to a major immediate issue. Keep a note of any change in how the door, key or handle feels, and report it early if something starts to become awkward or unreliable.`;
  }
  if (type === 'landlord') {
    if (totals.reliability >= 9 || totals.security >= 9) {
      return `For this rental property in ${place}, the answers point to practical areas to tighten up around tenant changeovers, key control and door reliability. Dealing with stiffness or unclear access early can help prevent tenant lockouts, emergency callouts and avoidable gaps between lets.`;
    }
    return `For this rental property in ${place}, the current checks show a sound starting point. Keeping key control, tenant reports and empty-period checks consistent will help protect the property and reduce avoidable callouts.`;
  }
  if (type === 'holiday-let' || type === 'guest-house') {
    if (totals.reliability >= 9 || totals.security >= 9) {
      return `For this ${property.label.toLowerCase()} in ${place}, the main focus is reliable guest access. A stiff door, unclear key process or loose shared access can quickly affect arrivals, reviews and security, so deal with the clearest weak point first.`;
    }
    return `For this ${property.label.toLowerCase()} in ${place}, the answers show a sensible access setup. Keep locks, keys and guest handovers under review ahead of busy periods.`;
  }
  if (type === 'care') {
    if (totals.reliability >= 9 || totals.security >= 9) {
      return `For this care-access property in ${place}, the priority is reliable, low-stress entry. Any stiff door, unclear key arrangement or weak back-up plan is worth addressing before access is urgently needed.`;
    }
    return `For this care-access property in ${place}, the answers suggest a sensible starting point. Keep the access plan simple, known to the right people and easy to use.`;
  }
  if (totals.reliability >= 18 && totals.security >= 14) {
    return `For this ${property.label.toLowerCase()} in ${place}, the main message is to act before a small door or lock problem becomes urgent. Your answers suggest both security concerns and door/lock reliability warning signs.`;
  }
  if (totals.reliability >= 18) {
    return `For this ${property.label.toLowerCase()} in ${place}, the biggest concern is door and lock reliability. Stiffness, loose handles, difficult keys or multipoint strain can lead to a lockout, lock-in or a door that will not secure properly.`;
  }
  if (totals.security >= 18) {
    return `For this ${property.label.toLowerCase()} in ${place}, the main concern is security and access control. The answers point towards key history, older cylinders, shared access or weak points that would benefit from a lock review.`;
  }
  if (totals.services.includes('/services/gatemate-gate-security')) {
    return `For this ${property.label.toLowerCase()} in ${place}, outdoor access is worth bringing into the security plan. A side or rear gate should close cleanly, lock reliably and only give access to the right people.`;
  }
  if (totals.good.length >= 4 && totals.concerns.length <= 2) {
    return `The answers show several useful safeguards already in place for this ${property.label.toLowerCase()}. There may still be a couple of areas worth checking, but the overall picture is reasonably well covered.`;
  }
  if (totals.concerns.length >= 3) {
    return `Your answers show a few practical areas worth reviewing. Start with anything that affects secure entry, exit or reliable locking, then work through the less-urgent access points.`;
  }
  return `Your answers do not suggest a major immediate issue, but they have highlighted useful areas to keep an eye on. Check things early if a door, key or handle starts to feel stiff, worn or uncertain.`;
}

function buildNextStep(totals, property) {
  if (totals.emergency) return 'Suggested next step: call Brodley Locksmiths now so the door, lock or access problem can be dealt with before it leaves the property insecure.';
  if (property.id === 'tenant') {
    if (totals.reliability >= 9 || totals.security >= 9) return 'Suggested next step: report the specific issue to the landlord or managing agent, including whether the door is stiff, the handle is loose, the key sticks or an access point does not feel secure.';
    return 'Suggested next step: keep this result and report any change in the door, key or lock to the landlord or managing agent before it becomes harder to use.';
  }
  if (property.id === 'landlord' && (totals.reliability >= 9 || totals.security >= 9)) return 'Suggested next step: arrange a rental lock-and-door review, starting with any tenant reports, key-control gaps or empty-property concerns.';
  if (totals.reliability >= 18) return 'Suggested next step: arrange a door and lock reliability check, especially if any door needs lifting, pulling, forcing or repeated attempts to lock.';
  if (totals.security >= 18) return 'Suggested next step: arrange a security survey or lock review to look at key control, cylinders, window locks, outbuildings and access points.';
  if (totals.services.includes('/services/gatemate-gate-security')) return 'Suggested next step: check that the side or rear gate closes cleanly, locks reliably and gives controlled access to the garden, shed, garage or rear of the property.';
  if (totals.services.includes('/services/key-safes')) return 'Suggested next step: consider whether a properly fitted key safe or access plan would make the property safer and easier to manage.';
  if (totals.services.includes('/services/anti-snap-lock-upgrades')) return 'Suggested next step: check whether the main door cylinders are suitable, especially on uPVC or composite doors.';
  return 'Suggested next step: keep this checklist in mind and contact Brodley Locksmiths if anything starts to feel stiff, worn, insecure or uncertain.';
}


function buildActionPlan(totals, property) {
  if (totals.emergency) {
    return [
      { title: '1. Get the property secure', text: 'Call now if the door will not lock, someone is locked in or out, or the property cannot be secured safely.', href: '/services/emergency-locksmith-tendring', label: 'Urgent locksmith help', tone: 'urgent' },
      { title: '2. Avoid forcing the handle', text: 'Extra force can damage a cylinder or multipoint mechanism. Leave the door in the safest position you can until it is checked.', href: '/services/door-will-not-lock', label: 'Door will not lock', tone: 'urgent' },
      { title: '3. Keep the summary', text: 'Your answers can help explain the issue quickly when you call or send an enquiry.', href: '/quote', label: 'Request help', tone: 'neutral' }
    ];
  }

  if (property.id === 'tenant') {
    const plan = [];
    if (totals.reliability >= 9 || totals.security >= 9) {
      plan.push({ title: 'Report the issue clearly', text: 'Tell the landlord or managing agent exactly what you have noticed: stiffness, lifting, a loose handle, a sticking key, missing keys or an access point that does not feel secure.', href: '/services/landlord-locksmith-services', label: 'Rental property support', tone: 'priority' });
    }
    plan.push({ title: 'Do not force the lock or handle', text: 'Forcing a stiff door can make a small problem worse. Use the door normally where safe and keep a note of what is happening.', href: '/services/door-will-not-lock', label: 'Door reliability', tone: 'neutral' });
    if (totals.services.includes('/services/locked-out-non-destructive-entry')) {
      plan.push({ title: 'Use the urgent route if access fails', text: 'If you are locked out, locked in or the property cannot be secured, contact the landlord or managing agent and get urgent locksmith help where appropriate.', href: '/services/locked-out-non-destructive-entry', label: 'Urgent access help', tone: 'urgent' });
    }
    return plan.slice(0, 3);
  }

  const plan = [];
  if (totals.reliability >= 9) {
    plan.push({ title: 'Protect the door from a bigger failure', text: 'Stiffness, lifting, loose handles or second attempts are early signs worth dealing with before they create a lockout or lock-in.', href: '/services/door-alignment-adjustment', label: 'Door alignment & repair', tone: 'priority' });
  }
  if (totals.security >= 9) {
    plan.push({ title: 'Regain control of access', text: 'Start with keys, cylinders and the entrances that matter most. Small upgrades can often make a noticeable difference.', href: '/services/lock-changes', label: 'Lock changes & upgrades', tone: 'priority' });
  }
  if (property.id === 'landlord') {
    plan.push({ title: 'Make the rental routine repeatable', text: 'Use the same lock, key-control and door-check routine at tenant changes, during empty periods and when contractors need access.', href: '/services/landlord-locksmith-services', label: 'Landlord locksmith support', tone: 'priority' });
  }
  if (totals.services.includes('/services/gatemate-gate-security')) {
    plan.push({ title: 'Secure side and rear access', text: 'A gate that closes, throws and locks cleanly makes the rear of the property, sheds and storage less accessible. Check the lock, key control, hinges and alignment together.', href: '/services/gatemate-gate-security', label: 'GateMate® gate security', tone: 'priority' });
  }
  if (totals.services.includes('/services/key-safes')) {
    plan.push({ title: 'Make shared access simpler', text: 'A properly fitted key safe or clear access plan can reduce stress for family, carers, guests, tenants or trusted trades.', href: '/services/key-safes', label: 'Key safe options', tone: 'positive' });
  }
  if (!plan.length) {
    plan.push({ title: 'Maintain the safeguards already in place', text: 'Your answers suggest a sound starting point. Check doors, keys and access points whenever something starts to feel different.', href: '/services/security-surveys', label: 'Optional security check', tone: 'positive' });
  }
  if (plan.length < 3) {
    plan.push({ title: 'Use a clear order', text: 'Deal with anything that affects safe entry, exit or locking first. Then work through security upgrades and less-urgent access points.', href: '/get-secure-check', label: 'Keep this check handy', tone: 'neutral' });
  }
  return plan.slice(0, 3);
}

function buildReport({ property, area, location, totals, securityLevel, reliabilityLevel, assistantSummary, nextStepText, actionPlan, lead }) {
  const recommended = actionPlan[0] ? serviceInfo[actionPlan[0].href]?.label || actionPlan[0].label : 'Security Survey';
  const mainPriorities = totals.concerns.length ? totals.concerns.slice(0, 4) : ['No major concerns were selected in this check.'];
  const foundationItems = totals.good.length ? totals.good.slice(0, 4) : ['No security foundations were selected in this check yet.'];

  return [
    'GET SECURE PROPERTY CHECK',
    '',
    'CUSTOMER DETAILS',
    `Name: ${lead.name || 'Not provided'}`,
    `Phone: ${lead.phone || 'Not provided'}`,
    `Email: ${lead.email || 'Not provided'}`,
    `Preferred contact: ${lead.preferredContact}`,
    `Best time to contact: ${lead.bestTime}`,
    '',
    'PROPERTY & LOCATION',
    `Property type: ${property.label}`,
    `Tendring area: ${area.label}`,
    `Town / village / property note: ${location || 'Not provided'}`,
    '',
    'RESULTS',
    `Security: ${securityLevel.label} (${totals.security})`,
    `Door & lock reliability: ${reliabilityLevel.label} (${totals.reliability})`,
    `Security foundations: ${foundationLevel(totals.positive)} (${totals.positive})`,
    `Overall priority: ${urgencyLabel(totals)}`,
    `Recommended next service: ${recommended}`,
    '',
    'TAILORED SUMMARY',
    assistantSummary,
    nextStepText,
    '',
    'MAIN PRIORITIES',
    ...mainPriorities.map((item) => `- ${item}`),
    '',
    'SECURITY FOUNDATIONS SELECTED',
    ...foundationItems.map((item) => `- ${item}`),
    '',
    'CUSTOMER NOTE',
    lead.notes || 'No additional note added.',
    '',
    'REQUESTED HELP',
    lead.helpType,
    ''
  ].join('\n');
}

function GetSecureProgressCard({ answered, total }) {
  return (
    <aside className="get-secure-progress-card" aria-label="How the Get Secure check works">
      <ClipboardCheck size={30} />
      <p className="eyebrow gold">Get Secure</p>
      <h2>A quick check, tailored to the property.</h2>
      <p>Answer the questions that apply. Your results appear at the end.</p>
      <div className="get-secure-progress-list">
        <span><b>1</b> Choose the right route</span>
        <span><b>2</b> Answer the relevant questions</span>
        <span><b>3</b> Reveal your results</span>
      </div>
      <div className="get-secure-answer-count"><strong>{answered}</strong> of {total} questions answered</div>
    </aside>
  );
}

export default function GetSecureCheckTool() {
  const [answers, setAnswers] = useState({});
  const [areaId, setAreaId] = useState('unsure');
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('home');
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);
  const [resultsStage, setResultsStage] = useState('questions');
  const [resultsMessage, setResultsMessage] = useState('');
  const [lead, setLead] = useState({ name: '', phone: '', email: '', preferredContact: 'Phone call', bestTime: 'Any time', helpType: 'A quick call to talk it through', notes: '', website: '' });
  const [sendState, setSendState] = useState('idle');
  const [sendMessage, setSendMessage] = useState('');
  const resultRef = useRef(null);

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
        if (/(will not lock|locked out|locked in|cannot be secured|feels unsafe)/i.test(option.label)) base.emergency = true;
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
    if (propertyType === 'tenant') base.services.push('/services/landlord-locksmith-services');
    if (propertyType === 'landlord') base.services.push('/services/landlord-locksmith-services');
    if (propertyType === 'holiday-let' || propertyType === 'guest-house') base.services.push('/services/holiday-let-guest-house-security');
    if (propertyType === 'business') base.services.push('/services/locksmith-for-small-businesses');
    if (propertyType === 'care') base.services.push('/services/locksmith-for-care-access-key-safes');

    return { ...base, services: [...new Set(base.services)].slice(0, 8) };
  }, [answeredOptions, area, property, propertyType]);

  const securityLevel = levelFor(totals.security, 'security');
  const reliabilityLevel = levelFor(totals.reliability, 'reliability');
  const assistantSummary = buildAssistantSummary({ totals, property, area, location, answeredCount: answeredOptions.length });
  const nextStepText = buildNextStep(totals, property);
  const actionPlan = buildActionPlan(totals, property);
  const reportText = buildReport({ property, area, location, totals, securityLevel, reliabilityLevel, assistantSummary, nextStepText, actionPlan, lead });
  const recommendedService = actionPlan[0] ? serviceInfo[actionPlan[0].href]?.label || actionPlan[0].label : 'Security Survey';
  const emailHref = `${contact.emailHref}?subject=${encodeURIComponent(`Get Secure Property Check — ${location || area.label}`)}&body=${encodeURIComponent(['Hello Brodley Locksmiths,', '', 'I completed the Get Secure Property Check and would appreciate some advice.', '', reportText, 'Thank you.'].join('\n'))}`;

  function setAnswer(questionId, option) {
    setAnswers((current) => ({ ...current, [questionId]: option }));
    setCopied(false);
    setSaved(false);
    setResultsMessage('');
    if (resultsStage === 'results') setResultsStage('questions');
  }

  function showResults() {
    if (answeredOptions.length < Math.min(3, visibleQuestions.length)) {
      setResultsMessage('Please answer at least three questions so we can give you a more useful result.');
      return;
    }
    trackEvent('get_secure_results', {
      property_type: propertyType,
      answered_questions: answeredOptions.length,
      urgent_result: totals.emergency ? 'yes' : 'no'
    });
    setResultsMessage('');
    setResultsStage('calculating');
    window.setTimeout(() => {
      setResultsStage('results');
      window.setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120);
    }, 900);
  }

  function reset() {
    setAnswers({});
    setLocation('');
    setPropertyType('home');
    setAreaId('unsure');
    setCopied(false);
    setSaved(false);
    setResultsStage('questions');
    setResultsMessage('');
    setLead({ name: '', phone: '', email: '', preferredContact: 'Phone call', bestTime: 'Any time', helpType: 'A quick call to talk it through', notes: '', website: '' });
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
            area: area.label,
            location: location || area.label,
            service: totals.emergency ? 'Urgent door / lock issue' : 'Property security and reliability check',
            urgency: urgencyLabel(totals),
            securityScore: `${securityLevel.label} (${totals.security})`,
            reliabilityScore: `${reliabilityLevel.label} (${totals.reliability})`,
            foundationsScore: `${foundationLevel(totals.positive)} (${totals.positive})`,
            summary: assistantSummary,
            nextStep: nextStepText,
            recommendedService,
            mainPriorities: totals.concerns.slice(0, 4).join(' | '),
            existingSafeguards: totals.good.slice(0, 4).join(' | '),
            customerNotes: lead.notes,
            message: `Customer completed the Get Secure Property Check. Requested help: ${lead.helpType}.`,
            report: reportText
          }
        })
      });
      const result = await response.json();
      if (response.ok && result.ok) {
        trackEvent('generate_lead', {
          form_name: 'get_secure_check',
          property_type: propertyType,
          urgent_result: totals.emergency ? 'yes' : 'no'
        });
        setSendState('success');
        setSendMessage('Thanks — your Get Secure check has been sent. Brodley Locksmiths will use the contact details you supplied to get back to you.');
        return;
      }
      if (result.fallback) {
        setSendState('fallback');
        setSendMessage('Your results are ready in a clean email summary so you can send them now. For urgent issues, please call.');
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
    <div className="security-check-wrap advanced-check-wrap get-secure-v4">
      <section className="security-check-intro advanced-check-intro results-first-intro">
        <div className="info-box advanced-start-box get-secure-welcome">
          <Home size={34} />
          <p className="eyebrow gold">Start here</p>
          <h2>Choose your property type</h2>
          <p>{property.intro}</p>
          <p className="quiet-intro">{property.starter}</p>
          <div className="form-grid compact-form-grid">
            <label>
              Property type
              <select value={propertyType} onChange={(event) => { setPropertyType(event.target.value); setAnswers({}); setResultsStage('questions'); }}>
                {propertyTypes.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}
              </select>
            </label>
            <label>
              Tendring area
              <select value={areaId} onChange={(event) => { setAreaId(event.target.value); if (resultsStage === 'results') setResultsStage('questions'); }}>
                {areaOptions.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}
              </select>
            </label>
            <label className="full-field">
              Town, village, park name or notes
              <input value={location} onChange={(event) => { setLocation(event.target.value); if (resultsStage === 'results') setResultsStage('questions'); }} placeholder={property.placeholder} />
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

        <GetSecureProgressCard answered={answeredOptions.length} total={visibleQuestions.length} />
      </section>

      {totals.emergency && (
        <div className="tool-urgent-alert get-secure-emergency-inline" role="alert">
          <strong>Urgent door or access issue</strong>
          <p>A door may not be secure, or somebody may be locked out or in. You do not need to complete the check before getting help.</p>
          <a href={contact.phoneHref} className="btn btn-red"><Phone size={18} /> Call {contact.phoneDisplay}</a>
        </div>
      )}

      <section className="advanced-question-list" aria-label="Get Secure questions">
        {visibleQuestions.map((item, index) => (
          <article className="advanced-question" key={item.id}>
            <div className="question-heading">
              <span>{index + 1}</span>
              <div>
                <p className="eyebrow red">{item.group}</p>
                <h2>{item.question}</h2>
                {item.helper && <p className="question-helper">{item.helper}</p>}
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

      {resultsStage !== 'results' && (
        <section className={`get-secure-submit-stage ${resultsStage === 'calculating' ? 'is-calculating' : ''}`} aria-live="polite">
          {resultsStage === 'calculating' ? (
            <div className="get-secure-calculating">
              <span className="get-secure-calculating-mark"><ShieldCheck size={34} /></span>
              <div>
                <p className="eyebrow gold">Get Secure review</p>
                <h2>Checking your answers…</h2>
                <p>Your tailored results are nearly ready.</p>
              </div>
            </div>
          ) : (
            <div className="get-secure-submit-inner">
              <div>
                <p className="eyebrow gold">Ready when you are</p>
                <h2>See your Get Secure results</h2>
                <p>See what matters most for this property.</p>
                <small>{answeredOptions.length} of {visibleQuestions.length} questions answered. You can go back and change an answer at any time.</small>
              </div>
              <div className="get-secure-submit-actions">
                <button type="button" className="btn btn-red get-secure-results-button" onClick={showResults}><Sparkles size={19} /> See My Get Secure Results</button>
                {resultsMessage && <p className="get-secure-submit-message" role="status">{resultsMessage}</p>}
              </div>
            </div>
          )}
        </section>
      )}

      {resultsStage === 'results' && (
        <section className="security-result-panel advanced-result-panel get-secure-results-reveal" ref={resultRef} tabIndex="-1">
          <div className="result-reveal-heading">
            <div className="result-reveal-mark"><Sparkles size={24} /></div>
            <div>
              <p className="eyebrow red">Your Get Secure results</p>
              <h2>Your results at a glance</h2>
            </div>
          </div>

          <div className="get-secure-score-hero" aria-label="Your results at a glance">
            <p className="eyebrow gold">Scores first</p>
            <div className="get-secure-score-grid">
              <ScoreCard icon={ShieldCheck} title="Security priority" level={securityLevel.label} tone={securityLevel.tone} score={totals.security} text={securityLevel.text} />
              <ScoreCard icon={Wrench} title="Door & lock reliability" level={reliabilityLevel.label} tone={reliabilityLevel.tone} score={totals.reliability} text={reliabilityLevel.text} />
              <ScoreCard icon={Award} title="Security foundations" level={foundationLevel(totals.positive)} tone="positive" score={totals.positive} text="This reflects the safeguards selected in the check, such as controlled keys, reliable locking and organised access." />
            </div>
          </div>

          <div className="priority-pill-row">
            <span>Overall priority: <strong>{urgencyLabel(totals)}</strong></span>
            <span>{answeredOptions.length} questions used in your result</span>
          </div>

          <div className="assistant-summary-card">
            <MessageSquare size={26} />
            <div>
              <strong>Practical Brodley Locksmiths recommendation</strong>
              <p>{assistantSummary}</p>
              <em>{nextStepText}</em>
            </div>
          </div>

          <section className="get-secure-contact-stage" aria-label="Send your results to Brodley Locksmiths">
            <div className="security-action-card advanced-action-card clean-enquiry-card">
              <KeyRound size={34} />
              <h3>{totals.emergency ? 'Get urgent locksmith help' : 'Would you like practical advice on these results?'}</h3>
              <p>{totals.emergency ? 'A door that will not lock, a lockout or a lock-in can become more stressful quickly. Call now for the fastest response, or send the summary below if it is safe to do so.' : 'Send your check to Brodley Locksmiths before moving on. It includes your location, scores, priorities and any note you add, so we can understand the situation before getting back to you.'}</p>
              <div className="button-row stacked-actions">
                <a href={contact.phoneHref} className="btn btn-red"><Phone size={18} /> Call {contact.phoneDisplay}</a>
              </div>
              <form className="tool-lead-form" onSubmit={sendResults}>
                <label>Your name<input required value={lead.name} onChange={(event) => updateLead('name', event.target.value)} placeholder="Your name" autoComplete="name" /></label>
                <label>Phone number<input value={lead.phone} onChange={(event) => updateLead('phone', event.target.value)} placeholder="Best number to call" inputMode="tel" autoComplete="tel" /></label>
                <label>Email address<input type="email" value={lead.email} onChange={(event) => updateLead('email', event.target.value)} placeholder="Optional if you prefer email" autoComplete="email" /></label>
                <label>Preferred contact<select value={lead.preferredContact} onChange={(event) => updateLead('preferredContact', event.target.value)}><option>Phone call</option><option>Text message</option><option>Email</option></select></label>
                <label>Best time to contact<select value={lead.bestTime} onChange={(event) => updateLead('bestTime', event.target.value)}><option>Any time</option><option>Morning</option><option>Afternoon</option><option>Evening</option></select></label>
                <label>What would be most useful?<select value={lead.helpType} onChange={(event) => updateLead('helpType', event.target.value)}><option>A quick call to talk it through</option><option>A quote or visit</option><option>Advice on a specific door or lock</option><option>I would just like to keep my results for now</option></select></label>
                <label>Anything else you would like us to know?<textarea value={lead.notes} onChange={(event) => updateLead('notes', event.target.value)} placeholder="For example: the handle has become stiff, the patio door needs lifting, or this is for an elderly relative." rows="4" /></label>
                <p className="field-help">Please do not include key codes, alarm codes or other access codes.</p>
                <label className="honeypot-field" aria-hidden="true">Leave this blank<input tabIndex="-1" autoComplete="off" value={lead.website} onChange={(event) => updateLead('website', event.target.value)} /></label>
                <button type="submit" className="btn btn-outline" disabled={sendState === 'sending'}><Send size={18} /> {sendState === 'sending' ? 'Sending…' : 'Send my check for advice'}</button>
              </form>
              {sendMessage && <p className={`form-status ${sendState}`} role="status">{sendMessage}</p>}
              <div className="button-row stacked-actions secondary-tool-actions">
                <a href={emailHref} className="btn btn-outline"><Mail size={18} /> Email results instead</a>
                <button type="button" className="btn btn-outline" onClick={copyResults}><Copy size={18} /> {copied ? 'Copied' : 'Copy results'}</button>
                <button type="button" className="btn btn-outline" onClick={saveResults}><FileText size={18} /> {saved ? 'Saved on this device' : 'Save results'}</button>
              </div>
              <p className="form-note tool-privacy-note">By sending your check, you are asking Brodley Locksmiths to use these details to respond. <Link href="/privacy-policy">Privacy Policy</Link></p>
            </div>
          </section>

          <section className="get-secure-guidance-section" aria-label="Your recommendations and next steps">
            <div className="get-secure-section-heading">
              <p className="eyebrow gold">Your next steps</p>
              <h3>Work through these in the right order</h3>
              <p>Start with anything that affects secure entry, exit or reliable locking. Related services are shown below after your contact options.</p>
            </div>
            <div className="action-plan-grid" aria-label="Suggested next steps">
              {actionPlan.map((item) => (
                <article className={`action-plan-card ${item.tone}`} key={item.title}>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                  <span>Suggested focus</span>
                </article>
              ))}
            </div>
            <div className="summary-grid deeper-summary-grid">
              <SummaryBox title="Security foundations selected" items={totals.good.length ? totals.good : ['No security foundations were selected in this check yet.']} positive />
              <SummaryBox title="Things worth checking" items={totals.concerns.length ? totals.concerns : ['No major concerns were selected in this check. Keep an eye on anything that starts to feel stiff, worn or uncertain.']} />
            </div>
          </section>

          <section className="get-secure-service-section" aria-label="Related locksmith services">
            <div className="get-secure-section-heading service-links-heading">
              <p className="eyebrow gold">Explore further</p>
              <h3>Related locksmith services</h3>
              <p>These services may be relevant to your results. You can read more after sending, saving or noting your check.</p>
            </div>
            <div className="result-service-cards">
              {totals.services.map((href) => (
                <Link key={href} href={href} className="result-service-card">
                  <strong>{serviceInfo[href]?.label || 'View service'}</strong>
                  <small>{serviceInfo[href]?.text || 'View the relevant Brodley Locksmiths service.'}</small>
                  <span>View service <ArrowRight size={15} /></span>
                </Link>
              ))}
            </div>
            <button type="button" className="text-link reset-button" onClick={reset}><RotateCcw size={16} /> Start a new check</button>
          </section>
        </section>
      )}
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
