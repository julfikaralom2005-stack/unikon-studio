import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Monitor, 
  Smartphone, 
  Menu,
  X,
  LineChart,
  Zap,
  Globe2,
  ShieldCheck,
  Layout,
  Layers,
  MessageCircle,
  Mail,
  Home
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isNavHidden, setIsNavHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide if scrolling down and scrolled past 50px
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsNavHidden(true);
      } else if (currentScrollY < lastScrollY.current) {
        // Show if scrolling up
        setIsNavHidden(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="fixed top-4 left-4 right-4 z-50 max-w-[1200px] mx-auto">
        <header className="navbar w-full">
          <div className="w-full flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight text-white flex items-center gap-2.5 font-display px-2">
              <img 
                src="https://i.ibb.co/QgfqjgK/your-image.png" 
                alt="UNIKON STUDIO Logo" 
                className="w-[28px] h-[28px] md:w-[36px] md:h-[36px] rounded-full object-contain p-1 shrink-0 logo-neon bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)]" 
                referrerPolicy="no-referrer"
              />
              UNIKON STUDIO
            </div>
            
            <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[#E6EAF2]">
              <a href="#" className="hover:text-white transition-colors">Home</a>
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); setIsContactModalOpen(true); }} className="hover:text-white transition-colors">Contact</a>
              <button onClick={() => setIsContactModalOpen(true)} className="btn px-6 py-2.5 text-sm font-bold">
                Let's Talk
              </button>
            </div>

            <button 
              className="md:hidden text-[#E6EAF2] hover:text-white !bg-transparent !shadow-none !p-0 px-2 flex items-center justify-center min-h-[44px] min-w-[44px]"
              style={{ transform: 'none' }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </header>

        {/* Mobile Menu Side Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <motion.div 
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                onClick={(e) => e.stopPropagation()}
                className="absolute top-0 right-0 bottom-0 w-[280px] glass !rounded-l-[24px] !rounded-r-none border-r-0 flex flex-col pt-24 px-6 gap-6 z-50 h-full border border-[rgba(255,255,255,0.08)] bg-[rgba(30,30,30,0.6)] backdrop-blur-[20px]"
              >
                <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="py-3 text-lg font-bold text-[#E6EAF2] hover:text-white transition-colors border-b border-[rgba(255,255,255,0.05)]">Home</a>
                <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="py-3 text-lg font-bold text-[#E6EAF2] hover:text-white transition-colors border-b border-[rgba(255,255,255,0.05)]">Services</a>
                <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="py-3 text-lg font-bold text-[#E6EAF2] hover:text-white transition-colors border-b border-[rgba(255,255,255,0.05)]">Pricing</a>
                <a href="#contact" onClick={(e) => { e.preventDefault(); setIsContactModalOpen(true); setIsMobileMenuOpen(false); }} className="py-3 text-lg font-bold text-[#E6EAF2] hover:text-white transition-colors border-b border-[rgba(255,255,255,0.05)]">Contact</a>
                <button onClick={(e) => { e.preventDefault(); setIsContactModalOpen(true); setIsMobileMenuOpen(false); }} className="mt-4 py-4 text-center rounded-2xl btn text-white font-bold w-full text-lg shadow-lg">Let's Talk</button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* FIXED MOBILE APP BOTTOM NAV */}
      <div className={`md:hidden fixed bottom-0 left-0 right-0 z-[45] pb-safe transition-transform duration-300 ease-in-out ${isNavHidden ? 'translate-y-full' : 'translate-y-0'}`}>
        <nav className="glass !rounded-b-none !rounded-t-[20px] h-[70px] flex justify-around items-center px-4 bg-[rgba(30,30,30,0.6)] backdrop-blur-[20px] shadow-[0_-8px_32px_rgba(0,0,0,0.4)] border border-b-0 border-[rgba(255,255,255,0.08)]">
          <a href="#" className="flex flex-col items-center gap-1 min-w-[64px] min-h-[44px] justify-center text-[#D4FF59] transition-transform active:scale-95" aria-label="Home">
            <Home size={22} className="drop-shadow-[0_0_10px_rgba(212,255,89,0.5)]" />
            <span className="text-[10px] font-bold text-white tracking-wide">HOME</span>
          </a>
          <a href="#services" className="flex flex-col items-center gap-1 min-w-[64px] min-h-[44px] justify-center text-[#A7B0C0] hover:text-[#22D3EE] transition-transform active:scale-95" aria-label="Services">
            <Layout size={22} />
            <span className="text-[10px] font-medium tracking-wide">SERVICES</span>
          </a>
          <a href="#pricing" className="flex flex-col items-center gap-1 min-w-[64px] min-h-[44px] justify-center text-[#A7B0C0] hover:text-[#22D3EE] transition-transform active:scale-95" aria-label="Pricing">
            <Zap size={22} />
            <span className="text-[10px] font-medium tracking-wide">PRICING</span>
          </a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); setIsContactModalOpen(true); }} className="flex flex-col items-center gap-1 min-w-[64px] min-h-[44px] justify-center text-[#A7B0C0] hover:text-[#22D3EE] transition-transform active:scale-95" aria-label="Contact">
            <MessageCircle size={22} />
            <span className="text-[10px] font-medium tracking-wide">CONTACT</span>
          </a>
        </nav>
      </div>

      <main className="pt-24 mt-4">
        {/* Hero Section */}
        <section className="w-full max-w-[1200px] mx-auto px-6 py-12 md:py-16 lg:py-20 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative">
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#8B5CF6]/15 rounded-full blur-[100px] -z-10 pointer-events-none" />
          
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            className="flex flex-col gap-4"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111827] border-neon w-fit text-xs md:text-sm font-medium text-white shadow-[0_0_15px_rgba(34,211,238,0.15)]">
               <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse" />
               Studio available for new projects
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-[40px] md:text-[44px] lg:text-[48px] leading-[1.15] font-bold text-white max-w-[550px] tracking-tight">
              We build <span className="text-gradient-neon">high-converting</span> websites & web apps
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-[16px] md:text-[18px] text-[#E6EAF2] leading-[1.5] max-w-[480px]">
              Helping businesses grow, attract customers, and build a strong online presence globally.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-6 w-full max-w-[400px] lg:max-w-none">
              <button onClick={() => setIsContactModalOpen(true)} className="btn px-6 py-[18px] min-h-[48px] w-full lg:w-auto font-semibold flex items-center justify-center gap-2 text-[16px] shadow-lg touch-manipulation">
                Get Started <ArrowRight size={18} />
              </button>
              <a href="#demo" className="btn px-6 py-[18px] min-h-[48px] w-full lg:w-auto font-semibold flex items-center justify-center gap-2 text-[16px] shadow-lg active:scale-95 transition-transform touch-manipulation">
                Request Demo
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <DemoPreviewSystem />
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-6 bg-[#0F172A] border-y border-neon">
          <div className="max-w-[1200px] mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="text-center md:text-left mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-lg text-[#A7B0C0] max-w-2xl">Digital solutions engineered specifically for business growth.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="feature-card p-8 md:p-10 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B5CF6]/10 rounded-full blur-[50px] group-hover:bg-[#8B5CF6]/20 transition-colors" />
                <div className="glass w-16 h-16 flex items-center justify-center mb-8 text-[#8B5CF6] relative z-10">
                  <Monitor size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Website Development</h3>
                <p className="text-[#E6EAF2] text-lg leading-[1.6] relative z-10">
                  High-converting websites designed to attract and convert customers seamlessly across all devices.
                </p>
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: 0.15, duration: 0.6 } } }}
                className="feature-card p-8 md:p-10 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#22D3EE]/10 rounded-full blur-[50px] group-hover:bg-[#22D3EE]/20 transition-colors" />
                <div className="glass w-16 h-16 flex items-center justify-center mb-8 text-[#22D3EE] relative z-10">
                  <Smartphone size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Web App Development</h3>
                <p className="text-[#E6EAF2] text-lg leading-[1.6] relative z-10">
                  Custom web apps built for performance, reliability, and measurable business growth.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 px-6 relative">
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#22D3EE]/5 rounded-full blur-[150px] -z-10 pointer-events-none" />
          <div className="max-w-[1200px] mx-auto">
            <PricingToggle onSelectPlan={() => setIsContactModalOpen(true)} />
          </div>
        </section>

        {/* Demo Explanation Section */}
        <section id="demo" className="py-24 px-6 section">
          <div className="max-w-[900px] mx-auto demo-card p-10 md:p-16 text-center relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/5 to-[#22D3EE]/5 pointer-events-none" />
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="relative z-10 flex flex-col items-center">
               <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-6">Demo Preview Available</motion.h2>
               <div className="text-lg text-[#E6EAF2] leading-[1.6] space-y-4 max-w-[700px] mx-auto">
                 <motion.p variants={fadeUp}>
                   We provide a precise demo preview prior to kickoff, ensuring you see the definitive structure and design direction we've formulated.
                 </motion.p>
                 <motion.p variants={fadeUp} className="text-[#A7B0C0] font-medium mt-4">
                   This process is strictly tailored for serious clients to ensure flawless alignment on visual and business goals.
                 </motion.p>
               </div>
             </motion.div>
          </div>
        </section>

        {/* About & Why Choose Us Section */}
        <section id="about" className="py-24 px-6 section border-0">
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">About Studio</h2>
              <div className="text-lg text-[#E6EAF2] leading-[1.7] space-y-6">
                <p className="pl-6 border-l-2 border-[#8B5CF6] text-xl font-medium text-white">
                  UNIKON STUDIO is a web design and development studio focused on building high-converting websites and web applications.
                </p>
                <p>
                  We help businesses grow online and drive real results. By bridging the gap between cutting-edge technology and conversion psychology, we build platforms that serve as your most powerful digital assets.
                </p>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Why Choose Us</h2>
               <div className="space-y-6">
                 {[
                    { icon: <LineChart size={24} />, title: "Conversion-focused design" },
                    { icon: <Zap size={24} />, title: "Performance-driven builds" },
                    { icon: <Layers size={24} />, title: "Scalable solutions" },
                    { icon: <ShieldCheck size={24} />, title: "Business growth focused" }
                 ].map((item, i) => (
                   <motion.div key={i} variants={fadeUp} className="flex items-center gap-5 p-4 rounded-xl glass hover:shadow-[0_0_15px_rgba(34,211,238,0.15)] transition-shadow">
                     <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-[#0F172A] border-neon flex items-center justify-center text-[#22D3EE]">
                       {item.icon}
                     </div>
                     <span className="text-lg text-white font-bold">{item.title}</span>
                   </motion.div>
                 ))}
               </div>
            </motion.div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-32 px-6 section border-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#8B5CF6]/10 to-[#22D3EE]/10 rounded-full blur-[150px] pointer-events-none" />
          <div className="max-w-[800px] mx-auto text-center relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="flex flex-col gap-8 items-center">
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Let's build your project
              </motion.h2>
              <motion.p variants={fadeUp} className="text-xl text-[#E6EAF2] max-w-2xl">
                Tell us about your idea and we will help bring it online seamlessly.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-4 w-full px-4 md:px-0">
                <button onClick={(e) => { e.preventDefault(); setIsContactModalOpen(true); }} className="btn w-full md:w-auto inline-flex items-center justify-center min-h-[56px] px-12 py-5 rounded-full font-bold text-lg">
                  Contact Us Now
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-[#A7B0C0] text-sm section rounded-none border border-t-[rgba(255,255,255,0.08)] border-x-0 border-b-0 m-0">
        <p>&copy; {new Date().getFullYear()} UNIKON STUDIO. All rights reserved.</p>
      </footer>

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsContactModalOpen(false)}
              className="absolute inset-0 bg-[#0A0F1F]/80 backdrop-blur-sm shadow-xl"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg glass p-8 md:p-10 z-10"
            >
              <button 
                onClick={() => setIsContactModalOpen(false)}
                className="absolute top-6 right-6 text-[#A7B0C0] hover:text-white !bg-transparent !p-0 !shadow-none"
                style={{transform: 'none'}}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 font-display">Get in Touch</h3>
              <p className="text-[#E6EAF2] text-lg mb-8">Choose your preferred way to contact us</p>
              
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <a 
                  href="https://wa.me/918724026466?text=Hi%2C%20I%27d%20like%20to%20build%20a%20professional%20website.%20Please%20walk%20me%20through%20the%20process%20of%20defining%20the%20layout%2C%20features%2C%20and%20tech%20stack.%20Ready%20to%20start%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-4 glass p-6 hover-glow !border-transparent hover:!border-[#25D366]/50 group transition-all"
                >
                  <div className="w-14 h-14 rounded-full bg-[#111827] flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(37,211,102,0.15)] border border-[#25D366]/20">
                    <MessageCircle size={28} />
                  </div>
                  <span className="text-white font-bold text-lg text-center">Chat on WhatsApp</span>
                </a>

                <a 
                  href="mailto:xinemran@gmail.com?subject=Website%20Project%20Inquiry&body=Hi%2C%20I%27d%20like%20to%20build%20a%20professional%20website.%20Please%20walk%20me%20through%20the%20process%20of%20defining%20the%20layout%2C%20features%2C%20and%20tech%20stack.%20Ready%20to%20start%3F"
                  className="flex flex-col items-center gap-4 glass p-6 hover-glow !border-transparent hover:!border-[#22D3EE]/50 group transition-all"
                >
                  <div className="w-14 h-14 rounded-full bg-[#111827] flex items-center justify-center text-[#22D3EE] group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(34,211,238,0.15)] border border-[#22D3EE]/20">
                    <Mail size={28} />
                  </div>
                  <span className="text-white font-bold text-lg text-center">Send an Email</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

// -------------------------------------------------------------------------------- //
// PRICING COMPONENT
// -------------------------------------------------------------------------------- //

function PricingToggle({ onSelectPlan }: { onSelectPlan: () => void }) {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  const pricingData = {
    INR: [
      { name: "Starter", price: "₹10,000", desc: "Perfect entry for new online presences." },
      { name: "Growth", price: "₹15k–20k", desc: "Engineered for scaling capabilities.", highlight: true },
      { name: "Pro", price: "₹25k–40k", desc: "Complete robust ecosystem build." }
    ],
    USD: [
      { name: "Starter", price: "$199", desc: "Perfect entry for new online presences." },
      { name: "Growth", price: "$399", desc: "Engineered for scaling capabilities.", highlight: true },
      { name: "Pro", price: "$699+", desc: "Complete robust ecosystem build." }
    ]
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Transparent Iterations</h2>
        
        <div className="inline-flex glass p-1.5 w-max">
          <button 
            className={`px-8 py-3 !shadow-none !transform-none !bg-transparent text-sm font-bold transition-all duration-300 ${currency === 'INR' ? '!bg-[#1F2937] text-white border border-neon' : 'text-[#A7B0C0] hover:text-white border border-transparent'}`}
            onClick={() => setCurrency('INR')}
          >
            India
          </button>
          <button 
            className={`px-8 py-3 !shadow-none !transform-none !bg-transparent text-sm font-bold transition-all duration-300 ${currency === 'USD' ? '!bg-[#1F2937] text-white border border-neon' : 'text-[#A7B0C0] hover:text-white border border-transparent'}`}
            onClick={() => setCurrency('USD')}
          >
            International
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {pricingData[currency].map((plan, i) => (
          <motion.div 
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }
            }}
            className={`relative pricing-card p-8 md:p-10 flex flex-col hover-glow ${plan.highlight ? 'border-[1px] !border-[#22D3EE] md:-translate-y-2' : ''}`}
          >
            {plan.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-neon px-6 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                Growth Plan
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-[#E6EAF2] mb-4">{plan.name}</h3>
              <div className="text-4xl font-display font-bold text-white mb-4">{plan.price}</div>
              <p className="text-[#A7B0C0] text-[15px] leading-relaxed h-10">{plan.desc}</p>
            </div>
            
            <a href="#contact" onClick={(e) => { e.preventDefault(); onSelectPlan(); }} className="block w-full py-4 text-center font-bold transition-all duration-300 mt-auto btn">
              Select {plan.name}
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}


// -------------------------------------------------------------------------------- //
// PREVIEW SYSTEM COMPONENT
// -------------------------------------------------------------------------------- //

function DemoPreviewSystem() {
  const [activeTab, setActiveTab] = useState<'SaaS' | 'Agency'>('SaaS');

  return (
    <div 
      className="w-full p-6 relative flex flex-col group transition-all duration-300"
      style={{
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(20px) saturate(160%)',
        WebkitBackdropFilter: 'blur(20px) saturate(160%)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '20px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05), 0 0 30px rgba(34,211,238,0.12)'
      }}
    >
      {/* Glow Effect behind inner window */}
      <div className="absolute inset-0 bg-gradient-neon opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500 rounded-2xl pointer-events-none" />
      
      {/* Browser Controls & Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4 relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#EF4444] shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
          <div className="w-3 h-3 rounded-full bg-[#F59E0B] shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
          <div className="w-3 h-3 rounded-full bg-[#10B981] shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
        </div>
        <div className="flex gap-2 p-1 rounded-lg border border-neon bg-black/20">
          <button 
            onClick={() => setActiveTab('SaaS')}
            className={`flex items-center gap-2 px-4 py-1.5 text-xs font-bold rounded-md transition-all !bg-transparent !shadow-none !transform-none ${activeTab === 'SaaS' ? '!bg-[#1F2937] text-white border border-neon' : 'text-[#A7B0C0] hover:text-white border border-transparent'}`}
          >
            <Layout size={14} /> SaaS
          </button>
          <button 
            onClick={() => setActiveTab('Agency')}
            className={`flex items-center gap-2 px-4 py-1.5 text-xs font-bold rounded-md transition-all !bg-transparent !shadow-none !transform-none ${activeTab === 'Agency' ? '!bg-[#1F2937] text-white border border-neon' : 'text-[#A7B0C0] hover:text-white border border-transparent'}`}
          >
            <Globe2 size={14} /> Agency
          </button>
        </div>
      </div>
      
      {/* Dynamic Inner Preview Window */}
      <div className="rounded-xl overflow-hidden pointer-events-none select-none flex-1 border border-[rgba(255,255,255,0.05)] relative z-10 shadow-inner min-h-[380px]" style={{ background: 'rgba(255,255,255,0.06)' }}>
        <AnimatePresence mode="wait">
          {activeTab === 'SaaS' ? (
             <PreviewSaaS key="saas" />
          ) : (
             <PreviewAgency key="agency" />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}


function PreviewSaaS() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }} 
      animate={{ opacity: 1, scale: 1 }} 
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className="w-full h-full flex flex-col"
    >
      {/* Navbar SaaS */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-[rgba(255,255,255,0.05)]">
        <div className="font-bold text-white flex items-center gap-2 text-lg">
          <div className="w-5 h-5 rounded bg-[#8B5CF6]"></div> Nexus
        </div>
        <div className="flex gap-3">
          <div className="w-10 h-2 bg-white/20 rounded-full"></div>
          <div className="w-10 h-2 bg-white/20 rounded-full"></div>
        </div>
      </div>
      
      {/* Hero SaaS */}
      <div className="px-8 py-12 flex-1 flex flex-col items-start justify-center">
        <h3 className="text-[32px] font-black text-white mb-4 leading-[1.1] max-w-[300px] tracking-tight">Scale your workflow.</h3>
        <p className="text-[#A7B0C0] text-[15px] mb-8 max-w-[280px] leading-relaxed font-medium">
          Connect your teams and tools in one unified platform designed for speed.
        </p>
        <div className="px-6 py-3 bg-white/10 border border-white/20 text-white text-sm font-bold rounded-lg shadow-md w-max backdrop-blur-md">
          Start Free Trial
        </div>
      </div>
    </motion.div>
  );
}

function PreviewAgency() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }} 
      animate={{ opacity: 1, scale: 1 }} 
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className="w-full h-full flex flex-col"
    >
      {/* Navbar Agency */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-[rgba(255,255,255,0.05)]">
        <div className="font-black text-white tracking-tighter text-xl">
          ELEVATE.
        </div>
        <div className="w-16 h-8 bg-white/10 border border-white/10 rounded-md"></div>
      </div>
      
      {/* Hero Agency */}
      <div className="p-6 flex-1 flex flex-col gap-4">
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-white h-36 flex flex-col justify-end relative overflow-hidden backdrop-blur-md">
           <div className="absolute top-0 right-0 w-32 h-32 bg-[#22D3EE]/20 rounded-full blur-[30px]" />
           <h3 className="text-2xl font-bold relative z-10">We design the future.</h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
           <div className="h-28 bg-white/5 rounded-xl border border-[rgba(255,255,255,0.08)] p-4 flex flex-col justify-between backdrop-blur-md">
             <div className="w-8 h-8 rounded-full bg-white/20"></div>
             <div className="w-full h-2 bg-white/30 rounded-full"></div>
           </div>
           <div className="h-28 bg-white/5 rounded-xl border border-[rgba(255,255,255,0.08)] p-4 flex flex-col justify-between backdrop-blur-md">
             <div className="w-8 h-8 rounded-full bg-white/20"></div>
             <div className="w-2/3 h-2 bg-white/30 rounded-full"></div>
           </div>
        </div>
      </div>
    </motion.div>
  );
}
