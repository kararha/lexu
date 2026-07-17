import { motion } from 'framer-motion';

export function NewsletterSection() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center bg-luxury-secondary z-10 border-t border-luxury-border/30 overflow-hidden">
      {/* Background Silhouette */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
         <img 
            src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop" 
            alt="Silhouette" 
            className="h-[150%] object-cover grayscale mix-blend-screen"
         />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-serif text-4xl md:text-6xl text-luxury-text mb-6">
            Join the <span className="italic text-luxury-gold">Inner Circle</span>
          </h2>
          <p className="font-sans text-luxury-muted font-light mb-12">
            Subscribe to receive exclusive access to limited editions, private events, and bespoke fragrance consultations.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="w-full sm:w-2/3 bg-transparent border-b border-luxury-border px-4 py-3 text-luxury-text focus:outline-none focus:border-luxury-gold transition-colors duration-500 placeholder:text-luxury-muted/50 font-sans font-light tracking-wide"
            />
            <button 
              type="submit" 
              className="w-full sm:w-auto px-8 py-3 bg-luxury-text text-luxury-bg hover:bg-luxury-gold transition-colors duration-500 text-xs tracking-widest uppercase"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
