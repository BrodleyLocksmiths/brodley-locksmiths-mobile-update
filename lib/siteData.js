import {
  ShieldCheck,
  KeyRound,
  DoorOpen,
  LockKeyhole,
  FileSearch,
  MapPin,
  Phone,
  Mail,
  Clock,
  Home,
  Building2,
  BadgeCheck,
  Wrench,
  Star,
  Hammer,
  HousePlus,
  Camera,
  MessageSquare,
  ClipboardCheck
} from 'lucide-react';

export const site = {
  name: 'Brodley Locksmiths',
  legalName: 'Brodley Locksmiths',
  tagline: 'Premium locksmith and security services across Tendring',
  url: 'https://www.brodley-locksmiths.com',
  domain: 'brodley-locksmiths.com',
  logo: '/key-logo.png',
  headerLogo: '/header-logo.png',
  image: '/header-logo.png',
  map: '/background-map.jpg',
  blankBackground: '/blank-background.png',
  keyBackground: '/key-background.png',
  primaryTown: 'Clacton-on-Sea',
  region: 'Essex',
  country: 'GB'
};

export const contact = {
  phoneDisplay: '07825 494999',
  phoneHref: 'tel:07825494999',
  phoneRaw: '+447825494999',
  email: 'info@brodley-locksmiths.com',
  emailHref: 'mailto:info@brodley-locksmiths.com'
};

export const colours = {
  charcoal: '#303237',
  deep: '#111214',
  red: '#f4342d',
  gold: '#c7a16b',
  light: '#d4d4d8'
};

export const locations = [
  'Clacton-on-Sea', 'Great Clacton', 'Holland-on-Sea', 'Jaywick', 'Little Clacton', 'Thorpe-le-Soken', 'Weeley', 'Frinton-on-Sea', 'Walton-on-the-Naze', 'Kirby Cross', 'Kirby-le-Soken', 'Great Holland', 'Harwich', 'Dovercourt', 'Parkeston', 'Little Oakley', 'Great Oakley', 'Wrabness', 'Manningtree', 'Lawford', 'Mistley', 'Bradfield', 'Brightlingsea', 'Alresford', 'Elmstead Market', 'Ardleigh', 'Great Bentley', 'Little Bentley', 'Great Bromley', 'Little Bromley', 'Frating', 'Tendring', 'Beaumont-cum-Moze', 'Ramsey', 'St Osyth'
];

export const coreFaqs = [
  {
    q: 'Which areas of Tendring do you cover?',
    a: 'Brodley Locksmiths covers Clacton-on-Sea, Great Clacton, Holland-on-Sea, Jaywick, Little Clacton, Thorpe-le-Soken, Weeley, Frinton-on-Sea, Walton-on-the-Naze, Harwich, Dovercourt, Manningtree, Brightlingsea and surrounding Tendring villages.'
  },
  {
    q: 'Do you offer lock changes after moving house?',
    a: 'Yes. Lock changes are recommended when you move into a new property because you rarely know how many keys are still in circulation. Brodley Locksmiths can change or upgrade locks for homeowners, landlords and tenants.'
  },
  {
    q: 'Can you repair uPVC doors that are hard to lock?',
    a: 'Yes. A stiff handle, dropped door or door that needs lifting usually points to alignment or mechanism problems. Brodley Locksmiths repairs and adjusts uPVC, composite and timber doors across Tendring.'
  },
  {
    q: 'Do you install anti-snap locks?',
    a: 'Yes. Brodley Locksmiths can advise on suitable lock upgrades, including stronger cylinder options where appropriate for the door and risk level.'
  },
  {
    q: 'What is included in a security survey?',
    a: 'A security survey looks at doors, locks, cylinders, windows, garages, outbuildings, access points and key control. You receive practical advice on the most important improvements rather than unnecessary extras.'
  },
  {
    q: 'Do you work with landlords and businesses?',
    a: 'Yes. Brodley Locksmiths supports homeowners, landlords, holiday lets, guest houses, small businesses and commercial premises across Tendring.'
  }
];

