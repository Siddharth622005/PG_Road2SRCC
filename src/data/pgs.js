export const colleges = [
  { slug: 'srcc', name: 'SRCC', full: 'Shri Ram College of Commerce' },
  { slug: 'hindu', name: 'Hindu', full: 'Hindu College' },
  { slug: 'hansraj', name: 'Hansraj', full: 'Hansraj College' },
  { slug: 'kmc', name: 'KMC', full: 'Kirori Mal College' },
  { slug: 'venky', name: 'Venky', full: 'Shri Venkateswara College' },
  { slug: 'lsr', name: 'LSR', full: 'Lady Shri Ram College' },
];

export const pgs = [
  {
    slug: 'sharma-pg-girls-kamla-nagar',
    name: 'Sharma PG for Girls',
    area: 'Kamla Nagar',
    gender: 'Girls',
    price: 13500,
    sharing: 'double sharing',
    deposit: 10000,
    foodIncluded: true,
    extras: 700,
    verifiedDate: '12 Jun 2026',
    verifiedBy: 'Sidd',
    stale: false,
    colleges: [{ slug: 'hindu', mins: 8 }, { slug: 'srcc', mins: 15 }],
    cardNote: 'Quiet street, strict but kind aunty, great dal.',
    fieldNotes: [
      'The lane gets waterlogged in monsoon.',
      "Wi-Fi is solid — we ran a speed test: 42 Mbps.",
      'Aunty is strict about the 10pm curfew — genuinely enforced.',
    ],
    checklist: [
      'Owner ID verified', 'Rooms match photos', 'Talked to 2 current residents',
      'Water pressure OK', 'Power backup tested', 'Fire exit accessible',
      'Kitchen hygiene checked', 'CCTV functional', 'Locks work on every room',
      'Warden reachable after 9pm', 'No hidden extra charges found', 'Bathroom count matches claim',
    ],
    amenities: { present: ['WiFi', 'Food', 'Laundry', 'Power backup', 'CCTV'], absent: ['AC', 'Gym'] },
    warden: 'Sunita aunty, on-site',
    rules: ['10pm gate close', 'Visitors allowed till 7pm in common area only', "1 month's notice before leaving"],
    nearby: ['24h Apollo Pharmacy — 3 min walk', 'Amma\'s Tiffin — 5 min walk', 'Quick Copy Shop — 4 min walk'],
    metro: 'Vishwavidyalaya (12 min walk)',
    photos: [
      { caption: 'Room 2, second floor, morning light' },
      { caption: 'Your desk would go here — window faces east, so morning light.' },
      { caption: 'Shared bathroom, second floor' },
      { caption: 'Common kitchen' },
      { caption: 'Entrance and gate' },
    ],
    ownerPhone: '9810000001',
  },
  {
    slug: 'gupta-niwas-vijay-nagar',
    name: 'Gupta Niwas',
    area: 'Vijay Nagar',
    gender: 'Boys',
    price: 11000,
    sharing: 'triple sharing',
    deposit: 8000,
    foodIncluded: false,
    extras: 1200,
    verifiedDate: '2 May 2026',
    verifiedBy: 'Aditi',
    stale: true,
    colleges: [{ slug: 'hansraj', mins: 6 }, { slug: 'kmc', mins: 10 }],
    cardNote: 'No food, but a great dhaba right outside. Loud in the evenings.',
    fieldNotes: [
      'No mess — everyone eats at Bittu\'s dhaba next door, which is cheap and good.',
      'Rooms are basic but clean. Paint is a bit old.',
      'Can get noisy after 8pm — it\'s a lively lane, not a quiet one.',
    ],
    checklist: [
      'Owner ID verified', 'Rooms match photos', 'Talked to 2 current residents',
      'Water pressure OK', 'Power backup tested', 'Fire exit accessible',
    ],
    amenities: { present: ['WiFi', 'Power backup'], absent: ['Food', 'AC', 'CCTV', 'Laundry'] },
    warden: 'Ramesh ji, lives next door',
    rules: ['11pm gate close', 'Visitors allowed till 8pm', "15 days' notice before leaving"],
    nearby: ['Bittu\'s Dhaba — right outside', 'Jan Aushadhi Pharmacy — 4 min walk', 'Xerox point — 2 min walk'],
    metro: 'GTB Nagar (9 min walk)',
    photos: [
      { caption: 'Shared room, three beds' },
      { caption: 'Common washroom' },
      { caption: 'Building entrance' },
    ],
    ownerPhone: '9810000002',
  },
  {
    slug: 'maa-annapurna-pg-kamla-nagar',
    name: 'Maa Annapurna PG',
    area: 'Kamla Nagar',
    gender: 'Girls',
    price: 15500,
    sharing: 'single occupancy',
    deposit: 15000,
    foodIncluded: true,
    extras: 500,
    verifiedDate: '20 Jun 2026',
    verifiedBy: 'Sidd',
    stale: false,
    colleges: [{ slug: 'srcc', mins: 12 }, { slug: 'hindu', mins: 10 }, { slug: 'lsr', mins: 20 }],
    cardNote: 'Best single rooms we\'ve seen near North Campus. Bit pricier, worth it.',
    fieldNotes: [
      'Genuinely private — single rooms with individual locks, rare at this price.',
      'Food is home-style and better than most PGs we\'ve visited.',
      'Only drawback: no lift, and it\'s a 3rd floor walk-up.',
    ],
    checklist: [
      'Owner ID verified', 'Rooms match photos', 'Talked to 3 current residents',
      'Water pressure OK', 'Power backup tested', 'Fire exit accessible',
      'Kitchen hygiene checked', 'CCTV functional', 'Locks work on every room', 'Warden reachable after 9pm',
    ],
    amenities: { present: ['WiFi', 'Food', 'Laundry', 'Power backup', 'CCTV', 'AC'], absent: ['Gym'] },
    warden: 'Meena aunty, on-site',
    rules: ['10:30pm gate close', 'Visitors allowed till 7pm in common area only', "1 month's notice before leaving"],
    nearby: ['24h Apollo Pharmacy — 3 min walk', 'Saroj Tiffin — 6 min walk', 'Copy World — 5 min walk'],
    metro: 'Vishwavidyalaya (14 min walk)',
    photos: [
      { caption: 'Single room, third floor' },
      { caption: 'Study desk by the window' },
      { caption: 'Private attached bathroom' },
      { caption: 'Dining area' },
    ],
    ownerPhone: '9810000003',
  },
  {
    slug: 'venky-boys-hostel-satya-niketan',
    name: 'Venky Boys Hostel',
    area: 'Satya Niketan',
    gender: 'Boys',
    price: 12500,
    sharing: 'double sharing',
    deposit: 10000,
    foodIncluded: true,
    extras: 800,
    verifiedDate: '5 Jun 2026',
    verifiedBy: 'Aditi',
    stale: false,
    colleges: [{ slug: 'venky', mins: 5 }],
    cardNote: 'Right behind Venky. Rooftop has a great view, gym crowd hangs out there.',
    fieldNotes: [
      'Closest PG to Venkateswara we\'ve found — genuinely a 5 minute walk.',
      'Food is average but filling; extra roti always available.',
      'Rooftop is a nice shared space, but gets crowded on weekend evenings.',
    ],
    checklist: [
      'Owner ID verified', 'Rooms match photos', 'Talked to 2 current residents',
      'Water pressure OK', 'Power backup tested', 'Fire exit accessible', 'CCTV functional',
    ],
    amenities: { present: ['WiFi', 'Food', 'Power backup', 'CCTV'], absent: ['AC', 'Laundry', 'Gym'] },
    warden: 'Vijay ji, on-site',
    rules: ['11pm gate close', 'Visitors allowed till 8pm', "1 month's notice before leaving"],
    nearby: ['Satya Niketan Pharmacy — 2 min walk', 'Yadav Tiffin — 3 min walk', 'Cyber Cafe & Xerox — 4 min walk'],
    metro: 'Moti Bagh (18 min walk, better to auto)',
    photos: [
      { caption: 'Double room, second floor' },
      { caption: 'Rooftop common area' },
      { caption: 'Dining hall' },
    ],
    ownerPhone: '9810000004',
  },
];

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
