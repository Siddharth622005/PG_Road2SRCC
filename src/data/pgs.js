export const colleges = [
  { slug: 'srcc', name: 'SRCC', full: 'Shri Ram College of Commerce' },
  { slug: 'hindu', name: 'Hindu', full: 'Hindu College' },
  { slug: 'hansraj', name: 'Hansraj', full: 'Hansraj College' },
  { slug: 'kmc', name: 'KMC', full: 'Kirori Mal College' },
  { slug: 'venky', name: 'Venky', full: 'Shri Venkateswara College' },
  { slug: 'lsr', name: 'LSR', full: 'Lady Shri Ram College' },
  { slug: 'miranda', name: 'Miranda House', full: 'Miranda House' },
  { slug: 'drc', name: 'DRC', full: 'Daulat Ram College' },
  { slug: 'ramjas', name: 'Ramjas', full: 'Ramjas College' },
  { slug: 'sgtb', name: 'SGTB Khalsa', full: 'Sri Guru Tegh Bahadur Khalsa College' },
  { slug: 'stephens', name: "St. Stephen's", full: "St. Stephen's College" },
  { slug: 'ipcw', name: 'IPCW', full: 'Indraprastha College for Women' },
];

// Solitaire Living has three room types under one roof — one listing, with a
// room-type picker on the detail page, rather than three separate cards.
// roomTypes[0] (cheapest) is the canonical price/sharing/deposit used for
// cards, sorting, and budget filters — "from ₹21,000/mo".
const solitaireRoomTypes = [
  {
    id: 'triple', label: 'Triple sharing', price: 21000, deposit: 42000,
    photos: [], videos: [],
    note: "We don't have room photos or video for this room type yet.",
  },
  {
    id: 'double', label: 'Double sharing', price: 23000, deposit: 46000,
    photos: [],
    videos: [{ caption: 'Double-sharing room, filmed on our visit', src: '/pg-media/solitaire-living-vijay-nagar/double-sharing-room.mp4' }],
    note: 'Real video of this room type, shot by us on the visit.',
  },
  {
    id: 'single', label: 'Single occupancy', price: 32000, deposit: 64000,
    photos: [],
    videos: [{ caption: 'Single-occupancy room, filmed on our visit', src: '/pg-media/solitaire-living-vijay-nagar/single-sharing-room.mp4' }],
    note: 'Real video of this room type, shot by us on the visit.',
  },
];

const solitaireRules = [
  '10pm gate close',
  "Parents allowed anytime; female visitors allowed only with the roommate's consent; friends' policy not specified; overnight guests charged ₹800",
  "11-month lock-in; 30 days' notice required after the agreement period ends. Leaving before the committed lock-in forfeits the deposit entirely.",
  'Deposit is 2 months\' rent, refundable per the agreement — the owner says only damage costs are deducted (separate from the lock-in forfeiture rule above).',
  '₹3,000/year maintenance charge, billed separately from monthly rent — factor it into your yearly cost.',
];

const solitaireFieldNotes = [
  'This is a newly onboarded PG — first visit was 15 Jul 2026 at 9:30pm, so there\'s no resident pulse or deposit history yet.',
  'We shot the building front, gym, study area, lobby, fire exit, and a wifi speed test ourselves — plus video of an actual double-sharing and single-occupancy room. Rules, safety claims (beyond the fire exit), and amenities are still what the owner told us — we haven\'t independently confirmed those with residents yet.',
  'Three room types here: triple sharing (₹21,000), double sharing (₹23,000), and single occupancy (₹32,000) — pick one below to see its price, deposit, and video where available. We have real room video for single and double; triple-sharing photos/video are still pending.',
  'Owner says: operating since 2019, with 60+ students currently living here across all room types. Most residents come from Miranda House, SRCC, DRC, SGTB Khalsa, and Ramjas (not independently confirmed).',
  'Food: 4 meals a day (breakfast 7:30–9am, lunch 1–3:30pm, snacks 5–6pm, dinner 8–9pm), vegetarian kitchen — but residents can cook eggs themselves. Outside food is allowed.',
  'Deposit is 2 months\' rent, refundable per the agreement — but leaving before the 11-month lock-in forfeits it. That\'s a stricter policy than most PGs on this site; read the house rules carefully before signing.',
];

// Aggarwal Living: one address, five "Houses" (separate buildings within the
// same complex) — Platinum/Gold/Silver for boys, Diamond/Ruby for girls.
// Gender still splits into two listings (every PG on this site does), but
// each keeps its own room-type picker across the Houses/balcony tiers.
const aggarwalBase = {
  area: 'Kamla Nagar',
  address: 'Plot no 32, Bungalow Rd, Kamla Nagar, Delhi, 110007',
  foodIncluded: true,
  extras: 0,
  verifiedDate: '16 Jul 2026',
  verifiedBy: 'Sidd',
  verifierNote: 'Siddharth Mittal & Aditya Singh Dugtal',
  stale: false,
  priceConfirmed: '16 Jul 2026',
  // Entirely owner-reported so far — no evidence collected yet beyond the visit itself.
  factsVerified: false,
  colleges: [
    { slug: 'hansraj', mins: 7 },
    { slug: 'drc', mins: 12 },
    { slug: 'kmc', mins: 12 },
    { slug: 'ramjas', mins: 13 },
    { slug: 'srcc', mins: 17 },
    { slug: 'hindu', mins: 20 },
    { slug: 'stephens', mins: 20 },
    { slug: 'miranda', mins: 23 },
    { slug: 'sgtb', mins: 27 },
  ],
  checks: [
    { label: 'Visited in person', evidence: 'Visited at 9pm on 16 Jul 2026. Everything below is what the owner told us during that visit — not yet independently confirmed with residents. The photos on this listing were sent by the owner afterward, not shot by us.', date: '16 Jul 2026' },
  ],
  pulse: {
    month: 'Jul 2026',
    respondents: 0,
    scores: { wifi: null, water: null, food: null, quiet: null, afterDark: null },
    note: 'Just verified on 16 Jul — no residents have joined our monthly pulse yet. Scores will appear once students move in and start contributing.',
  },
  outcomes: {
    contacts: 0, moveIns: 0, returningPct: 0, avgStayMonths: 0,
    deposits: { returned: 0, total: 0, avgDays: 0 },
    ownerReplyMins: null, ownerAnsweredPct: null,
  },
  residentQA: [],
  amenities: {
    present: ['WiFi', 'Food', 'Power backup', 'CCTV', 'AC', 'Washing machine', 'Fridge', 'Microwave', 'Housekeeping', 'Lift', 'RO Water', 'Geyser', 'Study table', 'Cupboard', 'Mattress'],
    absent: [],
  },
  warden: 'On-site warden, 24/7 (owner says every property in the chain has one — not yet independently confirmed for this address)',
  rules: [
    '9:30–10pm last entry (owner gave a range, not an exact time — confirm before you rely on it)',
    'Friends allowed to visit during the day; parents always welcome; no overnight guest policy specified',
    '11-month lock-in — owner did not specify what happens to the deposit if you leave early; ask before signing',
    'Deposit is 2 months\' rent, refundable at the end of the 11-month tenure',
    'Annual maintenance charge applies — amount not specified yet; electricity billed separately — rate not specified yet',
  ],
  nearby: [],
  metro: 'Not yet confirmed — ask us for the nearest metro walk time',
  hospital: 'Not yet confirmed — ask us for the nearest hospital',
  photos: [
    { caption: 'Photos pending — the owner is sending separate sets for the boys\' and girls\' houses' },
  ],
  ownerPhone: '9266582840',
};

