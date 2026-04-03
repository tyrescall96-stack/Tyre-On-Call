import React from "react";
import { motion } from "framer-motion";
import { 
  Phone, Clock, MapPin, ShieldCheck, Wrench, AlertTriangle, 
  ChevronDown, CheckCircle2, ChevronRight, Menu, X, Facebook, Twitter, Instagram
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import heroImg from "@/assets/images/hero.jpg";
import mechanicImg from "@/assets/images/mechanic.jpg";
import emergencyImg from "@/assets/images/emergency.jpg";
import fleetImg from "@/assets/images/fleet.jpg";

const PHONE_NUMBER = "0800 123 4567";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-white py-5"}`}>
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('top')}>
            <div className="bg-primary text-white p-2 rounded-lg">
              <Wrench size={24} />
            </div>
            <div className="font-black text-2xl tracking-tight text-slate-900">
              Tyre<span className="text-primary">OnCall</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-700">
            <button onClick={() => scrollTo('services')} className="hover:text-primary transition-colors">Services</button>
            <button onClick={() => scrollTo('how-it-works')} className="hover:text-primary transition-colors">How it Works</button>
            <button onClick={() => scrollTo('coverage')} className="hover:text-primary transition-colors">Coverage</button>
            <button onClick={() => scrollTo('faq')} className="hover:text-primary transition-colors">FAQ</button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex flex-col items-end">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">24/7 Emergency</span>
              <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} className="text-lg font-bold text-slate-900 hover:text-primary transition-colors">
                {PHONE_NUMBER}
              </a>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-6 shadow-lg shadow-primary/25">
              <Phone className="mr-2 h-4 w-4" /> Call Now
            </Button>
          </div>

          <button className="md:hidden text-slate-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl p-4 flex flex-col gap-4">
            <button onClick={() => scrollTo('services')} className="text-left font-medium p-2 text-slate-700 hover:bg-slate-50 rounded-md">Services</button>
            <button onClick={() => scrollTo('how-it-works')} className="text-left font-medium p-2 text-slate-700 hover:bg-slate-50 rounded-md">How it Works</button>
            <button onClick={() => scrollTo('coverage')} className="text-left font-medium p-2 text-slate-700 hover:bg-slate-50 rounded-md">Coverage</button>
            <button onClick={() => scrollTo('faq')} className="text-left font-medium p-2 text-slate-700 hover:bg-slate-50 rounded-md">FAQ</button>
            <div className="pt-4 border-t border-slate-100">
              <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} className="w-full flex items-center justify-center p-3 bg-slate-900 text-white font-bold rounded-lg mb-2">
                <Phone className="mr-2 h-4 w-4" /> {PHONE_NUMBER}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="top" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-transparent z-10" />
          <img src={heroImg} alt="Mobile tyre fitting van" className="w-full h-full object-cover object-center" />
        </div>

        <div className="container relative z-20 mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl text-white"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-bold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              On Call 24/7
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Flat Tyre? <br/>
              <span className="text-primary">We Come To You.</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-slate-200 mb-8 font-medium">
              Fast, reliable mobile tyre fitting at your home, work, or on the roadside. No waiting at garages. No towing required.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Button size="xl" className="bg-primary hover:bg-primary/90 text-white text-lg font-bold h-14 px-8 rounded-full shadow-lg shadow-primary/30">
                <Phone className="mr-2 h-5 w-5" /> Call {PHONE_NUMBER}
              </Button>
              <Button size="xl" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20 text-lg font-bold h-14 px-8 rounded-full backdrop-blur-sm" onClick={() => scrollTo('services')}>
                See Our Services
              </Button>
            </motion.div>

            <motion.div variants={fadeIn} className="mt-10 flex items-center gap-6 text-sm font-medium text-slate-300">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> 60 Min Response</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> No Callout Fee</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Brand Logos */}
      <section className="bg-white py-10 border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Premium Brands We Supply & Fit</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-60 hover:opacity-80 transition-all duration-500">
            {['MICHELIN', 'BRIDGESTONE', 'GOODYEAR', 'CONTINENTAL', 'PIRELLI', 'DUNLOP', 'YOKOHAMA', 'HANKOOK'].map(brand => (
              <span key={brand} className="font-black text-xl md:text-2xl tracking-tight text-slate-700">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* About & Features */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Why Choose TyreOnCall?</h2>
              <p className="text-lg text-slate-600 mb-8">
                We're revolutionizing the way you buy and fit tyres. Why waste your Saturday morning sitting in a dingy garage waiting room when our fully-equipped mobile fitting vans can come directly to you?
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Clock, title: "24/7 Availability", desc: "Day or night, rain or shine. We're always on call for emergencies." },
                  { icon: MapPin, title: "We Come To You", desc: "Home, workplace, or roadside. Just drop a pin and we'll be there." },
                  { icon: ShieldCheck, title: "Expert Technicians", desc: "Fully trained, insured professionals with top-tier equipment." },
                ].map((feature, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg h-fit text-primary">
                      <feature.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg">{feature.title}</h3>
                      <p className="text-slate-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img src={mechanicImg} alt="Mechanic fitting tyre" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white overflow-hidden">
                        <div className="w-full h-full bg-primary/20" />
                      </div>
                    ))}
                  </div>
                  <div className="flex text-amber-400">
                    {'★★★★★'.split('').map((_, i) => <span key={i}>★</span>)}
                  </div>
                </div>
                <p className="text-sm font-bold text-slate-900">"Arrived in 45 mins. Saved my trip!"</p>
                <p className="text-xs text-slate-500">— Sarah J., London</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Our Services</h2>
            <p className="text-lg text-slate-600">Comprehensive mobile tyre solutions tailored to your needs. Fast, efficient, and professional.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: emergencyImg,
                title: "Emergency Fitting",
                desc: "Stuck on the roadside? We prioritize emergency callouts to get you back on your journey safely and quickly.",
                icon: AlertTriangle
              },
              {
                img: mechanicImg,
                title: "Mobile Replacement",
                desc: "Book a scheduled fitting at your home or workplace. We bring the new tyres and balance them on-site.",
                icon: Wrench
              },
              {
                img: fleetImg,
                title: "Fleet Services",
                desc: "Keep your business moving with our commercial fleet tyre management. Minimal downtime, maximum efficiency.",
                icon: ShieldCheck
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow group h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-primary p-2 rounded-lg shadow-sm">
                      <service.icon size={20} />
                    </div>
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-slate-600 mb-4 flex-1">{service.desc}</p>
                    <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} className="inline-flex items-center text-primary font-bold hover:text-slate-900 transition-colors mt-auto">
                      Book Now <ChevronRight size={16} className="ml-1" />
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">How It Works</h2>
            <p className="text-lg text-slate-400">Three simple steps to get you back on the road.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-slate-800 -z-0"></div>
            
            {[
              { num: "01", title: "Call or Book", desc: "Tell us your tyre size, location, and issue. We'll give you an instant quote." },
              { num: "02", title: "We Come To You", desc: "Our fully-equipped van arrives at your location within the agreed timeframe." },
              { num: "03", title: "Job Done", desc: "We fit, valve, and balance your new tyres. You're ready to drive away safely." }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center text-3xl font-black text-primary mb-6 shadow-xl">
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-400 max-w-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section id="coverage" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-6">Areas We Cover</h2>
              <p className="text-lg text-white/90 mb-8 font-medium">
                Our mobile fleet operates across major UK regions, ensuring rapid response times wherever you are.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Greater London', 'Manchester', 'Birmingham', 'Leeds', 'Bristol', 'Liverpool', 'Sheffield', 'Newcastle'].map(city => (
                  <div key={city} className="flex items-center gap-2 text-white font-bold text-lg">
                    <MapPin size={20} className="text-white/60" /> {city}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 text-center">
              <MapPin size={48} className="mx-auto mb-4 text-white" />
              <h3 className="text-2xl font-bold mb-2">Not sure if we cover you?</h3>
              <p className="text-white/80 mb-6">Give us a call to check availability in your exact postcode.</p>
              <Button size="lg" className="w-full bg-white text-primary hover:bg-slate-100 font-bold text-lg">
                Check Coverage
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="w-full bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-bold text-lg">Do you charge a callout fee?</AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base">
                For scheduled appointments during normal working hours, there is no callout fee. For emergency roadside assistance and out-of-hours callouts, a standard transparent fee applies which we will confirm before dispatching a van.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-bold text-lg">How quickly can you arrive?</AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base">
                For emergency callouts, we aim to be with you within 60 minutes depending on traffic and your exact location. When you call, we'll give you an accurate ETA based on our vans' current GPS locations.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-bold text-lg">Can you repair punctures instead of replacing?</AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base">
                Yes! If the puncture is within the central tread area and meets British Standard BSAU159 regulations, our technicians will repair it rather than replace the tyre, saving you money.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-bold text-lg">Do you balance the wheels?</AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base">
                Absolutely. All our mobile vans are equipped with electronic wheel balancing machines. Every new tyre we fit comes with a new valve and dynamic wheel balancing included in the price.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden bg-slate-900 text-center">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Need a tyre sorted right now?</h2>
          <p className="text-xl text-slate-300 mb-10">Our technicians are on standby. Call us for an instant quote and immediate dispatch.</p>
          <Button size="xl" className="bg-primary hover:bg-primary/90 text-white text-2xl font-bold h-20 px-12 rounded-full shadow-2xl shadow-primary/40 animate-pulse">
            <Phone className="mr-3 h-8 w-8" /> {PHONE_NUMBER}
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4 text-white">
                <div className="bg-primary p-1.5 rounded text-white">
                  <Wrench size={20} />
                </div>
                <div className="font-black text-xl tracking-tight">
                  Tyre<span className="text-primary">OnCall</span>
                </div>
              </div>
              <p className="mb-6 max-w-sm">The UK's premier 24/7 mobile tyre fitting service. Fast, reliable, and professional.</p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-primary transition-colors">Mobile Tyre Fitting</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Emergency Assistance</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Puncture Repair</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Fleet Services</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2"><Phone size={16} /> {PHONE_NUMBER}</li>
                <li className="flex items-center gap-2"><MapPin size={16} /> UK Nationwide</li>
                <li className="flex items-center gap-2"><Clock size={16} /> 24/7 Available</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} TyreOnCall Mobile Services. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}