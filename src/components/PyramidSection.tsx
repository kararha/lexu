import { motion } from 'framer-motion';

export function PyramidSection() {
  const notes = [
    { level: 'Top Notes', desc: 'Bergamot, Pink Pepper, Saffron', delay: 0 },
    { level: 'Middle Notes', desc: 'Turkish Rose, Jasmine, Amberwood', delay: 0.2 },
    { level: 'Base Notes', desc: 'Oud, Vanilla, Patchouli, Musk', delay: 0.4 },
  ];

  return (
    <section className="relative w-full min-h-screen py-32 bg-luxury-secondary/80 flex flex-col items-center justify-center z-10 border-y border-luxury-border/50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mb-24"
      >
        <h2 className="font-serif text-4xl md:text-5xl text-luxury-text mb-4">
          Fragrance <span className="italic text-luxury-bronze">Pyramid</span>
        </h2>
        <p className="text-luxury-muted text-sm tracking-widest uppercase">The Anatomy of a Masterpiece</p>
      </motion.div>

      <div className="flex flex-col items-center justify-center gap-16 relative w-full max-w-4xl px-6">
        {/* Connecting Line */}
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-luxury-gold/30 to-transparent -translate-x-1/2" />

        {notes.map((note, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: note.delay }}
            className="relative z-10 w-full md:w-2/3 group cursor-pointer"
          >
            <div className="absolute inset-0 bg-luxury-gold/5 blur-xl group-hover:bg-luxury-gold/10 transition-colors duration-700" />
            <div className="relative bg-luxury-card/40 backdrop-blur-md border border-luxury-border/50 p-8 text-center flex flex-col items-center gap-4 transition-transform duration-700 hover:-translate-y-2">
              <span className="font-serif italic text-luxury-gold text-lg">
                {note.level}
              </span>
              <p className="font-sans text-luxury-text font-light tracking-wide">
                {note.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
