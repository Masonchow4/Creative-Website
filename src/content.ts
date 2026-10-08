export const productImage = `${import.meta.env.BASE_URL}media/relaunch/lava-lamp.png`;
export const googleMark = `${import.meta.env.BASE_URL}media/relaunch/google-g-mark.png`;
export const retroGoogleMark = `${import.meta.env.BASE_URL}media/relaunch/google-retro-mark.png`;
export const colorPalette = `${import.meta.env.BASE_URL}media/relaunch/color-palette.png`;
export const signatureStyle = `${import.meta.env.BASE_URL}media/relaunch/signature-style.png`;
export const stemCulture = `${import.meta.env.BASE_URL}media/relaunch/stem-culture.png`;
export const youngScientist = `${import.meta.env.BASE_URL}media/relaunch/young-scientist.png`;

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
    {id: 'wordmark', label: '01', title: 'A familiar mark', body: 'The Google G brings a familiar flash of color to a throwback science design for backpacks, jackets, and lab-day layers.', x: 50, y: 12, image: googleMark},
    {id: 'lamp', label: '02', title: 'Lava-lamp nostalgia', body: 'A glowing red lamp brings the science-room classic to life and anchors the whole design.', x: 50, y: 34, image: productImage},
    {id: 'palette', label: '03', title: 'Color that stands out', body: 'The retro Google lettering inspires a vivid palette that pops against everyday layers.', x: 50, y: 56, image: retroGoogleMark},
    {id: 'thread', label: '04', title: 'Make it feel like you', body: 'Choose a color direction inspired by your school or favorite hues, then add initials in the relaunch concept.', x: 50, y: 82, image: colorPalette},
  ],
};

export const specs = {
  eyebrow: 'The formula',
  heading: 'Your style, dialed in.',
  note: 'Student pricing planned for relaunch · color personalization concept · one curious mind at a time',
  image: stemCulture,
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
    {n: '01', label: 'A glowing throwback for curious minds', image: productImage, alt: 'A red lava lamp glowing against a dark background.', contain: false, portrait: false, square: false},
    {n: '02', label: 'A retro mark with a fresh point of view', image: retroGoogleMark, alt: 'A retro Google wordmark with a rainbow striped G.', contain: true, portrait: false, square: false},
    {n: '03', label: 'For curious minds and future discoveries', image: youngScientist, alt: 'A young student scientist exploring colorful experiments in a lab.', contain: false, portrait: false, square: true},
  ],
};

export const enquire = {
  eyebrow: 'Make it personal',
  heading: ['Choose your colors.', 'Add your initials.'],
  body: 'For high school and college STEM students aged 18–30 who want a retro science accessory with personality. Choose school colors or favorites, add initials, and get student pricing at relaunch.',
  palettes: ['Classic Google colors', 'School colors', 'Favorite colors'],
  paletteImage: colorPalette,
  signatureImage: signatureStyle,
};
