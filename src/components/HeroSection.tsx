import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-bg/20 via-transparent to-luxury-bg/90 z-0 pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        className="z-10 flex flex-col items-center text-center mt-32"
      >
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-wider text-luxury-text mb-6 drop-shadow-2xl">
          Every Drop Tells <br className="hidden md:block"/> A Story
        </h1>
        
        <p className="font-sans text-sm md:text-lg text-luxury-muted max-w-xl font-light tracking-wide mb-12">
          Crafted with rare ingredients and timeless elegance.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <button className="px-8 py-4 bg-luxury-gold/90 hover:bg-luxury-gold text-luxury-bg font-medium tracking-widest text-xs uppercase transition-all duration-500 rounded-sm">
            Discover Collection
          </button>
          <button className="px-8 py-4 border border-luxury-border hover:border-luxury-gold hover:text-luxury-gold text-luxury-text font-medium tracking-widest text-xs uppercase transition-all duration-500 rounded-sm bg-luxury-bg/50 backdrop-blur-sm">
            Explore Notes
          </button>
        </div>
      </motion.div>
    </section>
  );
}
