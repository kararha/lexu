import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const signatures = [
  {
    name: 'Midnight Bloom',
    ingredients: 'Jasmine, Black Orchid, Patchouli',
    occasion: 'Evening Gala',
    longevity: '12+ Hours',
    img: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Desert Gold',
    ingredients: 'Saffron, Amber, Frankincense',
    occasion: 'Special Occasions',
    longevity: '14+ Hours',
    img: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=1200&auto=format&fit=crop',
  }
];

export function SignatureSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={containerRef} className="relative w-full h-[200vh] bg-luxury-bg z-10">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        <motion.div style={{ x }} className="flex gap-16 px-16 w-[200vw]">
          {signatures.map((sig, i) => (
            <div key={i} className="w-[100vw] max-w-7xl shrink-0 flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2 aspect-[4/5] relative overflow-hidden bg-luxury-card border border-luxury-border">
                <img 
                  src={sig.img} 
                  alt={sig.name}
                  className="w-full h-full object-cover mix-blend-luminosity opacity-70"
                />
              </div>
              
              <div className="w-full md:w-1/2 space-y-8 p-8">
                <h4 className="font-serif italic text-luxury-gold text-xl">Signature Series</h4>
                <h2 className="font-serif text-5xl md:text-7xl text-luxury-text">{sig.name}</h2>
                
                <div className="w-16 h-px bg-luxury-border" />
                
                <div className="grid grid-cols-2 gap-8 pt-8">
                  <div>
                    <h5 className="text-luxury-muted text-xs tracking-widest uppercase mb-2">Ingredients</h5>
                    <p className="font-sans text-luxury-text font-light">{sig.ingredients}</p>
                  </div>
                  <div>
                    <h5 className="text-luxury-muted text-xs tracking-widest uppercase mb-2">Occasion</h5>
                    <p className="font-sans text-luxury-text font-light">{sig.occasion}</p>
                  </div>
                  <div>
                    <h5 className="text-luxury-muted text-xs tracking-widest uppercase mb-2">Longevity</h5>
                    <p className="font-sans text-luxury-text font-light">{sig.longevity}</p>
                  </div>
                </div>

                <div className="pt-8">
                  <button className="px-8 py-4 bg-luxury-text text-luxury-bg hover:bg-luxury-gold transition-colors duration-500 tracking-widest text-xs uppercase">
                    Acquire Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