const aggarwalFieldNotes = [
  'This is a newly onboarded PG — first visit was 16 Jul 2026 at 9pm, so there\'s no resident pulse or deposit history yet.',
  'The photos below (lobby, dining, amenities, and a few room shots) were sent to us by the owner, not shot by our team — so treat them the same as any other owner-reported fact, not independent evidence. We also haven\'t confirmed which specific House/tier each room photo belongs to yet.',
  'Everything else on this page — rules, safety claims, amenities, room tiers — is also what the owner told us. We haven\'t independently tested or confirmed any of it with residents yet.',
  '⚠️ The owner described safety as blanket claims across "all our properties" — 24/7 guards, CCTV everywhere, and "100% Fire Safe" with fire exits and extinguishers at every location. We\'re treating these as owner-reported, not verified, until we\'ve checked this specific building ourselves. A claim of "100%" anything is exactly the kind of thing we\'d normally want our own photo or a resident quote behind — we don\'t have either yet.',
  'Food: 4 meals a day, pure vegetarian kitchen (no non-veg, even outside food), with a stated variety — North Indian, South Indian, Italian, Chinese. Outside food is allowed.',
  'Some room tiers were given as a range rather than a fixed price (e.g. Silver House ₹19,000–22,000) — the exact price depends on the specific room. Confirm the exact number for your room before committing.',
  'Study table, cupboard, and mattress are described by the owner as "available separately" — unclear if that means an extra charge or just a different room location. Ask before assuming they\'re included at no cost.',
];

// Saisha Homes: girls-only, single vs double sharing at fixed prices.
const saishaRoomTypes = [
  {
    id: 'double', label: 'Double sharing', price: 19900, deposit: 39800,
    photos: [
      { caption: 'Double-sharing room', src: '/pg-media/saisha-homes-gtb-nagar/double-sharing-room.jpg' },
      { caption: 'Double-sharing room, another angle', src: '/pg-media/saisha-homes-gtb-nagar/double-sharing.jpg' },
      { caption: 'Double-sharing room, third view', src: '/pg-media/saisha-homes-gtb-nagar/double-sharing-2.jpg' },
    ],
    note: 'These double-sharing room photos are real, shot by us on the visit.',
  },
  {
    id: 'single', label: 'Single occupancy', price: 26900, deposit: 53800,
    photos: [
      { caption: 'Single-occupancy room', src: '/pg-media/saisha-homes-gtb-nagar/single-sharing.jpg' },
      { caption: 'Single-occupancy room, another angle', src: '/pg-media/saisha-homes-gtb-nagar/single-sharing-1.jpg' },
    ],
    note: 'These single-occupancy room photos are real, shot by us on the visit.',
  },
];

const saishaRules = [
  '10:30pm gate close',
  'Visiting hours till 7pm',
  '11-month lock-in (standard contract)',
  'Deposit is 2 months\' rent — adjusted against your May and June rent, not a separate refundable cash deposit. Confirm this in writing before you pay, since it works differently from most PGs on this site.',
  'No alcohol, no smoking',
];

const saishaFieldNotes = [
  'This is a newly onboarded PG — first visit was 16 Jul 2026 at 7pm, so there\'s no resident pulse or deposit history yet.',
  'We shot the building front, cupboards, washroom, dining area, terrace, lobby, and the posted food menu ourselves — plus real photos of both a double-sharing and a single-occupancy room. Rules, safety claims, and amenities are still what the owner told us; we haven\'t independently confirmed those with residents yet.',
  'Saisha Homes operates from two buildings — one of our videos is a walkthrough of the second building\'s lobby. Ask the owner which building your room would actually be in before committing.',
  'Owner says: operating since 2016, with capacity for 147 students across 60 rooms (20 single, 40 double). Most residents come from Miranda House, SRCC, and DRC (not independently confirmed).',
  '⚠️ The owner says there\'s no backup electricity in the rooms — worth asking about directly, since a power cut without backup is a real inconvenience, not just a missing amenity.',
  'Food: 4 meals a day, with non-veg served 3 times a week (not a pure-veg kitchen, unlike some other PGs on this site). Outside food is allowed.',
  'The 2-month deposit is described as "adjustable" against May and June rent — this is not a standard refundable security deposit. Ask the owner to confirm exactly how this works before signing.',
  'Charges besides rent are limited to electricity — no separate annual maintenance charge was mentioned, unlike some other PGs on this site. Electricity rate wasn\'t specified; ask before assuming.',
];

// Stay Eaze PG: both room types are priced as a range, not a fixed number.
const stayEazeRoomTypes = [
  {
    id: 'double', label: 'Double sharing', price: 16000, priceMax: 20000, deposit: 16000,
    photos: [
      { caption: 'A double-sharing room', src: '/pg-media/stay-eaze-pg-shakti-nagar/double-sharing-photo.jpg' },
      { caption: 'A double-sharing room, another angle', src: '/pg-media/stay-eaze-pg-shakti-nagar/double-sharing-room-2.jpg' },
      { caption: 'A double-sharing room, third view', src: '/pg-media/stay-eaze-pg-shakti-nagar/double-sharing-room-3.jpg' },
    ],
    videos: [
      { caption: 'Double-sharing room, filmed on our visit', src: '/pg-media/stay-eaze-pg-shakti-nagar/double-sharing-room.mp4' },
      { caption: 'A different double-sharing room, no balcony', src: '/pg-media/stay-eaze-pg-shakti-nagar/double-sharing-room-no-balcony.mp4' },
    ],
    note: 'Owner gave the price as a range (₹16,000–20,000), not a fixed number — confirm the exact price for your specific room. Photos/video are real, shot by us on the visit, but rooms do vary — ask which one matches what you\'d get.',
  },
  {
    id: 'single', label: 'Single occupancy', price: 26000, priceMax: 36000, deposit: 26000,
    photos: [],
    note: 'Owner gave this as a range (₹26,000–36,000), not a fixed price — confirm the exact number for your specific room. No photos yet.',
  },
];

const stayEazeRules = [
  '9pm gate close — but the owner separately said parents\' approval is needed for entry after 9:30pm. We haven\'t resolved this apparent inconsistency yet; confirm the actual curfew before relying on either time.',
  'Parents allowed: only mother, per the owner. Friends allowed: only female, common area only. Overnight guests: only female, ₹750/night.',
  '11-month lock-in and 11-month notice period. Breaking the lock-in forfeits the entire deposit — stricter than most PGs on this site, where usually only part of the deposit is at risk for early exit.',
  'Deposit is 1 month\'s rent, refundable after 11 months. Any broken fixtures are deducted from it.',
  'One-time police verification charge at move-in — amount not specified; ask before assuming it\'s free.',
  'Entry via key card, for added safety.',
];

const stayEazeFieldNotes = [
  'This is a newly onboarded PG — first visit was 16 Jul 2026 at 8:30pm, so there\'s no resident pulse or deposit history yet.',
  'We shot the building front, eating area, terrace, lobby, and a double-sharing room ourselves, and tasted the food directly — quality was good. Rules, safety claims, and amenities are still what the owner told us; we haven\'t independently confirmed those with residents yet. Room photos/video for single occupancy aren\'t available yet.',
  '⚠️ The two "student testimonial" videos on this page were provided by the owner, not recorded by us — treat them as marketing content, not independent verification. We haven\'t talked to a current resident ourselves yet.',
  '⚠️ Backup electricity only covers common areas, not rooms — if the power goes out, your room has no backup, per the owner. Fridge and RO water are also only on the ground floor, not every floor.',
  'Owner says: operating since June 2025, ~50 students currently. Most residents come from DRC, SRCC, and Miranda House — plus somewhere the owner called "Vajiro institute," which we haven\'t been able to match to a real college yet. Ask us if you want us to follow up on that.',
  'Single and double rooms are both priced as a range (Double ₹16,000–20,000; Single ₹26,000–36,000) — the exact price depends on the specific room. Confirm the exact number before committing.',
  'Deposit is only 1 month\'s rent (lower than most PGs here), but breaking the 11-month lock-in forfeits all of it, not just part — a stricter tradeoff than it first looks.',
  'Electricity is billed separately via prepaid meter at ₹14/unit, plus a flat ₹50/month "app charge." A one-time police verification charge also applies at move-in — amount not specified.',
];

