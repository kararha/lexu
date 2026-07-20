import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Wand2, Hammer, ShoppingBag, Check } from 'lucide-react';
import { CartItem } from '../types';

interface CustomScentLabProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: Omit<CartItem, 'quantity'>) => void;
}

export const CustomScentLab: React.FC<CustomScentLabProps> = ({
  isOpen,
  onClose,
  onAddToCart,
}) => {
  // Ratios (arbitrary numbers, normalized to 100% for display)
  const [citrus, setCitrus] = useState(40);
  const [oud, setOud] = useState(30);
  const [musk, setMusk] = useState(30);
  
  const [blendName, setBlendName] = useState('ECLIPSE');
  const [selectedSize, setSelectedSize] = useState<'50ml' | '100ml'>('100ml');
  const [formulating, setFormulating] = useState(false);
  const [formulateStep, setFormulateStep] = useState('');
  const [formulateDone, setFormulateDone] = useState(false);

  const totalPoints = citrus + oud + musk;
  const pctCitrus = Math.round((citrus / totalPoints) * 100);
  const pctOud = Math.round((oud / totalPoints) * 100);
  const pctMusk = 100 - pctCitrus - pctOud; // Ensure it adds up exactly to 100%

  const price = selectedSize === '50ml' ? 145 : 225;

  const handleFormulate = () => {
    if (!blendName.trim()) return;
    
    setFormulating(true);
    setFormulateDone(false);
    
    const steps = [
      'Extracting Sunrise Citrus essential oils...',
      'Macerating Midnight Oud resins...',
      'Infusing Molecular Cosmic Musk...',
      'Harmonizing scent notes at -20°C...',
      'Laser-engraving custom label...',
    ];

    let currentStepIdx = 0;
    setFormulateStep(steps[0]);

    const interval = setInterval(() => {
      currentStepIdx++;
      if (currentStepIdx < steps.length) {
        setFormulateStep(steps[currentStepIdx]);
      } else {
        clearInterval(interval);
        setFormulateStep('Completed!');
        setFormulateDone(true);
        setTimeout(() => {
          onAddToCart({
            id: `custom-${Date.now()}`,
            name: `BESPOKE: ${blendName.toUpperCase()}`,
            size: selectedSize,
            price: price,
            isCustom: true,
            customRecipe: {
              citrus: pctCitrus,
              oud: pctOud,
              musk: pctMusk,
            },
          });
          setFormulating(false);
          setFormulateDone(false);
          onClose();
        }, 1200);
      }
    }, 900);
  };

  // Preset generator
  const applyPreset = (preset: 'fresh' | 'dark' | 'cloud') => {
    if (preset === 'fresh') {
      setCitrus(70); setOud(10); setMusk(20);
      setBlendName('AURORA');
    } else if (preset === 'dark') {
      setCitrus(15); setOud(65); setMusk(20);
      setBlendName('NOVA');
    } else {
      setCitrus(20); setOud(20); setMusk(60);
      setBlendName('NEBULA');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[110]"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-x-4 top-12 md:top-24 max-w-4xl mx-auto bg-[#0a0a0d] border border-white/10 text-white z-[111] rounded-2xl shadow-2xl flex flex-col max-h-[85vh] overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-black/40">
              <div className="flex items-center gap-2">
                <Wand2 className="w-5 h-5 text-amber-400" />
                <h2 className="text-lg font-semibold tracking-wider uppercase font-sans">
                  Alchemical Customization Lab
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/5 rounded-full transition-colors text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Left Side: Custom Bottle Visualization (5 Cols) */}
              <div className="md:col-span-5 flex flex-col items-center justify-center p-6 bg-white/[0.01] border border-white/5 rounded-xl min-h-[360px] relative">
                
                {/* Visual Glow */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {/* Layered glowing dots matching active mix */}
                  <div 
                    className="w-48 h-48 rounded-full filter blur-[60px] transition-all duration-700" 
                    style={{
                      background: `radial-gradient(circle, rgba(234,179,8,${pctCitrus/200}) 0%, rgba(236,72,153,${pctOud/200}) 50%, rgba(99,102,241,${pctMusk/200}) 100%)`
                    }}
                  />
                </div>

                {/* The Bespoke Perfume Bottle (CSS Crafted) */}
                <div className="relative z-10 w-44 h-64 flex flex-col justify-end">
                  
                  {/* Cap */}
                  <div className="w-14 h-10 bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300 rounded-md mx-auto -mb-1 shadow-lg border border-amber-100/50 relative">
                    <div className="absolute bottom-0 inset-x-0 h-1 bg-black/10" />
                  </div>
                  
                  {/* Collar */}
                  <div className="w-6 h-3 bg-gradient-to-r from-neutral-300 to-neutral-400 mx-auto border-x border-neutral-500/20" />
                  
                  {/* Glass Body */}
                  <div className="w-36 h-48 mx-auto bg-white/[0.08] backdrop-blur-lg border border-white/20 rounded-t-[32px] rounded-b-[12px] p-1.5 shadow-[0_15px_35px_rgba(0,0,0,0.5)] relative overflow-hidden flex flex-col justify-end">
                    
                    {/* Glass reflections */}
                    <div className="absolute top-4 left-4 bottom-4 w-1 bg-white/10 rounded-full blur-xs pointer-events-none" />
                    <div className="absolute top-4 right-4 w-4 h-4 rounded-full bg-white/15 blur-xs pointer-events-none" />
                    
                    {/* Floating Liquid Wave effect */}
                    <div className="w-full h-full relative flex flex-col justify-end rounded-t-[24px] rounded-b-[8px] overflow-hidden">
                      
                      {/* Top Layer: Citrus (Yellow) */}
                      <motion.div 
                        animate={{ y: [0, -3, 0], rotate: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                        className="bg-gradient-to-b from-yellow-500/60 to-yellow-600/60 transition-all duration-500 origin-bottom shadow-inner"
                        style={{ height: `${pctCitrus}%` }}
                      />

                      {/* Middle Layer: Musk (Indigo) */}
                      <motion.div 
                        animate={{ y: [0, 2, 0], rotate: [0, -1, 0] }}
                        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                        className="bg-gradient-to-b from-indigo-500/60 to-indigo-600/60 border-t border-indigo-400/20 transition-all duration-500 origin-bottom"
                        style={{ height: `${pctMusk}%` }}
                      />

                      {/* Bottom Layer: Oud (Pink) */}
                      <motion.div 
                        animate={{ y: [0, -1, 0] }}
                        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                        className="bg-gradient-to-b from-pink-600/60 to-pink-700/60 border-t border-pink-400/20 transition-all duration-500 origin-bottom"
                        style={{ height: `${pctOud}%` }}
                      />
                      
                    </div>

                    {/* Minimalist Premium Paper Label */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 bg-white border border-neutral-200/50 py-3 px-1 rounded shadow-md flex flex-col items-center justify-center text-neutral-900 pointer-events-none">
                      <div className="text-[7px] font-mono uppercase tracking-[0.2em] text-neutral-400">COSMIC LAB</div>
                      <div className="font-mono text-xs font-semibold uppercase tracking-wider text-center mt-1 max-w-[95px] truncate text-black leading-none">
                        {blendName || 'UNNAMED'}
                      </div>
                      <div className="text-[6px] font-mono mt-1 text-neutral-500 tracking-widest border-t border-neutral-100 pt-1 w-20 text-center">
                        {selectedSize} • EDP
                      </div>
                    </div>

                  </div>
                </div>

                {/* Presets Row */}
                <div className="flex gap-2.5 mt-6 w-full max-w-[260px] relative z-10">
                  <button
                    onClick={() => applyPreset('fresh')}
                    className="flex-1 py-1.5 px-2 bg-yellow-500/10 border border-yellow-500/20 hover:bg-yellow-500/20 rounded-md text-[9px] font-mono tracking-widest text-yellow-400 uppercase transition-colors"
                  >
                    Fresh Citrus
                  </button>
                  <button
                    onClick={() => applyPreset('dark')}
                    className="flex-1 py-1.5 px-2 bg-pink-500/10 border border-pink-500/20 hover:bg-pink-500/20 rounded-md text-[9px] font-mono tracking-widest text-pink-400 uppercase transition-colors"
                  >
                    Rich Oud
                  </button>
                  <button
                    onClick={() => applyPreset('cloud')}
                    className="flex-1 py-1.5 px-2 bg-indigo-500/10 border border-indigo-500/20 hover:bg-indigo-500/20 rounded-md text-[9px] font-mono tracking-widest text-indigo-400 uppercase transition-colors"
                  >
                    Pure Musk
                  </button>
                </div>
              </div>

              {/* Right Side: Formulation Controls (7 Cols) */}
              <div className="md:col-span-7 flex flex-col gap-6">
                
                {/* Lab Guide */}
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold tracking-wide">Configure Your Olfactory Formula</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Balance the essential aromatic oils. Ratios will automatically normalize. Choose a name and bottle size to formulate.
                  </p>
                </div>

                {/* Scent Sliders */}
                <div className="space-y-4">
                  {/* Slider 1: Citrus */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-yellow-400 font-semibold uppercase tracking-wider flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" /> Sunrise Citrus & Ozone
                      </span>
                      <span>{pctCitrus}%</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="100"
                      value={citrus}
                      onChange={(e) => setCitrus(Number(e.target.value))}
                      className="w-full accent-yellow-400 bg-white/10 h-1.5 rounded-lg cursor-pointer"
                    />
                    <p className="text-[10px] text-neutral-500">Lively bergamot peel, marine sea spray, and fresh white tea leaves.</p>
                  </div>

                  {/* Slider 2: Musk */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-indigo-400 font-semibold uppercase tracking-wider flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> Cosmic Musk & Iris
                      </span>
                      <span>{pctMusk}%</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="100"
                      value={musk}
                      onChange={(e) => setMusk(Number(e.target.value))}
                      className="w-full accent-indigo-400 bg-white/10 h-1.5 rounded-lg cursor-pointer"
                    />
                    <p className="text-[10px] text-neutral-500">Powdery Florentine iris buds, soft cashmere wood, and clean aldehydes.</p>
                  </div>

                  {/* Slider 3: Oud */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-pink-400 font-semibold uppercase tracking-wider flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-400" /> Midnight Oud & Saffron
                      </span>
                      <span>{pctOud}%</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="100"
                      value={oud}
                      onChange={(e) => setOud(Number(e.target.value))}
                      className="w-full accent-pink-500 bg-white/10 h-1.5 rounded-lg cursor-pointer"
                    />
                    <p className="text-[10px] text-neutral-500">Warm resinous Cambodian oud, hot black pepper, and rich Turkish rose petals.</p>
                  </div>
                </div>

                {/* Scent Name Input */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">Engrave Bottle Label</label>
                  <input
                    type="text"
                    maxLength={14}
                    value={blendName}
                    onChange={(e) => setBlendName(e.target.value.toUpperCase())}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:border-white/30 transition-colors uppercase tracking-widest text-white"
                    placeholder="E.g. ECLIPSE"
                  />
                  <p className="text-[10px] text-neutral-500">Max 14 letters. This will be physically engraved onto your customized glass bottle label.</p>
                </div>

                {/* Size & Pricing Options */}
                <div className="grid grid-cols-2 gap-4">
                  {(['50ml', '100ml'] as const).map((size) => {
                    const isSelected = selectedSize === size;
                    const sizePrice = size === '50ml' ? 145 : 225;
                    return (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`flex flex-col items-center justify-center p-3 rounded-xl border text-xs font-mono tracking-wider transition-all duration-300 ${
                          isSelected
                            ? `bg-white/10 text-white border-white/30 shadow-md`
                            : 'border-white/10 text-neutral-400 hover:border-white/20 hover:text-white'
                        }`}
                      >
                        <span className="text-[10px] opacity-60 mb-1">{size} EDP</span>
                        <span className="font-semibold text-sm">${sizePrice}</span>
                      </button>
                    );
                  })}
                </div>

                {/* formulation CTA */}
                <button
                  onClick={handleFormulate}
                  disabled={!blendName.trim()}
                  className="w-full py-4 mt-2 bg-gradient-to-r from-amber-300 to-yellow-400 text-black hover:from-amber-200 hover:to-yellow-300 disabled:opacity-50 transition-all rounded-xl font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/10"
                >
                  <Sparkles className="w-4 h-4" /> Formulate Bespoke EDP (${price})
                </button>

              </div>
            </div>
          </motion.div>
        </>
      )}

      {/* Formulation Loader Overlay */}
      <AnimatePresence>
        {formulating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[120] flex flex-col items-center justify-center gap-6"
          >
            {/* Spinning Alchemy Symbol */}
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
                className="w-24 h-24 rounded-full border-2 border-dashed border-amber-400/40 flex items-center justify-center"
              />
              <div className="absolute inset-0 flex items-center justify-center text-amber-400">
                <Hammer className="w-8 h-8 animate-pulse" />
              </div>
            </div>

            <div className="text-center space-y-2">
              <h3 className="font-mono text-xs tracking-widest text-amber-400 uppercase animate-pulse">
                ALCHEMICAL BOTTLING IN PROGRESS
              </h3>
              <AnimatePresence mode="wait">
                <motion.p
                  key={formulateStep}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="text-sm font-sans text-neutral-300 font-light min-h-[20px]"
                >
                  {formulateStep}
                </motion.p>
              </AnimatePresence>
            </div>

            {formulateDone && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-4 flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full text-emerald-400 font-mono text-xs"
              >
                <Check className="w-4 h-4" /> Customized perfume synthesized successfully!
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  );
};