export const servicePages = [
  {
    slug: 'lock-installations',
    nav: 'Lock Installations',
    icon: LockKeyhole,
    seoTitle: 'Lock Installations Tendring | Brodley Locksmiths',
    meta: 'Professional lock installations across Tendring. New door locks, replacement locks and security-focused fitting for homes, landlords and businesses.',
    keywords: 'lock installations Tendring, lock fitting Clacton, new locks Essex, locksmith Tendring',
    heroTitle: 'Professional lock installations across Tendring.',
    short: 'Precision-fitted locks for homes, rental properties, commercial premises, outbuildings and upgraded doors.',
    intro: 'A lock is only as good as the way it is selected and fitted. Brodley Locksmiths installs practical, reliable locking solutions suited to the door, the property and the level of security required.',
    localCopy: 'From coastal homes in Clacton, Frinton and Walton to rental properties, guest houses and small businesses in Harwich, Dovercourt, Manningtree and Brightlingsea, lock installation should be done with both security and everyday use in mind.',
    bullets: ['New lock fitting for front and rear doors', 'Replacement cylinders and door hardware', 'Options suitable for homes, landlords and businesses', 'Neat installation with a premium finish', 'Advice on improving weak points before fitting'],
    bestFor: ['New doors', 'Moved house', 'Rental properties', 'Garage and outbuilding security', 'Commercial doors'],
    faqs: [
      { q: 'Can you install locks on new doors?', a: 'Yes. Brodley Locksmiths can install suitable locks on new, replacement or upgraded doors, subject to the door type and required security level.' },
      { q: 'Can you fit locks for landlords?', a: 'Yes. Lock installations are available for rental properties, tenant changes and landlord security improvements across Tendring.' },
      { q: 'Will you advise which lock is best?', a: 'Yes. The aim is to choose a lock that suits the door, the risk and the customer’s budget rather than fitting the wrong product.' }
    ],
    cta: 'Book a lock installation'
  },
  {
    slug: 'lock-upgrades',
    nav: 'Lock Upgrades',
    icon: ShieldCheck,
    seoTitle: 'Lock Upgrades Tendring | Anti-Snap Lock Upgrades',
    meta: 'Upgrade vulnerable locks across Tendring. Anti-snap cylinders, stronger lock options and practical security improvements from Brodley Locksmiths.',
    keywords: 'lock upgrades Tendring, anti snap locks Clacton, security lock upgrades Essex, locksmith upgrades',
    heroTitle: 'Upgrade vulnerable locks before they become a problem.',
    short: 'Improve protection with stronger cylinders, anti-snap options and better security hardware.',
    intro: 'Many properties still rely on tired, low-grade or badly matched locks. A sensible upgrade can dramatically improve security without unnecessary work or overcomplicated products.',
    localCopy: 'Lock upgrades are especially useful for older uPVC and composite doors, rental properties, holiday lets and businesses where unknown key history or weak cylinders may create avoidable risk.',
    bullets: ['Anti-snap and higher-security cylinder options', 'Security upgrades for uPVC, composite and timber doors', 'Practical recommendations based on real risk', 'Improve key control after tenants, staff or ownership changes', 'Security-first advice without pushy sales'],
    bestFor: ['Older uPVC doors', 'Landlords', 'Homeowners', 'Guest houses and holiday lets', 'Small businesses'],
    faqs: [
      { q: 'Should I upgrade my locks after moving home?', a: 'Yes, it is sensible to consider a lock change or upgrade because you may not know who still has keys to the property.' },
      { q: 'Do you offer anti-snap lock upgrades?', a: 'Yes. Brodley Locksmiths can advise on anti-snap and stronger cylinder options where they are suitable for the door.' },
      { q: 'Can you upgrade locks without replacing the whole door?', a: 'Often, yes. Many doors can be improved with better cylinders, hardware or adjustments without needing a full door replacement.' }
    ],
    cta: 'Discuss lock upgrades'
  },
  {
    slug: 'lock-changes',
    nav: 'Lock Changes',
    icon: KeyRound,
    seoTitle: 'Lock Changes Tendring | Change Locks Clacton, Harwich & Frinton',
    meta: 'Need locks changed in Tendring? Brodley Locksmiths changes locks after moving home, lost keys, tenant changes and security concerns.',
    keywords: 'lock changes Tendring, change locks Clacton, locksmith lock change Harwich, replace locks Essex',
    heroTitle: 'Fast, professional lock changes for peace of mind.',
    short: 'Ideal after moving home, lost keys, tenant changes, staff changes or unknown key history.',
    intro: 'Changing locks is one of the simplest ways to regain control over who can access your property. Brodley Locksmiths provides straightforward lock changes with practical advice on whether a like-for-like replacement or a security upgrade is the better option.',
    localCopy: 'Lock changes are a common request across Tendring for new homeowners, landlords, tenants, small businesses and anyone dealing with lost, stolen or unreturned keys.',
    bullets: ['Move-in lock changes', 'Lost, stolen or unreturned keys', 'Tenant and landlord lock changes', 'Staff or keyholder changes', 'Option to upgrade security at the same time'],
    bestFor: ['Moving home', 'Rental turnover', 'Lost keys', 'Security concerns', 'Business key control'],
    faqs: [
      { q: 'When should I change my locks?', a: 'Consider changing locks after moving home, losing keys, tenant changes, staff changes, relationship changes or any situation where you are unsure who has access.' },
      { q: 'Can you change locks for landlords?', a: 'Yes. Brodley Locksmiths can change locks for landlords and rental properties across Tendring.' },
      { q: 'Can I upgrade the lock at the same time?', a: 'Yes. A lock change is often a good opportunity to upgrade to a stronger cylinder or better-suited lock.' }
    ],
    cta: 'Arrange a lock change'
  },
  {
    slug: 'door-repairs',
    nav: 'Door Repairs',
    icon: DoorOpen,
    seoTitle: 'uPVC Door Repairs Tendring | Door Lock Repairs Clacton',
    meta: 'Door repairs across Tendring for uPVC, composite and timber doors. Fix stiff handles, dropped doors, jammed mechanisms and doors that will not lock.',
    keywords: 'uPVC door repairs Tendring, door repairs Clacton, composite door repair Essex, door lock repair Harwich',
    heroTitle: 'Door repairs for uPVC, composite and timber doors.',
    short: 'Repairs and adjustments for doors that stick, drop, drag, jam or refuse to lock smoothly.',
    intro: 'A door that is difficult to lock is often warning you that something is out of alignment or under strain. Repairing the issue early can prevent bigger mechanism failures and improve both security and usability.',
    localCopy: 'Coastal weather, age, repeated use and poor alignment can all affect doors in Tendring properties. Repairing the cause early can save money and prevent lockouts or complete mechanism failure.',
    bullets: ['uPVC door mechanism repairs', 'Door alignment and adjustment', 'Handles, keeps, hinges and locking points', 'Composite and timber door lock issues', 'Advice on repair versus replacement'],
    bestFor: ['Stiff handles', 'Doors that need lifting', 'Jammed mechanisms', 'Dropped uPVC doors', 'Hard-to-lock doors'],
    faqs: [
      { q: 'Why is my uPVC door hard to lock?', a: 'Common causes include door misalignment, dropped hinges, worn keeps or a failing multipoint mechanism. It is best checked before forcing the handle.' },
      { q: 'Can a dropped door be adjusted?', a: 'Often, yes. Many uPVC and composite doors can be adjusted so the locking points line up correctly again.' },
      { q: 'Should I repair or replace my door?', a: 'Many problems can be repaired without replacing the whole door. Brodley Locksmiths can advise based on the door condition and security needs.' }
    ],
    cta: 'Book a door repair'
  },
  {
    slug: 'security-surveys',
    nav: 'Security Surveys',
    icon: FileSearch,
    seoTitle: 'Security Surveys Tendring | Home & Business Security Checks',
    meta: 'Security surveys across Tendring for homes, landlords, holiday lets and businesses. Practical advice on locks, doors, windows and access points.',
    keywords: 'security surveys Tendring, home security check Clacton, landlord security survey Essex, business security review',
    heroTitle: 'Property security surveys for homes, landlords and businesses.',
    short: 'A practical review of locks, doors, windows, access points and vulnerable areas around your property.',
    intro: 'A security survey gives you a clear view of your property’s weak points before you spend money. The focus is on practical, realistic recommendations that improve security without unnecessary complication.',
    localCopy: 'Security surveys are ideal for homeowners, landlords, guest houses, holiday lets and small businesses across Tendring who want to understand the real weak points before paying for upgrades.',
    bullets: ['Front and rear door security review', 'Cylinder snapping and forced-entry risk checks', 'Window locks, side gates, sheds and garages', 'Key control advice for tenants, staff and guests', 'Clear recommendations in plain English'],
    bestFor: ['Homeowners', 'Landlords', 'Holiday lets', 'Guest houses', 'Small businesses'],
    faqs: [
      { q: 'What does a security survey check?', a: 'It reviews doors, locks, cylinders, windows, side access, outbuildings, garages and key control to identify practical security improvements.' },
      { q: 'Is a security survey suitable for landlords?', a: 'Yes. It can help landlords identify weak points and make sensible improvements for tenants and property protection.' },
      { q: 'Will I receive clear recommendations?', a: 'Yes. The advice is designed to be practical and understandable, helping you decide what matters most.' }
    ],
    cta: 'Request a security survey'

  },
  {
    slug: 'key-safes',
    nav: 'Key Safes',
    icon: KeyRound,
    seoTitle: 'Key Safes Tendring | Key Safe Installation Clacton & Essex',
    meta: 'Key safe supply and installation across Tendring for carers, elderly relatives, holiday lets, landlords and emergency access. Brodley Locksmiths fits practical key safe solutions.',
    keywords: 'key safes Tendring, key safe installation Clacton, police approved key safe Essex, holiday let key safe, carer access key safe',
    heroTitle: 'Key safe installation for safe, controlled property access.',
    short: 'Secure key safe fitting for carers, elderly relatives, holiday lets, landlords and trusted emergency access.',
    intro: 'A correctly positioned key safe can make day-to-day access easier while helping to keep keys controlled. Brodley Locksmiths can advise on sensible locations, practical use and fitting for homes, rental properties, carers and holiday accommodation.',
    localCopy: 'Key safes are useful across Tendring for families arranging carer access, landlords managing trades access, holiday lets with guest turnover and homeowners who want a reliable backup access option without leaving keys in unsafe places.',
    bullets: ['Key safe fitting for homes and rental properties', 'Advice on discreet and practical positioning', 'Useful for carers, family members and trusted trades', 'Holiday let and guest access options', 'Security-focused advice before fitting'],
    bestFor: ['Elderly relatives', 'Carer access', 'Holiday lets', 'Landlords', 'Emergency backup access'],
    faqs: [
      { q: 'Where should a key safe be installed?', a: 'A key safe should be positioned somewhere practical but not obvious from the street. Brodley Locksmiths can advise on a sensible location based on the property layout.' },
      { q: 'Are key safes useful for carers?', a: 'Yes. Key safes are commonly used to allow trusted carers, family members or emergency contacts to access a property without leaving keys loose or hidden outside.' },
      { q: 'Can you install key safes for holiday lets?', a: 'Yes. Key safes can be useful for holiday lets and guest houses, especially where guest turnover and controlled access need to be managed carefully.' }
    ],
    cta: 'Ask about key safes'
  },
  {
    slug: 'upvc-door-mechanism-replacement',
    nav: 'uPVC Door Mechanism Replacement',
    icon: Wrench,
    seoTitle: 'uPVC Door Mechanism Replacement Tendring | Multipoint Lock Repairs',
    meta: 'uPVC door mechanism replacement across Tendring. Help with failed multipoint locks, stiff handles, jammed doors and doors that will not lock properly.',
    keywords: 'uPVC door mechanism replacement Tendring, multipoint lock replacement Clacton, uPVC door lock repair Essex, door mechanism repair Harwich',
    heroTitle: 'uPVC door mechanism replacement and multipoint lock repairs.',
    short: 'Replacement and repair advice for failed uPVC door mechanisms, multipoint locks, stiff handles and jammed doors.',
    intro: 'When a uPVC door handle becomes stiff, the key will not turn smoothly or the locking points stop engaging, the mechanism may be worn, misaligned or failing. Brodley Locksmiths can assess the door and advise whether adjustment, repair or mechanism replacement is the right option.',
    localCopy: 'Across Tendring, uPVC doors can suffer from age, coastal weather, heavy use and poor alignment. Sorting the cause properly can protect the new mechanism and reduce the chance of repeat failure.',
    bullets: ['uPVC multipoint mechanism replacement', 'Diagnosis of stiff handles and failed locking points', 'Door alignment checks before replacing parts', 'Advice on repair versus replacement', 'Support for uPVC and composite door lock problems'],
    bestFor: ['Jammed uPVC doors', 'Stiff handles', 'Failed multipoint locks', 'Dropped doors', 'Doors that will not lock'],
    faqs: [
      { q: 'How do I know if my uPVC mechanism has failed?', a: 'Signs include a stiff handle, locking points not engaging, the key not turning correctly, grinding, clicking or the door only locking when lifted hard.' },
      { q: 'Can alignment cause a mechanism to fail?', a: 'Yes. If a door is dropped or badly aligned, the mechanism may be put under pressure every time it is locked, eventually causing failure.' },
      { q: 'Can you replace a multipoint lock mechanism?', a: 'Yes. Brodley Locksmiths can assess the door and advise whether a multipoint mechanism replacement or adjustment is the best solution.' }
    ],
    cta: 'Book a mechanism check'
  },
  {
    slug: 'landlord-locksmith-services',
    nav: 'Landlord Locksmith Services',
    icon: Home,
    seoTitle: 'Landlord Locksmith Tendring | Rental Lock Changes & Door Repairs',
    meta: 'Landlord locksmith services across Tendring. Lock changes, tenant changeovers, uPVC door repairs, key safes and practical security advice for rental properties.',
    keywords: 'landlord locksmith Tendring, rental property lock changes Clacton, tenant lock change Essex, landlord door repairs Harwich',
    heroTitle: 'Locksmith services for landlords and rental properties.',
    short: 'Lock changes, tenant changeovers, uPVC door repairs, key safes and practical security advice for landlords across Tendring.',
    intro: 'Rental properties need locks and doors that are reliable, secure and easy for tenants to use. Brodley Locksmiths supports landlords with lock changes, door repairs, key control, security upgrades and practical advice between tenancies.',
    localCopy: 'From single rental homes in Clacton to holiday lets, guest houses and managed properties across Harwich, Frinton, Walton, Brightlingsea and Manningtree, landlord locksmith work should be practical, tidy and responsive.',
    bullets: ['Lock changes between tenants', 'uPVC and composite door repairs', 'Key safe installation and access advice', 'Lock upgrades for rental properties', 'Security surveys and weak-point checks'],
    bestFor: ['Landlords', 'Letting agents', 'Tenant changeovers', 'Rental repairs', 'Key control issues'],
    faqs: [
      { q: 'Should landlords change locks between tenants?', a: 'It is often sensible to review or change locks when tenants change, especially if keys may not have been returned or copied.' },
      { q: 'Can you help with rental property door repairs?', a: 'Yes. Brodley Locksmiths can help with common uPVC, composite and timber door lock and alignment problems in rental properties.' },
      { q: 'Do you install key safes for landlords?', a: 'Yes. Key safes can help landlords manage access for trusted trades, cleaners or emergency contacts when used carefully.' }
    ],
    cta: 'Ask about landlord locksmith work'
  },
  {
    slug: 'holiday-let-guest-house-security',
    nav: 'Holiday Let & Guest House Security',
    icon: Building2,
    seoTitle: 'Holiday Let Security Tendring | Guest House Locks & Key Safes',
    meta: 'Security support for holiday lets and guest houses across Tendring. Locks, key safes, guest access, uPVC door repairs and security surveys from Brodley Locksmiths.',
    keywords: 'holiday let security Tendring, guest house locksmith Clacton, key safes holiday let Essex, Airbnb locksmith Tendring',
    heroTitle: 'Security support for holiday lets and guest houses.',
    short: 'Lock, door, key safe and access advice for holiday lets, Airbnb-style properties, guest houses and short-stay accommodation.',
    intro: 'Guest accommodation needs to balance convenience with security. Brodley Locksmiths helps holiday lets and guest houses manage locks, key safes, door repairs, guest turnover and vulnerable access points in a practical way.',
    localCopy: 'Across coastal Tendring, holiday accommodation can see heavy door use, frequent key handovers and changing guests. A security review can help reduce access issues and improve confidence for owners and guests.',
    bullets: ['Lock changes and upgrades for guest accommodation', 'Key safe installation and access advice', 'uPVC door repairs for high-use doors', 'Guest turnover and key control advice', 'Security surveys for vulnerable access points'],
    bestFor: ['Holiday lets', 'Guest houses', 'Airbnb-style stays', 'Coastal accommodation', 'High-use doors'],
    faqs: [
      { q: 'Can you install key safes for holiday lets?', a: 'Yes. Brodley Locksmiths can fit key safes and advise on positioning and practical use for guest access.' },
      { q: 'Should holiday let locks be reviewed regularly?', a: 'Yes. Frequent guest turnover, cleaners and contractors can make key control more complicated, so regular review is sensible.' },
      { q: 'Can you help with guest house door problems?', a: 'Yes. High-use doors can develop alignment and lock problems, especially uPVC and composite doors. Early repair can prevent bigger failures.' }
    ],
    cta: 'Discuss guest property security'

  }
  ,
  {
    slug: 'locksmith-for-landlords',
    nav: 'Locksmith for Landlords',
    icon: Home,
    seoTitle: 'Locksmith for Landlords Tendring | Rental Property Locks',
    meta: 'Locksmith for landlords across Tendring. Lock changes, uPVC door repairs, tenant changeover security, key safes and lock upgrades for rental properties.',
    keywords: 'locksmith for landlords Tendring, landlord locksmith Clacton, rental property lock changes Tendring, tenant lock change Essex, landlord locksmith Harwich',
    heroTitle: 'Locksmith for landlords and rental properties across Tendring.',
    short: 'Lock changes, door repairs, key control, key safes and security upgrades for landlords managing rental properties.',
    intro: 'Landlords need locks and doors that are reliable, secure and simple for tenants to use. Brodley Locksmiths supports rental properties with lock changes, lock upgrades, uPVC door repairs, key safe fitting and practical security advice between tenancies.',
    localCopy: 'From rental homes in Clacton-on-Sea and Jaywick to landlord-managed properties in Frinton, Walton, Harwich, Dovercourt, Brightlingsea and Manningtree, good key control and well-maintained doors help reduce callouts, tenant frustration and security concerns.',
    bullets: ['Lock changes between tenants and after lost keys', 'uPVC and composite door repairs for rental properties', 'Key safe fitting for trusted access when appropriate', 'Lock upgrades for front, rear and side doors', 'Security checks for void periods and new tenancies'],
    bestFor: ['Private landlords', 'Rental properties', 'Tenant changeovers', 'Lost or unreturned keys', 'Property maintenance planning'],
    faqs: [
      { q: 'Should landlords change locks between tenants?', a: 'It is often sensible to review or change locks between tenants, especially when keys may not have been returned or copied.' },
      { q: 'Can you repair doors in rental properties?', a: 'Yes. Brodley Locksmiths can help with uPVC, composite and timber door problems including stiff handles, dropped doors and faulty locking mechanisms.' },
      { q: 'Can you help landlords improve key control?', a: 'Yes. Advice can include lock changes, key safe use, access planning and security upgrades for main doors and vulnerable access points.' }
    ],
    cta: 'Book landlord locksmith support'
  },
  {
    slug: 'locksmith-for-estate-agents',
    nav: 'Locksmith for Estate Agents',
    icon: Building2,
    seoTitle: 'Locksmith for Estate Agents Tendring | Property Access & Lock Changes',
    meta: 'Locksmith support for estate agents across Tendring. Lock changes, access issues, key safes, door repairs and property security checks for managed sales and lettings.',
    keywords: 'locksmith for estate agents Tendring, estate agent locksmith Clacton, property access locksmith Essex, letting agent lock change Tendring',
    heroTitle: 'Locksmith support for estate agents and property professionals.',
    short: 'Lock changes, access help, key safes and door repairs for estate agents, letting agents and managed properties.',
    intro: 'Estate agents and letting agents need practical locksmith support when properties change hands, keys go missing, tenants move out or doors become difficult to use. Brodley Locksmiths provides clear, tidy and reliable support for property professionals across Tendring.',
    localCopy: 'Whether you are managing viewings in Clacton, rental handovers in Harwich, property access in Frinton or a difficult uPVC door in Manningtree, responsive locksmith support helps keep sales, lettings and maintenance moving.',
    bullets: ['Lock changes for sales, lettings and managed properties', 'Key safe fitting for controlled viewing or contractor access', 'uPVC door repairs before sale or tenancy handover', 'Practical security checks for vacant properties', 'Support for lost, missing or unreturned keys'],
    bestFor: ['Estate agents', 'Letting agents', 'Property managers', 'Vacant properties', 'Tenant handovers'],
    faqs: [
      { q: 'Can you work with estate agents and letting agents?', a: 'Yes. Brodley Locksmiths can support property professionals with lock changes, door repairs, key safes and practical access advice across Tendring.' },
      { q: 'Can you help when keys are missing for a property?', a: 'Yes. Depending on the situation, a lock change or access review may be the safest way to regain control of the property.' },
      { q: 'Can key safes be fitted for viewings or trades?', a: 'Yes. Key safes can be useful for controlled access where they are positioned and managed carefully.' }
    ],
    cta: 'Discuss estate agent support'
  },
  {
    slug: 'locksmith-for-holiday-lets',
    nav: 'Locksmith for Holiday Lets',
    icon: KeyRound,
    seoTitle: 'Locksmith for Holiday Lets Tendring | Key Safes & Guest Access',
    meta: 'Holiday let locksmith services across Tendring. Key safes, lock changes, door repairs, guest access advice and security checks for short-stay accommodation.',
    keywords: 'locksmith for holiday lets Tendring, holiday let key safe Clacton, Airbnb locksmith Essex, guest access locks Tendring, holiday let security Frinton',
    heroTitle: 'Locksmith for holiday lets, Airbnb-style stays and short-term rentals.',
    short: 'Key safes, lock changes, guest access advice and door repairs for holiday lets across coastal Tendring.',
    intro: 'Holiday lets need reliable locks, easy guest access and sensible key control. Brodley Locksmiths helps owners manage lock changes, key safes, uPVC door problems and security checks for short-stay accommodation.',
    localCopy: 'Across Clacton, Frinton, Walton, St Osyth, Jaywick, Brightlingsea and the wider Tendring coast, holiday accommodation can face heavy door use, frequent guest turnover and changing access needs.',
    bullets: ['Key safe installation for guest access', 'Lock changes after key loss or guest turnover concerns', 'uPVC door repairs for high-use holiday properties', 'Security checks for vulnerable doors and side access', 'Advice for cleaners, maintenance teams and trusted contacts'],
    bestFor: ['Holiday lets', 'Airbnb-style properties', 'Coastal accommodation', 'Short-term rentals', 'Guest access planning'],
    faqs: [
      { q: 'Can you fit key safes for holiday lets?', a: 'Yes. Brodley Locksmiths can fit key safes and advise on discreet, practical positioning for guest access.' },
      { q: 'Should holiday let locks be changed regularly?', a: 'Locks should be reviewed when keys are lost, access feels uncontrolled or guest turnover creates security concerns.' },
      { q: 'Can you help with uPVC doors in holiday accommodation?', a: 'Yes. High-use uPVC and composite doors can become stiff, dropped or misaligned and may need repair before they fail completely.' }
    ],
    cta: 'Improve holiday let access'
  },
  {
    slug: 'locksmith-for-guest-houses',
    nav: 'Locksmith for Guest Houses',
    icon: Building2,
    seoTitle: 'Locksmith for Guest Houses Tendring | Locks, Doors & Access Security',
    meta: 'Guest house locksmith services in Tendring. Lock upgrades, key control, door repairs, key safes and practical security advice for guest accommodation.',
    keywords: 'locksmith for guest houses Tendring, guest house locksmith Clacton, hotel door lock repair Essex, accommodation security Tendring, guest house key control',
    heroTitle: 'Locksmith for guest houses and small accommodation businesses.',
    short: 'Locks, door repairs, key control and security advice for guest houses and small accommodation providers.',
    intro: 'Guest houses need secure, reliable access for owners, staff and visitors. Brodley Locksmiths supports guest accommodation with lock changes, door repairs, security checks, key safe advice and practical access control improvements.',
    localCopy: 'From coastal guest houses in Clacton, Frinton and Walton to accommodation businesses around Harwich, Brightlingsea and Manningtree, high-use doors and changing guests make reliable locks and good key control essential.',
    bullets: ['Lock changes and upgrades for guest accommodation', 'uPVC, composite and timber door repairs', 'Key control advice for owners, staff and trusted trades', 'Security surveys for guest houses and small hotels', 'Key safe and access planning where suitable'],
    bestFor: ['Guest houses', 'Small hotels', 'Bed and breakfasts', 'High-use doors', 'Staff and guest access'],
    faqs: [
      { q: 'Can you help guest houses with key control?', a: 'Yes. Brodley Locksmiths can advise on locks, key safe use and practical access arrangements for owners, staff and trusted contacts.' },
      { q: 'Can you repair high-use guest house doors?', a: 'Yes. Doors used many times a day can develop alignment, handle and mechanism issues, especially uPVC and composite doors.' },
      { q: 'Do you offer security surveys for guest houses?', a: 'Yes. A security survey can review locks, doors, access points, key control and vulnerable areas around the property.' }
    ],
    cta: 'Discuss guest house security'
  },
  {
    slug: 'locksmith-for-small-businesses',
    nav: 'Locksmith for Small Businesses',
    icon: Building2,
    seoTitle: 'Locksmith for Small Businesses Tendring | Commercial Locks & Door Repairs',
    meta: 'Small business locksmith services across Tendring. Lock changes, staff key control, door repairs, lock upgrades and security surveys for shops, offices and premises.',
    keywords: 'small business locksmith Tendring, commercial locksmith Clacton, business lock change Harwich, shop door lock repair Essex, office locksmith Tendring',
    heroTitle: 'Locksmith for small businesses, shops and local premises.',
    short: 'Lock changes, staff key control, door repairs and security surveys for small businesses across Tendring.',
    intro: 'Small businesses need dependable locks, secure staff access and doors that work properly every day. Brodley Locksmiths provides practical locksmith and security support for shops, offices, workshops, guest premises and local businesses.',
    localCopy: 'From independent shops in Clacton and Frinton to offices, workshops and small commercial units in Harwich, Dovercourt, Manningtree and Brightlingsea, simple security improvements can make daily business access safer and more reliable.',
    bullets: ['Business lock changes after staff or keyholder changes', 'Front and rear door lock upgrades', 'Door repairs for high-use business entrances', 'Security surveys for small premises', 'Advice on key control and vulnerable access points'],
    bestFor: ['Shops', 'Offices', 'Workshops', 'Small commercial units', 'Staff key control'],
    faqs: [
      { q: 'Can you change locks after a staff member leaves?', a: 'Yes. If keys may not have been returned or copied, a business lock change can help regain control over access.' },
      { q: 'Can you repair shop or office doors?', a: 'Yes. Brodley Locksmiths can help with common door and lock issues affecting small business premises.' },
      { q: 'Do small businesses need security surveys?', a: 'A practical survey can identify weak locks, vulnerable rear doors, storage access issues and key control concerns.' }
    ],
    cta: 'Ask about business locksmith work'
  },
  {
    slug: 'locksmith-for-care-access-key-safes',
    nav: 'Locksmith for Care Access & Key Safes',
    icon: KeyRound,
    seoTitle: 'Locksmith for Care Access & Key Safes Tendring | Carer Access',
    meta: 'Care access locksmith and key safe fitting across Tendring. Practical access solutions for carers, family members, elderly relatives and emergency contacts.',
    keywords: 'care access locksmith Tendring, key safe for carers Clacton, elderly key safe installation Essex, carer access key safe Tendring, locksmith for elderly relatives',
    heroTitle: 'Locksmith support for care access and key safes.',
    short: 'Key safes, access advice and lock support for carers, family members, elderly relatives and trusted contacts.',
    intro: 'When carers, relatives or emergency contacts need reliable access, leaving keys hidden outside is not a safe solution. Brodley Locksmiths can advise on key safes, lock condition and practical access arrangements for homes across Tendring.',
    localCopy: 'Families across Clacton, Holland-on-Sea, Frinton, Walton, Harwich, Dovercourt, Brightlingsea and Tendring villages often need secure access options for elderly relatives, vulnerable residents or regular care visits.',
    bullets: ['Key safe fitting for carer and family access', 'Advice on sensible key safe positioning', 'Lock checks for elderly or vulnerable residents', 'Access planning for trusted contacts', 'Support after lost keys or access concerns'],
    bestFor: ['Carer access', 'Family members', 'Elderly relatives', 'Emergency contacts', 'Safer key control'],
    faqs: [
      { q: 'Can a key safe help carers access a property?', a: 'Yes. A properly fitted and managed key safe can allow trusted carers or family members to access the property without hiding keys outside.' },
      { q: 'Where should a care access key safe be fitted?', a: 'It should be practical but discreet. Brodley Locksmiths can advise on positioning based on the property and access needs.' },
      { q: 'Can you check the locks for an elderly relative?', a: 'Yes. Locks and doors can be reviewed to make sure they are secure but still manageable for the person using them day to day.' }
    ],
    cta: 'Ask about care access'
  },
  {
    slug: 'security-for-elderly-relatives',
    nav: 'Security for Elderly Relatives',
    icon: HousePlus,
    seoTitle: 'Security for Elderly Relatives Tendring | Locks, Doors & Key Safes',
    meta: 'Security support for elderly relatives across Tendring. Lock checks, key safes, easy-use door advice and practical home security improvements.',
    keywords: 'security for elderly relatives Tendring, locksmith elderly relatives Clacton, key safe elderly parent Essex, home security for elderly Tendring',
    heroTitle: 'Practical home security support for elderly relatives.',
    short: 'Lock checks, key safes, easier access and sensible security improvements for elderly relatives and vulnerable residents.',
    intro: 'Security for elderly relatives needs to balance protection with everyday usability. Brodley Locksmiths can help review locks, doors, key control and access arrangements so the property is safer without making life harder for the person living there.',
    localCopy: 'For families in Clacton, Frinton, Walton, Harwich, Dovercourt, Brightlingsea, Manningtree and surrounding Tendring villages, small improvements such as a key safe, better lock cylinders or door adjustments can make a real difference.',
    bullets: ['Key safe fitting for trusted family or carer access', 'Checks on stiff or difficult-to-use door locks', 'Lock upgrades where security is weak or outdated', 'Advice on front, rear and side door security', 'Support after lost keys or concerns about unknown keyholders'],
    bestFor: ['Elderly parents', 'Vulnerable residents', 'Carer visits', 'Family access', 'Home security checks'],
    faqs: [
      { q: 'Can you make locks easier for an elderly person to use?', a: 'In many cases, door adjustment, lock repair or more suitable hardware can make a door easier to use while maintaining security.' },
      { q: 'Is a key safe useful for elderly relatives?', a: 'Yes. A properly fitted key safe can help trusted family members, carers or emergency contacts access the property when needed.' },
      { q: 'Can you review the security of an elderly relative’s home?', a: 'Yes. Brodley Locksmiths can check doors, locks, key control and common weak points around the property.' }
    ],
    cta: 'Arrange a security check'
  },
  {
    slug: 'move-in-lock-change-service',
    nav: 'Move-In Lock Change Service',
    icon: KeyRound,
    seoTitle: 'Move-In Lock Change Service Tendring | New Home Lock Changes',
    meta: 'Moved home in Tendring? Brodley Locksmiths provides move-in lock changes, lock upgrades and security checks for new homeowners and tenants.',
    keywords: 'move in lock change Tendring, change locks after moving house Clacton, new home lock change Essex, moving house locksmith Tendring',
    heroTitle: 'Move-in lock changes for new homeowners and tenants.',
    short: 'Change or upgrade locks after moving home so you know exactly who has access to your property.',
    intro: 'When you move into a new home, you cannot be certain how many keys exist or who may still have them. A move-in lock change gives you a fresh start and helps you take control of property access from day one.',
    localCopy: 'Brodley Locksmiths provides move-in lock changes across Tendring, including Clacton-on-Sea, Frinton, Walton, Harwich, Dovercourt, Manningtree, Brightlingsea and nearby villages. It is also a good time to check uPVC door alignment, cylinder security and vulnerable access points.',
    bullets: ['Front and rear door lock changes after moving home', 'Lock upgrades instead of like-for-like replacement where useful', 'Checks for side doors, garages and outbuildings', 'Advice on unknown key history and key control', 'Security survey option for new properties'],
    bestFor: ['New homeowners', 'New tenants', 'Moved house', 'Unknown key history', 'First-week security checks'],
    faqs: [
      { q: 'Should I change locks after moving into a new home?', a: 'Yes, it is sensible because you usually cannot know how many copies of the keys exist or who may still have them.' },
      { q: 'Can you upgrade the locks at the same time?', a: 'Yes. Moving home is a good opportunity to upgrade weak cylinders or old locks rather than replacing like-for-like.' },
      { q: 'Which locks should be changed first?', a: 'Main entrance doors are usually the priority, followed by rear doors, side doors, garages, sheds and other access points depending on risk.' }
    ],
    cta: 'Book a move-in lock change'
  }

];