// North Campus Girls PG: triple/double are price ranges, single is a
// confirmed fixed price.
const ncGirlsRoomTypes = [
  {
    id: 'triple', label: 'Triple sharing', price: 14000, priceMax: 15000, deposit: 14000,
    photos: [
      { caption: 'Triple-sharing room', src: '/pg-media/north-campus-girls-pg-vijay-nagar/triple-sharing-room.jpg' },
      { caption: 'Triple-sharing room, with balcony', src: '/pg-media/north-campus-girls-pg-vijay-nagar/triple-sharing-with-balcony.jpg' },
    ],
    note: 'Real photos, shot by us on the visit. The ₹14,000–15,000 range likely reflects the balcony vs. non-balcony difference shown here, though the owner didn\'t confirm that explicitly — ask which price applies to which room.',
  },
  {
    id: 'double', label: 'Double sharing', price: 17000, priceMax: 19000, deposit: 17000,
    photos: [
      { caption: 'Double-sharing room', src: '/pg-media/north-campus-girls-pg-vijay-nagar/double-sharing-room.jpg' },
      { caption: 'Double-sharing room, no balcony', src: '/pg-media/north-campus-girls-pg-vijay-nagar/double-sharing-no-balcony.jpg' },
      { caption: 'Double-sharing room, with balcony', src: '/pg-media/north-campus-girls-pg-vijay-nagar/double-sharing-with-balcony.jpg' },
    ],
    videos: [
      { caption: 'Double-sharing room, with balcony, filmed on our visit', src: '/pg-media/north-campus-girls-pg-vijay-nagar/double-sharing-with-balcony.mp4' },
      { caption: 'Double-sharing room, no balcony, filmed on our visit', src: '/pg-media/north-campus-girls-pg-vijay-nagar/double-sharing-no-balcony.mp4' },
    ],
    note: 'Real photos and video, shot by us on the visit. The ₹17,000–19,000 range likely reflects the balcony vs. non-balcony difference shown here, though the owner didn\'t confirm that explicitly — ask which price applies to which room.',
  },
  {
    id: 'single', label: 'Single occupancy', price: 24000, deposit: 24000,
    photos: [
      { caption: 'Single-occupancy room', src: '/pg-media/north-campus-girls-pg-vijay-nagar/single-sharing.jpg' },
    ],
    note: 'Real photo, shot by us on the visit.',
  },
];

const ncGirlsRules = [
  '10pm gate close',
  'Visitors met at reception only. Parents allowed — fathers meet at reception, mothers may go up to the room (per the owner). Friends: female only, max 2 hours. Overnight guests: "nominal charges" — amount not specified.',
  'Lease is annual — notice period and lock-in are both tied to the full lease term, not a separate window. Breaking the lease risks deposit forfeiture, per the owner (exact terms not detailed — ask before signing).',
  'Deposit is 1 month\'s rent, refundable on completion of the lease. ₹5,000/year is described as "deducted annually as maintenance" — unclear if that comes out of your deposit or is billed separately; confirm before signing.',
  'One-time charge of ₹1,000 for registration and police verification at move-in.',
  'Electricity billed separately via meter at ₹15/unit.',
];

const ncGirlsFieldNotes = [
  'This is a newly onboarded PG — first visit was 18 Jul 2026 at 5pm, so there\'s no resident pulse or deposit history yet.',
  '⚠️ There is no fire exit here — only stairs, per the owner. Worth asking about directly and weighing seriously before committing.',
  'We shot the building front, both floors\' lobbies and kitchens, the mess area, roof, toilet, and a wifi speed test ourselves — plus real photos and video of triple, double, and single rooms (including balcony and non-balcony variants). Rules, safety claims (beyond the fire exit), and amenities are still what the owner told us — we haven\'t independently confirmed those with residents yet.',
  'Owner says: operating since 2017, ~40 students, 12 beds currently available across triple/double/single. Most residents come from Miranda House, DRC, SRCC, Ramjas, and Hindu (not independently confirmed).',
  'Room prices: triple ₹14,000–15,000, double ₹17,000–19,000, single a fixed ₹24,000 (confirmed, not a range) — pick a room type below to see details.',
  'CCTV: owner states 16 cameras specifically — a real number, though we haven\'t counted them ourselves. Backup power covers fans and lights only, not AC, per the owner.',
  'The owner answered "yes" to something described as "Quiet Rooms" rather than quiet hours — unclear if specific rooms are designated quiet, or if it\'s a general quiet-hours policy. Ask for clarification.',
];

// Aurum Comfort: Double sharing is priced ₹20,000–25,000 depending on
// balcony type (big/small/none) — owner didn't give exact per-tier prices,
// so it stays one room type with a range rather than three invented tiers.
const aurumRoomTypes = [
  {
    id: 'double', label: 'Double sharing', price: 20000, priceMax: 25000, deposit: 40000,
    photos: [
      { caption: 'Double-sharing room, no balcony', src: '/pg-media/aurum-comfort-vijay-nagar/double-sharing-no-balcony.jpg' },
      { caption: 'Double-sharing room, no balcony, another view', src: '/pg-media/aurum-comfort-vijay-nagar/double-sharing-no-balcony-2.jpg' },
      { caption: 'Double-sharing room, smaller balcony', src: '/pg-media/aurum-comfort-vijay-nagar/double-sharing-small-balcony.jpg' },
      { caption: 'Double-sharing room, general view', src: '/pg-media/aurum-comfort-vijay-nagar/double-sharing-room.jpg' },
      { caption: 'Double-sharing room, another general view', src: '/pg-media/aurum-comfort-vijay-nagar/double-sharing-general.jpg' },
    ],
    videos: [
      { caption: 'Double-sharing room, no balcony, filmed on our visit', src: '/pg-media/aurum-comfort-vijay-nagar/double-sharing-no-balcony.mp4' },
      { caption: 'Double-sharing room, with balcony, filmed on our visit', src: '/pg-media/aurum-comfort-vijay-nagar/double-sharing-with-balcony.mp4' },
    ],
    note: 'Owner gave this as a range (₹20,000–25,000) depending on the room\'s balcony — big balcony, small balcony, or none — and we still don\'t have the exact price for each. Photos/video below are real, shot by us, and organized by balcony type so you can at least see what each one looks like; ask the owner which price applies to which room.',
  },
  {
    id: 'single', label: 'Single occupancy', price: 40000, deposit: 80000,
    photos: [],
    note: "We don't have room photos for this room type yet.",
  },
];

const aurumRules = [
  '11pm gate close',
  'Visitor policy is unusually restrictive: only the mother may visit, and only occasionally, per the owner. Friends may visit but not stay overnight. Overnight guests are not allowed at all.',
  '1-year lock-in; 2 months\' notice period required to leave.',
  'Deposit is 2 months\' rent, refundable — only damages or unpaid electricity bills are deducted, per the owner.',
  'No backup electricity right now — the owner says power cuts are rare here, so it wasn\'t felt necessary. Worth asking about directly if this matters to you.',
  'Lift access is for emergencies only, not daily use, per the owner — factor this in if your room ends up on a higher floor.',
];

const aurumFieldNotes = [
  'This is a newly onboarded PG — first visit was 18 Jul 2026 at 9pm, so there\'s no resident pulse or deposit history yet.',
  'We shot the building front, kitchen, study table, a wifi speed test, and real photos/video of double-sharing rooms (with and without balcony) ourselves. Rules, safety claims, and amenities are still what the owner told us — we haven\'t independently confirmed those with residents yet.',
  'Owner says: operating for the last 3 years, ~30 students, 9 seats currently available. Most residents come from SRCC, Hansraj, Miranda House, DRC, Ramjas, and Hindu — plus IPCW (Indraprastha College for Women), though we don\'t have a walk time to IPCW yet (not independently confirmed).',
  'There\'s a private garden/park area on the property, per the owner.',
  'Food: 4 meals a day (roughly 8am, 1pm, 6pm, 8pm), vegetarian only, outside food allowed.',
];

