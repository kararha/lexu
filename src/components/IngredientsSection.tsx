import { motion } from 'framer-motion';

export function IngredientsSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-32 z-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 flex justify-center">
          {/* This area will be visually populated by the 3D scene in the background
              but we can put a subtle placeholder or let the background shine */}
          <div className="w-full max-w-md aspect-square rounded-full border border-luxury-border/30 backdrop-blur-sm bg-luxury-card/5 flex items-center justify-center">
            <span className="text-luxury-muted font-serif italic text-sm tracking-widest">
              Explore Elements
            </span>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="order-1 md:order-2 space-y-8"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-luxury-text">
            Rare <span className="text-luxury-gold italic">Ingredients</span>
          </h2>
          <p className="font-sans text-luxury-muted text-sm md:text-base leading-relaxed font-light">
            Sourced from the most remote corners of the world, our ingredients undergo a meticulous selection process. Only the purest extracts are chosen to compose our signature fragrances, ensuring an unparalleled olfactory journey.
          </p>

          <ul className="space-y-4 pt-4 border-t border-luxury-border">
            {['Damascus Rose', 'Oud Wood from Assam', 'Madagascan Vanilla', 'Mysore Sandalwood'].map((item, i) => (
              <li key={i} className="flex items-center justify-between group cursor-pointer">
                <span className="font-sans text-luxury-text tracking-widest text-xs uppercase group-hover:text-luxury-gold transition-colors duration-300">
                  {item}
                </span>
                <span className="text-luxury-muted text-xs group-hover:text-luxury-gold transition-colors duration-300">
                  +
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