servicePages.push({
  slug: 'caravan-holiday-park-locksmith-services',
  nav: 'Caravan & Holiday Park Locksmith Services',
  icon: KeyRound,
  seoTitle: 'Caravan Locksmith Tendring | Static Caravan Locks & Key Safes',
  meta: 'Caravan locksmith services across Tendring. Static caravan lock changes, holiday park key safes, damaged locks, guest access and security checks for caravan sites and coastal parks.',
  keywords: 'caravan locksmith Tendring, static caravan locks Clacton, caravan site locksmith Essex, holiday park key safe St Osyth, caravan lock change Jaywick',
  heroTitle: 'Caravan locksmith services for holiday parks, static caravans and coastal sites.',
  short: 'Lock changes, damaged lock help, key safes and access advice for static caravans, holiday parks and caravan site owners across Tendring.',
  intro: 'Tendring has a large holiday and caravan market, so caravan access needs to be simple, secure and reliable. Brodley Locksmiths helps with static caravan lock changes, key safe installation, damaged or stiff locks, guest access and practical security advice for caravan owners and site operators.',
  localCopy: 'This service is especially useful around Clacton-on-Sea, Jaywick, St Osyth, Point Clear, Walton-on-the-Naze, Brightlingsea and the wider Tendring coast where static caravans, holiday parks and seasonal accommodation are common.',
  bullets: ['Static caravan lock changes after lost keys or ownership changes', 'Key safe fitting for trusted guest, cleaner or maintenance access', 'Help with stiff, damaged or worn caravan door locks', 'Access advice for holiday parks and short-stay accommodation', 'Security checks for caravan doors, storage areas and vulnerable access points'],
  bestFor: ['Static caravans', 'Holiday parks', 'Caravan site owners', 'Seasonal lets', 'Lost or unreturned keys'],
  faqs: [
    { q: 'Can you change locks on static caravans?', a: 'Yes. Brodley Locksmiths can help with static caravan lock changes where suitable parts and access are available.' },
    { q: 'Can you install key safes for caravan sites?', a: 'Yes. Key safes can be useful for trusted guest, cleaner, maintenance or emergency access when they are positioned and managed carefully.' },
    { q: 'Do you cover caravan parks around Clacton and St Osyth?', a: 'Yes. Caravan and holiday park locksmith support is available across Tendring, including Clacton-on-Sea, Jaywick, St Osyth, Point Clear, Walton and nearby coastal areas.' }
  ],
  cta: 'Ask about caravan locksmith work'
});

