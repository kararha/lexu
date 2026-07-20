export interface ScentNote {
  name: string;
  category: string;
  description: string;
}

export interface Fragrance {
  id: string;
  name: string;
  vibe: string;
  description: string;
  story: string;
  topNotes: ScentNote[];
  heartNotes: ScentNote[];
  baseNotes: ScentNote[];
  color: string; // Tailwind color class or hex
  accentBg: string;
  textColor: string;
  price50ml: number;
  price100ml: number;
  sensoryKeys: { label: string; value: number }[]; // 1 to 100 rating
}

export interface CartItem {
  id: string;
  name: string;
  size: '50ml' | '100ml';
  price: number;
  quantity: number;
  isCustom: boolean;
  customRecipe?: {
    citrus: number;
    oud: number;
    musk: number;
  };
}
