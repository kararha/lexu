import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight, Sparkles, Check } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, newQty: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'shipping' | 'success'>('cart');
  const [shippingForm, setShippingForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutStep('success');
    setTimeout(() => {
      onClearCart();
    }, 100);
  };

  const handleReset = () => {
    setCheckoutStep('cart');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />

          {/* Drawer Container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-[#08080a] border-l border-white/10 text-white z-[101] shadow-2xl flex flex-col h-full overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-neutral-400" />
                <h2 className="text-lg font-semibold tracking-wider uppercase font-sans">
                  {checkoutStep === 'success' ? 'Order Confirmed' : 'Your Scent Selection'}
                </h2>
                <span className="text-xs bg-white/10 px-2.5 py-0.5 rounded-full text-neutral-300 font-mono">
                  {cart.reduce((s, i) => s + i.quantity, 0)}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/5 rounded-full transition-colors text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {checkoutStep === 'cart' && (
                <>
                  {cart.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-20">
                      <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-neutral-500">
                        <ShoppingBag className="w-8 h-8" />
                      </div>
                      <div>
                        <p className="text-neutral-400 font-medium">Your sensory cart is empty</p>
                        <p className="text-neutral-600 text-xs mt-1">Explore our signature fragrances to begin.</p>
                      </div>
                      <button
                        onClick={onClose}
                        className="mt-4 px-6 py-2.5 bg-white text-black rounded-full font-medium text-xs tracking-wider uppercase hover:bg-neutral-200 transition-colors"
                      >
                        Start Exploring
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-6">
                      {cart.map((item) => (
                        <div
                          key={item.id}
                          className="flex gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
                        >
                          {/* Bottle Visual Representation */}
                          <div className="w-16 h-20 bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-lg border border-white/10 relative flex items-center justify-center flex-shrink-0">
                            {item.isCustom ? (
                              <div className="absolute inset-0 flex flex-col justify-between p-1">
                                <div className="w-6 h-1.5 bg-amber-500/80 mx-auto rounded-sm mt-1" />
                                <div className="flex-1 flex items-center justify-center">
                                  <Sparkles className="w-6 h-6 text-amber-400" />
                                </div>
                                <div className="text-[7px] text-center font-mono text-neutral-400 truncate max-w-[60px] pb-1">
                                  Custom
                                </div>
                              </div>
                            ) : (
                              <div className="absolute inset-0 flex flex-col justify-between p-1">
                                <div className="w-6 h-1.5 bg-white/30 mx-auto rounded-sm mt-1" />
                                <div className="flex-1 flex items-center justify-center font-mono text-sm font-semibold opacity-30 text-white">
                                  {item.name[0]}
                                </div>
                                <div className="text-[7px] text-center font-mono text-neutral-400 pb-1">
                                  {item.size}
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Details */}
                          <div className="flex-1 flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-start gap-2">
                                <h3 className="font-semibold text-sm tracking-wide text-white font-sans">{item.name}</h3>
                                <button
                                  onClick={() => onRemoveItem(item.id)}
                                  className="text-neutral-500 hover:text-red-400 p-1 rounded hover:bg-white/5 transition-colors"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                              <p className="text-xs text-neutral-400 mt-1">
                                {item.isCustom ? 'Custom Blend' : `${item.size} — Eau de Parfum`}
                              </p>
                              {item.isCustom && item.customRecipe && (
                                <div className="flex gap-2 mt-2 font-mono text-[9px] text-neutral-500">
                                  <span>Citrus: {item.customRecipe.citrus}%</span>
                                  <span>Oud: {item.customRecipe.oud}%</span>
                                  <span>Musk: {item.customRecipe.musk}%</span>
                                </div>
                              )}
                            </div>

                            <div className="flex justify-between items-center mt-3">
                              <div className="flex items-center gap-1 bg-white/5 rounded-full p-0.5 border border-white/5">
                                <button
                                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                  className="p-1 hover:bg-white/10 rounded-full transition-colors text-neutral-400 hover:text-white"
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="w-6 text-center font-mono text-xs">{item.quantity}</span>
                                <button
                                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                  className="p-1 hover:bg-white/10 rounded-full transition-colors text-neutral-400 hover:text-white"
                                >
                                  <Plus className="w-3 h-3" />
                                </button>
                              </div>
                              <span className="font-mono text-sm font-medium text-neutral-200">
                                ${item.price * item.quantity}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}

              {checkoutStep === 'shipping' && (
                <form onSubmit={handleCheckout} className="flex flex-col gap-5">
                  <div className="text-center pb-2">
                    <p className="text-neutral-400 text-sm">Provide your delivery details to secure your sensory transport.</p>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">Full Name</label>
                    <input
                      required
                      type="text"
                      value={shippingForm.name}
                      onChange={(e) => setShippingForm({ ...shippingForm, name: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/15 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors text-white"
                      placeholder="Alexander Vance"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">Email Address</label>
                    <input
                      required
                      type="email"
                      value={shippingForm.email}
                      onChange={(e) => setShippingForm({ ...shippingForm, email: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/15 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors text-white"
                      placeholder="alexander@cosmic.com"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">Delivery Address</label>
                    <input
                      required
                      type="text"
                      value={shippingForm.address}
                      onChange={(e) => setShippingForm({ ...shippingForm, address: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/15 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors text-white"
                      placeholder="742 Celestial Avenue"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">City</label>
                      <input
                        required
                        type="text"
                        value={shippingForm.city}
                        onChange={(e) => setShippingForm({ ...shippingForm, city: e.target.value })}
                        className="w-full bg-white/[0.03] border border-white/15 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors text-white"
                        placeholder="Neo Horizon"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">Postal Code</label>
                      <input
                        required
                        type="text"
                        value={shippingForm.zip}
                        onChange={(e) => setShippingForm({ ...shippingForm, zip: e.target.value })}
                        className="w-full bg-white/[0.03] border border-white/15 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors text-white"
                        placeholder="90210"
                      />
                    </div>
                  </div>

                  <div className="mt-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col gap-2 font-mono text-xs text-neutral-400">
                    <div className="flex justify-between">
                      <span>Selection Total</span>
                      <span>${total}</span>
                    </div>
                    <div className="flex justify-between text-emerald-400">
                      <span>Galactic Transit</span>
                      <span>Complimentary</span>
                    </div>
                    <div className="border-t border-white/10 my-1 pt-2 flex justify-between font-bold text-sm text-white">
                      <span>Total</span>
                      <span>${total}</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-4 bg-white text-black hover:bg-neutral-200 transition-colors rounded-xl font-semibold text-xs tracking-widest uppercase flex items-center justify-center gap-2"
                  >
                    Authorize Dispatch <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setCheckoutStep('cart')}
                    className="w-full py-3 bg-transparent hover:bg-white/5 border border-white/10 transition-colors rounded-xl font-semibold text-xs tracking-widest uppercase"
                  >
                    Back to Selection
                  </button>
                </form>
              )}

              {checkoutStep === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center gap-6 py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-[0_0_50px_rgba(16,185,129,0.1)]">
                    <Check className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-wide font-sans">Sensory Order Dispatched</h3>
                    <p className="text-neutral-400 text-sm mt-2 max-w-sm">
                      We have processed your request. Your unique scent profiles have been queued for alchemical bottling and secure transit.
                    </p>
                    <p className="text-neutral-500 text-xs mt-4 font-mono">
                      Tracking code: <span className="text-neutral-300">#AURA-{(Math.random() * 100000).toFixed(0)}</span>
                    </p>
                  </div>
                  <button
                    onClick={handleReset}
                    className="mt-4 px-8 py-3.5 bg-white text-black rounded-xl font-semibold text-xs tracking-wider uppercase hover:bg-neutral-200 transition-colors"
                  >
                    Continue Journey
                  </button>
                </motion.div>
              )}
            </div>

            {/* Sticky Footer */}
            {cart.length > 0 && checkoutStep === 'cart' && (
              <div className="p-6 border-t border-white/10 bg-black/50 backdrop-blur-md flex flex-col gap-4">
                <div className="flex justify-between items-end font-sans">
                  <span className="text-sm text-neutral-400 uppercase tracking-widest font-mono">Subtotal</span>
                  <span className="text-2xl font-bold font-mono">${total}</span>
                </div>
                <button
                  onClick={() => setCheckoutStep('shipping')}
                  className="w-full py-4 bg-white text-black rounded-xl font-semibold text-xs tracking-widest uppercase hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  Proceed to Transit <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