const serviceEnhancements = {
  'lock-installations': {
    category: 'Core locksmith services',
    priority: true,
    reasons: ['A new door needs a properly fitted lock', 'An old lock feels loose, worn or unreliable', 'You want to secure a garage, side gate or outbuilding', 'A rental, holiday let or business premises needs a cleaner access setup'],
    approach: ['Check the door type, frame and existing hardware before recommending a lock', 'Fit a suitable cylinder, lock case or door hardware rather than forcing a poor match', 'Explain any useful upgrade options such as stronger cylinders or improved key control'],
    localFocus: 'Popular for homeowners, landlords and small businesses across Clacton-on-Sea, Frinton, Walton, Harwich, Dovercourt, Manningtree and Brightlingsea.',
    searchTerms: ['lock fitting Tendring', 'new door locks Clacton', 'lock installation Harwich', 'garage lock fitting Essex']
  },
  'lock-upgrades': {
    category: 'Core locksmith services',
    priority: true,
    reasons: ['The current cylinder looks basic or outdated', 'You want better protection after moving home', 'A rental property or holiday let needs stronger access control', 'You are concerned about lock snapping or unknown key copies'],
    approach: ['Review the existing cylinder, handles and door condition', 'Recommend sensible upgrades based on risk, not unnecessary extras', 'Check the door still operates smoothly so the new lock is not put under strain'],
    localFocus: 'A strong option for older uPVC and composite doors across coastal Tendring where doors and hardware can see heavy use.',
    searchTerms: ['anti snap locks Tendring', 'lock upgrades Clacton', 'security lock upgrade Frinton', 'euro cylinder replacement Essex']
  },
  'lock-changes': {
    category: 'Core locksmith services',
    priority: true,
    reasons: ['You have just moved home', 'Keys have been lost, stolen or not returned', 'A tenant, guest or staff member has moved on', 'You are unsure who may still have access'],
    approach: ['Identify which doors need changing first', 'Offer like-for-like replacement or stronger upgrade options', 'Check side doors, garages and outbuildings where needed'],
    localFocus: 'Common across Clacton, Harwich, Frinton, Walton and Manningtree for new homeowners, landlords and businesses wanting control of their keys again.',
    searchTerms: ['change locks Tendring', 'lock change Clacton', 'change locks after moving house', 'landlord lock change Harwich']
  },
  'door-repairs': {
    category: 'Door repairs & mechanisms',
    priority: true,
    reasons: ['The handle feels stiff or needs lifting hard', 'The door has dropped or catches on the frame', 'The key turns badly or only locks from one side', 'The multipoint locking points no longer line up'],
    approach: ['Check alignment before replacing parts', 'Assess hinges, keeps, handles and the lock mechanism together', 'Repair the cause where possible so the same problem does not return quickly'],
    localFocus: 'Useful for uPVC, composite and timber doors throughout Tendring, especially in coastal areas where weather and heavy use affect door hardware.',
    searchTerms: ['uPVC door repairs Tendring', 'door repair Clacton', 'dropped door repair Frinton', 'door will not lock Harwich']
  },
  'security-surveys': {
    category: 'Security surveys & advice',
    priority: true,
    reasons: ['You want to know the weak points before spending money', 'You manage a rental, guest house, holiday let or business', 'A family member needs safer access arrangements', 'You want practical advice after moving or after a security concern'],
    approach: ['Review doors, locks, windows, outbuildings and side access', 'Look at key control for family, tenants, guests, staff or carers', 'Prioritise sensible improvements that make the biggest difference first'],
    localFocus: 'Available across Tendring for homes, landlords, small businesses, holiday lets, guest houses and coastal accommodation.',
    searchTerms: ['home security survey Tendring', 'security check Clacton', 'landlord security survey Essex', 'business security review Tendring']
  },
  'key-safes': {
    category: 'Access, care & key safes',
    priority: true,
    reasons: ['Carers, family or trusted contacts need reliable access', 'You manage a holiday let, rental property or guest accommodation', 'You want emergency backup access without hiding keys unsafely', 'Trades or cleaners need controlled access at agreed times'],
    approach: ['Discuss who needs access and how often', 'Choose a position that is practical but not too obvious', 'Fit the key safe securely and explain sensible code management'],
    localFocus: 'Especially useful for elderly relatives, holiday lets, landlords and caravan or coastal accommodation around Clacton, St Osyth, Jaywick, Walton and Brightlingsea.',
    searchTerms: ['key safe installation Tendring', 'carer key safe Clacton', 'holiday let key safe Essex', 'elderly access key safe Tendring']
  },
  'upvc-door-mechanism-replacement': {
    category: 'Door repairs & mechanisms',
    priority: true,
    reasons: ['The handle is stiff, floppy or will not lift properly', 'The door locks only when pushed, pulled or lifted', 'The mechanism has jammed or failed completely', 'A previous repair has not solved the alignment problem'],
    approach: ['Check whether alignment caused the failure before fitting new parts', 'Assess the multipoint mechanism, gearbox, keeps, hinges and handles', 'Advise whether adjustment, repair or replacement is the sensible route'],
    localFocus: 'A common issue for uPVC doors in Tendring homes, rentals, holiday lets and guest properties where doors see regular use and coastal weather.',
    searchTerms: ['uPVC door mechanism replacement Tendring', 'multipoint lock repair Clacton', 'uPVC gearbox replacement Essex', 'door mechanism repair Harwich']
  },
  'landlord-locksmith-services': {
    category: 'Landlords & property professionals',
    priority: true,
    reasons: ['Tenants have changed and keys may not all be returned', 'A rental door is difficult to lock or close', 'A key safe is needed for trusted maintenance access', 'A property needs a security check before a new tenancy'],
    approach: ['Prioritise fast, practical work that reduces tenant problems', 'Look at long-term reliability as well as immediate lock changes', 'Help improve key control across front, rear, side and outbuilding access'],
    localFocus: 'Suited to landlords with properties in Clacton, Jaywick, Harwich, Dovercourt, Frinton, Walton, Brightlingsea, Manningtree and nearby Tendring villages.',
    searchTerms: ['landlord locksmith Tendring', 'tenant lock change Clacton', 'rental property door repair Essex', 'landlord key safe installation']
  },
  'holiday-let-guest-house-security': {
    category: 'Holiday lets, guest houses & caravan sites',
    priority: true,
    reasons: ['Guests, cleaners and maintenance teams all need controlled access', 'High-use doors are becoming stiff or unreliable', 'Keys have been lost, copied or not returned', 'You want safer guest access before the busy season'],
    approach: ['Review guest entrances, staff access, key safes and vulnerable doors', 'Repair uPVC and composite doors before they fail during a booking', 'Recommend lock changes or upgrades where key control has become unclear'],
    localFocus: 'Strong fit for coastal accommodation in Clacton, Frinton, Walton, St Osyth, Brightlingsea and the wider Tendring holiday market.',
    searchTerms: ['holiday let locksmith Tendring', 'guest house locksmith Clacton', 'holiday accommodation key safe Essex', 'guest house door repair Tendring']
  },
  'caravan-holiday-park-locksmith-services': {
    category: 'Holiday lets, guest houses & caravan sites',
    priority: true,
    reasons: ['A static caravan has changed ownership or keys are missing', 'Guest, cleaner or maintenance access needs a safer setup', 'A caravan door lock is stiff, damaged or unreliable', 'A holiday park wants practical locksmith support for seasonal accommodation'],
    approach: ['Check the lock, door condition and access needs before recommending work', 'Offer lock changes, key safe fitting or access advice depending on the situation', 'Keep the setup simple for owners, trusted contacts and guests'],
    localFocus: 'Built specifically for Tendring’s caravan and holiday park market around Clacton, Jaywick, St Osyth, Point Clear, Walton, Brightlingsea and nearby coastal areas.',
    searchTerms: ['caravan locksmith Tendring', 'static caravan lock change Clacton', 'holiday park locksmith St Osyth', 'caravan key safe Jaywick']
  },
  'locksmith-for-landlords': { category: 'Landlords & property professionals', searchTerms: ['locksmith for landlords Tendring', 'landlord locksmith Clacton', 'rental lock change Harwich', 'tenant key control Essex'] },
  'locksmith-for-estate-agents': { category: 'Landlords & property professionals', searchTerms: ['estate agent locksmith Tendring', 'letting agent lock change Clacton', 'property access locksmith Essex', 'vacant property locksmith Harwich'] },
  'locksmith-for-holiday-lets': { category: 'Holiday lets, guest houses & caravan sites', searchTerms: ['holiday let locksmith Tendring', 'Airbnb locksmith Clacton', 'holiday let key safe Essex', 'guest access locksmith'] },
  'locksmith-for-guest-houses': { category: 'Holiday lets, guest houses & caravan sites', searchTerms: ['guest house locksmith Tendring', 'guest house door repairs Clacton', 'guest accommodation locks Essex', 'key safe guest house'] },
  'locksmith-for-small-businesses': { category: 'Small business security', searchTerms: ['business locksmith Tendring', 'shop lock change Clacton', 'small business door repair Essex', 'commercial lock upgrade Tendring'] },
  'locksmith-for-care-access-key-safes': { category: 'Access, care & key safes', searchTerms: ['care access key safe Tendring', 'carer key safe Clacton', 'key safe elderly Essex', 'family access locksmith'] },
  'security-for-elderly-relatives': { category: 'Access, care & key safes', searchTerms: ['security for elderly relatives Tendring', 'elderly home security Clacton', 'key safe for elderly Essex', 'door lock help elderly'] },
  'move-in-lock-change-service': { category: 'Move-in & key control', searchTerms: ['move in lock change Tendring', 'change locks after moving house Clacton', 'new home locksmith Essex', 'moving house lock change Harwich'] }
};

