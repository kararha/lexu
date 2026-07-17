export function Footer() {
  return (
    <footer className="relative w-full bg-luxury-bg z-10 border-t border-luxury-border/30 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-24">
          <div>
            <h2 className="font-serif text-3xl tracking-widest text-luxury-text mb-2 uppercase">Horizon</h2>
            <p className="font-sans text-luxury-gold italic text-sm">Parfums de Luxe</p>
          </div>
          
          <div className="flex gap-12">
            <div className="flex flex-col gap-4">
              <h4 className="font-sans text-xs tracking-widest uppercase text-luxury-muted mb-2">Boutique</h4>
              <a href="#" className="font-sans font-light text-sm text-luxury-text hover:text-luxury-gold transition-colors duration-300">Collections</a>
              <a href="#" className="font-sans font-light text-sm text-luxury-text hover:text-luxury-gold transition-colors duration-300">Bespoke</a>
              <a href="#" className="font-sans font-light text-sm text-luxury-text hover:text-luxury-gold transition-colors duration-300">Gifting</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-sans text-xs tracking-widest uppercase text-luxury-muted mb-2">Maison</h4>
              <a href="#" className="font-sans font-light text-sm text-luxury-text hover:text-luxury-gold transition-colors duration-300">Our Story</a>
              <a href="#" className="font-sans font-light text-sm text-luxury-text hover:text-luxury-gold transition-colors duration-300">Craftsmanship</a>
              <a href="#" className="font-sans font-light text-sm text-luxury-text hover:text-luxury-gold transition-colors duration-300">Sustainability</a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-luxury-border/30 gap-4">
          <p className="font-sans text-xs text-luxury-muted font-light">
            © {new Date().getFullYear()} Horizon Parfums. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-sans text-xs text-luxury-muted hover:text-luxury-gold transition-colors duration-300">Instagram</a>
            <a href="#" className="font-sans text-xs text-luxury-muted hover:text-luxury-gold transition-colors duration-300">Pinterest</a>
            <a href="#" className="font-sans text-xs text-luxury-muted hover:text-luxury-gold transition-colors duration-300">Journal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
