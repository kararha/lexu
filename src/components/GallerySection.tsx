import { motion } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1616949755610-8c9bac08f9f8?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1595535373300-d4351086e828?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop',
];

export function GallerySection() {
  return (
    <section className="relative w-full py-32 bg-luxury-bg z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="font-serif text-3xl md:text-5xl text-luxury-text mb-4">
            <span className="italic text-luxury-bronze">Atelier</span> Moments
          </h2>
          <p className="text-luxury-muted text-sm tracking-widest uppercase">@maison_horizon</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.15 }}
              className={`relative overflow-hidden group cursor-pointer ${idx === 1 || idx === 2 ? 'md:translate-y-12' : ''}`}
            >
              <div className="aspect-[4/5] w-full bg-luxury-card border border-luxury-border/50">
                <img 
                  src={src} 
                  alt="Gallery" 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                />
              </div>
              <div className="absolute inset-0 border border-luxury-gold/0 group-hover:border-luxury-gold/50 transition-colors duration-700 m-4 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
