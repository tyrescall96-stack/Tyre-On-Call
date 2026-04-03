import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag, Phone, Wrench, Menu, X } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import React from "react";

const PHONE_NUMBER = "07456 580 006";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Blog() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-white py-5"}`}>
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <div className="bg-primary text-white p-2 rounded-lg">
              <Wrench size={24} />
            </div>
            <div className="font-black text-2xl tracking-tight text-slate-900">
              Tyre<span className="text-primary">OnCall</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-700">
            <Link href="/#services" className="hover:text-primary transition-colors">Services</Link>
            <Link href="/#how-it-works" className="hover:text-primary transition-colors">How it Works</Link>
            <Link href="/#coverage" className="hover:text-primary transition-colors">Coverage</Link>
            <Link href="/#faq" className="hover:text-primary transition-colors">FAQ</Link>
            <Link href="/blog" className="text-primary font-bold border-b-2 border-primary pb-0.5">Blog</Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex flex-col items-end">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">24/7 Emergency</span>
              <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} className="text-lg font-bold text-slate-900 hover:text-primary transition-colors">
                {PHONE_NUMBER}
              </a>
            </div>
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-6 py-3 shadow-lg shadow-primary/25 transition-colors"
            >
              <Phone size={16} /> Call Now
            </a>
          </div>

          <button className="md:hidden text-slate-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl p-4 flex flex-col gap-4">
            <Link href="/#services" className="text-left font-medium p-2 text-slate-700 hover:bg-slate-50 rounded-md block" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link href="/#how-it-works" className="text-left font-medium p-2 text-slate-700 hover:bg-slate-50 rounded-md block" onClick={() => setMobileMenuOpen(false)}>How it Works</Link>
            <Link href="/#coverage" className="text-left font-medium p-2 text-slate-700 hover:bg-slate-50 rounded-md block" onClick={() => setMobileMenuOpen(false)}>Coverage</Link>
            <Link href="/#faq" className="text-left font-medium p-2 text-slate-700 hover:bg-slate-50 rounded-md block" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
            <Link href="/blog" className="text-left font-medium p-2 text-primary hover:bg-slate-50 rounded-md block" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
            <div className="pt-4 border-t border-slate-100">
              <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} className="w-full flex items-center justify-center p-3 bg-primary text-white font-bold rounded-lg">
                <Phone className="mr-2 h-4 w-4" /> {PHONE_NUMBER}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <span className="inline-block bg-primary/20 text-primary font-bold text-sm uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Tyre on Call Blog
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-6">Tyre Tips & Advice</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Expert guides on tyre safety, maintenance, and getting the most out of your rubber — straight from our mobile fitting team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          {/* Featured post */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <Link href={`/blog/${blogPosts[0].slug}`} className="block group">
              <div className="grid md:grid-cols-2 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-64 md:h-auto overflow-hidden">
                  <img
                    src={blogPosts[0].coverImage}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      {blogPosts[0].category}
                    </span>
                    <span className="text-slate-400 text-sm">Featured</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 group-hover:text-primary transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-slate-600 mb-6 text-lg">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <span>{blogPosts[0].date}</span>
                      <span className="flex items-center gap-1"><Clock size={14} /> {blogPosts[0].readTime}</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-primary font-bold group-hover:gap-2 transition-all">
                      Read More <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Rest of posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, idx) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <Link href={`/blog/${post.slug}`} className="block group h-full">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow h-full flex flex-col">
                    <div className="h-52 overflow-hidden">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Tag size={13} className="text-primary" />
                        <span className="text-primary text-xs font-bold uppercase tracking-widest">{post.category}</span>
                      </div>
                      <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-primary transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-4 flex-1">{post.excerpt}</p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                        <div className="text-xs text-slate-500 flex items-center gap-2">
                          <span>{post.date}</span>
                          <span>·</span>
                          <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
                        </div>
                        <span className="text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Got a tyre emergency right now?</h2>
          <p className="text-white/80 text-lg mb-8">Don't wait — call us and we'll be with you in under 60 minutes.</p>
          <a
            href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-3 bg-white text-primary font-black text-xl px-10 py-5 rounded-full shadow-xl hover:bg-slate-50 transition-colors"
          >
            <Phone size={24} /> {PHONE_NUMBER}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-10 border-t border-slate-900">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-white">
            <div className="bg-primary p-1.5 rounded text-white">
              <Wrench size={18} />
            </div>
            <span className="font-black text-xl">Tyre<span className="text-primary">OnCall</span></span>
          </Link>
          <div className="flex gap-6 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/#services" className="hover:text-white transition-colors">Services</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">{PHONE_NUMBER}</a>
          </div>
          <p className="text-sm">&copy; {new Date().getFullYear()} TyreOnCall. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