export const pgs = [
  {
    slug: 'prime-hostels-central-roop-nagar',
    name: 'Prime Hostels Central',
    area: 'Roop Nagar',
    address: 'Building 1/28, Block 1, Roop Nagar, New Delhi, 110007',
    gender: 'Girls',
    price: 16500,
    sharing: 'double sharing',
    deposit: 33000,
    foodIncluded: true,
    extras: 0,
    verifiedDate: '15 Jul 2026',
    verifiedBy: 'Sidd',
    verifierNote: 'Siddharth Mittal & Aditya Singh Dugtal',
    stale: false,
    priceConfirmed: '15 Jul 2026',
    // Most facts on this listing (rules, safety claims, amenities) are what the
    // owner told us, not independently confirmed with residents yet. Keeps
    // ParentView and the dossier from overclaiming what we actually checked.
    factsVerified: false,
    colleges: [
      { slug: 'drc', mins: 16 },
      { slug: 'ramjas', mins: 18 },
      { slug: 'srcc', mins: 20 },
      { slug: 'hansraj', mins: 23 },
      { slug: 'miranda', mins: 25 },
      { slug: 'hindu', mins: 25 },
      { slug: 'stephens', mins: 25 },
      { slug: 'kmc', mins: 26 },
      { slug: 'sgtb', mins: 26 },
    ],
    cardNote: '4 meals a day, a genuinely well-equipped common room — room photos still pending.',
    fieldNotes: [
      'This is a newly onboarded PG — first visit was 15 Jul 2026, so there\'s no resident pulse or deposit history yet. Below, we\'ve marked what we saw ourselves versus what the owner told us.',
      'We walked into the common room ourselves: TT table, darts board, chess set, foosball table, and a coffee machine — genuinely well-equipped for a PG this size. Photos and video below are ours, shot on the visit.',
      'We ran a wifi speed test ourselves during the visit: 78 Mbps, on camera, and checked the common-room TV works too. Almost everything else on this page — rules, safety claims, amenities — is what the owner told us; we haven\'t independently confirmed it with residents yet.',
      '⚠️ The owner told us there is only one staircase/exit for the building — no separate fire exit. Worth asking about directly before committing.',
      '30 of 60 beds were filled as of our visit — plenty of availability right now.',
      'Owner says: this PG has been open 1 year; they\'ve been running PGs for 6 years overall. Most current residents are from Miranda House, DRC, and IPCW (not independently confirmed).',
      'Single-occupancy rooms are available on request, but the owner hasn\'t confirmed pricing for that yet — ask before assuming the double-sharing rate applies.',
      'Electricity is billed separately via prepaid meter at ₹15/unit — everything else (water, wifi, laundry, maintenance, cleaning) is included in rent.',
      'Room photos are still pending from the owner — everything shown below is the common area only.',
    ],
    // Only two things here are things we actually tested ourselves. Everything
    // else the owner told us is in fieldNotes, clearly labeled as unverified.
    // Both carry real video shot on the visit — tap to watch, not just read.
    checks: [
      { label: 'Wi-Fi speed tested', evidence: 'Tested ourselves during the visit, 15 Jul at 8pm: 78 Mbps, filmed live on the speed test app.', date: '15 Jul 2026', media: { type: 'video', src: '/pg-media/prime-hostels-central-roop-nagar/speed-test.mp4' } },
      { label: 'Common area confirmed in person', evidence: 'Walked through it ourselves: TT table, darts, chess, foosball table, and a coffee machine — all present and working.', date: '15 Jul 2026', media: { type: 'video', src: '/pg-media/prime-hostels-central-roop-nagar/common-room-video.mp4' } },
      { label: 'Common room TV checked', evidence: 'Checked the TV in the common room ourselves during the visit — powered on and working.', date: '15 Jul 2026', media: { type: 'video', src: '/pg-media/prime-hostels-central-roop-nagar/checking-tv.mp4' } },
    ],
    // Brand new listing — no residents on the platform yet to score it monthly.
    pulse: {
      month: 'Jul 2026',
      respondents: 0,
      scores: { wifi: null, water: null, food: null, quiet: null, afterDark: null },
      note: 'Just verified on 15 Jul — no residents have joined our monthly pulse yet. Scores will appear once students move in and start contributing.',
    },
    // No track record yet either — this listing just went live.
    outcomes: {
      contacts: 0, moveIns: 0, returningPct: 0, avgStayMonths: 0,
      deposits: { returned: 0, total: 0, avgDays: 0 },
      ownerReplyMins: null, ownerAnsweredPct: null,
    },
    priceHistory: [
      { when: 'Jul 2026', price: 16500 },
    ],
    residentQA: [],
    amenities: {
      present: ['WiFi', 'Food', 'Laundry', 'Power backup', 'CCTV', 'AC', 'Geyser', 'Washing machine', 'Fridge', 'Housekeeping', 'Lift', 'RO Water', 'TV'],
      absent: ['Gym'],
    },
    warden: 'On-site warden, 12hr shift currently — owner says known staff are reachable 24/7 for emergencies (not yet independently confirmed)',
    rules: [
      '11pm gate close — after that, permission needed from parents',
      'Parents allowed with notice; friends and overnight guests not allowed',
      'Notice period and lock-in period: not specified yet — confirm with owner before signing.',
      'Deposit is 2 months\' rent (₹33,000): ₹16,500 is adjusted against your final month\'s rent, ₹16,500 is refundable at move-out. Owner describes deduction rules as "student-friendly."',
    ],
    nearby: [],
    metro: 'Guru Tegh Bahadur Nagar (27 min walk)',
    hospital: 'Not yet confirmed — ask us for the nearest hospital',
    photos: [
      { caption: 'Front of the building', src: '/pg-media/prime-hostels-central-roop-nagar/pg-front.jpg' },
      { caption: 'Common room — TT table, darts, chess and foosball', src: '/pg-media/prime-hostels-central-roop-nagar/common-room.jpg' },
    ],
    // Video walkthrough of the common area, shot on the visit — shown below the gallery.
    videos: [
      { caption: 'Common room, walked through on our visit', src: '/pg-media/prime-hostels-central-roop-nagar/common-room-video.mp4' },
      { caption: 'Walking up to the building from outside', src: '/pg-media/prime-hostels-central-roop-nagar/common-room-walkthrough.mp4' },
    ],
    ownerPhone: '9728717674',
  },
  {
    slug: 'solitaire-living-vijay-nagar',
    name: 'Solitaire Living',
    area: 'Vijay Nagar',
    address: 'Single Storey, G-13, Block G, Vijay Nagar, Delhi, 110033',
    gender: 'Girls',
    // Canonical fields = the cheapest room type. Cards, sort, and budget
    // filters use these; the detail page's room-type picker overrides them.
    price: solitaireRoomTypes[0].price,
    sharing: solitaireRoomTypes[0].label.toLowerCase(),
    deposit: solitaireRoomTypes[0].deposit,
    roomTypes: solitaireRoomTypes,
    foodIncluded: true,
    extras: 0,
    verifiedDate: '15 Jul 2026',
    verifiedBy: 'Sidd',
    verifierNote: 'Siddharth Mittal & Aditya Singh Dugtal',
    stale: false,
    priceConfirmed: '15 Jul 2026',
    factsVerified: false,
    colleges: [
      { slug: 'miranda', mins: 12 },
      { slug: 'srcc', mins: 13 },
      { slug: 'sgtb', mins: 15 },
      { slug: 'drc', mins: 15 },
      { slug: 'ramjas', mins: 19 },
      { slug: 'hindu', mins: 25 },
      { slug: 'stephens', mins: 25 },
      { slug: 'kmc', mins: 27 },
      { slug: 'hansraj', mins: 29 },
    ],
    cardNote: 'Three room types under one roof — triple, double, or single. Pick one on the listing page.',
    fieldNotes: solitaireFieldNotes,
    checks: [
      { label: 'Visited in person', evidence: 'Visited unannounced at 9:30pm on 15 Jul 2026 and walked through the building. Rules and safety claims (beyond the fire exit, which we filmed) are still what the owner told us — not yet independently confirmed with residents.', date: '15 Jul 2026' },
      { label: 'Wi-Fi speed tested', evidence: 'Tested live on camera during the visit — watch the video for the result.', date: '15 Jul 2026', media: { type: 'video', src: '/pg-media/solitaire-living-vijay-nagar/speed-test.mp4' } },
      { label: 'Fire exit confirmed in person', evidence: 'Filmed the fire exit and lobby ourselves — a working, accessible fire exit is in place.', date: '15 Jul 2026', media: { type: 'video', src: '/pg-media/solitaire-living-vijay-nagar/fire-exit-and-lobby.mp4' } },
      { label: 'Common areas confirmed in person', evidence: 'Filmed the gym and study area ourselves — both present and usable.', date: '15 Jul 2026', media: { type: 'video', src: '/pg-media/solitaire-living-vijay-nagar/gym.mp4' } },
    ],
    pulse: {
      month: 'Jul 2026',
      respondents: 0,
      scores: { wifi: null, water: null, food: null, quiet: null, afterDark: null },
      note: 'Just verified on 15 Jul — no residents have joined our monthly pulse yet. Scores will appear once students move in and start contributing.',
    },
    outcomes: {
      contacts: 0, moveIns: 0, returningPct: 0, avgStayMonths: 0,
      deposits: { returned: 0, total: 0, avgDays: 0 },
      ownerReplyMins: null, ownerAnsweredPct: null,
    },
    priceHistory: [{ when: 'Jul 2026', price: solitaireRoomTypes[0].price }],
    residentQA: [],
    amenities: {
      present: ['WiFi', 'Food', 'Laundry', 'Power backup', 'CCTV', 'AC', 'Cooler', 'Washing machine', 'Fridge', 'Microwave', 'Induction', 'Housekeeping', 'Lift', 'Parking', 'RO Water', 'Geyser', 'Study table', 'Cupboard', 'Mattress', 'TV in room', 'Gym', 'Common study area', 'Coffee vending machine'],
      absent: [],
    },
    warden: 'On-site warden, available 24 hours (owner-reported, not yet independently confirmed)',
    rules: solitaireRules,
    nearby: [],
    metro: 'Not yet confirmed — ask us for the nearest metro walk time',
    hospital: 'Not yet confirmed — ask us for the nearest hospital',
    photos: [
      { caption: 'Front of the building', src: '/pg-media/solitaire-living-vijay-nagar/pg-front.jpg' },
    ],
    videos: [
      { caption: 'Walking up to the building from outside', src: '/pg-media/solitaire-living-vijay-nagar/walkthrough-from-outside.mp4' },
      { caption: 'Study area', src: '/pg-media/solitaire-living-vijay-nagar/study-area.mp4' },
      { caption: 'Gym', src: '/pg-media/solitaire-living-vijay-nagar/gym.mp4' },
      { caption: 'Fire exit and lobby', src: '/pg-media/solitaire-living-vijay-nagar/fire-exit-and-lobby.mp4' },
    ],
    ownerPhone: '7204501313',
  },
  {
    ...aggarwalBase,
    slug: 'aggarwal-living-boys-kamla-nagar',
    name: 'Aggarwal Living — Boys',
    gender: 'Boys',
    // Owner sent these to us — not shot by our team, so they don't count as
    // independently verified evidence. Keeps the gallery tag and field notes honest.
    photosOwnerSupplied: true,
    // Canonical = cheapest tier (Silver House). Detail page's room-type
    // picker overrides these once a specific tier is chosen.
    price: 19000,
    sharing: 'Silver House',
    deposit: 38000,
    cardNote: 'Three houses, six room tiers — from Silver House at ₹19–22k to Platinum front-balcony at ₹35k.',
    fieldNotes: aggarwalFieldNotes,
    priceHistory: [{ when: 'Jul 2026', price: 19000 }],
    // Shared building/common-area photos — not tied to a specific House or tier.
    photos: [
      { caption: 'Lobby', src: '/pg-media/aggarwal-living-boys-kamla-nagar/lobby.jpg' },
      { caption: 'Dining area', src: '/pg-media/aggarwal-living-boys-kamla-nagar/dining-area.jpg' },
      { caption: 'Games area', src: '/pg-media/aggarwal-living-boys-kamla-nagar/games-area.jpg' },
      { caption: 'Turf', src: '/pg-media/aggarwal-living-boys-kamla-nagar/turf.jpg' },
      { caption: 'Washroom', src: '/pg-media/aggarwal-living-boys-kamla-nagar/washroom.jpg' },
      { caption: 'A double-sharing room, no balcony (exact House/tier not yet confirmed)', src: '/pg-media/aggarwal-living-boys-kamla-nagar/room-no-balcony-1.jpg' },
      { caption: 'A double-sharing room, no window (exact House/tier not yet confirmed)', src: '/pg-media/aggarwal-living-boys-kamla-nagar/room-no-balcony-2-no-window.jpg' },
      { caption: 'A double-sharing room, with balcony (exact House/tier not yet confirmed)', src: '/pg-media/aggarwal-living-boys-kamla-nagar/room-with-balcony-1.jpg' },
      { caption: 'A larger double-sharing room, with balcony (exact House/tier not yet confirmed)', src: '/pg-media/aggarwal-living-boys-kamla-nagar/room-with-balcony-2-bigger.jpg' },
    ],
    // We have 4 real room photos (2 non-balcony, 2 balcony variants) but
    // haven't confirmed which specific House/tier each one is from — so
    // they're not attached to a room type yet. Asked the owner to confirm.
    roomTypes: [
      {
        id: 'silver', label: 'Silver House', price: 19000, priceMax: 22000, deposit: 38000, photos: [],
        note: 'Owner gave this as a range (₹19,000–22,000), not a fixed price — confirm the exact number for your specific room. We have room photos from this building but haven\'t confirmed which are Silver House specifically yet.',
      },
      {
        id: 'gold-non-balcony', label: 'Gold House — Non Balcony', price: 27000, deposit: 54000, photos: [],
        note: 'We have room photos from this building but haven\'t confirmed which are Gold House specifically yet — ask us.',
      },
      {
        id: 'gold-balcony', label: 'Gold House — Balcony', price: 29000, deposit: 58000, photos: [],
        note: 'We have room photos from this building but haven\'t confirmed which are Gold House specifically yet — ask us.',
      },
      {
        id: 'platinum-non-balcony', label: 'Platinum House — Non Balcony', price: 29000, deposit: 58000, photos: [],
        note: 'We have room photos from this building but haven\'t confirmed which are Platinum House specifically yet — ask us.',
      },
      {
        id: 'platinum-back-balcony', label: 'Platinum House — Back Balcony', price: 32000, deposit: 64000, photos: [],
        note: 'We have room photos from this building but haven\'t confirmed which are Platinum House specifically yet — ask us.',
      },
      {
        id: 'platinum-front-balcony', label: 'Platinum House — Front Balcony', price: 35000, deposit: 70000, photos: [],
        note: 'We have room photos from this building but haven\'t confirmed which are Platinum House specifically yet — ask us.',
      },
    ],
  },
  {
    ...aggarwalBase,
    slug: 'aggarwal-living-girls-kamla-nagar',
    name: 'Aggarwal Living — Girls',
    gender: 'Girls',
    photosOwnerSupplied: true,
    price: 27000,
    sharing: 'Diamond House — Non Balcony',
    deposit: 54000,
    cardNote: 'Two houses, three room tiers — Diamond from ₹27k, Ruby from ₹30k.',
    fieldNotes: aggarwalFieldNotes,
    priceHistory: [{ when: 'Jul 2026', price: 27000 }],
    // Shared building/common-area photos — not tied to a specific House or tier.
    photos: [
      { caption: 'Lobby', src: '/pg-media/aggarwal-living-girls-kamla-nagar/lobby.jpg' },
      { caption: 'Dining area', src: '/pg-media/aggarwal-living-girls-kamla-nagar/dining-area-1.jpg' },
      { caption: 'Dining area, another angle', src: '/pg-media/aggarwal-living-girls-kamla-nagar/dining-area-2.jpg' },
      { caption: 'Badminton court', src: '/pg-media/aggarwal-living-girls-kamla-nagar/badminton-court.jpg' },
      { caption: 'Basketball court', src: '/pg-media/aggarwal-living-girls-kamla-nagar/basketball-court.jpg' },
      { caption: 'Gym', src: '/pg-media/aggarwal-living-girls-kamla-nagar/gym.jpg' },
      { caption: 'Washroom', src: '/pg-media/aggarwal-living-girls-kamla-nagar/washroom.jpg' },
      { caption: 'A double-sharing room, no balcony (exact House/tier not yet confirmed)', src: '/pg-media/aggarwal-living-girls-kamla-nagar/room-no-balcony-1.jpg' },
      { caption: 'A double-sharing room, no balcony, another view (exact House/tier not yet confirmed)', src: '/pg-media/aggarwal-living-girls-kamla-nagar/room-no-balcony-2.jpg' },
      { caption: 'A double-sharing room, with balcony (exact House/tier not yet confirmed)', src: '/pg-media/aggarwal-living-girls-kamla-nagar/room-with-balcony-1.jpg' },
      { caption: 'A double-sharing room, with balcony and large windows (exact House/tier not yet confirmed)', src: '/pg-media/aggarwal-living-girls-kamla-nagar/room-with-balcony-2-big-windows.jpg' },
    ],
    // We have 4 real room photos (2 non-balcony, 2 balcony variants) but
    // haven't confirmed which specific House/tier each is from yet.
    roomTypes: [
      {
        id: 'diamond-non-balcony', label: 'Diamond House — Non Balcony', price: 27000, deposit: 54000, photos: [],
        note: 'We have room photos from this building but haven\'t confirmed which are Diamond House specifically yet — ask us.',
      },
      {
        id: 'ruby-non-balcony', label: 'Ruby House — Non Balcony', price: 30000, deposit: 60000, photos: [],
        note: 'We have room photos from this building but haven\'t confirmed which are Ruby House specifically yet — ask us.',
      },
      {
        id: 'diamond-balcony', label: 'Diamond House — Balcony', price: 32000, priceMax: 35000, deposit: 64000, photos: [],
        note: 'Owner gave this as a range (₹32,000–35,000), not a fixed price — confirm the exact number for your specific room. We have room photos from this building but haven\'t confirmed which are Diamond House specifically yet.',
      },
      {
        id: 'ruby-balcony', label: 'Ruby House — Balcony', price: 35000, deposit: 70000, photos: [],
        note: 'We have room photos from this building but haven\'t confirmed which are Ruby House specifically yet — ask us.',
      },
    ],
  },
  {
    slug: 'saisha-homes-gtb-nagar',
    name: 'Saisha Homes',
    area: 'GTB Nagar',
    address: '2636, Hudson Ln, Hudson Lane, GTB Nagar, Delhi, 110033',
    gender: 'Girls',
    // Canonical = cheapest room type (Double). Detail page's room-type
    // picker overrides these once a specific type is chosen.
    price: saishaRoomTypes[0].price,
    sharing: saishaRoomTypes[0].label.toLowerCase(),
    deposit: saishaRoomTypes[0].deposit,
    roomTypes: saishaRoomTypes,
    foodIncluded: true,
    extras: 0,
    verifiedDate: '16 Jul 2026',
    verifiedBy: 'Sidd',
    verifierNote: 'Siddharth Mittal & Aditya Singh Dugtal',
    stale: false,
    priceConfirmed: '16 Jul 2026',
    // Entirely owner-reported so far — no evidence collected yet beyond the visit itself.
    factsVerified: false,
    colleges: [
      { slug: 'miranda', mins: 9 },
      { slug: 'srcc', mins: 10 },
      { slug: 'sgtb', mins: 12 },
      { slug: 'drc', mins: 12 },
      { slug: 'ramjas', mins: 16 },
      { slug: 'hindu', mins: 22 },
      { slug: 'stephens', mins: 22 },
      { slug: 'kmc', mins: 24 },
      { slug: 'hansraj', mins: 26 },
    ],
    cardNote: 'Single and double sharing, closest PG on the site to Miranda House.',
    fieldNotes: saishaFieldNotes,
    checks: [
      { label: 'Visited in person', evidence: 'Visited at 7pm on 16 Jul 2026. Rules and safety claims are still what the owner told us — not yet independently confirmed with residents.', date: '16 Jul 2026' },
      { label: 'Common areas confirmed in person', evidence: 'Filmed the dining area, terrace, and lobby ourselves on the visit — all present and matching what the owner described.', date: '16 Jul 2026', media: { type: 'video', src: '/pg-media/saisha-homes-gtb-nagar/lobby-walkthrough.mp4' } },
      { label: 'Food menu photographed', evidence: 'Photographed the posted food menu directly — this is the owner\'s actual posted menu, not our summary of it.', date: '16 Jul 2026', media: { type: 'image', src: '/pg-media/saisha-homes-gtb-nagar/food-menu.jpg' } },
    ],
    pulse: {
      month: 'Jul 2026',
      respondents: 0,
      scores: { wifi: null, water: null, food: null, quiet: null, afterDark: null },
      note: 'Just verified on 16 Jul — no residents have joined our monthly pulse yet. Scores will appear once students move in and start contributing.',
    },
    outcomes: {
      contacts: 0, moveIns: 0, returningPct: 0, avgStayMonths: 0,
      deposits: { returned: 0, total: 0, avgDays: 0 },
      ownerReplyMins: null, ownerAnsweredPct: null,
    },
    priceHistory: [{ when: 'Jul 2026', price: saishaRoomTypes[0].price }],
    residentQA: [],
    amenities: {
      present: ['WiFi', 'Food', 'CCTV', 'AC', 'Cooler', 'Washing machine', 'Fridge', 'Microwave', 'Housekeeping', 'Lift', 'Parking', 'RO Water', 'Geyser', 'Study table', 'Cupboard', 'Mattress'],
      absent: ['Power backup'],
    },
    warden: 'On-site warden and guard, 24/7 (owner-reported, not yet independently confirmed)',
    rules: saishaRules,
    nearby: [],
    metro: 'Not yet confirmed — ask us for the nearest metro walk time',
    hospital: 'Not yet confirmed — ask us for the nearest hospital',
    photos: [
      { caption: 'Front of the building', src: '/pg-media/saisha-homes-gtb-nagar/pg-front.jpg' },
      { caption: 'Cupboards', src: '/pg-media/saisha-homes-gtb-nagar/cupboards.jpg' },
      { caption: 'Washroom', src: '/pg-media/saisha-homes-gtb-nagar/washroom.jpg' },
      { caption: 'The posted food menu', src: '/pg-media/saisha-homes-gtb-nagar/food-menu.jpg' },
    ],
    videos: [
      { caption: 'Dining area', src: '/pg-media/saisha-homes-gtb-nagar/dining-area.mp4' },
      { caption: 'Terrace', src: '/pg-media/saisha-homes-gtb-nagar/terrace.mp4' },
      { caption: 'Lobby walkthrough, main building', src: '/pg-media/saisha-homes-gtb-nagar/lobby-walkthrough.mp4' },
      { caption: 'Lobby walkthrough, second building', src: '/pg-media/saisha-homes-gtb-nagar/other-building-lobby.mp4' },
    ],
    ownerPhone: '7042722752',
  },
  {
    slug: 'stay-eaze-pg-shakti-nagar',
    name: 'Stay Eaze PG',
    area: 'Shakti Nagar',
    address: 'No 1, 7371/22 Street, Prem Nagar, Shakti Nagar, Delhi, 110007',
    gender: 'Girls',
    // Canonical = cheapest room type (Double, low end of its range). Detail
    // page's room-type picker overrides these once a specific type is chosen.
    price: stayEazeRoomTypes[0].price,
    sharing: stayEazeRoomTypes[0].label.toLowerCase(),
    deposit: stayEazeRoomTypes[0].deposit,
    roomTypes: stayEazeRoomTypes,
    foodIncluded: true,
    extras: 50,
    verifiedDate: '16 Jul 2026',
    verifiedBy: 'Sidd',
    verifierNote: 'Siddharth Mittal & Aditya Singh Dugtal',
    stale: false,
    priceConfirmed: '16 Jul 2026',
    // Almost entirely owner-reported — the one thing we tested ourselves is
    // the food. Keeps the dossier and ParentView from overclaiming.
    factsVerified: false,
    colleges: [
      { slug: 'hansraj', mins: 22 },
      { slug: 'ramjas', mins: 22 },
      { slug: 'srcc', mins: 26 },
      { slug: 'drc', mins: 26 },
      { slug: 'kmc', mins: 26 },
      { slug: 'hindu', mins: 30 },
      { slug: 'stephens', mins: 30 },
      { slug: 'miranda', mins: 33 },
      { slug: 'sgtb', mins: 36 },
    ],
    cardNote: 'Single and double sharing — we tasted the food ourselves, and it was good.',
    fieldNotes: stayEazeFieldNotes,
    checks: [
      { label: 'Visited in person', evidence: 'Visited at 8:30pm on 16 Jul 2026. Rules and safety claims are still what the owner told us — not yet independently confirmed with residents.', date: '16 Jul 2026' },
      { label: 'Food tasted by us', evidence: 'We tasted the food ourselves during the visit — quality was good. This is the posted food timing board, photographed directly.', date: '16 Jul 2026', media: { type: 'image', src: '/pg-media/stay-eaze-pg-shakti-nagar/food-timings.jpg' } },
      { label: 'Common areas confirmed in person', evidence: 'Filmed the terrace, lobby, and eating area ourselves on the visit — all present and matching what the owner described.', date: '16 Jul 2026', media: { type: 'video', src: '/pg-media/stay-eaze-pg-shakti-nagar/terrace.mp4' } },
      { label: 'Double-sharing room confirmed in person', evidence: 'Filmed an actual double-sharing room ourselves during the visit.', date: '16 Jul 2026', media: { type: 'video', src: '/pg-media/stay-eaze-pg-shakti-nagar/double-sharing-room.mp4' } },
    ],
    pulse: {
      month: 'Jul 2026',
      respondents: 0,
      scores: { wifi: null, water: null, food: null, quiet: null, afterDark: null },
      note: 'Just verified on 16 Jul — no residents have joined our monthly pulse yet. Scores will appear once students move in and start contributing.',
    },
    outcomes: {
      contacts: 0, moveIns: 0, returningPct: 0, avgStayMonths: 0,
      deposits: { returned: 0, total: 0, avgDays: 0 },
      ownerReplyMins: null, ownerAnsweredPct: null,
    },
    priceHistory: [{ when: 'Jul 2026', price: stayEazeRoomTypes[0].price }],
    residentQA: [],
    amenities: {
      present: ['WiFi', 'Food', 'Laundry', 'CCTV', 'AC', 'Washing machine', 'Fridge', 'Microwave', 'Housekeeping', 'Lift', 'RO Water', 'Geyser', 'Study table', 'Cupboard', 'Mattress', 'Coffee vending machine'],
      absent: ['Cooler', 'Parking', 'Power backup'],
    },
    warden: 'On-site warden, 24 hours (owner-reported, not yet independently confirmed)',
    rules: stayEazeRules,
    nearby: [],
    metro: 'Not yet confirmed — ask us for the nearest metro walk time',
    hospital: 'Not yet confirmed — ask us for the nearest hospital',
    photos: [
      { caption: 'Front of the building', src: '/pg-media/stay-eaze-pg-shakti-nagar/pg-front.jpg' },
      { caption: 'Eating area', src: '/pg-media/stay-eaze-pg-shakti-nagar/eating-area.jpg' },
      { caption: 'Eating area, another angle', src: '/pg-media/stay-eaze-pg-shakti-nagar/eating-area-2.jpg' },
      { caption: 'Eating area, third view', src: '/pg-media/stay-eaze-pg-shakti-nagar/eating-area-3.jpg' },
      { caption: 'Posted food timings', src: '/pg-media/stay-eaze-pg-shakti-nagar/food-timings.jpg' },
      { caption: 'Fridge', src: '/pg-media/stay-eaze-pg-shakti-nagar/fridge.jpg' },
    ],
    videos: [
      { caption: 'Walking up to the building from outside', src: '/pg-media/stay-eaze-pg-shakti-nagar/walkthrough-from-outside.mp4' },
      { caption: 'Lobby and a double-sharing room, walked through on our visit', src: '/pg-media/stay-eaze-pg-shakti-nagar/walkthrough-lobby-and-double-sharing.mp4' },
      { caption: 'Terrace', src: '/pg-media/stay-eaze-pg-shakti-nagar/terrace.mp4' },
      { caption: 'Student testimonial — provided by the owner, not independently verified by us', src: '/pg-media/stay-eaze-pg-shakti-nagar/testimonial-1.mp4' },
      { caption: 'Another student testimonial — provided by the owner, not independently verified by us', src: '/pg-media/stay-eaze-pg-shakti-nagar/testimonial-2.mp4' },
    ],
    ownerPhone: '9485688559',
  },
  {
    slug: 'north-campus-girls-pg-vijay-nagar',
    name: 'North Campus Girls PG',
    area: 'Vijay Nagar',
    address: 'D-2, Polo Road, opposite Prachin Shani Mandir, near GTB Nagar, Old Gupta Colony, Vijay Nagar, Delhi, 110009',
    gender: 'Girls',
    // Canonical = cheapest room type (Triple, low end of its range). Detail
    // page's room-type picker overrides these once a specific type is chosen.
    price: ncGirlsRoomTypes[0].price,
    sharing: ncGirlsRoomTypes[0].label.toLowerCase(),
    deposit: ncGirlsRoomTypes[0].deposit,
    roomTypes: ncGirlsRoomTypes,
    foodIncluded: true,
    extras: 0,
    verifiedDate: '18 Jul 2026',
    verifiedBy: 'Sidd',
    verifierNote: 'Siddharth Mittal & Aditya Singh Dugtal',
    stale: false,
    priceConfirmed: '18 Jul 2026',
    // Entirely owner-reported so far — no evidence collected yet beyond the visit itself.
    factsVerified: false,
    colleges: [
      { slug: 'drc', mins: 13 },
      { slug: 'ramjas', mins: 15 },
      { slug: 'miranda', mins: 16 },
      { slug: 'srcc', mins: 17 },
      { slug: 'sgtb', mins: 19 },
      { slug: 'hindu', mins: 22 },
      { slug: 'stephens', mins: 22 },
      { slug: 'kmc', mins: 23 },
      { slug: 'hansraj', mins: 26 },
    ],
    cardNote: 'Triple, double, or single sharing — no fire exit here, only stairs, per the owner.',
    fieldNotes: ncGirlsFieldNotes,
    checks: [
      { label: 'Visited in person', evidence: 'Visited at 5pm on 18 Jul 2026. Rules and safety claims (beyond the missing fire exit) are still what the owner told us — not yet independently confirmed with residents.', date: '18 Jul 2026' },
      { label: 'Wi-Fi speed tested', evidence: 'Tested live on camera during the visit: 40 Mbps.', date: '18 Jul 2026', media: { type: 'video', src: '/pg-media/north-campus-girls-pg-vijay-nagar/wifi-speed-test.mp4' } },
      { label: 'Common areas confirmed in person', evidence: 'Filmed the lobby and kitchen on both floors, and the mess area, ourselves on the visit — all present and matching what the owner described.', date: '18 Jul 2026', media: { type: 'video', src: '/pg-media/north-campus-girls-pg-vijay-nagar/lobby-and-kitchen.mp4' } },
      { label: 'Double-sharing room confirmed in person', evidence: 'Filmed an actual double-sharing room ourselves during the visit, both with and without balcony.', date: '18 Jul 2026', media: { type: 'video', src: '/pg-media/north-campus-girls-pg-vijay-nagar/double-sharing-with-balcony.mp4' } },
    ],
    pulse: {
      month: 'Jul 2026',
      respondents: 0,
      scores: { wifi: null, water: null, food: null, quiet: null, afterDark: null },
      note: 'Just verified on 18 Jul — no residents have joined our monthly pulse yet. Scores will appear once students move in and start contributing.',
    },
    outcomes: {
      contacts: 0, moveIns: 0, returningPct: 0, avgStayMonths: 0,
      deposits: { returned: 0, total: 0, avgDays: 0 },
      ownerReplyMins: null, ownerAnsweredPct: null,
    },
    priceHistory: [{ when: 'Jul 2026', price: ncGirlsRoomTypes[0].price }],
    residentQA: [],
    amenities: {
      present: ['WiFi', 'Food', 'Laundry', 'CCTV', 'AC', 'Washing machine', 'Fridge', 'Microwave', 'Housekeeping', 'Lift', 'Parking', 'RO Water', 'Geyser', 'Study table', 'Cupboard', 'Mattress'],
      absent: [],
    },
    warden: 'On-site warden, 24 hours (owner-reported, not yet independently confirmed)',
    rules: ncGirlsRules,
    nearby: [],
    metro: 'Not yet confirmed — ask us for the nearest metro walk time',
    hospital: 'Not yet confirmed — ask us for the nearest hospital',
    photos: [
      { caption: 'Front of the building', src: '/pg-media/north-campus-girls-pg-vijay-nagar/pg-front.jpg' },
      { caption: 'Lobby, 1st floor', src: '/pg-media/north-campus-girls-pg-vijay-nagar/lobby-1st-floor.jpg' },
      { caption: 'Lobby, 2nd floor', src: '/pg-media/north-campus-girls-pg-vijay-nagar/lobby-2nd-floor.jpg' },
      { caption: 'Kitchen', src: '/pg-media/north-campus-girls-pg-vijay-nagar/kitchen.jpg' },
      { caption: 'Kitchen, 2nd floor', src: '/pg-media/north-campus-girls-pg-vijay-nagar/kitchen-2nd-floor.jpg' },
      { caption: 'Mess area', src: '/pg-media/north-campus-girls-pg-vijay-nagar/mess-area.jpg' },
      { caption: 'Roof', src: '/pg-media/north-campus-girls-pg-vijay-nagar/roof.jpg' },
      { caption: 'Toilet', src: '/pg-media/north-campus-girls-pg-vijay-nagar/toilet.jpg' },
      { caption: 'A balcony view (room type not specified)', src: '/pg-media/north-campus-girls-pg-vijay-nagar/balcony.jpg' },
    ],
    videos: [
      { caption: 'Walking up to the building from outside', src: '/pg-media/north-campus-girls-pg-vijay-nagar/walkthrough-from-outside.mp4' },
      { caption: 'Lobby and kitchen, walked through on our visit', src: '/pg-media/north-campus-girls-pg-vijay-nagar/lobby-and-kitchen.mp4' },
      { caption: 'A balcony view (room type not specified)', src: '/pg-media/north-campus-girls-pg-vijay-nagar/balcony.mp4' },
      { caption: 'Wi-Fi speed test — 40 Mbps', src: '/pg-media/north-campus-girls-pg-vijay-nagar/wifi-speed-test.mp4' },
    ],
    ownerPhone: '9999658000',
  },
  {
    slug: 'aurum-comfort-vijay-nagar',
    name: 'Aurum Comfort',
    area: 'Vijay Nagar',
    address: 'G34AB, Block G, Vijay Nagar, Delhi, 110009',
    gender: 'Girls',
    // Canonical = cheapest room type (Double, low end of its range). Detail
    // page's room-type picker overrides these once a specific type is chosen.
    price: aurumRoomTypes[0].price,
    sharing: aurumRoomTypes[0].label.toLowerCase(),
    deposit: aurumRoomTypes[0].deposit,
    roomTypes: aurumRoomTypes,
    foodIncluded: true,
    extras: 0,
    verifiedDate: '18 Jul 2026',
    verifiedBy: 'Sidd',
    verifierNote: 'Siddharth Mittal & Aditya Singh Dugtal',
    stale: false,
    priceConfirmed: '18 Jul 2026',
    // Entirely owner-reported so far — no evidence collected yet beyond the visit itself.
    factsVerified: false,
    colleges: [
      { slug: 'miranda', mins: 13 },
      { slug: 'srcc', mins: 14 },
      { slug: 'sgtb', mins: 16 },
      { slug: 'drc', mins: 16 },
      { slug: 'ramjas', mins: 19 },
      { slug: 'hindu', mins: 26 },
      { slug: 'stephens', mins: 26 },
      { slug: 'kmc', mins: 27 },
      { slug: 'hansraj', mins: 30 },
    ],
    cardNote: 'Double sharing (balcony-dependent pricing) or single occupancy — has a private garden area.',
    fieldNotes: aurumFieldNotes,
    checks: [
      { label: 'Visited in person', evidence: 'Visited at 9pm on 18 Jul 2026. Rules and safety claims are still what the owner told us — not yet independently confirmed with residents.', date: '18 Jul 2026' },
      { label: 'Wi-Fi speed tested', evidence: 'Tested live on camera during the visit: 48 Mbps.', date: '18 Jul 2026', media: { type: 'video', src: '/pg-media/aurum-comfort-vijay-nagar/wifi-speed-test.mp4' } },
      { label: 'Double-sharing room confirmed in person', evidence: 'Filmed actual double-sharing rooms ourselves during the visit, both with and without balcony.', date: '18 Jul 2026', media: { type: 'video', src: '/pg-media/aurum-comfort-vijay-nagar/double-sharing-with-balcony.mp4' } },
    ],
    pulse: {
      month: 'Jul 2026',
      respondents: 0,
      scores: { wifi: null, water: null, food: null, quiet: null, afterDark: null },
      note: 'Just verified on 18 Jul — no residents have joined our monthly pulse yet. Scores will appear once students move in and start contributing.',
    },
    outcomes: {
      contacts: 0, moveIns: 0, returningPct: 0, avgStayMonths: 0,
      deposits: { returned: 0, total: 0, avgDays: 0 },
      ownerReplyMins: null, ownerAnsweredPct: null,
    },
    priceHistory: [{ when: 'Jul 2026', price: aurumRoomTypes[0].price }],
    residentQA: [],
    amenities: {
      present: ['WiFi', 'Food', 'Laundry', 'CCTV', 'AC', 'Washing machine', 'Fridge', 'Microwave', 'Housekeeping', 'Parking', 'RO Water', 'Geyser', 'Study table', 'Cupboard', 'Mattress'],
      absent: ['Cooler'],
    },
    warden: 'On-site warden (owner-reported, not yet independently confirmed)',
    rules: aurumRules,
    nearby: [],
    metro: 'Not yet confirmed — ask us for the nearest metro walk time',
    hospital: 'Not yet confirmed — ask us for the nearest hospital',
    photos: [
      { caption: 'Front of the building', src: '/pg-media/aurum-comfort-vijay-nagar/pg-front.jpg' },
      { caption: 'Kitchen', src: '/pg-media/aurum-comfort-vijay-nagar/kitchen.jpg' },
      { caption: 'Study table', src: '/pg-media/aurum-comfort-vijay-nagar/study-table.jpg' },
      { caption: 'A balcony view', src: '/pg-media/aurum-comfort-vijay-nagar/balcony.jpg' },
    ],
    videos: [
      { caption: 'Wi-Fi speed test — 48 Mbps', src: '/pg-media/aurum-comfort-vijay-nagar/wifi-speed-test.mp4' },
    ],
    ownerPhone: '9711252978',
  },
];

