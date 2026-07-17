import { motion } from 'framer-motion';

export function TestimonialsSection() {
  return (
    <section className="relative w-full min-h-[80vh] py-32 flex items-center justify-center bg-luxury-secondary/80 z-10 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="max-w-4xl backdrop-blur-md bg-luxury-card/40 p-12 md:p-24 border border-luxury-border/50 relative"
        >
          {/* Decorative quotes */}
          <span className="absolute top-8 left-8 text-6xl font-serif text-luxury-gold/20 leading-none">"</span>
          
          <h3 className="font-serif text-2xl md:text-4xl text-luxury-text leading-snug mb-12">
            An absolute masterpiece. The way it evolves on the skin throughout the day is nothing short of <span className="italic text-luxury-gold">cinematic</span>. It feels less like wearing a fragrance and more like inhabiting a mood.
          </h3>
          
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border border-luxury-gold">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" 
                alt="Portrait" 
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-luxury-text">Alexander V.</p>
              <p className="font-serif italic text-luxury-muted text-sm mt-1">Connoisseur</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