servicePages.forEach((service) => {
  const enhancement = serviceEnhancements[service.slug] || {};
  Object.assign(service, enhancement);
  service.reasons ||= [
    `You need ${service.nav.toLowerCase()} in Tendring`,
    'You want clear advice before paying for unnecessary parts',
    'You need reliable, tidy work for a home, rental property or business',
    'You want a local locksmith who understands coastal Tendring properties'
  ];
  service.approach ||= [
    'Discuss the problem, property type and access requirements',
    'Check the door, lock or security issue before recommending work',
    'Complete the work with a practical security-first approach'
  ];
  service.localFocus ||= `Available across Tendring, including Clacton-on-Sea, Frinton-on-Sea, Walton-on-the-Naze, Harwich, Dovercourt, Manningtree, Brightlingsea and nearby villages.`;
  service.searchTerms ||= [`${service.nav} Tendring`, `${service.nav} Clacton`, `${service.nav} Essex`];
});


export const townPages = [
  {
    town: 'Clacton-on-Sea',
    related: ['Great Clacton', 'Holland-on-Sea', 'Jaywick', 'Little Clacton'],
    angle: 'coastal homes, rental properties, holiday lets, bungalows and busy residential areas',
    note: 'Clacton properties often benefit from lock changes after moving home, uPVC door adjustments, key control improvements and stronger lock upgrades for front and rear doors.'
  },
  {
    town: 'Frinton-on-Sea',
    related: ['Kirby Cross', 'Great Holland', 'Walton-on-the-Naze'],
    angle: 'well-kept homes, coastal properties, holiday homes and landlord-managed properties',
    note: 'Frinton customers often want discreet, tidy work with a premium finish, especially for upgraded cylinders, door repairs and security checks.'
  },
  {
    town: 'Walton-on-the-Naze',
    related: ['Frinton-on-Sea', 'Kirby-le-Soken', 'Great Holland'],
    angle: 'coastal properties, holiday lets, residential homes and rental accommodation',
    note: 'Walton properties can be exposed to coastal conditions, making door alignment, locking mechanisms and hardware condition important to review.'
  },
  {
    town: 'Harwich',
    related: ['Dovercourt', 'Parkeston', 'Little Oakley', 'Great Oakley'],
    angle: 'residential homes, port-area businesses, rental properties and older doors',
    note: 'Harwich and Dovercourt properties may need lock changes, business security advice, uPVC repairs and practical upgrades for high-use doors.'
  },
  {
    town: 'Dovercourt',
    related: ['Harwich', 'Parkeston', 'Great Oakley', 'Little Oakley'],
    angle: 'family homes, rental properties, coastal doors and small businesses',
    note: 'Dovercourt customers often need door repairs, lock upgrades and simple, reliable lock changes after moving home or tenancy changes.'
  },
  {
    town: 'Manningtree',
    related: ['Lawford', 'Mistley', 'Bradfield', 'Wrabness'],
    angle: 'homes, village properties, landlords, small businesses and outbuildings',
    note: 'Manningtree and nearby villages often benefit from security surveys that consider doors, side access, garages, sheds and key control.'
  },
  {
    town: 'Brightlingsea',
    related: ['Alresford', 'Thorrington', 'Great Bentley', 'Elmstead Market'],
    angle: 'coastal homes, holiday lets, local businesses and residential properties',
    note: 'Brightlingsea properties can benefit from coastal-aware door repairs, cylinder upgrades and practical home security checks.'
  },
  {
    town: 'Thorpe-le-Soken',
    related: ['Weeley', 'Kirby Cross', 'Great Holland', 'Little Clacton'],
    angle: 'village homes, rental properties, outbuildings and larger residential properties',
    note: 'Thorpe-le-Soken customers often need lock upgrades, door adjustments and reviews of garages, sheds and side access points.'
  },
  {
    town: 'Weeley',
    related: ['Thorpe-le-Soken', 'Little Clacton', 'Tendring', 'Great Bentley'],
    angle: 'village properties, rural homes, rental houses and outbuildings',
    note: 'Weeley properties often benefit from practical security advice covering main doors, outbuildings, gates and key control.'
  },
  {
    town: 'St Osyth',
    related: ['Point Clear', 'Jaywick', 'Clacton-on-Sea', 'Brightlingsea'],
    angle: 'village homes, coastal properties, holiday accommodation and rental properties',
    note: 'St Osyth properties may need lock changes, uPVC door repairs and security checks for doors, windows and vulnerable access routes.'
  }
].map((t) => ({
  ...t,
  slug: t.town.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
  title: `Locksmith and security services in ${t.town}`,
  meta: `Locksmith in ${t.town}. Brodley Locksmiths provides lock changes, lock upgrades, lock installations, door repairs and security surveys across ${t.town} and Tendring.`,
  text: `Brodley Locksmiths provides lock installations, lock upgrades, lock changes, door repairs and security surveys in ${t.town} and the surrounding Tendring area.`
}));