// ---------- helpers ----------

// Real inventory ceiling, rounded up — budget sliders derive their max from
// this instead of a hardcoded guess, so a genuinely-priced new listing never
// silently falls outside the filterable range.
export const priceCeiling = Math.ceil(Math.max(...pgs.map((pg) => pg.price)) / 1000) * 1000;

export function getPgsForCollege(collegeSlug) {
  return pgs
    .map((pg) => {
      const match = pg.colleges.find((c) => c.slug === collegeSlug);
      return match ? { ...pg, walkMins: match.mins } : null;
    })
    .filter(Boolean)
    .sort((a, b) => a.walkMins - b.walkMins);
}

export function getCollege(slug) {
  return colleges.find((c) => c.slug === slug);
}

export function getPg(slug) {
  return pgs.find((p) => p.slug === slug);
}

// Days since a "12 Jun 2026"-style date string.
export function daysSince(dateStr) {
  const then = new Date(dateStr);
  if (Number.isNaN(then.getTime())) return null;
  return Math.max(0, Math.floor((Date.now() - then.getTime()) / 86400000));
}

// Freshness bands drive how facts are inked: fresh facts print dark, aging facts fade.
export function freshness(dateStr) {
  const d = daysSince(dateStr);
  if (d === null) return 'unknown';
  if (d <= 45) return 'fresh';
  if (d <= 90) return 'aging';
  return 'stale';
}
