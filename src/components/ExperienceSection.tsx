import { motion } from 'framer-motion';
import { Gift, Globe, ShieldCheck, Diamond } from 'lucide-react';

export function ExperienceSection() {
  const experiences = [
    { icon: Gift, title: 'Premium Packaging', desc: 'Each flacon is nestled in a hand-crafted velvet box, sealed with our signature wax emblem.' },
    { icon: Globe, title: 'Worldwide Shipping', desc: 'Complimentary expedited and fully insured global delivery for all our clients.' },
    { icon: ShieldCheck, title: 'Authenticity Guarantee', desc: 'A registered certificate of authenticity and provenance accompanies every creation.' },
    { icon: Diamond, title: 'Lifetime Support', desc: 'Exclusive access to our private concierge for personalized fragrance profiling and refills.' },
  ];

  return (
    <section className="relative w-full py-32 bg-luxury-card/20 border-y border-luxury-border/30 z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="font-serif text-3xl md:text-5xl text-luxury-text mb-4">
            The <span className="italic text-luxury-gold">Experience</span>
          </h2>
          <p className="text-luxury-muted text-sm tracking-widest uppercase">Beyond the Fragrance</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group p-8 border border-luxury-border/20 bg-luxury-bg/50 backdrop-blur-sm hover:border-luxury-gold/50 transition-colors duration-500 text-center flex flex-col items-center gap-6 cursor-default"
            >
              <div className="w-16 h-16 rounded-full border border-luxury-border/50 flex items-center justify-center bg-luxury-secondary/50 group-hover:bg-luxury-gold/10 group-hover:border-luxury-gold transition-all duration-500">
                <exp.icon className="w-6 h-6 text-luxury-muted group-hover:text-luxury-gold transition-colors duration-500" strokeWidth={1} />
              </div>
              <h3 className="font-sans text-sm tracking-widest uppercase text-luxury-text">{exp.title}</h3>
              <p className="font-sans font-light text-luxury-muted text-sm leading-relaxed">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
