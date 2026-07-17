import { motion } from 'framer-motion';

const collection = [
  { name: 'Oud Nuit', price: '$450', ml: '50ML', img: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop' },
  { name: 'Rose Éternelle', price: '$380', ml: '50ML', img: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop' },
  { name: 'Santal Imperial', price: '$420', ml: '50ML', img: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=800&auto=format&fit=crop' },
];

export function CollectionSection() {
  return (
    <section className="relative w-full min-h-screen py-32 bg-luxury-secondary/50 z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-luxury-text mb-4">
            The <span className="italic text-luxury-bronze">Collection</span>
          </h2>
          <div className="w-12 h-px bg-luxury-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-12">
          {collection.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: idx * 0.2 }}
              className="group cursor-pointer flex flex-col items-center"
            >
              <div className="w-full aspect-[3/4] relative bg-luxury-card/30 border border-luxury-border overflow-hidden mb-6 flex items-center justify-center p-8 transition-colors duration-700 group-hover:bg-luxury-card/60">
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                
                {/* Product Image */}
                <img 
                  src={item.img} 
                  alt={item.name}
                  className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[2s] ease-out z-0"
                />

                {/* Floating Pedestal Effect */}
                <div className="absolute bottom-10 w-2/3 h-1 bg-luxury-gold/20 blur-md rounded-full transition-all duration-700 group-hover:w-3/4 group-hover:bg-luxury-gold/40 z-0" />
                
                <div className="absolute bottom-8 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <button className="px-6 py-2 border border-luxury-gold text-luxury-gold text-xs tracking-widest uppercase hover:bg-luxury-gold hover:text-luxury-bg transition-colors duration-300">
                    View Details
                  </button>
                </div>
              </div>

              <div className="text-center w-full">
                <h3 className="font-serif text-2xl text-luxury-text group-hover:text-luxury-gold transition-colors duration-300 mb-2">
                  {item.name}
                </h3>
                <div className="flex items-center justify-center gap-4 text-xs tracking-widest text-luxury-muted">
                  <span>{item.ml}</span>
                  <span className="w-1 h-1 rounded-full bg-luxury-border" />
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-luxury-text">{item.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 flex justify-center">
          <button className="px-12 py-4 text-xs tracking-widest uppercase border-b border-luxury-border text-luxury-muted hover:text-luxury-gold hover:border-luxury-gold transition-all duration-500">
            View All Fragrances
          </button>
        </div>
      </div>
    </section>
  );
}
