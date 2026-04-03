import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Tag, Phone, Wrench, Menu, X, ChevronRight } from "lucide-react";
import { getBlogPost, blogPosts } from "@/data/blogPosts";
import React from "react";

const PHONE_NUMBER = "07456 580 006";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPost(slug);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [slug]);

  const related = blogPosts.filter(p => p.slug !== slug).slice(0, 3);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
        <h1 className="text-4xl font-black text-slate-900 mb-4">Post Not Found</h1>
        <p className="text-slate-600 mb-8">This article doesn't exist or has been moved.</p>
        <Link href="/blog" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-full hover:bg-primary/90 transition-colors">
          <ArrowLeft size={16} /> Back to Blog
        </Link>
      </div>
    );
  }

  const paragraphs = post.content.trim().split('\n\n').filter(Boolean);

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
            <Link href="/blog" className="text-primary font-bold">Blog</Link>
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

      {/* Hero Cover */}
      <section className="relative pt-24 h-72 md:h-96 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/60 z-10" />
        <img src={post.coverImage} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 h-full flex flex-col justify-end container mx-auto px-4 md:px-6 pb-10">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-2 text-white/70 text-sm mb-3">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={14} />
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <ChevronRight size={14} />
              <span className="text-white">{post.category}</span>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-primary text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white max-w-3xl leading-tight">
              {post.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Article */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Main Content */}
            <motion.article
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-8 pb-8 border-b border-slate-100">
                <span className="font-medium text-slate-700">{post.author}</span>
                <span>·</span>
                <span>{post.date}</span>
                <span>·</span>
                <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                <span>·</span>
                <span className="flex items-center gap-1"><Tag size={14} /> {post.category}</span>
              </div>

              {/* Body */}
              <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                {paragraphs.map((block, i) => {
                  if (block.startsWith('## ')) {
                    return <h2 key={i} className="text-2xl font-black text-slate-900 mt-10 mb-4">{block.replace('## ', '')}</h2>;
                  }
                  if (block.startsWith('### ')) {
                    return <h3 key={i} className="text-xl font-bold text-slate-900 mt-8 mb-3">{block.replace('### ', '')}</h3>;
                  }
                  if (block.startsWith('- ')) {
                    const items = block.split('\n').filter(l => l.startsWith('- '));
                    return (
                      <ul key={i} className="list-disc list-inside space-y-2 mb-6">
                        {items.map((item, j) => (
                          <li key={j} className="text-slate-600">{item.replace('- ', '')}</li>
                        ))}
                      </ul>
                    );
                  }
                  if (/^\d+\./.test(block)) {
                    const items = block.split('\n').filter(Boolean);
                    return (
                      <ol key={i} className="list-decimal list-inside space-y-2 mb-6">
                        {items.map((item, j) => (
                          <li key={j} className="text-slate-600">{item.replace(/^\d+\.\s/, '')}</li>
                        ))}
                      </ol>
                    );
                  }
                  return (
                    <p key={i} className="mb-5 text-slate-600 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') }}
                    />
                  );
                })}
              </div>

              {/* Back link */}
              <div className="mt-12 pt-8 border-t border-slate-100">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                >
                  <ArrowLeft size={18} /> Back to All Articles
                </Link>
              </div>
            </motion.article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* CTA Card */}
              <div className="bg-primary text-white rounded-2xl p-8 mb-8 sticky top-28">
                <h3 className="text-xl font-black mb-3">Need a Tyre Right Now?</h3>
                <p className="text-white/80 mb-6 text-sm">We come to you — 24/7, anywhere in the UK. Call for an instant quote.</p>
                <a
                  href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
                  className="flex items-center justify-center gap-2 bg-white text-primary font-black py-4 rounded-xl hover:bg-slate-50 transition-colors w-full text-lg"
                >
                  <Phone size={20} /> {PHONE_NUMBER}
                </a>
              </div>

              {/* Related Posts */}
              <div>
                <h3 className="font-black text-slate-900 text-lg mb-4 uppercase tracking-wide">More Articles</h3>
                <div className="space-y-4">
                  {related.map(rel => (
                    <Link key={rel.slug} href={`/blog/${rel.slug}`} className="flex gap-3 group">
                      <div className="w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <img src={rel.coverImage} alt={rel.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-primary font-bold mb-1">{rel.category}</p>
                        <h4 className="text-sm font-bold text-slate-800 group-hover:text-primary transition-colors leading-snug line-clamp-2">
                          {rel.title}
                        </h4>
                        <p className="text-xs text-slate-400 mt-1">{rel.readTime}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
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
