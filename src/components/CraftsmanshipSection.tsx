import { motion } from 'framer-motion';

export function CraftsmanshipSection() {
  return (
    <section className="relative w-full min-h-screen py-32 z-10 flex items-center">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="relative aspect-[3/4] w-full max-w-md mx-auto"
        >
          {/* Parallax Image Placeholder */}
          <div className="absolute inset-0 bg-luxury-card overflow-hidden border border-luxury-border">
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1620815598696-22a3fc4afaf7?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-60 mix-blend-luminosity scale-105 hover:scale-100 transition-transform duration-[2s] ease-out" />
          </div>
          <div className="absolute -bottom-8 -right-8 w-1/2 aspect-square bg-luxury-secondary border border-luxury-border overflow-hidden">
             <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-50 mix-blend-luminosity" />
          </div>
        </motion.div>

        <div className="space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-luxury-text mb-6">
              The Art of <br />
              <span className="italic text-luxury-gold">Craftsmanship</span>
            </h2>
            <p className="font-sans text-luxury-muted font-light leading-relaxed">
              Every bottle is a testament to over a century of artisanal excellence. From the hand-blown glass flacons to the meticulous blending of rare extracts, our process is unhurried and uncompromising.
            </p>
          </motion.div>

          <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-luxury-border">
            {[
              { year: 'Phase I', title: 'Extraction', desc: 'Cold-pressed essential oils.' },
              { year: 'Phase II', title: 'Maceration', desc: 'Aged for 12 months in dark glass.' },
              { year: 'Phase III', title: 'Bottling', desc: 'Hand-sealed with pure gold thread.' }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="relative pl-12"
              >
                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-luxury-bg border border-luxury-gold flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                </div>
                <h4 className="font-serif italic text-luxury-gold mb-1">{step.year}</h4>
                <h3 className="font-sans text-luxury-text tracking-widest text-sm uppercase mb-2">{step.title}</h3>
                <p className="font-sans text-luxury-muted text-sm font-light">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
