export const productImage = `${import.meta.env.BASE_URL}media/atelier/google-embroidery.png`;

export const brand = {
  name: 'Google Lava Lamp Patch',
  wordmark: 'GOOGLE',
  tagline: ['A retro science patch', 'made personal'],
};

export const nav = [
  {label: 'The details', href: '#details'},
  {label: 'Make it yours', href: '#specs'},
  {label: 'Student offer', href: '#enquire'},
];

export const unveil = {
  title: ['Wear your', 'wonder'],
  body: 'A little lava-lamp throwback for curious minds. Bring color, character, and a spark of science to your everyday layer.',
  handle: 'Drag to uncover',
  model: ['Google', 'Lava Lamp Patch'],
  badge: 'STEM',
  slogan: ['Retro science', 'your signature'],
  note: 'Choose school or favorite colors, add your initials, and claim student pricing at relaunch.',
};

export const details = {
  eyebrow: 'The design',
  heading: 'A small patch with big lab energy.',
  items: [
    {id: 'wordmark', label: '01', title: 'A familiar doodle', body: 'The bright Google wordmark brings playful color to a throwback patch, made for backpacks, jackets, and lab-day layers.', x: 50, y: 14, image: productImage},
    {id: 'lamp', label: '02', title: 'Lava-lamp nostalgia', body: 'A wavy red lamp shape nods to classic science-room experiments and retro desk decor.', x: 50, y: 42, image: productImage},
    {id: 'palette', label: '03', title: 'Color that stands out', body: 'Aqua, green, red, and yellow thread give this little science icon a bold, unmistakable pop.', x: 50, y: 69, image: productImage},
    {id: 'thread', label: '04', title: 'Make it feel like you', body: 'The relaunch concept adds school or favorite colors and initials, so your patch can show your own corner of STEM.', x: 50, y: 88, image: productImage},
  ],
};

export const specs = {
  eyebrow: 'The formula',
  heading: 'Your style, dialed in.',
  note: 'Student pricing planned for relaunch · color personalization concept · one curious mind at a time',
  items: [
    {value: 3, decimals: 0, unit: 'WAYS', label: 'To make it yours'},
    {value: 18, decimals: 0, unit: '–30', label: 'Core student audience'},
    {value: 1, decimals: 0, unit: 'PATCH', label: 'One science-minded statement'},
  ],
};

export const atelier = {
  eyebrow: 'The relaunch offer',
  heading: ['Made for', 'the lab and beyond.'],
  steps: [
    {n: 'GO', label: 'A doodle, reborn in thread', image: productImage, alt: 'Colorful embroidered lava-lamp patch beneath a Google wordmark.', portrait: true},
  ],
};

export const enquire = {
  eyebrow: 'Make it personal',
  heading: ['Choose your colors.', 'Add your initials.'],
  body: 'For high school and college STEM students aged 18–30 who want a retro science accessory with personality. Choose school colors or favorites, add initials, and get student pricing at relaunch.',
  palettes: ['Classic Google colors', 'School colors', 'Favorite colors'],
};
