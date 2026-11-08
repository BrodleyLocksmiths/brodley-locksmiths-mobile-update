// Clear, customer-facing guidance for the four commercially important services.
// These sections describe usual checks and options; they do not claim a specific
// fault has been diagnosed or promise a particular outcome before inspection.
export const coreServiceGuides = {
  'lock-changes': {
    eyebrow: 'When a lock change makes sense',
    heading: 'New keys, clearer access, and a lock that works properly.',
    introduction: 'A lock change is often about knowing exactly who can enter your property. It is also a good time to check the condition of the existing lock and door.',
    symptomsHeading: 'Common reasons to change the lock',
    symptoms: [
      { title: 'You have moved in', text: 'You may not know how many copies of the previous keys are still in circulation.' },
      { title: 'A key has been lost or not returned', text: 'Replacing the affected lock can restore control over access.' },
      { title: 'A tenancy or keyholder has changed', text: 'A suitable change helps clarify who can access a rental, shop or managed property.' },
      { title: 'The lock is worn or unreliable', text: 'Sticking keys and difficult operation deserve an inspection, not just a new set of keys.' }
    ],
    processHeading: 'What happens during a lock change?',
    process: [
      { title: 'Check', text: 'We identify the lock type, examine the door and discuss who needs access.' },
      { title: 'Choose', text: 'You can discuss a suitable replacement and, if appropriate, higher-security cylinder options.' },
      { title: 'Fit and test', text: 'The new lock is fitted and its operation checked with the door and existing hardware.' }
    ],
    adviceTitle: 'Do I need a completely new locking system?',
    advice: 'Not necessarily. On many suitable doors, changing the cylinder may be enough. Where the mechanism or alignment is faulty, we will explain that separately rather than assume the whole door needs replacing.',
    quoteHint: 'For a quote, tell us the door type, your area and why the keys or lock need changing. A photo of the outside handle can be helpful; please do not send key numbers or photographs showing key cuts.'
  },
  'upvc-door-repairs-tendring': {
    eyebrow: 'Door fault diagnosis',
    heading: 'A stiff uPVC door does not always need a new mechanism.',
    introduction: 'The handle, locking points, hinges, keeps and frame all affect how a uPVC door closes. Looking at them together can help distinguish an alignment problem from a worn or failed component.',
    symptomsHeading: 'Signs your door needs attention',
    symptoms: [
      { title: 'The handle is hard to lift', text: 'The locking points may be meeting resistance from the frame or keeps.' },
      { title: 'You need to push or pull the door', text: 'A change in alignment may mean the lock only operates in a particular position.' },
      { title: 'The door catches or drags', text: 'Hinges, door position or hardware may need checking.' },
      { title: 'The key or mechanism jams', text: 'The cylinder, gearbox and multipoint strip may need assessment before parts are ordered.' }
    ],
    processHeading: 'How we approach a uPVC door fault',
    process: [
      { title: 'Inspect', text: 'Check how the door sits in the frame and how the handle and locking points operate.' },
      { title: 'Diagnose', text: 'Check hinges, keeps, cylinder and gearbox to identify the likely cause of resistance.' },
      { title: 'Repair or replace', text: 'Explain whether adjustment or a component replacement is appropriate, then test the completed work.' }
    ],
    adviceTitle: 'Avoid forcing a stiff handle',
    advice: 'Continued force can increase strain on the locking mechanism. If the door will not secure, call rather than relying on repeated attempts to lift the handle.',
    quoteHint: 'Describe whether the fault happens when the door is open, closed or both. Include your area and a photograph of the handles or door edge if convenient.'
  },
  'anti-snap-lock-upgrades': {
    eyebrow: 'Cylinder security',
    heading: 'A stronger cylinder should also be the right fit for the door.',
    introduction: 'Anti-snap cylinders are designed to make a common forced-entry method more difficult. Choosing the correct cylinder and checking the surrounding hardware are both important.',
    symptomsHeading: 'When an upgrade may be worth discussing',
    symptoms: [
      { title: 'An older or basic cylinder', text: 'Some doors still use cylinders with limited security features.' },
      { title: 'New home or tenancy', text: 'Replacing the existing cylinder can improve key control at the same time as security.' },
      { title: 'Cylinder protrudes beyond the furniture', text: 'Cylinder sizing and the handle or escutcheon should be checked together.' },
      { title: 'You want clearer security options', text: 'We can explain suitable cylinder choices without assuming the most expensive is the right answer.' }
    ],
    processHeading: 'What we check before upgrading',
    process: [
      { title: 'Existing hardware', text: 'Review the door type, cylinder, handle and how the multipoint lock operates.' },
      { title: 'Correct specification', text: 'Discuss appropriate anti-snap options and ensure the chosen cylinder is correctly sized.' },
      { title: 'Operation', text: 'Fit and check the lock works properly with the rest of the door.' }
    ],
    adviceTitle: 'An anti-snap cylinder is one part of door security',
    advice: 'Even a stronger cylinder cannot correct a dropped door, defective multipoint mechanism or damaged hardware. Those issues should be assessed separately if present.',
    quoteHint: 'Tell us whether the door is uPVC, composite or timber and whether the existing lock works smoothly. A clear picture of the handle area may help.'
  },
  'key-safes': {
    eyebrow: 'Safer access arrangements',
    heading: 'The right key safe is about more than fixing a box to the wall.',
    introduction: 'Key safes can support reliable access for carers, family, holiday-let guests and trusted trades. The location, fixing, who has the code and how often access changes all matter.',
    symptomsHeading: 'Who might benefit from a fitted key safe?',
    symptoms: [
      { title: 'Carers and family', text: 'An agreed access arrangement may help trusted people reach a property when needed.' },
      { title: 'Holiday lets and guest accommodation', text: 'A key safe may simplify managed arrivals while still requiring careful code handling.' },
      { title: 'Landlords and property managers', text: 'Controlled access can be useful for authorised cleaners, contractors or agents.' },
      { title: 'Backup access', text: 'An appropriate arrangement may reduce the need to hide spare keys outside.' }
    ],
    processHeading: 'What we consider before fitting',
    process: [
      { title: 'Access needs', text: 'Who needs to enter, how often, and how will access permissions be managed?' },
      { title: 'Position and fixing', text: 'Choose a suitable location and secure fixing for the surface and circumstances.' },
      { title: 'Hand-over', text: 'Explain how to manage and change the code responsibly after fitting.' }
    ],
    adviceTitle: 'Keep access codes private',
    advice: 'Avoid sharing a code more widely than necessary, and change it when access permissions change. Never send the key-safe code in an initial online enquiry.',
    quoteHint: 'Tell us whether the property is a home, rental, holiday let or care-access property and the area you are in. Please do not include access codes.'
  }
};
