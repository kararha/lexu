import { Fragrance } from './types';

export const fragrances: Fragrance[] = [
  {
    id: 'horizon',
    name: 'HORIZON',
    vibe: 'Morning dew, fresh citrus, ozonic',
    description: 'A blinding spark of solar light on cold maritime sea spray.',
    story: 'Horizon encapsulates the weightless transition of night turning to day. It opens with an explosion of salted citrus, developing into a clean, ozonic heart of white tea and clary sage, finally resting on a sun-bleached ambergris and driftwood base. Perfect for those who seek clarity, vitality, and renewal.',
    topNotes: [
      { name: 'Bergamot', category: 'Citrus', description: 'Zesty Italian citrus with a bright botanical sparkle.' },
      { name: 'Sea Salt', category: 'Marine', description: 'Crisp, mineral-rich ocean breeze that lifts the senses.' },
      { name: 'Bitter Orange', category: 'Citrus', description: 'Elegant, slightly bitter orange peel oil.' }
    ],
    heartNotes: [
      { name: 'Neroli', category: 'Floral', description: 'Honeyed, fresh blossom distilled from bitter orange trees.' },
      { name: 'Clary Sage', category: 'Herbal', description: 'Velvety, herbal, and tea-like texture.' },
      { name: 'White Tea', category: 'Clean', description: 'Delicate, lightweight, and pure green infusion.' }
    ],
    baseNotes: [
      { name: 'Ambergris', category: 'Amber', description: 'Warm, second-skin marine mineral that acts as an anchor.' },
      { name: 'Driftwood', category: 'Woody', description: 'Sun-dried wood seasoned by the waves.' },
      { name: 'Vetiver', category: 'Earthy', description: 'Smoky, sophisticated root grass with clean longevity.' }
    ],
    color: 'from-cyan-400 to-emerald-400',
    accentBg: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
    textColor: 'text-cyan-400',
    price50ml: 125,
    price100ml: 195,
    sensoryKeys: [
      { label: 'Freshness', value: 95 },
      { label: 'Warmth', value: 40 },
      { label: 'Mystery', value: 35 },
      { label: 'Longevity', value: 75 }
    ]
  },
  {
    id: 'cosmos',
    name: 'COSMOS',
    vibe: 'Velvet dark, spicy oriental, warm wood',
    description: 'An exploration of interstellar shadows and warm cosmic fire.',
    story: 'Cosmos is a rich, intoxicating blend that wraps the wearer in deep luxury. Initiated by the crackle of black pepper and saffron, it gives way to a lush, crimson heart of Turkish rose absolute, before melting into an opulent, enduring base of warm Cambodian oud, patchouli, and Madagascar vanilla bean. Crafted for the bold, the mysterious, and the sensory explorer.',
    topNotes: [
      { name: 'Black Pepper', category: 'Spicy', description: 'Electric, sharp spice that creates instant presence.' },
      { name: 'Saffron', category: 'Spice', description: 'Slightly leathery, luxurious golden-hued spice.' },
      { name: 'Dark Plum', category: 'Fruity', description: 'Succulent, jammy dark fruit that lends sweet mystery.' }
    ],
    heartNotes: [
      { name: 'Midnight Rose', category: 'Floral', description: 'Intense, velvety, and deep crimson rose petals.' },
      { name: 'Frankincense', category: 'Resin', description: 'Sacred resinous smoke that rises and lingers.' },
      { name: 'Sueded Leather', category: 'Leather', description: 'Supple, tactile, second-skin warmth.' }
    ],
    baseNotes: [
      { name: 'Cambodian Oud', category: 'Precious Wood', description: 'Dark, highly complex resinous wood that is legendary.' },
      { name: 'Patchouli', category: 'Earthy', description: 'Herbaceous, sweet-spicy ground notes.' },
      { name: 'Madagascar Vanilla', category: 'Gourmand', description: 'Rich, creamy pod sweetness that softens the darkness.' }
    ],
    color: 'from-pink-500 to-purple-600',
    accentBg: 'bg-pink-500/10 border-pink-500/20 text-pink-400',
    textColor: 'text-pink-400',
    price50ml: 145,
    price100ml: 225,
    sensoryKeys: [
      { label: 'Freshness', value: 30 },
      { label: 'Warmth', value: 92 },
      { label: 'Mystery', value: 95 },
      { label: 'Longevity', value: 90 }
    ]
  },
  {
    id: 'infinity',
    name: 'INFINITY',
    vibe: 'Ethereal, clean, molecular wood',
    description: 'A pure, weightless molecule-driven fragrance capturing infinity.',
    story: 'Infinity is an avant-garde molecular fragrance designed to elevate the natural scent of the wearer. Sparkling stellar aldehydes and cold, powdery iris merge seamlessly with cashmere wood. The fragrance rests on a hypnotic base of Iso E Super and white musk, projecting in continuous, warm pheromonic waves that defy conventional structures.',
    topNotes: [
      { name: 'Aldehydes', category: 'Synthetic', description: 'Metallic, clean brilliance resembling frozen starlight.' },
      { name: 'White Pear', category: 'Fruity', description: 'Transparent, crisp, and dew-kissed white pear juice.' },
      { name: 'Pink Pepper', category: 'Spicy', description: 'Effervescent, dry rosy spice that tickles the nose.' }
    ],
    heartNotes: [
      { name: 'Florentine Iris', category: 'Floral', description: 'Powdery, silver-grey floral that is ultra-exclusive.' },
      { name: 'Jasmine Buds', category: 'Floral', description: 'Luminous, lightweight, and clean jasmine absolute.' },
      { name: 'Cashmere Wood', category: 'Woody', description: 'Enveloping, soft, tactile wood molecule.' }
    ],
    baseNotes: [
      { name: 'Iso E Super', category: 'Molecule', description: 'Hypnotic, velvety cedarwood molecule that radiates.' },
      { name: 'White Musk', category: 'Musky', description: 'Comforting, laundry-clean, cloud-like base.' },
      { name: 'Sandalwood', category: 'Woody', description: 'Creamy, smooth, and lactonic precious wood.' }
    ],
    color: 'from-indigo-400 to-violet-500',
    accentBg: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400',
    textColor: 'text-indigo-400',
    price50ml: 135,
    price100ml: 210,
    sensoryKeys: [
      { label: 'Freshness', value: 75 },
      { label: 'Warmth', value: 65 },
      { label: 'Mystery', value: 70 },
      { label: 'Longevity', value: 85 }
    ]
  }
];
