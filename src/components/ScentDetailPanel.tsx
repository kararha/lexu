import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Fragrance, CartItem } from '../types';
import { Plus, Check, Info, Wind, Sparkles, Flame, ShieldAlert, Award, Compass } from 'lucide-react';

interface ScentDetailPanelProps {
  fragrance: Fragrance;
  onAddToCart: (item: Omit<CartItem, 'quantity'>) => void;
  onOpenCustomLab: () => void;
}

export const ScentDetailPanel: React.FC<ScentDetailPanelProps> = ({
  fragrance,
  onAddToCart,
  onOpenCustomLab,
}) => {
  const [selectedSize, setSelectedSize] = useState<'50ml' | '100ml'>('100ml');
  const [activeNoteTab, setActiveNoteTab] = useState<'top' | 'heart' | 'base'>('top');
  const [hoveredNote, setHoveredNote] = useState<any | null>(null);
  const [isAdded, setIsAdded] = useState(false);

  const price = selectedSize === '50ml' ? fragrance.price50ml : fragrance.price100ml;

  const handleAdd = () => {
    onAddToCart({
      id: `${fragrance.id}-${selectedSize}`,
      name: `${fragrance.name} Eau de Parfum`,
      size: selectedSize,
      price: price,
      isCustom: false,
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const getActiveNotes = () => {
    switch (activeNoteTab) {
      case 'top':
        return fragrance.topNotes;
      case 'heart':
        return fragrance.heartNotes;
      case 'base':
        return fragrance.baseNotes;
    }
  };

  const getTabIcon = (tab: 'top' | 'heart' | 'base') => {
    switch (tab) {
      case 'top':
        return <Wind className="w-3.5 h-3.5" />;
      case 'heart':
        return <Compass className="w-3.5 h-3.5" />;
      case 'base':
        return <Flame className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="w-full max-w-4xl bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 text-white relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
      {/* Accent Background Glow */}
      <div className={`absolute -right-24 -top-24 w-72 h-72 rounded-full filter blur-[100px] opacity-15 bg-gradient-to-br ${fragrance.color}`} />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative z-10">
        
        {/* Left Column: Scent Info & Story (5 Cols) */}
        <div className="md:col-span-5 flex flex-col h-full justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full border ${fragrance.accentBg}`}>
                {fragrance.vibe}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-wider font-sans mb-4">
              {fragrance.name}
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed font-sans font-light">
              {fragrance.story}
            </p>
          </div>

          {/* Sensory Metrics Section */}
          <div className="space-y-4 pt-4 border-t border-white/5">
            <h3 className="text-xs font-mono tracking-widest text-neutral-400 uppercase flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-neutral-400" /> Sensory Signature
            </h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 font-mono text-[11px]">
              {fragrance.sensoryKeys.map((metric) => (
                <div key={metric.label} className="space-y-1">
                  <div className="flex justify-between text-neutral-400">
                    <span>{metric.label}</span>
                    <span className="text-white">{metric.value}%</span>
                  </div>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${metric.value}%` }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className={`h-full bg-gradient-to-r ${fragrance.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Column: Alchemical Scent Notes Tab Interface (4 Cols) */}
        <div className="md:col-span-4 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h3 className="text-xs font-mono tracking-widest text-neutral-400 uppercase">
              Alchemical Composition
            </h3>
            <p className="text-xs text-neutral-500">
              Each fragrance unravels sequentially over time. Explore its layers.
            </p>
          </div>

          {/* Custom Tab Header */}
          <div className="flex bg-white/[0.03] border border-white/5 rounded-lg p-1">
            {(['top', 'heart', 'base'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveNoteTab(tab);
                  setHoveredNote(null);
                }}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-md font-mono text-[10px] tracking-widest uppercase transition-all duration-300 ${
                  activeNoteTab === tab
                    ? 'bg-white/10 text-white shadow-sm font-semibold'
                    : 'text-neutral-500 hover:text-neutral-300'
                }`}
              >
                {getTabIcon(tab)}
                {tab}
              </button>
            ))}
          </div>

          {/* Interactive Scent Notes List */}
          <div className="flex flex-col gap-2.5 min-h-[140px]">
            {getActiveNotes().map((note) => (
              <div
                key={note.name}
                onMouseEnter={() => setHoveredNote(note)}
                onMouseLeave={() => setHoveredNote(null)}
                className="group relative flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all cursor-help"
              >
                <div className="flex items-center gap-2.5">
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${fragrance.color}`} />
                  <div>
                    <h4 className="font-semibold text-xs tracking-wider text-neutral-200 group-hover:text-white transition-colors">
                      {note.name}
                    </h4>
                    <span className="text-[9px] text-neutral-500 font-mono uppercase">{note.category}</span>
                  </div>
                </div>
                <Info className="w-3.5 h-3.5 text-neutral-600 group-hover:text-neutral-400 transition-colors" />
              </div>
            ))}
          </div>

          {/* Scent Note Tooltip/Detail Area */}
          <div className="h-[70px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {hoveredNote ? (
                <motion.div
                  key={hoveredNote.name}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="w-full text-center p-3 rounded-lg bg-white/[0.03] border border-white/5"
                >
                  <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                    {hoveredNote.category} Note
                  </p>
                  <p className="text-xs text-neutral-300 mt-1 truncate">
                    {hoveredNote.description}
                  </p>
                </motion.div>
              ) : (
                <p className="text-[10px] text-neutral-500 font-mono italic text-center">
                  Hover over a note to unlock its aromatic characteristics
                </p>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Column: Size Picker, Price & Call To Action (3 Cols) */}
        <div className="md:col-span-3 flex flex-col justify-between gap-6 self-stretch bg-white/[0.02] border border-white/5 p-5 rounded-xl">
          
          {/* Size Selection */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono tracking-widest text-neutral-400 uppercase">
              Select Volume
            </h3>
            <div className="flex flex-col gap-2">
              {(['50ml', '100ml'] as const).map((size) => {
                const isSelected = selectedSize === size;
                const sizePrice = size === '50ml' ? fragrance.price50ml : fragrance.price100ml;
                return (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg border text-xs font-mono tracking-wider transition-all duration-300 ${
                      isSelected
                        ? `bg-white/10 text-white border-neutral-400 shadow-[0_0_15px_rgba(255,255,255,0.05)]`
                        : 'border-white/10 text-neutral-400 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <span>{size}</span>
                    <span className="font-semibold">${sizePrice}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Pricing & Add to Cart */}
          <div className="space-y-4 mt-auto">
            <div className="flex justify-between items-end">
              <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
                TOTAL PRICE
              </span>
              <motion.span
                key={price}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-3xl font-bold font-mono tracking-tight"
              >
                ${price}
              </motion.span>
            </div>

            <button
              onClick={handleAdd}
              disabled={isAdded}
              className={`w-full py-3.5 rounded-lg font-semibold text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
                isAdded
                  ? 'bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                  : 'bg-white text-black hover:bg-neutral-200 shadow-md'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-4 h-4" /> Added to Lab
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" /> Add to Order
                </>
              )}
            </button>

            {/* Custom Scent Lab CTA */}
            <div className="border-t border-white/5 pt-3">
              <button
                onClick={onOpenCustomLab}
                className="w-full flex items-center justify-center gap-2 text-neutral-400 hover:text-white transition-colors text-xs font-mono tracking-wider"
              >
                <Award className="w-3.5 h-3.5" /> Or, Customize Scent
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