export const blogPosts = [
  {
    slug: 'should-i-change-locks-after-moving-house',
    title: 'Should I Change Locks After Moving House?',
    seoTitle: 'Should I Change Locks After Moving House? | Tendring Locksmith Advice',
    meta: 'Moved house in Tendring? Learn why changing locks after moving home is one of the simplest ways to regain control over who can access your property.',
    keywords: 'change locks after moving house, moving home locksmith Tendring, new homeowner lock change, change locks Clacton',
    date: '2026-05-21',
    readTime: '4 minute read',
    excerpt: 'A practical guide for new homeowners on why lock changes are worth considering after moving into a property.',
    intro: 'When you move into a new property, you inherit more than the keys handed over on completion day. Previous owners, tenants, tradespeople, neighbours or family members may still have copies. Changing or upgrading the locks is a simple way to regain control.',
    sections: [
      { h: 'Why changing locks is sensible', p: 'The main reason is key control. You cannot know with certainty how many copies exist or who may still have them. A lock change removes that uncertainty and gives you a fresh start.' },
      { h: 'When to upgrade instead of simply changing', p: 'If the existing cylinder is basic, worn or vulnerable, moving home can be the right time to upgrade rather than replacing like-for-like. A better cylinder or security option can improve protection without changing the whole door.' },
      { h: 'Which doors should be checked?', p: 'Front doors and rear doors are the obvious starting point, but side doors, garage doors, sheds, gates and accessible outbuildings should also be reviewed. A security survey can help prioritise what matters most.' },
      { h: 'What Brodley Locksmiths can do', p: 'Brodley Locksmiths can change locks, advise on upgrades and check whether door alignment or mechanism issues may affect security. This is available across Tendring, including Clacton-on-Sea, Frinton, Walton, Harwich, Dovercourt, Manningtree and Brightlingsea.' }
    ],
    faqs: [
      { q: 'Should I change locks as soon as I move in?', a: 'It is sensible to change or review locks soon after moving in because you may not know who still has keys.' },
      { q: 'Do I need to change every lock?', a: 'Not always. The priority is usually main access doors first, then garages, side gates and outbuildings depending on risk.' },
      { q: 'Can I upgrade the locks at the same time?', a: 'Yes. Moving home is often a good opportunity to upgrade weak or basic locks rather than replacing them like-for-like.' }
    ]
  },
  {
    slug: 'why-is-my-upvc-door-hard-to-lock',
    title: 'Why Is My uPVC Door Hard to Lock?',
    seoTitle: 'Why Is My uPVC Door Hard to Lock? | uPVC Door Repair Tendring',
    meta: 'A uPVC door that is hard to lock may be dropped, misaligned or suffering from a failing multipoint mechanism. Read practical advice from Brodley Locksmiths.',
    keywords: 'uPVC door hard to lock, uPVC door repair Tendring, stiff uPVC door handle, multipoint lock repair Clacton',
    date: '2026-05-21',
    readTime: '5 minute read',
    excerpt: 'Common reasons uPVC doors become stiff, difficult to lock or start putting strain on the handle and mechanism.',
    intro: 'A uPVC door that is hard to lock should not be ignored. Forcing the handle can put extra strain on the multipoint mechanism and may eventually leave the door jammed or unable to lock.',
    sections: [
      { h: 'Common causes', p: 'The most common causes are door misalignment, dropped hinges, worn keeps, seasonal movement, a failing gearbox or a worn multipoint mechanism. Sometimes the lock itself is not the root problem.' },
      { h: 'Why forcing the handle is risky', p: 'If the locking points do not line up properly, the handle may need excessive force. Over time this can damage the gearbox or internal mechanism, making the repair more expensive.' },
      { h: 'Repair before replacement', p: 'Many uPVC door problems can be improved with adjustment, realignment or targeted parts replacement. A full door replacement is often unnecessary.' },
      { h: 'When to call', p: 'If the handle is stiff, the key struggles to turn, the door needs lifting or the locking points scrape, it is better to have it checked before it fails completely.' }
    ],
    faqs: [
      { q: 'Can a dropped uPVC door be repaired?', a: 'Often, yes. Many dropped or misaligned doors can be adjusted so the locking points line up correctly again.' },
      { q: 'Does a stiff handle mean the mechanism has failed?', a: 'Not always. It may be alignment rather than the mechanism itself, but the mechanism can fail if the issue is ignored.' },
      { q: 'Can Brodley Locksmiths replace uPVC mechanisms?', a: 'Yes. Brodley Locksmiths can assess the door and advise whether adjustment, repair or replacement is the best route.' }
    ]
  },
  {
    slug: 'anti-snap-locks-explained',
    title: 'Anti-Snap Locks Explained for Homeowners',
    seoTitle: 'Anti-Snap Locks Explained | Lock Upgrades Tendring',
    meta: 'Learn what anti-snap locks are, why they matter and when to consider upgrading your door locks in Tendring.',
    keywords: 'anti snap locks Tendring, anti snap lock upgrade Clacton, lock upgrades Essex, secure cylinders',
    date: '2026-05-21',
    readTime: '4 minute read',
    excerpt: 'A simple explanation of anti-snap cylinders and why they are commonly recommended for vulnerable doors.',
    intro: 'Anti-snap locks are designed to reduce one common method of forced entry on certain cylinder locks. They are not the only part of door security, but they can be an important upgrade on suitable doors.',
    sections: [
      { h: 'What anti-snap means', p: 'Anti-snap cylinders are designed so that if force is applied, the cylinder is more likely to break in a controlled way while protecting the working part of the lock.' },
      { h: 'When to consider an upgrade', p: 'Consider an upgrade if your locks are old, basic, unknown, inherited after moving home or fitted to a vulnerable uPVC or composite door.' },
      { h: 'Security is more than one part', p: 'The cylinder matters, but so do door alignment, handles, keeps, hinges and the strength of the door itself. A practical review looks at the whole door, not just one component.' }
    ],
    faqs: [
      { q: 'Do all doors need anti-snap locks?', a: 'Not necessarily. The right option depends on the door type, existing hardware and risk level.' },
      { q: 'Can anti-snap locks be fitted to uPVC doors?', a: 'Yes, anti-snap cylinder options are commonly fitted to suitable uPVC and composite doors.' },
      { q: 'Can Brodley Locksmiths advise on upgrades?', a: 'Yes. Brodley Locksmiths can assess the door and recommend practical lock upgrade options.' }
    ]
  },
  {
    slug: 'landlord-lock-change-checklist',
    title: 'Landlord Lock Change Checklist for Rental Properties',
    seoTitle: 'Landlord Lock Change Checklist | Rental Locksmith Tendring',
    meta: 'A practical landlord checklist for lock changes, tenant changeovers, key control, uPVC door repairs and rental property security across Tendring.',
    keywords: 'landlord lock change checklist, rental property locksmith Tendring, tenant lock changes Clacton, landlord locksmith Essex',
    date: '2026-05-21',
    readTime: '5 minute read',
    excerpt: 'A practical checklist for landlords dealing with tenant changeovers, key control and rental property security.',
    intro: 'Rental properties need simple, reliable security. The biggest issues are usually key control, worn doors, tenant changeovers and repairs that have been delayed for too long.',
    sections: [
      { h: 'Check key control', p: 'At the end of a tenancy, consider whether all keys have been returned and whether copies may exist. If there is any doubt, a lock change or upgrade may be sensible.' },
      { h: 'Inspect the door condition', p: 'Check whether handles are stiff, doors are dropped or locks need force. Repairing alignment issues early can reduce breakdowns and tenant frustration.' },
      { h: 'Review key safes and access', p: 'If trades, cleaners or emergency contacts need access, a properly positioned key safe may be better than hiding keys or passing them around informally.' },
      { h: 'Plan upgrades between tenancies', p: 'Void periods are a good time to improve locks, repair doors and deal with weak points before new tenants move in.' }
    ],
    faqs: [
      { q: 'Should landlords change locks between tenants?', a: 'It is often sensible, especially if keys may have been copied or not fully returned.' },
      { q: 'Can door repairs be done between tenancies?', a: 'Yes. Between tenancies is often the best time to repair uPVC doors, mechanisms and alignment issues.' },
      { q: 'Do key safes help landlords?', a: 'They can, especially for trusted trades or emergency access, as long as they are positioned and managed carefully.' }
    ]
  }
];

export const icons = {
  MapPin,
  Phone,
  Mail,
  Clock,
  Home,
  Building2,
  BadgeCheck,
  Wrench,
  Star,
  Hammer,
  HousePlus,
  Camera,
  MessageSquare,
  ClipboardCheck,
  CheckCircle2: undefined
};
